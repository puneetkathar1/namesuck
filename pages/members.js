import NFTs from "../components/NFTs";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";

import { useWeb3 } from "@3rdweb/hooks";

function App({origin}) {
  const { address, chainId, connectWallet } = useWeb3();

  return (
    <>
      <div className="App">
        {!address ? (
          <div className="header">
            <button
              className="login-btn"
              onClick={() => connectWallet("injected")}
            >
              Login with Metamask
            </button>
          </div>
        ) : (
          <>
            <Link href="/">{address ? <NFTs address={address} origin={origin} /> : ""}</Link>
          </>
        )}
      </div>
    </>
  );
}

export default App;

export async function getServerSideProps(ctx) {
  const { res, req } = ctx;
  const { origin } = absoluteUrl(req);
  
  return {
    props: { origin },
  };
}
