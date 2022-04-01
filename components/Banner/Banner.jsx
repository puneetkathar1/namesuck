import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Banner() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <style jsx>{`
        .banner {
          width: 100%;
          background: #171616;
          height: calc(100vh - 90px);
        }
        .banner-inner {
          max-width: 1560px;
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          height: 100%;
        }

        .banner .content {
          display: flex;
          align-items: center;
          flex: 0 0 60%;
          max-width: 60%;
          width: 100%;
        }
        .banner .content h1 {
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-xl);
          line-height: var(--line-xl);
          font-family: "Poppins", sans-serif;
          font-weight: bold;
        }
        .banner .content h1 span {
          background: #e12c51;
          padding: 0px 5px;
          line-height: 1.75;
        }
        .banner .img-container {
          position: relative;
          display: flex;
          align-items: center;
          flex: 0 0 calc(40% - 20px);
          max-width: calc(40% - 20px);
          width: 100%;
          height: 100%;
        }
        .banner .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left;
        }

        .img-container > div {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .img-container > div:first-child {
          z-index: 1;
        }

        .img-container > div:last-child {
          margin-left: -16px;
        }

        @media (max-width: 1600px) {
          .banner {
            min-height: auto;
          }
          .banner-inner {
          }
        }

        @media (max-width: 767px) {
          .banner {
            min-height: auto;
          }
          .banner-inner {
            min-height: inherit;
          }
          .banner .content,
          .banner .img-container {
            flex: 0 0 calc(50% - 10px);
            max-width: calc(50% - 10px);
            width: 100%;
          }
          .banner .content h1 {
            font-size: var(--font-700);
            line-height: normal;
          }
          .banner .img-container {
            align-items: flex-start;
          }
        }

        @media (max-width: 567px) {
          .banner {
            min-height: auto;
            padding: 0px 0px;
          }
        }
        @media (max-width: 370px) {
          .banner .content h1 {
            font-size: 20px !important;
            line-height: normal;
          }
        }
        @media (max-width: 345px) {
          .banner .content h1 {
            font-size: 16px !important;
            line-height: normal;
          }
        }
        
      `}</style>
      <section id="banner" className="banner">
        <div className="banner-inner">
          <div className="content">
            <h1>
              A BREATHTAKING <span>SENSUAL</span> & <br />
              <span>TERRIFIC</span> NFT PROJECT <br/><br/><span style={{fontSize: '1.5rem', borderRadius: '2rem', padding: '1rem'}} ><a href="https://www.hottapegirlsclub.io">Mint Now</a></span>
            </h1>
          </div>
          
          <div data-aos="slide-left" className="img-container">
            <img src="/images/Session 1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
