/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import VideoModal from "../Popups/VideoModal";

function Section2() {
  return (
    <>
      <style jsx>{`
        .section2 {
          padding: 140px 0px;
          background: url(/images/section2-bg.png) no-repeat;
          background-color: #000;
          -o-background-size: cover;
          background-size: cover;
        }
        .section2-inner {
          max-width: 1468px;
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 300px;
        }
        
        .section2-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .section2-content h3 {
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-xl);
          line-height: var(--line-900);
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          max-width: 800px;
          text-align: left;
          margin-bottom: 30px;
        }
        .section2-content p {
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-500);
          line-height: var(--line-500);
          font-family: "Open Sans", sans-serif;
          margin-bottom: 25px;
          max-width: 800px;
        }
        
        @media (max-width: 3000px) {
          .section2-inner {
            padding: 20px;
            gap: 300px;
          }
          .section2-content {
            flex: 0 0 calc(60% - 200px);
            max-width: calc(60% - 200px);
            width: 100%;
          }
          .section2-inner .img-container {
            flex: 0 0 calc(40% - 100px);
            max-width: calc(40% - 100px);
            width: 100%;
          }
          .section2-inner .img-container img {
            width: 100%;
          }
        }
        @media (max-width: 1400px) {
          .section2-inner {
            padding: 20px;
            gap: 100px;
          }
          .section2-content {
            flex: 0 0 calc(60% - 50px);
            max-width: calc(60% - 50px);
          }
          .section2-inner .img-container {
            flex: 0 0 calc(40% - 50px);
            max-width: calc(40% - 50px);
          }
        }
        @media (max-width: 969px) {
          .section2-inner {
            padding: 20px;
            gap: 50px;
          }
          .section2-content {
            flex: 0 0 calc(50% - 25px);
            max-width: calc(50% - 25px);
          }
          .section2-inner .img-container {
            flex: 0 0 calc(50% - 25px);
            max-width: calc(50% - 25px);
          }
        
          .section2-content h3 {
            font-size: var(--line-800);
            line-height: var(--line-800);
          }
        }
        @media (max-width: 767px) {
          .section2 {
            padding: 20px;
          }
          .section2-inner {
            flex-wrap: wrap;
          }
          .section2-content {
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
            order: 2;
          }
          .section2-content h3 {
            font-size: var(--font-500);
            line-height: 40px;
          }
          .section2-content p {
            font-size: var(--font-400);
            line-height: var(--line-400);
          }
          .section2-inner .img-container {
            flex: 0 0 400px;
            max-width: 400px;
            width: 100%;
            order: 1;
            margin: auto;
          }
          .section2-inner .img-container img {
            width: 100%;
            object-fit: cover;
          }
        }
        
        @media (max-width: 567px) {
          .section2-content,
          .section2-inner .img-container {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }        
      `}</style>
      <section className="section2" id="section2">
      <div className="section2-inner">
        <div className="section2-content">
          <h3>WELCOME TO THE HOT TAPE GIRLS CLUB</h3>
          <p>
          Hot Tape Girls Club is a breathtaking NFT project that aims to disrupt the traditional NFT format and takes an interactive approach to increase the art value of an NFT collection. Tape girls owners could view the hidden content under the tape in our members-only area.
          </p>
          <p>
          10+1 tape girls from different regions of the world have been collected in our series of 10,401 NFT. Each tape girl is unique and programmatically generated from over 38 possible traits, including tapes, patterns, and colours.
          </p>
          <p>
          The tape girls are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </p>
          <p>
          This project contains adult and disturbing content, please consume at your own risk.
          </p>

        </div>
        <div className="img-container">
          <img src="/images/section2.gif" alt="" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Section2;
