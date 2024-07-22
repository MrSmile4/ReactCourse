import { CustomButton } from "../../custom-button/custom-button";

export const RestTabButton = ({ id, name, action }) => {
  return (
    <CustomButton
      key={id}
      onClick={() => action(id)}>
      {name}
    </CustomButton>
  );
};
