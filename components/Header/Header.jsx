/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Link from 'next/link'

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
    <style jsx>{`header {
  background: #272122;
  border-bottom: 1px solid #707070;
  height: 100px;
  /* padding-bottom: 10px; */
}

.header-inner {
  height: 100%;
  max-width: 1900px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 20px;
}
.links {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.links li,
.logo span {
  letter-spacing: 0px;
  color: #ffffff;
  font-size: var(--font-600);
  line-height: 46px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  border-left: 3px solid #e12c51;
  padding: 0px 20px;
}
.links li a {
  letter-spacing: 0px;
  color: #ffffff;
  font-size: var(--font-600);
  line-height: 46px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}
.logo span {
  border: 0px;
  align-self: flex-end;
}
.logo {
  display: flex;
  /* align-items: f; */
  margin-bottom: 8px;
}

.logo img{
  width:60px;
  height:60px;
}
.mobile-icon {
  display: none;
}
.mobile-nav {
  display: none;
}
@media (max-width: 1200px) {
  .links li a,
  .logo span,
  .links li {
    font-size: 20px;
    line-height: 30px;
    padding: 0 10px;
  }

.logo img{
  width:50px;
  height:50px;
}
}
@media (max-width: 1000px) {
  .links li a,
  .logo span,
  .links li {
    font-size: 16px;
    line-height: 20px;
    padding: 0 5px;
  }
  .logo img{
    width:42px;
    height:42px;
  }
}
@media (max-width: 770px) {
  header {
    /* padding: 20px; */
    padding-bottom: 8px;
  }
  .logo img{
    height: 28px;
    width: 28px;
    
  }
  .logo span{
    font-size: 15px !important;
    line-height: 15px !important;
  }
  .header-inner {
    /* align-items: center; */
  }
  .logo{
    margin-bottom: 0px;
  }
  .links {
    display: none;
  }
  .mobile-icon {
    display: block;
  }
  .mobile-nav {
    display: block;
    position: fixed;
    top: 100px;
    background: #000;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    padding: 48px;
  }
  .mobile-nav .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .mobile-nav .links a {
    letter-spacing: 0px;
    color: #ffffff;
    font-size: 20px;
    line-height: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    border: none;
    border-bottom: 3px solid #e12c51;
    padding-bottom: 10px;
    /* margin-bottom: 20px; */
  }
  .mobile-nav .links li {
    margin-bottom: 30px;
  }
  .logo span {
    font-size: var(--font-400);
    line-height: var(--line-400);
  }
}

`}</style>
      <header>
        <div className="header-inner">
          <div className="logo">
            <img src="/images/head.png" alt="" />
            <span>HOT TAPE GIRLS CLUB</span>
          </div>
          <ul className="links">
            <li>
              <a href="https://www.hottapegirlsclub.com">ABOUT THE PROJECT</a>
            </li>
            <li>
              <a href="#">LIBRARY</a>
            </li>
            <li>
              <Link href="/scoreboard"><a>SCOREBOARD</a></Link>
            </li>
            <li>
            <Link href="/members"><a>MEMBERS</a></Link>
            </li>
          </ul>
          <span
            onClick={() => setMobileNav(!mobileNav)}
            className="mobile-icon"
          >
            <svg
              width={42}
              height={21}
              viewBox="0 0 42 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 1.5H41.686" stroke="#707070" strokeWidth={3} />
              <path d="M0.5 10.5H41.686" stroke="#707070" strokeWidth={3} />
              <path d="M0.5 19.5H41.686" stroke="#707070" strokeWidth={3} />
            </svg>
          </span>
        </div>
      </header>
      {mobileNav && (
        <div className="mobile-nav">
          <ul className="links">
            <li onClick={() => setMobileNav(!mobileNav)}>
              <a href="https://www.hottapegirlsclub.com">ABOUT THE PROJECT</a>
            </li>
            <li onClick={() => setMobileNav(!mobileNav)}>
              <a href="#">LIBRARY</a>
            </li>
            <li onClick={() => setMobileNav(!mobileNav)}>
              <Link href="/scoreboard"><a>SCOREBOARD</a></Link>
            </li>
            <li onClick={() => setMobileNav(!mobileNav)}>
              <Link href="/members"><a>MEMBERS</a></Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
