import React from "react";

function Team() {
  return (
    <>
      <style jsx>{`
        .team {
          padding: 70px 0px;
          background: url(/images/team.svg) no-repeat;
          background-color: #000;
          -o-background-size: cover;
          background-size: cover;
        }
        .team h2 {
          text-align: center;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          font-size: var(--font-xl);
          line-height: var(--line-xl);
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          margin-bottom: 140px;
          position: relative;
        }
        .team h2::before {
          content: "";
          position: absolute;
          width: calc(50% - 222px);
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 10px;
          background: #e12c51;
          right: auto;
        }
        .team h2::after {
          content: "";

          position: absolute;
          width: calc(50% - 222px);
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 10px;
          background: #e12c51;
          left: auto;
        }
        .teams-container {
          display: flex;
          max-width: calc(1920px - 140px);
          width: 100%;
          margin: auto;
          /* gap: 150px; */
          flex-wrap: wrap;
          align-items: baseline;
        }
        .team-member {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 80px;
          margin-right: 50px;
        }
        .team-member h3,
        .team-member p,
        .team-member h4 {
          font-family: "Poppins", sans-serif;
          letter-spacing: 0px;
          text-align: center;
          font-weight: bold;
        }

        .team-member h3 {
          color: #e12c51;
          font-size: var(--font-900);
          line-height: var(--line-900);
        }
        .team-member h4 {
          color: #fff;
          font-size: var(--font-800);
          line-height: var(--line-800);
        }
        .team-member p {
          color: #fff;
          font-size: var(--font-700);
          line-height: var(--line-700);
        }

        @media (max-width: 767px) {
          .team h2 {
            font-size: var(--font-500);
            line-height: 38px;
            margin-bottom: 40px;
          }
          .teams-container {
            max-width: calc(100% - 100px);
            margin: auto;
            width: 100%;
            gap: 50px;
          }
          .team-member {
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
          }
          .team-member h3 {
            font-size: 20px;
            line-height: 30px;
          }
          .team-member h4 {
            font-size: 18px;
            line-height: 27px;
          }
          .team-member p {
            font-size: var(--font-400);
            line-height: 23px;
          }
          .team-img img {
            width: 80%;
            display: block;
            margin: auto;
          }

          .team h2::before,
          .team h2::after {
            width: calc(50% - 75px);
          }
        }
      `}</style>
      <section className="team" id="team">
      <h2>OUR TEAM</h2>
      <div className="teams-container">
        <div className="team-member">
          <div className="team-img">
            <img src="/images/Hearrow.png" alt="" />
          </div>
          <h3>Hearrow</h3>
          <h4>Developer</h4>
          <p>An crypto-activist who 
studies blockchain since 
12 years old.</p>
        </div>
        <div className="team-member">
          <div className="team-img">
            <img src="/images/Xcalifur.png" alt="" />
          </div>
          <h3>XcaliFur</h3>
          <h4>Founder</h4>
          <p>Striving to create 
innovative, interactive 
and impactive NFT projects. </p>
        </div>
        <div className="team-member">
          <div className="team-img">
            <img src="/images/KTC.png" alt="" />
          </div>
          <h3>KTC</h3>
          <h4>Designer</h4>
          <p>I know nothing
but only design... </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Team;
