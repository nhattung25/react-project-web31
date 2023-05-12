import React from "react";
import "../css/about.css";

export default function About() {
  return (
    <div>
      <div className="main-content">
        {/* Hot post, Seach bar and filted post */}
        <div className="about-title">GIỚI THIỆU VỀ CATPAW</div>
        <div className="container para-1 my-5">
          Bạn có muốn tạo ra một cuộc sống vui vẻ một cách có ý thức cho bản
          thân và những chú mèo của mình không? Bạn đang tìm kiếm thông tin để
          giữ cho các thành viên trong gia đình mèo của bạn khỏe mạnh, hạnh phúc
          và mãn nguyện? CatPaw là nguồn tài nguyên toàn diện giúp bạn có cuộc
          sống có ý thức, sức khỏe và hạnh phúc cho mèo và con người của chúng.
        </div>
        <div className="para-2">
          <div className="container">
            <div className="row py-5 my-5">
              <div className="col-12 col-md-6 about-thumbnail">
                <img src="./img/about-thumbnail.jpg" alt="" />
              </div>
              <div className="col-12 col-md-6">
                <div className="para-title my-4">AI ĐÃ TẠO RA CATPAW</div>
                <div>
                  Catpaw được tạo ra bởi tôi - một người yêu thích thú cưng, đặc
                  biệt là những chú mèo. Với mục đích mang lại cho bạn đọc những
                  thông tin hữu ích và những sản phẩm dành cho các bé mèo, tôi
                  hy vọng rằng các bài viết và những sản phẩm của Catpaw sẽ đem
                  lại nhiều niềm vui, sự hứng thú cũng như thêm yêu quý những
                  chú mèo cưng của bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="para-title">CATPAW BLOG CÓ GÌ</div>
              <div className="text">
                Với những hiểu biết của mình cùng với sự tìm tòi, nghiên cứu,
                tôi đã tổng hợp vào đăng tải lên CATPAW những bài viết về mèo
                cưng. Trên CATPAW, bạn sẽ tìm thấy lời những bài viết về chế độ
                dinh dưỡng cho mèo, các bài viết về chủ đề chăm sóc sức khỏe cho
                mèo cưng. Bên cạnh đó bạn cũng có thể tìm thấy các bài viết thú
                vị khác, những sự thật, những fact vui về chú mèo của bạn.
              </div>
            </div>
            <div className="col-12 col-md-6 about-thumbnail">
              <img src="./img/thumbnail/thumbnail-12.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6">
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
            </div>
            <div className="col-12 col-md-6 about-thumbnail">
              <img src="./img/about-thumbnail-2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="para-title">TẠI SAO BẠN NÊN CHỌN CATPAW SHOP</div>
              <div className="text">
                <ul>
                  <li>Chất lượng đảm bảo tốt.</li>
                  <li>Giá cả cạnh tranh</li>
                  <li>CATPAW có chính sách giao hàng đa dạng</li>
                  <li>Chính sách đổi trả linh hoạt</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 about-thumbnail">
              <img src="./img/about-thumbnail-3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <a href="./index.html" className="homepage-btn">
              QUAY LẠI TRANG CHỦ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
