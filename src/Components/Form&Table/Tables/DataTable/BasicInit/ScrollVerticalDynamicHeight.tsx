import { ScrollVerticalDynamicHeightTitle, SearchTableButton } from "@/Constant/constant";
import { ScrollVerticalColumns, ScrollVerticalData } from "@/Data/Form&Table/Table/DataTable/ScrollVertical";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, Col, CardBody, CardHeader, Label, Input } from "reactstrap";

const ScrollVerticalDynamicHeight = () => {
  const ScrollVertical1 = `This example shows a vertically scrolling DataTable that makes use of the CSS3 vh unit in order to dynamically resize the viewport based on the browser window height. The vh unit is effectively a percentage of the browser window height. So the 50vh used in this example is 50% of the window height. The viewport size will update dynamically as the window is resized.`;
  const ScrollVertical2 = `A relatively modern browser is required for vh units to operate correctly. IE9+ supports the vh unit and all other evergreen browsers.`;

  const [filterText, setFilterText] = useState("");
  const [filteredItems, setFilteredItems] = useState(ScrollVerticalData);

  const handleFilterChange = (text: string) => {
    setFilterText(text);
  
    if (text.length > 0) {
      const filteredData = ScrollVerticalData.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase() === text.toLowerCase();
          }
          return false;
        });
      });
      setFilteredItems(filteredData);
    } else {
      setFilteredItems(ScrollVerticalData);
    }
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-12_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h4>{ScrollVerticalDynamicHeightTitle}</h4>
          <span>{ScrollVertical1}</span>
          <span>{ScrollVertical2}</span>
        </CardHeader>
        <CardBody>
          <div className="table-responsive user-datatable">
            <DataTable data={filteredItems} columns={ScrollVerticalColumns} striped fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
