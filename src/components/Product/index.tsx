import { ProductType } from "../types";
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

const Product = ({ product }: ProductType) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
    <div onMouseLeave={()=> setIsHovered(false)} onMouseEnter={()=> setIsHovered(true)} className="product-container">
     {isHovered && <FontAwesomeIcon className="eye-icon" icon={faEye} /> } 
      <div className="price">
      <span>{`${product.price} ${product.currency}`}</span>
      </div>
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
    </>
  );
};

export default Product;
