import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { CreatedByMe } from "@/Constant/constant";
import DataLoop from "./DataLoop";
import { useAppSelector } from "@/Redux/Hooks";
import ViewBookmark from "../ViewBookmarks";

const DataLoopTab = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h3 className="mb-0">{CreatedByMe}</h3>
          <ViewBookmark/>
        </CardHeader>
        <CardBody className="pb-0">
          <div className={`details-bookmark text-center ${!gridView ? "list-bookmark" : ""}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default DataLoopTab;
