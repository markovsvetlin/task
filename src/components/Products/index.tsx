import { useEffect, useMemo, useState } from "react";
import { ProductTypes } from "../types";
import convert from "xml-js";
import Product from "../Product";
import "./styles.scss";

const Products = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const repairedData = useMemo(
    () =>
      products.map((product) => {
        const tampons = product.tampons || product.tapons;
        let repairedTamponsData;

        if (typeof tampons === "string") {
          const convertToJson = JSON.parse(
            convert?.xml2json(
              tampons
                .replace("tapons", "tampons")
                .replace("/tapons", "/tampons"),
              { compact: true, spaces: 4 }
            )
          );

          //convert all to array
          repairedTamponsData = !convertToJson?.tampons?.tampon?.length
            ? [convertToJson?.tampons?.tampon]
            : convertToJson?.tampons?.tampon;
        } else {
          repairedTamponsData = tampons;
        }

        return {
          price: product.price,
          currency: product.currency,
          image: product.productImage,
          tampons: repairedTamponsData,
        };
      }),
    [products]
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      {repairedData.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
