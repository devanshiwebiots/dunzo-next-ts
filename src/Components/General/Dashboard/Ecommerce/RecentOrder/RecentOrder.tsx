import { RecentOrderTitle } from "@/Constant/constant";
import { MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { EcommerceTableHead } from "./EcommerceTableHead";
import { EcommerceTableBody } from "./EcommerceTableBody";

export const RecentOrder = () => {

  return (
    <Col
      xl="6"
      className="col-xl-50 box-col-12 proorder-xl-3">
      <Card>
        <DropdownWithHeader
          headerClass="pb-0"
          heading={RecentOrderTitle}
          dropDownList={MonthlyDropdownList}
          dropDownClass="icon-dropdown"
          dropDownIcon={true}
        />
        <CardBody className="recent">
          <div className="table-responsive custom-scrollbar">
            <table
              className="table display"
              id="product-order"
              style={{ width: "100%" }}>
              <EcommerceTableHead />
              <EcommerceTableBody/>
            </table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
