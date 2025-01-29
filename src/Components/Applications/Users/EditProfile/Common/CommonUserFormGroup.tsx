import { CommonUserFormGroupType } from "@/Types/UserType";
import { FormGroup, Input, Label } from "reactstrap";

const CommonUserFormGroup :React.FC<CommonUserFormGroupType> = ({ type, title, placeholder,defaultValue,row }) => {
  return (
    <FormGroup>
      <Label className="form-label">{title}</Label>
      <Input type={type} placeholder={placeholder} defaultValue={defaultValue} rows={row} />
    </FormGroup>
  );
};

export default CommonUserFormGroup;
