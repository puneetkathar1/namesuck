import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function VideoModal(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <style jsx>{`
        .App {
          font-family: sans-serif;
          text-align: center;
        }

        .modal__bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(28, 28, 28, 0.19);
          backdrop-filter: blur(6px);
          opacity: 1;
          animation-timing-function: ease-out;
          animation-duration: 0.3s;
          animation-name: modal-video;
          -webkit-transition: opacity 0.3s ease-out;
          -moz-transition: opacity 0.3s ease-out;
          -ms-transition: opacity 0.3s ease-out;
          -o-transition: opacity 0.3s ease-out;
          transition: opacity 0.3s ease-out;
          z-index: 100;
        }

        .modal__align {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .modal__content {
          width: 800px;
          height: 500px;
          box-shadow: 0px 100px 80px rgba(184, 184, 184, 0.07),
            0px 25.8162px 19px 4px rgba(178, 178, 178, 0.0456112),
            0px 7.779px 7.30492px rgba(0, 0, 0, 0.035),
            0px 1.48838px 2.0843px rgba(0, 0, 0, 0.0243888);
          border-radius: 20px;
          background: transparent;
          color: #000;
          margin: 0rem 4rem;
        }

        .modal__close {
          background-color: white;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          bottom: 50px;
          width: 32px;
          height: 32px;
          padding: 0;
        }

        .modal__video-align {
          display: flex;
          position: relative;
          bottom: 37px;
        }

        .modal__video-style {
          border-radius: 20px;
          z-index: 100;
        }

        .modal__spinner {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .modal__spinner {
          animation: spin 2s linear infinite;
          font-size: 40px;
          color: #1b6aae;
        }
        .youtube-btn {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .newsLetter {
          background: #fff;
          padding: 16px;
        }

        .modal__content.newsLetter {
          width: fit-content;
          height: auto;
          padding: 5%;
          color: #fff;
          background: #eb144f;
        }

        .newsLetter .modal__close {
          color: black;
          bottom: 100px;
        }

        .newsLetter .modal__video-align {
          display: flex;
          height: 100%;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media screen and (max-width: 800px) {
          .modal__content {
            margin: 0rem 1rem;
            width: 100%;
          }
          .modal__video-style {
            width: 100%;
          }
        }

        @media screen and (max-width: 499px) {
          .modal__content {
            background: transparent;
            height: auto;
          }
          .modal__video-align {
            bottom: 0px;
          }
          .modal__video-style {
            height: auto;
          }
        }
      `}</style>
      <div>
        <button onClick={openModal} className="youtube-btn">
          <svg
            width="99"
            height="56"
            viewBox="0 0 99 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71 0H28C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56H71C86.464 56 99 43.464 99 28C99 12.536 86.464 0 71 0Z"
              fill="#EB144F"
            />
            <path
              d="M64.979 24.5339C65.5882 24.8846 66.0942 25.3897 66.4461 25.9983C66.7979 26.6069 66.9832 27.2974 66.9832 28.0004C66.9832 28.7034 66.7979 29.3939 66.4461 30.0025C66.0942 30.611 65.5882 31.1161 64.979 31.4669L44 43.5479C43.3918 43.899 42.7018 44.0839 41.9995 44.0838C41.2972 44.0837 40.6073 43.8987 39.9992 43.5474C39.391 43.1961 38.8861 42.6909 38.5352 42.0826C38.1842 41.4742 37.9997 40.7842 38 40.0819V15.9189C37.9997 15.2166 38.1842 14.5266 38.5352 13.9182C38.8861 13.3099 39.391 12.8047 39.9992 12.4534C40.6073 12.1021 41.2972 11.9171 41.9995 11.917C42.7018 11.9169 43.3918 12.1017 44 12.4529L64.979 24.5339Z"
              fill="white"
            />
          </svg>
          {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={setModal}
                  />
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        />
                      </div>
                    ) : null}
                    <iframe
                      className="modal__video-style"
                      onLoad={spinner}
                      loading="lazy"
                      width="800"
                      height="500"
                      src={`https://www.youtube.com/embed/${props.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </button>
      </div>
    </>
  );
}
