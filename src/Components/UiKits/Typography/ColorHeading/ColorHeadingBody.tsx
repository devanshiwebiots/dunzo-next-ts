import { CardBody, Table } from "reactstrap";
import { ColorHeadingTableBody } from "./ColorHeadingTableBody";
import { Code, Heading } from "@/Constant/constant";

export const ColorHeadingBody = () => {
  return (
    <CardBody>
      <div className="table-responsive custom-scrollbar">
        <Table className="mb-0 typography-table">
          <thead>
            <tr>
              <th className="pt-0">{Code}</th>
              <th className="pt-0">{Heading}</th>
            </tr>
          </thead>
          <ColorHeadingTableBody />
        </Table>
      </div>
    </CardBody>
  );
};
