import { Input, Label } from "reactstrap";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { getGender } from "@/utils/Ecommerce.service";
import { filterGender, removeGender } from "@/Redux/Reducers/FilterSlice";

const GenderFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filterData);

  const category = () => {
    let categoryData: string[] = [];
    productItem.map((element) => {
      if (element.name) {
        if (categoryData.indexOf(element.name) == -1) {
          categoryData.push(element.name);
        }
      }
    });
    return categoryData;
  };

  const ClickCategory = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      dispatch(filterGender(e.target.value));
    } else {
      dispatch(removeGender(e.target.value));
    }
  };

  return (
    <div className="checkbox-animated mt-0">
      {category().map((item, i) => (
        <Label className="d-block" key={i}>
          <Input className="checkbox_animated" defaultChecked={filter.brand.includes(item) ? true : false} type="checkbox" name="name" value={item} onChange={ClickCategory} />
          {item}
        </Label>
      ))}
    </div>
  );
};

export default GenderFilter;
