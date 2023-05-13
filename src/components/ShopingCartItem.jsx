import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ShopingCartItem({ item }) {
  return (
    <Row>
      <Col lg={5} className="d-flex justify-content-center item-left">
        <div className="cart-thumbnai">
          <img src={item.image} alt="Không thể hiển thị" />
        </div>
        <div className="item-info">
          <a href="./detail-product.html?id=1">
            <div className="item-name">{item.name}</div>
          </a>
          <div className="item-des">{item.des}</div>
        </div>
      </Col>
      <Col lg={7} className="d-flex justify-content-center item-qty">
        <div className="item-price">{item.price}</div>
        <div className="qty-form">
          <button onclick="minusButton(1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="#1777e8"
              className="bi bi-dash-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
          <input
            type="text"
            step={1}
            defaultValue={1}
            onchange="changeTotalItem(1, event)"
          />
          <button onclick="addButton(1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="#1777e8"
              className="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
        <div className="item-price">{item.price}</div>
      </Col>
    </Row>
  );
}
