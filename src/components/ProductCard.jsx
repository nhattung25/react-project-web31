import React from "react";
import Col from "react-bootstrap/Col";

export default function ProductCard({ product }) {
  return (
    <Col sm={6} md={3}>
      <div className="item-card">
        <div className="item-content">
          <div className="card-thumbnail">
            <img src={product.img} alt="Không thể hiển thị" />
          </div>
          <div className="card-content">
            <div className="card-name">{product.name}</div>
            <div className="card-price">{product.price}</div>
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
    </Col>
  );
}
