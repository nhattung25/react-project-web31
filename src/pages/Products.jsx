import React from "react";
import { NavLink } from "react-router-dom";
import "../css/products.css";

export default function Products() {
  return (
    <div>
      <div className="main-content">
        <section>
          <div className="product-title">
            <div className="container product-title">
              <span>SẢN PHẨM</span>
              <div className="title-bg">
                <img src="./assets/back-ground/title-bg1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 my-2">
              <div className="product-search-bar">
                <input
                  className="product-search-input"
                  type="text"
                  placeholder="Nhập tên sản phẩm cần tìm"
                />
                <button className="product-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
                <button className="clear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#80878C"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div className="filter d-flex justify-content-between gap-2">
                <button className="high-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-sort-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                  </svg>
                  Giá cao
                </button>
                <button className="low-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-sort-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                  </svg>
                  Giá thấp
                </button>
              </div>
              <div className="filter">
                <div className="product-type">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Loại sản phẩm
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion">
                          <ul>
                            <li className="all-product">
                              <input type="checkbox" name="" id="" /> Tất cả
                            </li>
                            <li className="check-cat">
                              <input type="checkbox" name="" id="" /> Mèo cưng
                            </li>
                            <li className="check-food">
                              <input type="checkbox" name="" id="" /> Thức ăn
                              cho mèo
                            </li>
                            <li className="check-acces">
                              <input type="checkbox" name="" id="" /> Phụ kiện
                              cho mèo
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-filter">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Mức giá
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                        style={{}}
                      >
                        <div className="accordion-body text-center">
                          <div className="ranger-slider">
                            <div
                              id="slider-range"
                              className="noUi-target noUi-ltr noUi-horizontal noUi-background"
                            >
                              {/* <div class="noUi-base">
                        <div
                          class="noUi-origin noUi-connect"
                          style="left: 0%"
                        >
                          <div
                            class="noUi-handle noUi-handle-lower"
                          ></div>
                        </div>
                        <div
                          class="noUi-origin noUi-background"
                          style="left: 22.089%"
                        >
                          <div
                            class="noUi-handle noUi-handle-upper"
                          ></div>
                        </div>
                      </div> */}
                            </div>
                            <div className="price-filter d-flex align-items-center justify-content-center">
                              <p>Giá:</p>
                              <strong />
                              <span id="slider-range-value1">20.000.000đ</span>
                              <span>-</span>
                              <strong />
                              <span id="slider-range-value2">50.000đ</span>
                            </div>
                          </div>
                          <button className="button-filter">Lọc</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hot-item-list">
                <div className="container section-title">
                  <div className="section-num">
                    <span className="fire">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="#FAC000"
                        className="bi bi-fire"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                      </svg>
                    </span>
                  </div>
                  <span>BÁN CHẠY</span>
                </div>
                <div className="swiper-container">
                  <button className="btn-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-caret-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                  </button>
                  <button className="btn-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="hot-item">
                          <img
                            className="hot-item-thumbnai"
                            src="./img/cat-thumbnail/8.jpg"
                            alt=""
                          />
                          <div className="hot-item-content">
                            <div className="hot-item-name">
                              Munchkin Xanh Xám
                            </div>
                            <div className="hot-item-price">19.000.000đ</div>
                            <div className="hot-item-sell">
                              <span>Đã bán:</span> 15 sản phẩm
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="hot-item">
                          <img
                            className="hot-item-thumbnai"
                            src="./img/food-thumbnail/5.jpg"
                            alt=""
                          />
                          <div className="hot-item-content">
                            <div className="hot-item-name">
                              Me-O Adult Hải sản 1.2kg
                            </div>
                            <div className="hot-item-price">120.000 đ</div>
                            <div className="hot-item-sell">
                              <span>Đã bán:</span> 69 sản phẩm
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="hot-item">
                          <img
                            className="hot-item-thumbnai"
                            src="./img/food-thumbnail/10.jpg"
                            alt=""
                          />
                          <div className="hot-item-content">
                            <div className="hot-item-name">
                              Zenith Cat 1.2kg
                            </div>
                            <div className="hot-item-price">220.000 ₫</div>
                            <div className="hot-item-sell">
                              <span>Đã bán:</span> 31 sản phẩm
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="hot-item">
                          <img
                            className="hot-item-thumbnai"
                            src="./img/food-thumbnail/9.jpg"
                            alt=""
                          />
                          <div className="hot-item-content">
                            <div className="hot-item-name">
                              Whiskas Adult Cá thu 1.2kg
                            </div>
                            <div className="hot-item-price">115.000 ₫</div>
                            <div className="hot-item-sell">
                              <span>Đã bán:</span> 56 sản phẩm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-9">
              <div className="product-list">
                <div className="row" />
                {/* Pagination */}
                <div className="container">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
