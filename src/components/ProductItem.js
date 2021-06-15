// هذا المكان اللي يطلع منه كل كوكي
// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = ({ product, setProduct, handleDelete }) => {
  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton handleDelete={handleDelete} productId={product.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
