import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function DetailProduct() {
  return (
    <div className="main-content">
      <section>
        <div className="product-title">
          <Container className="product-title">
            <span>CHI TIẾT SẢN PHẨM</span>
            <div className="title-bg">
              <img src="./assets/back-ground/title-bg1.png" alt="" />
            </div>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <div className="row">
            <div class="col-12 col-sm-6 col-md-4 ">
              <img class="product-img" src="./img/cat-thumbnail/1.jpg" alt="" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="product-info">
                <div class="product-name">Mèo Anh lông ngắn Silver</div>
                <div class="product-price">15.000.000đ</div>
                <div class="short-des">
                  Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có
                  chứng từ đầy đủ
                </div>
                <div class="product-qty">
                  <span>Số lượng:</span>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-dash-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                    </svg>
                  </button>
                  <input type="text" value="1" />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-plus-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
                <div class="card-meta">
                  <div class="card-rate">
                    4
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div class="card-sale">8 lượt mua</div>
                </div>
                <div class="buy">
                  <button class="buy-btn">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
              <div class="promotion-code">
                <div class="promo-title">Mã khuyến mãi cho sản phẩm</div>
                <div class="promo-item">
                  <span>CATPAW10</span> - Giảm giá 10%
                </div>
                <div class="promo-item">
                  <span>CATPAW20</span> - Giảm giá 20%
                </div>
                <div class="promo-item">
                  <span>CATPAW30</span> - Giảm giá 30%
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#profile"
                >
                  Ưu đãi-Bảo hành
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#contact"
                >
                  Đánh giá và nhận xét
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="container">
                <div className="col-12 new-product">
                  Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn
                  đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt
                  và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh,
                  tình cảm và là những con mèo nhà lý tưởng.
                  <p>
                    Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound
                    đối với con đực và 8 – 12 pound đối với con cái. Sẽ không
                    mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh
                    phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch,
                    môi trường an toàn và chăm sóc sức khỏe tốt.
                  </p>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <div className="container">
                Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365
                ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển
                toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn
                đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng
                với KH khu vực Hà Nội.
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="contact">
              <div className="container">
                <div className="comment-title">
                  Để lại đánh giá và nhận xét của bạn về sản phẩm
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Sản phẩm khác */}
      <section>
        <div className="container section-title">
          <div className="section-num">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="#FAC000"
                className="bi bi-inboxes-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
              </svg>
            </span>
          </div>
          <span>SẢN PHẨM KHÁC</span>
        </div>
        <div className="container">
          <div className="new-product">
            <div className="owl-2 owl-carousel owl-theme">
              <a href="./detail-product.html">
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src="./img/cat-thumbnail/8.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">Munchkin Xanh Xám</div>
                      <div className="card-price">19.700.000 ₫</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          4.3
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="card-sale">8 lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </a>
              <a href="./detail-product.html">
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src="./img/food-thumbnail/5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">Me-O Adult Hải sản 1.2kg</div>
                      <div className="card-price">120.000 đ</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          4.2
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="card-sale">69 lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </a>
              <a href="./detail-product.html">
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src="./img/food-thumbnail/10.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">Zenith Cat 1.2kg</div>
                      <div className="card-price">220.000 ₫</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          4.1
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="card-sale">8 lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </a>
              <a href="./detail-product.html">
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src="./img/food-thumbnail/9.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">
                        Whiskas Adult Cá thu 1.2kg
                      </div>
                      <div className="card-price">115.000 ₫</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          4.2
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="card-sale">56 lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </a>
              <a href="./detail-product.html">
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src="./img/accessories-thumbnail/5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">Cần câu mèo</div>
                      <div className="card-price">115.000 ₫</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          4.2
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="card-sale">56 lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
