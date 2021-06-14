import { DeleteButtonStyled } from "../../styles";

export const DeleteButton = (props) => {
  const handleDelete = () => {
    props.handleDelete(props.productId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
export default DeleteButton;
