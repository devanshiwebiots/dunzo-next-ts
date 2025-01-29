import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { OrdersHistory, SearchTableButton } from "@/Constant/constant";
import DataTable from "react-data-table-component";
import { useMemo, useState } from "react";
import { OrderHistoryData, OrderHistoryDataColumn } from "@/Data/Applications/Ecommerce/EcommerceData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DataTableOrderHistory = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = OrderHistoryData.filter((item) => { return Object.values(item).some((value)=> value && value.toString().toLowerCase().includes(filterText.toLowerCase()))});
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OrdersHistory} />
        <CardBody>
          <div className="order-history table-responsive">
            <DataTable data={filteredItems} columns={OrderHistoryDataColumn} className="dataTables_wrapper no-footer custom-scrollbar" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DataTableOrderHistory;