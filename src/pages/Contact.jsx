import React from "react";
import { NavLink } from "react-router-dom";
import "../css/contact.css";

export default function Contact() {
  return (
    <div>
      <div className="main-content">
        {/* Hot post, Seach bar and filted post */}
        <div className="contact-title">LIÊN HỆ</div>

        {/* Contact */}
        <div className="container">
          <div className="row my-4">
            <div className="col-12 col-md-6 contact-alert-content">
              <div className="contact-alert-des">
                Catpaw muốn được nghe ý kiến từ quý khách. Nếu có bất kỳ thông
                tin gì cần giải đáp, vui lòng gửi tin nhắn và để lại thông tin
                liên hệ cho Catpaw. Catpaw sẽ cố gắng phản hồi và liên hệ với
                quý khách.
              </div>
              <div className="contact-info">
                <div className="label-2">Liên hệ với CATPAW tại địa chỉ:</div>
                <div className="address">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>Nam Từ Liêm, Hà Nội</span>
                </div>
                <div className="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <a href="mailto: nhattung725@gmail.com">
                    nhattung725@gmail.com
                  </a>
                </div>
                <div className="phone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <a href="tel:+0886-308-073">0886-308-073</a>
                </div>
              </div>
              <div className="contact-alert-form">
                <div className="label-2">
                  Hoặc để lại lời nhắn cho CATPAW theo thông tin dưới đây:
                </div>
                <div className="contact-name">
                  <div className="label">Tên</div>
                  <input className="input" type="text" />
                </div>
                <div className="contact-email">
                  <div className="label">Email</div>
                  <input className="input" type="email" />
                </div>
                <div className="contact-mess">
                  <div className="label">Lời nhắn</div>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    defaultValue={""}
                  />
                </div>
                <div className="container">
                  <div className="col-12 d-flex my-2 justify-content-end">
                    <input
                      className="submit-btn"
                      type="submit"
                      defaultValue="GỬI"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7448.608504107532!2d105.7763939451385!3d21.020508757480027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ac07228aff%3A0xce3f8e359e6e2a28!2zxJDDrG5oIFRow7RuLCBNeSBEaW5oIDIsIFThu6sgTGnDqm0sIEhhbm9pLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1679590700243!5m2!1sen!2s"
                width={550}
                height={550}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
