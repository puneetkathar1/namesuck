import React from "react";

const DATA = [
  {
    title: "ULTIMATE SURPRISE UNDER THE TAPE",
    text: "On 1st April, 12AM (GMT-4), tape girls owners can access a members-only area where tape girls are waiting for you to remove their tape. Each tape girl contains one surprise (10+1 in total) under the tape. What's under the tape is the perfect unexpected treat.",
    image: "under.png",
  },
  {
    title: "PRIVATE MESSAGE & SECRET DISCORD CHANNEL",
    text: "Tape girls owners will receive a private message from us and an invitation to enter our private discord channel after removing the tape. Join our secret community and share your thoughts!",
    image: "message.png",
  },
  {
    title: "SHARE WITH YOUR FRIENDS TO WIN UP TO 5 ETH & HTGC NFT",
    text: "Never forget to share the good sh*t with your friends. A specific URL will be generated for you to share your experience. <br></br>As we want to challenge the NFT stereotype and encourage different creative forms of NFT, from 1st to 7th April, our top 100 owners with the highest number of URL shares will win a customized NFT airdrop and top 10 owners can win up to 5 ETH!  Detailed instructions are stated in our Scoreboard.",
    image: "row-3.png",
  },
  {
    title: "CERTIFIED TOKEN",
    text: "Tape girls owners will receive a black token engraved with their names after removing the tape. Your friends (participants) who remove the tape through generated links can also  receive a white token. Not only that, you can also have a chance to have your name engraved along with the participant's name in a white token as a token of appreciation for nominating new members. <br></br> Token ownership belongs to both black and white token holders. You could use it for any personal use.",
    image: "row-4.png",
  },
  {
    title: "To be Announced on 1st April...",
    text: "",
  },
];

