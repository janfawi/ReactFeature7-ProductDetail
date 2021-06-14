import { DeleteButtonStyled } from "../../styles";

export const DeleteButton = (props) => {
  const handleDelete = () => {
    // console.log(`${props.product.id}`)
    props.handleDelete(props.productId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
export default DeleteButton;
