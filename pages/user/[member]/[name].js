import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";
function Name({origin}) {

  const router = useRouter();
  const { member, name } = router.query;

  const [scary, setScary] = React.useState("0");
  const [display, setDisplay] = React.useState("block");
  const [img, setImg] = React.useState(1);
  const [jump, setJump] = useState(false);

  const timeout = setTimeout(() => {
    setDisplay("none");
  }, 3000);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        // IMPORTANT: check the origin of the data!
        if (event.origin.startsWith(`${origin}`)) {
          // The data was sent from your site.
          // Data sent with postMessage is stored in event.data:
          console.log(event.data.message);
          event.data.message > 0 && event.data.message < 12
            ? (setScary("100%"), setImg(event.data.message), setJump(true))
            : setScary("0");
        } else {
          // The data was NOT sent from your site!
          // Be careful! Do not use it. This else branch is
          // here just for clarity, you usually shouldn't need it.
          return;
        }
      });
    }
  }, []);
  return (
    <>
      {() => clearTimeout(timeout)}
      <div>
        <style jsx>{`
          @media screen {
            body {
              margin: 0px;
            }
            em {
              font-style: italic;
            }
            p {
              margin-bottom: 1em;
            }
            html,
            body {
              margin: 0;
              padding: 0;
            }
            body {
              margin-bottom: 60px;
              line-height: 100%;
              font-family: helvetica, arial, sans-serif;
              font-size: 13px;
              background-color: #ffffff;
            }
            a {
              color: #666;
              text-decoration: none;
            }
            a:hover {
              color: #000;
            }
            .deviceTitle,
            .jobAd {
              font-family: georgia, helvetica, arial, sans-serif;
            }
            .deviceTitle {
              font-size: 14px;
            }
            .footer_links {
              text-align: center;
              margin-top: 40px;
            }
            .footer_links a {
              color: #1ba4d6;
              border-bottom: 1px solid #efefef;
              padding-bottom: 1px;
            }
            #devices {
              text-align: center;
              margin-top: 20px;
            }
            .deviceWrap {
              width: 100%;
              background-position: top center;
              background-repeat: no-repeat;
              margin: 20px 0px 20px 0px;
              position: relative;
            }
            #devices .device {
              margin: 0 auto;
              position: relative;
            }
            #devices .device .flashingTop,
            #devices .device .flashingBottom {
              position: absolute;
              left: 0;
              width: 100%;
            }
            #devices .device .flashingTop {
              top: 0;
              padding-top: 4px;
            }
            #devices .device .flashingBottom {
              bottom: 0;
            }
            #devices iframe {
              width: 100%;
              height: 100%;
              margin: 0;
              border: 1px solid #d1d1d1;
            }
            .iphone-x-portrait {
              background-image: url(/phone.png);
              padding: 27px 0 27px 0px;
              background-size: 21rem;
            }
            .iphone-x-portrait span.time {
              color: #979797;
              position: absolute;
              left: 8px;
              display: block;
              top: 17px;
              font-family: "SF UI Text", helvetica, arial, sans-serif;
              width: 80px;
              text-align: center;
            }
            #devices .iphone-x-portrait iframe {
              border: none;
            }

            .iphone-6-portrait {
              background-image: url(/phone.png);
              padding: 103px 0 107px 0px;
            }
            .iphone-6-landscape {
              background-image: url(/phone.png);
              padding: 22px 0 24px 0px;
            }
            .iphone-6-plus-portrait {
              background-image: url(/phone.png);
              padding: 103px 0 107px 0px;
            }
            .iphone-6-plus-landscape {
              background-image: url(/phone.png);
              padding: 22px 0 24px 0px;
            }
            .ipad-portrait {
              background-image: url(/phone.png);
              padding: 111px 0 113px 0;
            }
            .ipad-landscape {
              background-image: url(/phone.png);
              padding: 101px 0 103px 0;
            }
            .android-pixel-2-landscape {
              background-image: url(/phone.png);
              padding: 22px 51px 24px 0;
              box-sizing: border-box;
            }
            .android-pixel-2-portrait {
              background-image: url(/phone.png);
              padding: 109px 0 161px 0;
            }
            .android-pixel-2-portrait .flashingTop .time {
              float: right;
              padding: 5px 6px 0px 0px;
              line-height: 100%;
            }
            .ipad-landscape span.time,
            .ipad-portrait span.time {
              color: #bbb;
            }
            span.time {
              font-family: helvetica, arial, sans-serif;
              color: white;
              font-size: 12px;
            }
            .jobAd {
              background: #fff;
              border: 1px solid #45bbde;
              border-radius: 3px;
              max-width: 700px;
              margin: 70px auto 0px auto;
              font-style: normal;
              line-height: 170%;
              font-size: 18px;
              font-family: "helvetica neue", helvetica, arial, sans-serif;
              padding: 20px 0px;
            }
            .jobAd a {
              color: #2082bd;
              border-bottom: 1px solid #b2e0f4;
              transition: all 0.2s;
              -webkit-transition: all 0.2s;
            }
            .jobAd a:hover {
              color: #222;
              border-bottom: 1px solid #999;
              transition: all 0.2s;
              -webkit-transition: all 0.2s;
            }
          }
        `}</style>
        <section id="devices">
          <div
            style={{
              float: "left",
              margin: "1rem",
              zIndex: "20",
              position: "absolute",
              padding: "1.5rem 4.5rem",
              cursor: "pointer",
            }}
          >
            <Link href="/" passHref>
              <Image
                src="/homeButton.png"
                height={50}
                width={50}
                alt="Home Button"
              />
            </Link>
          </div>
          <div
            className="deviceWrap iphone-x-portrait"
            style={{ minWidth: "427px", zIndex: "2" }}
          >
            <div
              style={{
                marginTop: "6.2rem",
                marginLeft: "12rem",
              }}
              onClick={() => {
                if (jump) {
                  var iFrame = document.getElementById("iphone-x-portrait");
                  iFrame.contentWindow.postMessage("openModal", `${origin}`);
                }
              }}
            >
              <Image
                src="/Bubble.png"
                height={20}
                width={20}
                alt="Home Button"
              />
            </div>
            <div
              className="device"
              style={{
                width: "287px",
                paddingLeft: "3.5px",
                height: "44rem",
                paddingTop: "5px",
                paddingBottom: "282px",
              }}
            >
              <div className="flashingBottom" style={{ height: "83px" }} />
              <iframe
                src={`${origin}/user/${member}/components/${name}`}
                id="iphone-x-portrait"
              />
            </div>{" "}
          </div>
        </section>
      </div>
      <div
        style={{
          height: scary,
          width: scary,
          position: "fixed",
          zIndex: "100",
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="zoom-in-zoom-out"
      >
        <img src={`/${img}.png`} alt="scary" style={{ height: "100%" }} />
      </div>
      <div
        style={{
          height: scary,
          width: scary,
          position: "fixed",
          zIndex: "200",
          top: "0",
          left: "0",
        }}
        className="blink"
      >
        <img
          src="/white.jpg"
          alt="scary"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </>
  );
}

export default Name;

export async function getServerSideProps(ctx) {
  const { origin } = absoluteUrl(ctx.req);
  return {
    props: { origin },
  };
}
