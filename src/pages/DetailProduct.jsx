import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../css/detail-product.css";

const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  loop: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

export default function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://catpaw-api.vercel.app/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [productId]);

  return (
    <div className="main-content">
      <section>
        <div className="product-title">
          <Container className="product-title">
            <span>CHI TIẾT SẢN PHẨM</span>
            <div className="title-bg">
              <img src="/icon/title-bg1.png" alt="" />
            </div>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <Row className="row">
            <Col sm={6} md={4}>
              <img class="product-img" src={product.image} alt={product.name} />
            </Col>
            <Col sm={6} md={4}>
              <div class="product-info">
                <div class="product-name">{product.name}</div>
                <div class="product-price">{product.price} VNĐ</div>
                <div class="short-des">{product.des}</div>
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
                  <div class="card-sale">{product.sale} lượt mua</div>
                </div>
                <div class="buy">
                  <button class="buy-btn">Thêm vào giỏ</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
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
            </Col>
          </Row>
          <Container>
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
          </Container>
          <div className="tab-content-detail">
            <div role="tabpanel" className="tab-pane active" id="home">
              <Container>
                <Col className="new-product">{product.about}</Col>
              </Container>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <Container>{product.warranty}</Container>
            </div>
            <div role="tabpanel" className="tab-pane" id="contact">
              <Container>
                <div className="comment-title">
                  Để lại đánh giá và nhận xét của bạn về sản phẩm
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </section>
      {/* Sản phẩm khác */}
      <section>
        <Container className="section-title">
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
        </Container>

        <Container>
          <div className="new-product">
            <OwlCarousel className=" owl-carousel owl-theme" {...options}>
              <Link to={`/products/${product.id}`}>
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-name">{product.name}</div>
                      <div className="card-price">{product.price} VNĐ</div>
                      <div className="card-meta">
                        <div className="card-rate">
                          {product.rate}
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
                        <div className="card-sale">{product.sale} lượt mua</div>
                      </div>
                    </div>
                    <div className="buy">
                      <button className="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/products/${product.id}`}>
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img
                        src="/product-thumbnails/food-thumbnail/5.jpg"
                        alt=""
                      />
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
              </Link>
              <Link to={`/products/${product.id}`}>
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img
                        src="/product-thumbnails/food-thumbnail/10.jpg"
                        alt=""
                      />
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
              </Link>
              <Link to={`/products/${product.id}`}>
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img
                        src="/product-thumbnails/food-thumbnail/9.jpg"
                        alt=""
                      />
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
              </Link>
              <Link to={`/products/${product.id}`}>
                <div className="item-card">
                  <div className="item-content">
                    <div className="card-thumbnail">
                      <img
                        src="/product-thumbnails/accessories-thumbnail/5.jpg"
                        alt=""
                      />
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
              </Link>
            </OwlCarousel>
          </div>
        </Container>
      </section>
    </div>
  );
}
