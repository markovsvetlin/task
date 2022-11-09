export type ProductTypes = {
    tampons: {};
    tapons: {};
    price: string;
    currency: string;
    productImage: string;
  };

export type ProductType = {
    product: {
      image: string;
      tampons: {
        amount: { _text: string };
        coating: { _text: string };
        size: { _text: string };
      }[];
    };
  };