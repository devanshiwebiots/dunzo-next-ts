import { CreatedByMe, Href, Print } from "@/Constant/constant";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import CreatedByMeData from "./CreatedByMeData";

const ListOfTask = () => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h3 className="mb-0">{CreatedByMe}</h3>
        <a href={Href}><Printer className="me-2"/>{Print}</a>
      </CardHeader>
      <CreatedByMeData/>
    </Card>
  );
};

export default ListOfTask;
