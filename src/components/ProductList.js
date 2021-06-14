// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const [_products, setProducts] = useState(products);

  const handleDelete = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const productList = _products
    .filter((product) => product.name.includes(query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setProduct={props.setProduct}
        handleDelete={handleDelete}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
