import React from "react";
import "../css/home.css";
import "../css/base.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import ProductCard from "../components/ProductCard";
import { products } from "./products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const options1 = {
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

const options2 = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,

  loop: true,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
      margin: 40,
    },

    1000: {
      items: 2,
    },
  },
};

export default function Home() {
  const itemCard = products.map((product) => (
    <ProductCard key={product} product={product} />
  ));

  return (
    <div>
      <div className="main-content">
        {/* Banner */}
        <section className="banner">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            center
            autoplay
            autoplayTimeout={5000}
            smartSpeed={1200}
            items={1}
            dot:false
            nav:false
          >
            <div className="item">
              <div className="item-title">CHẤT LƯỢNG ĐẢM BẢO</div>
              <div className="item-text">
                Catpaw luôn mang đến cho bạn những bé mèo khỏe mạnh, có nguồn
                gốc và giấy tờ rõ ràng.
              </div>
            </div>
            <div className="item">
              <div className="item-title">KHUYẾN MÃI ĐA DẠNG</div>
              <div className="item-text">
                Catpaw có nhiều chương trình khuyến mãi trong các dịp đặc biệt
                và cho những khách hàng thân thiết.
              </div>
            </div>
            <div className="item">
              <div className="item-title">CHÍNH SÁCH BẢO HÀNH HỢP LÝ</div>
              <div className="item-text">
                Bảo hành cho tất cả các bệnh đối với thú cưng của CATPAW.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC VẬN CHUYỂN ĐA DẠNG</div>
              <div className="item-text">
                Giao hàng tận nơi, toàn quốc và cả nước ngoài.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC THANH TOÁN ĐA DẠNG</div>
              <div className="item-text">
                Catpaw hỗ trợ nhiều phương thức thanh toán. Bao gồm thanh toán
                qua các dịch vụ thanh toán trực tuyến, chuyển khoản ngân hàng
                hoặc thanh toán tận nơi.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC THANH TOÁN ĐA DẠNG</div>
              <div className="item-text">
                Catpaw hỗ trợ nhiều phương thức thanh toán. Bao gồm thanh toán
                qua các dịch vụ thanh toán trực tuyến, chuyển khoản ngân hàng
                hoặc thanh toán tận nơi.
              </div>
            </div>
          </OwlCarousel>
        </section>

        {/* Hàng hot */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>1</span>
            </div>
            <span>SẢN PHẨM NỔI BẬT</span>
          </div>
          {/* Nút chuyển */}
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  BÁN CHẠY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#profile"
                >
                  MỚI VỀ
                </a>
              </li>
            </ul>
          </div>
          {/* Tab content */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="container">
                <div className="new-product">
                  <OwlCarousel className="owl-carousel owl-theme" {...options1}>
                    <a href="./detail-product.html?id=8">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/cat-thumbnail/8.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Munchkin Xanh Xám</div>
                            <div className="card-price">19.000.000 ₫</div>
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
                    <a href="./detail-product.html?id=15" itemID={1}>
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/food-thumbnail/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Me-O Adult Hải sản 1.2kg
                            </div>
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
                    <a href="./detail-product.html?id=20">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/food-thumbnail/10.jpg"
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
                              <div className="card-sale">31 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=19">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/food-thumbnail/9.jpg"
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
                    </a>
                    <a href="./detail-product.html?id=25">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/accessories-thumbnail/5.jpg"
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
                    </a>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <div className="container">
                <div className="new-product">
                  <OwlCarousel
                    className="owl-3 owl-carousel owl-theme"
                    {...options1}
                  >
                    <a href="./detail-product.html?id=11">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/food-thumbnail/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Maxim Cá hồi 400g</div>
                            <div className="card-price">19.40.000 ₫</div>
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
                    <a href="./detail-product.html?id=14">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/food-thumbnail/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Me-O Adult Cá ngừ 1.2kg
                            </div>
                            <div className="card-price">120.000 đ</div>
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
                              <div className="card-sale">67 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=21">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/accessories-thumbnail/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Bát gắn chuồng inox</div>
                            <div className="card-price">80.000 ₫</div>
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
                              <div className="card-sale">58 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=6">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/cat-thumbnail/6.jpg?id=6"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Mèo Anh lông ngắn Tabi
                            </div>
                            <div className="card-price">16.200.000 ₫</div>
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
                              <div className="card-sale">5 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=25">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./product-thumbnails/accessories-thumbnail/5.jpg"
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
                    </a>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Siêu khuyên khuyến mãi */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>2</span>
            </div>
            <span>SIÊU KHUYẾN MÃI</span>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center sale">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="sale-off">
                  <div className="sale-off-title">Siêu khuyến mãi</div>
                  <div className="sale-off-des">
                    Nhân dịp 30 tháng 4, Catpaw mang đến cho bạn chương trình
                    khuyến mãi cực khủng
                  </div>
                  Hạn cuối:
                  <div className="sale-off-date">
                    <span>30</span> tháng <span>4</span> năm <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="sale-off-banner">
                  <OwlCarousel
                    className="owl-3 owl-carousel owl-theme"
                    {...options2}
                  >
                    <a href="./detail-product.html?id=7">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img
                            src="./product-thumbnails/cat-thumbnail/7.jpg"
                            alt=""
                          />
                          <div className="sale-off-tag">-15%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Munchkin Bicolor
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">20.200.000 ₫</div>
                            <div className="new-price">17.170.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=8">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img
                            src="./product-thumbnails/cat-thumbnail/8.jpg"
                            alt=""
                          />
                          <div className="sale-off-tag">-10%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Munchkin Xanh Xám
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">21.000.000 ₫</div>
                            <div className="new-price">19.000.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=13">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img
                            src="./product-thumbnails/food-thumbnail/3.jpg"
                            alt=""
                          />
                          <div className="sale-off-tag">-14%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">Catsrang 5kg</div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">400.000 ₫</div>
                            <div className="new-price">350.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=17">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img
                            src="./product-thumbnails/food-thumbnail/7.jpg"
                            alt=""
                          />
                          <div className="sale-off-tag">-8%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Royal Canin 2kg
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">500.000 ₫</div>
                            <div className="new-price">460.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sản phẩm theo chủ đề bán mèo */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>3</span>
            </div>
            <span>MÈO CƯNG</span>
          </div>
          <div className="cat-listing">
            <Container>
              <Row>{itemCard}</Row>
            </Container>
          </div>
        </section>
        {/* Sản phẩm theo chủ đề Thực phẩm */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>4</span>
            </div>
            <span>THỨC ĂN CHO MÈO</span>
          </div>
          <div className="food-listing">
            <Container>
              <Row>{itemCard}</Row>
            </Container>
          </div>
        </section>

        {/* Sản phẩm theo chủ đề Đồ dùng */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>5</span>
            </div>
            <span>ĐỒ DÙNG CHO MÈO</span>
          </div>
          <div className="access-listing">
            <Container>
              <Row>{itemCard}</Row>
            </Container>
          </div>
        </section>

        {/* Phản hồi của khách hàng */}
        <section>
          <div className="container">
            <div className="row testimo-section">
              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <div className="testimo-tag">
                  <div className="testimo-title">PHẢN HỒI CỦA KHÁCH HÀNG</div>
                  <div className="testimo-text">
                    Cùng xem khách hàng của Catpaw đã phản hồi gì về Catpaw nhé.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
                <div className="testimonials">
                  {/* Nội dung quote hiển thị ở đây */}
                  <p className="text" />
                  {/* Tên tác giả hiển thị ở đây */}
                  <strong className="name" />
                  {/* <div class="author-container"> */}
                  <div className="authors-list selected">
                    <div className="author selected">
                      <img
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/women/50.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Đăng ký nhận tin  */}
        <section>
          <div className="container">
            <div className="row">
              <div className="get-news">
                <div className="get-news-content">
                  <div className="get-news-title">ĐĂNG KÝ NHẬN TIN</div>
                  <div className="get-news-text">
                    Hãy để lại email của bạn để nhận ngay những tin tức khuyến
                    mại và sản phẩm mới nhất
                  </div>
                </div>
                <div className="get-news-form">
                  <input
                    className="get-news-input"
                    type="text"
                    placeholder="Nhập email của bạn"
                  />
                  <button className="get-news-btn">GỬI</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
