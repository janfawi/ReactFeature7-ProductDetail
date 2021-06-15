import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ handleDelete, productId }) => {
  return (
    <DeleteButtonStyled onClick={() => handleDelete(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
