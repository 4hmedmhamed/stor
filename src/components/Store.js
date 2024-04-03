import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="">

      <Row md={2} xs={1} lg={2} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id} className="first"> 
            <StoreItem {...item } />
          </Col>
        ))}
      </Row>

      </div>
    </>
  );
};

export default Store;
