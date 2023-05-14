import React from "react";
import "../css/shoping-cart.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ShopingCartItem from "../components/ShopingCartItem";
import { items } from "./cartItem";

export default function ShopingCart() {
  const cartItem = items.map((item) => (
    <ShopingCartItem key={item} item={item} />
  ));

  return (
    <div className="main-content">
      <section>
        <div className="product-title">
          <Container className="product-title">
            <span>GIỎ HÀNG CỦA BẠN</span>
            <div className="title-bg cart">
              <img src="/icon/title-bg-2.png" alt="" />
            </div>
          </Container>
        </div>
      </section>
      <div className="alert-container">
        <div className="shoping-cart-alert">
          <div className="div">
            Bạn hiện có <span /> sản phẩm trong giỏ hàng
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={12} lg={9}>
            <div className="row shopping-cart-title">
              <div className="col-12 col-lg-5 d-flex justify-content-center">
                SẢN PHẨM
              </div>
              <div className="col-12 col-lg-7 d-flex justify-content-center gap-5">
                <div className="unit-price">ĐƠN GIÁ</div>
                <div className="qty">SỐ LƯỢNG</div>
                <div className="total-price">SỐ TIỀN</div>
              </div>
            </div>

            <div className="cart-item-list">{cartItem}</div>
          </Col>
          <Col md={12} lg={3}>
            <div className="right">
              <div className="discount">
                <div className="discount-title">MÃ GIẢM GIÁ</div>
                <div className="discount-form">
                  <input
                    className="promo-code"
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    onchange="checkCode()"
                  />
                  <button className="discount-btn">ÁP DỤNG</button>
                </div>
              </div>
              <div className="invoice">
                <div className="invoice-title">THÔNG TIN ĐƠN HÀNG</div>
                <div className="sub-total">
                  Tổng tiền <span>15.000.000 đ</span>
                </div>
                <div className="discount-price">
                  <div className="discount-label">
                    Giảm giá (<div className="percent">10</div>)
                  </div>
                  <span>10.000.000 đ</span>
                </div>
                <div className="tax">
                  Thuế VAT (8%) <span>100.000 đ</span>
                </div>
                <div className="total">
                  Thành tiền <span>15.000.000 đ</span>
                </div>
                <button className="pay-btn">THANH TOÁN</button>
              </div>
              <NavLink to="/shoping-cart" className="product-back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-return-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                Quay lại trang sản phẩm
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
