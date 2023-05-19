import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/checkout.css";

export default function Checkout() {
  return (
    <div className="main-content">
      <section>
        <div className="product-title">
          <div className="container product-title">
            <span>THANH TOÁN</span>
            <div className="title-bg cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={95}
                height={95}
                fill="currentColor"
                className="bi bi-cash-coin"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Container className="payment-content">
        <Row className="gap-4">
          <Col md={7} className="customer-info">
            <div className="customer-address">
              <Container className="section-title">
                <div className="section-num">
                  <span className="fire">1</span>
                </div>
                <span>Thông tin vận chuyển</span>
              </Container>
              <form className="customer-info-form">
                <Row>
                  <Col className="form-field">
                    <label>Họ tên</label>
                    <input type="text" />
                  </Col>
                  <Col className="form-field">
                    <label htmlFor="">Số điện thoại</label>
                    <input type="number" />
                  </Col>
                </Row>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Địa chỉ</label>
                  <input
                    type="text"
                    placeholder="Số nhà, tên đường, thôn xóm..."
                  />
                </div>
                <Container className="address-field">
                  <Row className="d-flex gap-4">
                    <select
                      className="col-12 col-md"
                      name="calc_shipping_provinces"
                      required=""
                    >
                      <option value="">Tỉnh / Thành phố</option>
                      <option value={1}>An Giang</option>
                      <option value={2}>Bà Rịa - Vũng Tàu</option>
                      <option value={3}>Bạc Liêu</option>
                      <option value={4}>Bắc Kạn</option>
                      <option value={5}>Bắc Giang</option>
                      <option value={6}>Bắc Ninh</option>
                      <option value={7}>Bến Tre</option>
                      <option value={8}>Bình Dương</option>
                      <option value={9}>Bình Định</option>
                      <option value={10}>Bình Phước</option>
                      <option value={11}>Bình Thuận</option>
                      <option value={12}>Cà Mau</option>
                      <option value={13}>Cao Bằng</option>
                      <option value={14}>Cần Thơ</option>
                      <option value={15}>Đà Nẵng</option>
                      <option value={16}>Đắk Lắk</option>
                      <option value={17}>Đắk Nông</option>
                      <option value={18}>Đồng Nai</option>
                      <option value={19}>Đồng Tháp</option>
                      <option value={20}>Điện Biên</option>
                      <option value={21}>Gia Lai</option>
                      <option value={22}>Hà Giang</option>
                      <option value={23}>Hà Nam</option>
                      <option value={24}>Hà Nội</option>
                      <option value={25}>Hà Tĩnh</option>
                      <option value={26}>Hải Dương</option>
                      <option value={27}>Hải Phòng</option>
                      <option value={28}>Hòa Bình</option>
                      <option value={29}>Hậu Giang</option>
                      <option value={30}>Hưng Yên</option>
                      <option value={31}>Thành phố Hồ Chí Minh</option>
                      <option value={32}>Khánh Hòa</option>
                      <option value={33}>Kiên Giang</option>
                      <option value={34}>Kon Tum</option>
                      <option value={35}>Lai Châu</option>
                      <option value={36}>Lào Cai</option>
                      <option value={37}>Lạng Sơn</option>
                      <option value={38}>Lâm Đồng</option>
                      <option value={39}>Long An</option>
                      <option value={40}>Nam Định</option>
                      <option value={41}>Nghệ An</option>
                      <option value={42}>Ninh Bình</option>
                      <option value={43}>Ninh Thuận</option>
                      <option value={44}>Phú Thọ</option>
                      <option value={45}>Phú Yên</option>
                      <option value={46}>Quảng Bình</option>
                      <option value={47}>Quảng Nam</option>
                      <option value={48}>Quảng Ngãi</option>
                      <option value={49}>Quảng Ninh</option>
                      <option value={50}>Quảng Trị</option>
                      <option value={51}>Sóc Trăng</option>
                      <option value={52}>Sơn La</option>
                      <option value={53}>Tây Ninh</option>
                      <option value={54}>Thái Bình</option>
                      <option value={55}>Thái Nguyên</option>
                      <option value={56}>Thanh Hóa</option>
                      <option value={57}>Thừa Thiên - Huế</option>
                      <option value={58}>Tiền Giang</option>
                      <option value={59}>Trà Vinh</option>
                      <option value={60}>Tuyên Quang</option>
                      <option value={61}>Vĩnh Long</option>
                      <option value={62}>Vĩnh Phúc</option>
                      <option value={63}>Yên Bái</option>
                    </select>
                    <select
                      className="col-12 col-md"
                      name="calc_shipping_district"
                      required=""
                    >
                      <option value="">Quận / Huyện</option>
                    </select>
                    <select
                      className="col-12 col-md"
                      name="calc_shipping_district"
                      required=""
                    >
                      <option value="">Phường / Xã</option>
                    </select>
                  </Row>
                </Container>
                <div className="form-field">
                  <label htmlFor="">Ghi chú</label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="VD: Giờ giao..."
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="payment-method">
              <Container className="section-title">
                <div className="section-num">
                  <span className="fire">2</span>
                </div>
                <span>Phương thức thanh toán</span>
              </Container>
              <div className="payment-item">
                <input className="radio-input" type="radio" name="" id="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  fill="currentColor"
                  className="bi bi-qr-code-scan"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                  <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                  <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                  <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                  <path d="M12 9h2V8h-2v1Z" />
                </svg>
                Chuyển tiền qua ngân hàng. Quét mã QR
              </div>
              <div className="payment-item">
                <input
                  className="radio-input"
                  type="radio"
                  name=""
                  id=""
                  defaultValue={1}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  fill="currentColor"
                  className="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <span>COD</span>
                <span>Thanh toán khi nhận hàng</span>
              </div>
              <div className="payment-item">
                <input className="radio-input" type="radio" name="" id="" />
                <svg
                  className="payment-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 296 296"
                  style={{ enableBackground: "new 0 0 296 296" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                    .st0 {\n                      fill-rule: evenodd;\n                      clip-rule: evenodd;\n                      fill: #a50064;\n                    }\n                    .st1 {\n                      fill: #ffffff;\n                    }\n                  ",
                    }}
                  />
                  <path
                    className="st0"
                    d="M276,0H20C9,0,0,9,0,20v256c0,11,9,20,20,20h256c11,0,20-9,20-20V20C296,9,287,0,276,0z"
                  />
                  <g>
                    <path
                      className="st1"
                      d="M204.8,139c23.5,0,42.5-19,42.5-42.5c0-23.5-19-42.5-42.5-42.5c-23.5,0-42.5,19-42.5,42.5   C162.3,120,181.3,139,204.8,139z M204.8,78.4c10,0,18.1,8.1,18.1,18.1c0,10-8.1,18.1-18.1,18.1c-10,0-18.1-8.1-18.1-18.1   C186.7,86.5,194.8,78.4,204.8,78.4z"
                    />
                    <path
                      className="st1"
                      d="M204.8,157.4c-23.5,0-42.5,19-42.5,42.5c0,23.5,19,42.5,42.5,42.5c23.5,0,42.5-19,42.5-42.5   C247.3,176.4,228.3,157.4,204.8,157.4z M204.8,218c-10,0-18.1-8.1-18.1-18.1c0-10,8.1-18.1,18.1-18.1c10,0,18.1,8.1,18.1,18.1   C222.9,209.9,214.8,218,204.8,218z"
                    />
                    <path
                      className="st1"
                      d="M118.2,157.4c-7.2,0-13.8,2.4-19.1,6.4c-5.3-4-12-6.4-19.1-6.4c-17.6,0-31.9,14.3-31.9,31.9v53.2h24.4V189   c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2v53.4h24.4V189c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2v53.4H150v-53.2   C150,171.7,135.8,157.4,118.2,157.4z"
                    />
                    <path
                      className="st1"
                      d="M118.2,54c-7.2,0-13.8,2.4-19.1,6.4c-5.3-4-12-6.4-19.1-6.4C62.3,54,48,68.3,48,85.9V139h24.4V85.6   c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2V139h24.4V85.6c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2V139H150V85.9   C150,68.3,135.8,54,118.2,54z"
                    />
                  </g>
                </svg>
                Thanh toán qua MOMO
              </div>
              <div className="payment-item">
                <input className="radio-input" type="radio" name="" id="" />
                <svg
                  className="payment-vnpay"
                  height="512px"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="形状_1_3_" style={{ enableBackground: "new" }}>
                    <g id="形状_1">
                      <g>
                        <path
                          d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z"
                          style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#005bac",
                          }}
                        />
                      </g>
                    </g>
                  </g>
                  <g id="形状_1_2_" style={{ enableBackground: "new" }}>
                    <g id="形状_1_1_">
                      <g>
                        <path
                          d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z"
                          style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#f6ac1d",
                          }}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                Thanh toán qua thẻ Visa
              </div>
            </div>
          </Col>
          <Col className="cart-info">
            <Container className="section-title">
              <div className="section-num">
                <span className="fire">3</span>
              </div>
              <span>Thanh toán</span>
            </Container>
            <div className="cart-list">
              <div className="cart-checkout">
                <div className="cart-item-title">
                  <img
                    src="./product-thumbnails/food-thumbnail/1.jpg"
                    className="check-out-thumbnail"
                    alt=""
                  />
                  <div className="cart-item-checkout cart-name">
                    <span>Maxim Cá hồi 400g</span>
                  </div>
                </div>
                <div className="item-info-checkout">
                  <div className="cart-item-checkout cart-qty">
                    <span>Số lượng:</span> 1
                  </div>
                  <div className="cart-item-checkout cart-unit-price">
                    <span>Đơn giá:</span> 40.000 VND
                  </div>
                  <div className="cart-item-checkout cart-discount">
                    <span>Khuyến mãi:</span> 4.000 VND
                  </div>
                  <div className="cart-item-checkout cart-sub-price">
                    <span>Thành tiền:</span> 36.000 VND
                  </div>
                </div>
              </div>
              <div className="cart-checkout">
                <div className="cart-item-title">
                  <img
                    src="./product-thumbnails/food-thumbnail/1.jpg"
                    className="check-out-thumbnail"
                    alt=""
                  />
                  <div className="cart-item-checkout cart-name">
                    <span>Maxim Cá hồi 400g</span>
                  </div>
                </div>
                <div className="item-info-checkout">
                  <div className="cart-item-checkout cart-qty">
                    <span>Số lượng:</span> 1
                  </div>
                  <div className="cart-item-checkout cart-unit-price">
                    <span>Đơn giá:</span> 40.000 VND
                  </div>
                  <div className="cart-item-checkout cart-discount">
                    <span>Khuyến mãi:</span> 4.000 VND
                  </div>
                  <div className="cart-item-checkout cart-sub-price">
                    <span>Thành tiền:</span> 36.000 VND
                  </div>
                </div>
              </div>

              <div className="cart-item-checkout total-price">
                <span>Tổng:</span> 72.000 VND
              </div>
            </div>
            <button className="pay-btn" href="./checkout.html">
              ĐẶT HÀNG
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
