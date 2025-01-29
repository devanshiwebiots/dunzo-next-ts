import { ProjectSummaryTitle } from "@/Constant/constant";
import { MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import { Card, CardBody, Col, Table } from "reactstrap";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { ProjectSummaryTableHead } from "./ProjectSummaryTableHead";
import { ProjectSummaryTableBody } from "./ProjectSummaryTableBody";

export const ProjectSummary = () => {
  return (
    <Col xl="8" lg="8" md="6">
      <Card>
        <DropdownWithHeader headerClass="pb-0" heading={ProjectSummaryTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody className="project-summary">
          <div className="table-responsive custom-scrollbar">
            <Table className="table display" id="project-summary" style={{ width: "100%" }}>
              <ProjectSummaryTableHead />
              <ProjectSummaryTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
