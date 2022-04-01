import React, { useState } from "react";
import NewsLetterPopup from "../Popups/NewsLetterPopup";

function NewsLetter() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mint: 1,
  });
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const { name, email, mint } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = fetch(
        `https://v1.nocodeapi.com/hottapegirlsclub/google_sheets/wMzsqisgBzNxZmtl?tabId=Sheet1`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, mint, new Date().toLocaleString()],
          ]),
        }
      );
      // console.log();
      // await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        mint: 1,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <style jsx>{`
        .newsletter {
          padding: 70px 0px;
          background: url(/images/form.svg) no-repeat;
          background-color: #000;
          /* -o-background-size: cover; */
          /* background-size: cover; */
          background-size: contain;
          background-repeat: no-repeat;
        }
        .newsletter h2 {
          text-align: center;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          font-size: var(--font-xl);
          line-height: var(--line-xl);
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          margin-bottom: 40px;
          position: relative;
        }

        .newsletter form {
          max-width: 850px;
          width: 100%;
          margin: auto;
        }
        .form-input {
          margin-bottom: 36px;
        }
        .form-input label {
          letter-spacing: 0px;
          color: #ffffff;
          font-size: var(--font-500);
          line-height: var(--line-500);
          font-family: "Open Sans", sans-serif;
        }
        .form-input input {
          width: 100%;
          height: 85px;
          border: 1px solid #707070;
          background: #fff;
          outline: none;
          font-size: var(--font-500);
          line-height: var(--line-500);
          padding: 0px 20px;
        }

        .form-input.select {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .form-input.select .input {
          position: relative;
          display: flex;
          /* align-items: center; */
        }
        .input .icon svg {
          /* height: 100%; */
        }
        .form-input.select .input select:focus {
          outline: none;
          border: none;
        }

        .form-input.select .input select {
          height: 36.54px;
          font-size: var(--font-400);
          line-height: 24px;
          width: 69px;
          padding: 0px 2px;
          background: #fff;
        }
        .form-input.select p {
          font-size: var(--font-500);
          line-height: var(--line-500);
          margin-bottom: 4px;
          margin-right: 10px;
          font-family: "Open Sans", sans-serif;
          color: #fff;
        }

        form .form-content {
          max-width: 80%;
          margin: auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        form .checked {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        form .checked p {
          font-size: var(--font-300);
          line-height: var(--line-400);
          margin-bottom: 0px;
          font-family: "Open Sans", sans-serif;
          color: #fff;
        }

        form .checked input {
          height: 30px;
          width: 30px;
          margin-right: 10px;
        }

        form .form-content > p {
          font-size: var(--font-300);
          line-height: var(--line-400);
          margin-bottom: 10px;
          margin-top: 10px;
          font-family: "Open Sans", sans-serif;
          color: #fff;
        }

        form button {
          display: flex;
          border-radius: 29px;
          justify-content: center;
          align-items: center;
          max-width: 218px;
          height: 57px;
          width: 100%;
          background: #eb144f;
          font-family: "Open Sans", sans-serif;
          font-size: var(--font-600);
          line-height: var(--line-600);
          border: none;
          color: #fff;
          margin: auto;
          margin-top: 20px;
          cursor: pointer;
        }

        .email-sent {
          font-size: 48px;
          text-align: center;
          margin: auto;
        }

        @media (max-width: 1600px) {
          .newsletter {
            padding: 60px 20px;
          }
        }
        @media (max-width: 767px) {
          .newsletter h2 {
            font-size: var(--font-500);
            line-height: 38px;
            margin-bottom: 40px;
          }
          .newsletter form {
            max-width: calc(100% - 60px);
            margin: auto;
            width: 100%;
          }
          form .form-content {
            max-width: 100%;
          }
          .form-input label {
            font-size: var(--font-400);
            line-height: var(--line-400);
          }
          .form-input input {
            height: 37px;
          }
          form .checked p {
            font-size: 8px;
            line-height: var(--line-300);
            color: #fff;
          }
          form .form-content > p {
            font-size: 8px;
            line-height: var(--line-300);
            color: #fff;
          }
          .form-input.select p {
            font-size: var(--font-400);
            line-height: var(--line-400);
          }
          form button {
            max-width: 84px;
            height: 34px;
            font-size: var(--font-400);
            line-height: var(--line-400);
            margin-top: 40px;
          }
        }
      `}</style>
      <section className="newsletter" id="newsletter">
        <h2>PRESALE & NEWSLETTER</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={email}
              type="email"
              required
              id="email"
            />
          </div>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={name}
              type="text"
              id="name"
            />
          </div>
          <div className="form-input select">
            <p>How many do you plan to mint:</p>
            <div className="input">
              <select name="mint" onChange={handleChange} value={mint}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {/* <div className="icon">
              <svg
                width="45"
                height="40.54"
                viewBox="0 0 45 40.54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M45 0.400391H0V35.4184H45V0.400391Z" fill="#707070" />
                <path
                  d="M44.5 0.900391H0.5V34.9184H44.5V0.900391Z"
                  stroke="#707070"
                />
                <path
                  d="M12.8965 11.5003L32.1035 11.5003L22.5 27.0488L12.8965 11.5003Z"
                  fill="white"
                />
                <path
                  d="M22.5 26.097L31.207 12L13.793 12L22.5 26.097ZM22.5 28L12 11L33 11L22.5 28Z"
                  fill="#707070"
                />
              </svg>
            </div> */}
            </div>
          </div>
          <div className="form-content">
            <div className="checked">
              <input type="checkbox" name="" id="" />
              <p>
                Marketing permission: I give my consent to to be in touch with
                me via email using the information I have provided in this form
                for the purpose of news, updates and marketing.
              </p>
            </div>
            <p>
              What to expect: If you wish to withdraw your consent and stop
              hearing from us, simply click the unsubscribe link at the bottom
              of every email we send or contact us at{" "}
              <a href="mailto: enquiry@hottapegirlsclub.com">
                {" "}
                enquiry@hottapegirlsclub.com
              </a>
              . We value and respect your personal data and privacy. To view our
              privacy policy, please visit our website. By submitting this form,
              you agree that we may process your information in accordance with
              these terms and accept to be bound and abide by our Terms of
              Service.
            </p>
          </div>
          <button onClick={openModal}>Send</button>
        </form>
        <NewsLetterPopup show={modal} hideMe={openModal}>
          <h1 className="email-sent">Sent!</h1>
        </NewsLetterPopup>
      </section>
    </>
  );
}

export default NewsLetter;
