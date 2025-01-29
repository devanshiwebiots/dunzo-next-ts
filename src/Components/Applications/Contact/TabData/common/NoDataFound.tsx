import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { NoDataFoundPropsType } from "@/Types/ContactType";
import { Card, CardBody } from "reactstrap";

const NoDataFoundClass :React.FC<NoDataFoundPropsType> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CommonCardHeader title={title} headClass="d-flex"/>
      <CardBody>
        <SearchNotFoundClass word={title} />
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
