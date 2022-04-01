/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Outlet } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          padding: 60px 0px;

          background: #272122;
        }
        .footer-content {
          max-width: 1820px;
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-content > div {
          width: 33.333%;
          margin: auto;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .updated .input {
          display: flex;
        }
        .updated input {
          width: 380px;
          /* width: 100%; */
          height: 52px;
        }
        .updated .icon {
          cursor: pointer;
        }
        .updated h6 {
          font-size: var(--font-500);
          line-height: var(--line-500);
          font-family: "Open Sans", sans-serif;
          color: #fff;
          margin-bottom: 2px;
        }

        .footer-icons {
          display: flex;
          flex-direction: column;
        }
        .footer-icons .icons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 10px;
        }
        .footer-icons .icons i {
          color: #fff;
          font-size: 20px;
          margin-right: 17px;
        }
        .footer-content span,
        .footer-content a {
          text-align: right;
          text-decoration: underline;
          font-size: var(--font-400);
          line-height: var(--line-400);
          font-family: "Open Sans", sans-serif;
          color: #fff;
          margin-bottom: 4px;
          font-weight: 500;
        }
        .footer-content span {
          text-decoration: none;
        }

        @media (max-width: 1600px) {
          footer {
            padding: 60px 20px;
          }
        }

        @media (min-width: 768px) and (max-width: 900px) {
          .updated,
          .footer-icons,
          .footer-img {
            flex: 0 0 33.33%;
            max-width: 33.33%;
            width: 100%;
          }
          .footer-img {
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 767px) {
          .footer-content {
            padding: 20px;
            gap: 20px;
          }
          .updated,
          .footer-icons,
          .footer-img {
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
          }
          .footer-img img {
            /* width: 100%; */
            /* height: 400px; */
          }
          .footer-icons .icons {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer-content p {
            text-align: center;
          }
          .updated h6 {
            text-align: center;
          }
          .updated .input {
            justify-content: center;
          }
          .updated {
            order: 2;
          }
          .footer-img {
            order: 1;
            display: flex;
            justify-content: center;
          }
          .footer-icons {
            order: 3;
          }
        }

        @media (max-width: 567px) {
          .footer-img img {
            /* width: 100%; */
            /* height: 200px; */
          }
        }
      `}</style>
      <footer>
        <div className="footer-content">
          <div className="updated">
            <h6>Verified Contract Address</h6>
            <a href="https://etherscan.io/address/0x101446d295c7aff9ca9573c611fede0c3841d707">
              <h4>0x101446d295c7aff9ca9573c611fede0c3841d707</h4>
            </a>
            {/* <form className="input">
            <input type="text" />
            <span className="icon">
              <svg
                width={71}
                height={52}
                viewBox="0 0 71 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M71 0H0V52H71V0Z" fill="#6D6868" />
                <path d="M19.5 26H55.5" stroke="#171616" strokeWidth={2} />
                <path d="M39.5 13L54.5 26" stroke="#171616" strokeWidth={2} />
                <path d="M39.5 39.5L54.5 26" stroke="#171616" strokeWidth={2} />
              </svg>
            </span>
          </form> */}
          </div>
          <div className="footer-img">
            <img src="/images/foot.png" alt="" />
          </div>

          <div className="footer-icons">
            <div className="icons">
              <a href="https://discord.gg/9CMKFXHBan">
                <img
                  style={{ color: "#fff", height: "25px", width: "25px", margin: '0.3rem' }}
                  src="/discord-brands.svg"
                />
              </a>
              <a href="https://instagram.com/hottapegirlsclub/">
              <img
                  style={{ color: "#fff", height: "25px", width: "25px", margin: '0.3rem' }}
                  src="/instagram-brands.svg"
                />
              </a>
              <a href="https://mobile.twitter.com/htgc_official">
              <img
                  style={{ color: "#fff", height: "25px", width: "25px", margin: '0.3rem' }}
                  src="/twitter-brands.svg"
                />
              </a>
              <a href="#">
              <img
                  style={{ color: "#fff", height: "25px", width: "25px", margin: '0.3rem' }}
                  src="/tiktok-brands.svg"
                />
              </a>
            </div>
            <span>© 2022 HOT TAPE GIRLS CLUB</span>
            <Link href="/terms-of-services">
              <a style={{ color: "#fff" }}>Terms of Service</a>
            </Link>
            <Link href="/privacy-policy">
              <a style={{ color: "#fff" }}>Privacy Policy</a>
            </Link>
            <Link href="/marketing-policy">
              <a style={{ color: "#fff" }}>Marketing Policy</a>
            </Link>
          </div>
          <Outlet />
        </div>
      </footer>
    </>
  );
}

export default Footer;
