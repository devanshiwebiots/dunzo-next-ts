import { CardBody, Table } from "reactstrap";
import { HeadingsTableBody } from "./HeadingsTableBody";
import { Code, FontSize, Heading } from "@/Constant/constant";

export const HeadingsBody = () => {
  return (
    <CardBody>
      <div className="table-responsive custom-scrollbar">
        <Table className="mb-0 typography-table">
          <thead>
            <tr>
              <th className="pt-0">{Code}</th>
              <th className="pt-0">{FontSize}</th>
              <th className="pt-0">{Heading}</th>
            </tr>
          </thead>
          <HeadingsTableBody />
        </Table>
      </div>
    </CardBody>
  );
};
