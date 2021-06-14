import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.setProduct(null)}>"Exit"</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
