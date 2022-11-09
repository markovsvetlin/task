import { ProductType } from "../types";
import "./styles.scss";

const Product = ({ product }: ProductType) => {
  return (
    <div className="product-container">
      <img alt="productImage" src={product?.image} />
      <div className="info-container">
        {product.tampons.map((item, index) => {
          const amount = item?.amount?._text || item?.amount,
            coating = item?.coating?._text || item?.coating,
            size = item?.size?._text || item?.size;

          return (
            <div key={index} className="info-items">
              <div className="amount-circle">{amount as string}</div>
              <small>{coating as string}</small>
              <strong>{size as string}</strong>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Product;
