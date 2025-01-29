import { Search } from "@/Constant/constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { filterSearchBy } from "@/Redux/Reducers/FilterSlice";
import { useState } from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";

export const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(filterSearchBy(searchKeyword));
  };

  return (
    <Col md="9" sm="12">
      <Form>
        <FormGroup className="form-group m-0">
          <Input className="form-control" type="search" placeholder={Search} onChange={(e) => handleSearchKeyword(e.target.value)} />
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </Col>
  );
};
