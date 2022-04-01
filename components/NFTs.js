import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import Image from 'next/image'
const NFTs = ({ address, origin }) => {
  const [collection, setCollection] = useState([]);
  const [display, setDisplay] = React.useState("none");

  useEffect(async () => {
    setDisplay("block");
    const timeout = setTimeout(() => {
      setDisplay("none");
    }, 3000);

    const res1 = await fetch(`${origin}/api/getNFTs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        auth: 'apif3e42fea-7b35-47ad-bad4-114a14323176api'
      }),
    });
    const res2 = await res1.json();
    setCollection(res2.data.assets);
  }, []);

  const slicing = (address) => {
    if (address) {
      const first = address.slice(0, 10);
      const secound = address.slice(35);
      return first + "..." + secound;
    } else {
      return " ";
    }
  };

  console.log("NFTS are", collection);
  return (
    <>
      {() => clearTimeout(timeout)}
      <div className="nft-balance">
        <div className="jsx-7b97eb7cbe0cc6df">
          <section id="devices" className="jsx-7b97eb7cbe0cc6df">
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
              style={{ minWidth: "427px", zIndex: "2" }}
              className="jsx-7b97eb7cbe0cc6df deviceWrap iphone-x-portrait"
            >
              <p className="address">{slicing(address)}</p>
              <div
                style={{
                  width: "270px",
                  height: "41rem",
                  paddingTop: "126px",
                  paddingBottom: "110px",
                  color: "#000",
                }}
                className="jsx-7b97eb7cbe0cc6df device"
              >
                {/* <div
                style={{ height: '83px' }}
                className="jsx-7b97eb7cbe0cc6df flashingBottom"
              ></div> */}
                <div className="collection container">
                  {collection &&
                    collection.map((data, i) => (
                      <Link
                        key={i}
                        href={`/details/${data.token_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={data.image_url}
                          alt=""
                          width={140}
                          height={220}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="collection container">
          {collection &&
            collection.map((data) => (
              
              <NavLink to={`/details/${data.token_id}`} style={{textDecoration:'none'}}>
                  <img
                    src={data.image_url}
                    alt=""
                    width={150}
                    height={150}
                  />
              </NavLink>
            ))}
        </div> */}
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex: "500",
          top: "0",
          left: "0",
          color: "black",
          backgroundColor: "white",
          textAlign: "center",
          margin: "auto",
          display: display,
        }}
        className="fade-out"
      >
        <div
          style={{
            height: "100%",
            top: "50%",
            transform: "translateY(30%)",
            fontSize: "2rem",
            width: "50%",
            margin: "auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          This DApp contains adult and disturbing content. Please enter at your own risk.
        </div>
      </div>
    </>
  );
};

export default NFTs;