function Section3() {
  return (
    <>
      <style jsx>{`
        /*
  * Prefixed by https://autoprefixer.github.io
  * PostCSS: v8.3.6,
  * Autoprefixer: v10.3.1
  * Browsers: last 4 version
  */

        .section3 {
          padding: 150px 0px;
          padding-top: 76px;
          background: url(/images/section3-bg.svg) no-repeat 50% fixed;
          background-color: #000;
          background-size: cover;
        }

        .section3 .title {
          text-align: left;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          font-size: var(--font-xl);
          line-height: var(--line-900);
          font-family: "Poppins", sans-serif;
          font-style: italic;
          font-weight: bold;
          border-bottom: 20px solid #eb144f;
          max-width: 1112px;
          margin: 0px 90px;
          margin-bottom: 90px;
          padding-bottom: 20px;
        }

        .section3 .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          /* align-items: center; */
          /* max-width: 1800px; */
          /* margin: auto; */
          /* width: 100%; */
          margin-bottom: 180px;
        }
        .section3 .row h3 {
          text-align: left;
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-900);
          line-height: var(--line-900);
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          margin-bottom: 28px;
        }
        .section3 .row p {
          text-align: left;
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-500);
          line-height: var(--line-500);
          font-family: "Open Sans", sans-serif;
          font-weight: bold;
          margin-bottom: 28px;
        }
        .section3 .row .row-content {
          padding: 90px;
          background: #eb144f;
        }
        .row {
          /* gap: 80px; */
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .row .row-content {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 calc(80% - 70px);
          flex: 0 0 calc(80% - 70px);
          max-width: calc(80% - 70px);
          width: 100%;
        }
        .row .img-container {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 calc(20% - 10px);
          flex: 0 0 calc(20% - 10px);
          max-width: calc(20% - 10px);
          width: 100%;
          display: flex;
          align-items: center;
        }
        .row .img-container img {
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
        }
        .row.row-1 img {
          height: 470px;
        }
        .row.row-4 .row-content {
          min-height: 550px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        .s3-data {
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .s3-r {
          flex-direction: row-reverse;
        }

        .s3-data-first {
          color: #fff;
          background: #eb144f;
          padding: 4%;
          width: 60%;
          display: flex;
          flex-direction: column;
          height: fit-content;
          justify-content: center;
          min-height: 450px;
        }

        .s3-data-first h3 {
          text-align: left;
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-900);
          line-height: var(--line-900);
          font-family: "Poppins", sans-serif;
          font-weight: Bold;
          margin-bottom: 32px;
        }

        .s3-data-first p {
          text-align: left;
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-500);
          line-height: var(--line-500);
          font-family: "Open Sans", sans-serif;
          font-weight: normal;
        }

        .s3-data-img {
          max-width: 300px;
          width: 100%;
          display: flex;
          align-items: center;
          margin-left: 5%;
          margin-right: 5%;
        }

        .s3-data-img img {
          width: 100%;
          /* height:100%; */
        }

        @media (max-width: 1600px) {
          .row {
            /* gap: 40px; */
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          .section3 .row {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-bottom: 120px;
          }
          .row .row-content {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(60% - 20px);
            flex: 0 0 calc(60% - 20px);
            max-width: calc(60% - 20px);
            width: 100%;
          }
          .section3 .row .row-content {
            padding: 50px;
            background: #eb144f;
          }
          .row .img-container {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(40% - 20px);
            flex: 0 0 calc(40% - 20px);
            max-width: calc(40% - 20px);
            width: 100%;
          }
          .row .img-container img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
          }
          .row.row-1 img {
            /* height: 100%; */

            height: 450px;
          }
          .row.row-4 .row-content {
            min-height: auto;
          }
        }
        @media (max-width: 1200px) {
          .section3 {
            padding: 100px 0px;
          }
          .section3 .title {
            margin: 0 20px;
            margin-bottom: 50px;
          }
          .section3 .row {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-bottom: 90px;
          }
          .row {
            /* gap: 40px; */
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          .row .row-content {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(50% - 20px);
            flex: 0 0 calc(50% - 20px);
            max-width: calc(50% - 20px);
          }
          .section3 .row .row-content {
            padding: 30px;
          }
          .row .img-container {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(50% - 20px);
            flex: 0 0 calc(50% - 20px);
            max-width: calc(50% - 20px);
          }
          .section3 .row h3 {
            font-size: 40px;
            line-height: 53px;
            margin-bottom: 10px;
          }
          .section3 .row p {
            margin-bottom: 10px;
          }
        }
        @media (max-width: 992px) {
          .s3-data {
            flex-direction: column;
          }

          .s3-data > div {
            width: 100%;
            margin-bottom: 32px;
          }

          .s3-data-img {
            margin: auto;
          }

          .s3-data-first h3 {
            font-size: 20px;
          }

          .s3-data-first p {
            font-size: var(--font-400);
            line-height: 1.5;
          }
        }

        @media (max-width: 767px) {
          .section3 {
            padding: 40px 0px;
          }
          .section3 .title {
            font-size: var(--font-500);
            line-height: 40px;
          }
          .section3 .row {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-bottom: 0px;
          }
          .section3 .row h3 {
            font-size: 20px;
            line-height: 30px;
          }
          .section3 .row p {
            font-size: var(--font-400);
            line-height: var(--line-400);
          }
          .section3 .row .row-content {
            padding: 90px 35px !important;
            width: 100% !important;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
            margin: 0px !important;
            margin-bottom: 60px !important;
          }
          .section3 .row .img-container {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
            /* height: 200px; */
            margin-bottom: 60px;
            display: flex;
            justify-content: center;
          }
          .section3 .row .img-container img {
            width: 100% !important;
            /* height: 100% !important; */
            max-width: 400px;
            margin-right: 8px;
            margin-left: 8px;
          }
          .section3 .row.row-1 .row-content,
          .section3 .row.row-3 .row-content {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
          }
        }

        @media (max-width: 567px) {
          .section3 .row .row-content {
            padding: 10px 35px !important;
          }
        }
      `}</style>
      <section className="section3" id="section3">
        <h2 className="title">
          A UNIQUE NFT EXPERIENCE<br></br> YOU NEVER EVER HAD BEFORE
        </h2>

        {DATA.map((item, i) => {
          return (
            <div key={i} className={`s3-data ${i % 2 !== 0 ? "s3-r" : ""}`}>
              <div className="s3-data-first">
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </div>
              <div className="s3-data-img">
                {item.image && <img src={`/images/${item.image}`} alt="" />}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Section3;
