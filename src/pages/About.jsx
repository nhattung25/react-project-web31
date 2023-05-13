import React from "react";
import "../css/about.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <div className="main-content">
        {/* Hot post, Seach bar and filted post */}
        <div className="about-title">GIỚI THIỆU VỀ CATPAW</div>
        <Container className="container para-1 my-5">
          Bạn có muốn tạo ra một cuộc sống vui vẻ một cách có ý thức cho bản
          thân và những chú mèo của mình không? Bạn đang tìm kiếm thông tin để
          giữ cho các thành viên trong gia đình mèo của bạn khỏe mạnh, hạnh phúc
          và mãn nguyện? CatPaw là nguồn tài nguyên toàn diện giúp bạn có cuộc
          sống có ý thức, sức khỏe và hạnh phúc cho mèo và con người của chúng.
        </Container>
        <div className="para-2">
          <Container>
            <Row className="py-5 my-5">
              <Col md={6} className="about-thumbnail">
                <img src="/icon/about-1.jpg" alt="" />
              </Col>
              <Col md={6}>
                <div className="para-title my-4">AI ĐÃ TẠO RA CATPAW</div>
                <div>
                  Catpaw được tạo ra bởi tôi - một người yêu thích thú cưng, đặc
                  biệt là những chú mèo. Với mục đích mang lại cho bạn đọc những
                  thông tin hữu ích và những sản phẩm dành cho các bé mèo, tôi
                  hy vọng rằng các bài viết và những sản phẩm của Catpaw sẽ đem
                  lại nhiều niềm vui, sự hứng thú cũng như thêm yêu quý những
                  chú mèo cưng của bạn.
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <div className="para-title">CATPAW BLOG CÓ GÌ</div>
              <div className="text">
                Với những hiểu biết của mình cùng với sự tìm tòi, nghiên cứu,
                tôi đã tổng hợp vào đăng tải lên CATPAW những bài viết về mèo
                cưng. Trên CATPAW, bạn sẽ tìm thấy lời những bài viết về chế độ
                dinh dưỡng cho mèo, các bài viết về chủ đề chăm sóc sức khỏe cho
                mèo cưng. Bên cạnh đó bạn cũng có thể tìm thấy các bài viết thú
                vị khác, những sự thật, những fact vui về chú mèo của bạn.
              </div>
            </Col>
            <Col md={6} className="about-thumbnail">
              <img src="/icon/about-2.jpg" alt="" />
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <div className="para-title">CATPAW CÓ SẢN PHẨM GÌ</div>
              <div className="text">
                Với những kinh nghiệm của mình trong việc nuôi thú cưng, hay cụ
                thể hơn là những chú mèo, CATPAW tự tin rằng mình đủ hiểu biết
                và kinh nghiệm để đem lại cho bạn những sản phẩm ưng ý và yêu
                thích nhất dành cho những người bạn bốn chân đáng yêu của mình.
                Những sản phẩm này được CATPAW sử dụng cho những chú mèo của
                CATPAW nên bạn hoàn toàn có thể tin tưởng vào chất lượng cũng
                như độ an toàn của những sản phẩm được cung cấp bởi CATPAW.
              </div>
            </Col>
            <Col md={6} className="about-thumbnail">
              <img src="/icon/about-3.jpg" alt="" />
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <div className="para-title">TẠI SAO BẠN NÊN CHỌN CATPAW SHOP</div>
              <div className="text">
                <ul>
                  <li>Chất lượng đảm bảo tốt.</li>
                  <li>Giá cả cạnh tranh</li>
                  <li>CATPAW có chính sách giao hàng đa dạng</li>
                  <li>Chính sách đổi trả linh hoạt</li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="about-thumbnail">
              <img src="/icon/about-3.jpg" alt="" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Col md={6} className="d-flex justify-content-center">
            <NavLink to="/" className="homepage-btn">
              QUAY LẠI TRANG CHỦ
            </NavLink>
          </Col>
        </Container>
      </div>
    </div>
  );
}
