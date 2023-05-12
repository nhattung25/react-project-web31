import React from "react";
import "./signup.css";
export default function Signup() {
  return (
    <div>
      <div className="sign">
        <div className="sign-up-button">
          <div className="sign-up-alert">
            <div className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.486446 0.528263C0.798309 0.217445 1.22108 0.0428596 1.66187 0.0428596C2.10265 0.0428596 2.5254 0.217445 2.83728 0.528263L9.97851 7.65419L17.1197 0.528263C17.2721 0.365186 17.4557 0.234397 17.6598 0.143685C17.8638 0.0529733 18.084 0.00419831 18.3074 0.000259135C18.5307 -0.00368004 18.7525 0.0373274 18.9596 0.120802C19.1667 0.204278 19.3548 0.328516 19.5127 0.486127C19.6708 0.643739 19.7953 0.831492 19.8789 1.03814C19.9625 1.24482 20.0037 1.46619 19.9997 1.68904C19.9957 1.91191 19.947 2.13168 19.856 2.33528C19.7651 2.53888 19.634 2.72212 19.4706 2.87406L12.3293 9.99999L19.4706 17.1259C19.634 17.2779 19.7651 17.4612 19.856 17.6648C19.947 17.8684 19.9957 18.0881 19.9997 18.311C20.0037 18.5338 19.9625 18.7551 19.8789 18.9618C19.7953 19.1685 19.6708 19.3562 19.5127 19.5138C19.3548 19.6715 19.1667 19.7957 18.9596 19.8791C18.7525 19.9626 18.5307 20.0037 18.3074 19.9997C18.084 19.9958 17.8638 19.9471 17.6598 19.8563C17.4557 19.7656 17.2721 19.6348 17.1197 19.4717L9.97851 12.3458L2.83728 19.4717C2.52196 19.7649 2.10491 19.9245 1.674 19.917C1.24308 19.9092 0.831953 19.7351 0.527187 19.431C0.222442 19.1269 0.0478819 18.7166 0.040275 18.2866C0.032668 17.8566 0.192636 17.4406 0.486446 17.1259L7.62767 9.99999L0.486446 2.87406C0.17496 2.56287 0 2.141 0 1.70116C0 1.26133 0.17496 0.83948 0.486446 0.528263Z"
                  fill="#57606A"
                />
              </svg>
            </div>
            <img src="./img/logo-brand/logo-brand.png" alt="" />
            <div className="alert-title">ĐĂNG NHẬP</div>
            <div className="sign-up-alert-form">
              <button className="sign-up-fnc fb">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="35px"
                    height="35px"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </div>
                <span>Đăng nhập với Google</span>
              </button>
              <button className="sign-up-fnc crt">
                <img src="./img/icon/cat-icon.png" alt="" />
                <span>Tạo tài khoản trên Catpaw</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
