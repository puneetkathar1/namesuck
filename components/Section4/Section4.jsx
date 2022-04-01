import React from "react";

function Section4() {
  return (
    <>
      <style jsx>{`
.section4 {
  padding: 70px 0px;
  background: #171616;
}
.section4 .title {
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: var(--font-xl);
  line-height: var(--line-xl);
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-bottom: 140px;
}
.alt-vtl {
  position: relative;
  max-width: 1650px;
  margin: 0 auto;
}
/* Big Line */
.alt-vtl::before {
  content: "";
  width: 20px;
  background-color: #e12c51;
  position: absolute;
  top: -70px;
  left: 50%;
  height: calc(100% + 140px);
}

/* (C) EVENTS */
div.alt-event {
  background-color: #eb144f;
  border-radius: 6px;
  padding: 50px 30px;
  width: 45%;
  margin-bottom: 30px;
  position: relative;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
div.alt-event h3 {
  letter-spacing: 0px;
  color: #ffffff;
  font-size: var(--font-800);
  line-height: var(--line-800);
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}
div.alt-event p {
  letter-spacing: 0px;
  color: #ffffff;
  font-size: var(--font-500);
  line-height: var(--line-500);
  font-family: "Open Sans", sans-serif;
  text-align: right;
}
div.alt-event.right p {
  text-align: left;
}
div.right {
  left: 55%;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

div.alt-event.right::before {
  /* content: ""; */
  /* border: 10px solid transparent; */
  /* position: absolute; */
}
/* Circles */
div.alt-event::after,
div.alt-event.right::after {
  content: "";
  border-radius: 50%;
  width: 116px;
  height: 116px;
  background: #eb144f;
  position: absolute;
}
div.alt-event::after,
div.alt-event.right::after {
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
div.alt-event::after {
  left: 105%;
}
div.alt-event.right::after {
  left: auto;
  right: 102%;
}

@media (min-width: 768px) and (max-width: 1650px) {
  .alt-vtl::before {
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  div.alt-event::after {
    left: 111%;
    -webkit-transform: translate(-50%);
        -ms-transform: translate(-50%);
            transform: translate(-50%);
  }
  div.alt-event.right::after {
    left: auto;
    right: 111%;
    -webkit-transform: translate(50%, -50%);
        -ms-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  div.alt-event::after,
  div.alt-event.right::after {
    width: 76px;
    height: 76px;
  }
}

/* @media (max-width: 1800px) {
  div.alt-event::after,
  div.alt-event.right::after {
    width: 106px;
    height: 106px;
  }
}
@media (max-width: 1600px) {
  div.alt-event::after,
  div.alt-event.right::after {
    width: 96px;
    height: 96px;
  }
}
@media (max-width: 1400px) {
  div.alt-event::after,
  div.alt-event.right::after {
    width: 86px;
    height: 86px;
  }
}
@media (max-width: 1200px) {
  div.alt-event::after,
  div.alt-event.right::after {
    width: 76px;
    height: 76px;
  }
} */
@media (max-width: 767px) {
  .section4 {
    padding: 40px 20px;
  }
  .section4 .title {
    font-size: var(--font-500);
    line-height: 40px;
    margin-bottom: 40px;
  }
  .alt-vtl::before {
    left: 0%;
    width: 10px;
  }
  div.right {
    left: 0%;
  }
  div.alt-event::after,
  div.alt-event.right::after {
    width: 50px;
    height: 50px;
  }
  div.alt-event {
    width: calc(100% - 60px);
    left: 50px;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  div.alt-event::after,
  div.alt-event.right::after {
    right: auto;
    left: -70px;
  }
  div.alt-event p {
    text-align: left;
    font-size: var(--font-400);
    line-height: var(--line-400);
  }
  div.alt-event h3 {
    font-size: 20px;
    line-height: 30px;
  }
}
      `}</style>
      <section className="section4" id="section4">
      <h2 className="title">IMPORTANT DATES</h2>
      <div className="alt-vtl">
        <div className="alt-event">
          <h3>30th-31st March</h3>
          <h3>Presale</h3>
          <p>
          As an experimental NFT project, we want to
have our pre-sale as affordable as possible to thank
our supporters. There will be 2 tiers of 20 hrs presale
on 30th & 31st March, 12AM (GMT-4), and the price
point will be at 0.05Ξ & 0.08Ξ respectively. Each buyer
can purchase 8 tape girls per user&#39;s wallet.

          </p>
        </div>
        <div className="alt-event right">
          <h3>1st April</h3>
          <h3>Public Sale</h3>
          <p>
          The public sale begins on 1st April, 12AM
(GMT-4), with a price point of 0.1Ξ. Tape Girls
that are not redeemed in the pre-sale will be deployed
into the public sale. All tape girls’ attributes will
be generated randomly and revealed after the
public sale.

          </p>
        </div>
        <div className="alt-event">
          <h3>1st-7th April </h3>
          <h3>April’s First Week</h3>
          <p>
          The competition starts on 1st April, 3 AM (GMT-4)
and ends on 7th April,11:59PM (GMT-4). Once we
reach 50% sales, rewards will be sent out to our top
100 owners at the end of competition. The scoreboard
will accumulate new scores even after the competition
has ended. Please find further instructions
in the Scoreboard.  
          </p>
        </div>
        <div className="alt-event right">
          <h3>???-???</h3>
          <h3>??????????</h3>
          <p style={{ color: '#eb144f' }}>
          Gotcha! There&#39;s nothing here. We&#39;ll reveal this
session on 1st April. Don&#39;t forget to join our
discord channel and follow our twitter for
the latest updates. Stay tuned!

          </p>
        </div>
        <div className="alt-event">
          <h3>To be Announced in May... </h3>

          
        </div>
      </div>
    </section>
    </>
  );
}

export default Section4;
