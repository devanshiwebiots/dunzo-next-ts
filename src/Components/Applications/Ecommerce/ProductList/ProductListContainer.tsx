import { ECommerce, ProductList, SearchTableButton } from "@/Constant/constant";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";
import { ProductListTableData, ProductListTableDataColumn } from "@/Data/Applications/Ecommerce/EcommerceData";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = ProductListTableData.filter((item) => {return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()))});

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <>
     <Breadcrumbs pageTitle={ProductList} parent={ECommerce} title={ProductList}/>
     <Container fluid>
      <Row>
        <Col sm="12"> 
          <Card>
            <CardBody>
              <div className="list-product-header">
                <ProductListFilterHeader />
                <CollapseFilterData />
              </div>
              <div className="list-product">
                <div className="table-responsive">
                  <DataTable className="custom-scrollbar" data={filteredItems} columns={ProductListTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default ProductListContainer;
