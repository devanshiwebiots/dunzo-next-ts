import { CardHeader } from "reactstrap";
import { Filters } from "@/Constant/constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setSideBarOn } from "@/Redux/Reducers/FilterSlice";

export const FilterHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <CardHeader>
      <h6 className="mb-0 f-w-600">
        {Filters}
        <span className="pull-right" onClick={() => dispatch(setSideBarOn())}>
          <i className="fa fa-chevron-down toggle-data"></i>
        </span>
      </h6>
    </CardHeader>
  );
};
