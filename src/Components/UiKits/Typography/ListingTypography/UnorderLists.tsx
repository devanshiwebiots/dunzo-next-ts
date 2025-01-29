import { UnorderedList } from "@/Constant/constant";
import { UnorderedData } from "@/Data/Uikits/Typography/TypographyData";
import { Col } from "reactstrap";

export const UnorderedLists = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title fw-bold">{UnorderedList}</h6>
        <ul className="mb-3">
          <li>One who looks on the bright side of things</li>
          {UnorderedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
};
