// هذا المكان اللي يطلع منه كل كوكي
// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productDelete={props.productDelete}
        productId={props.product.id}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
