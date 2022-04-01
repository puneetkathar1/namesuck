import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
const saveSvgAsPng = require("save-svg-as-png");
import HomeIcon from "@mui/icons-material/Home";
import absoluteUrl from "next-absolute-url";
function share({ data, origin }) {

  const copyUrl = () => {
    navigator.clipboard.writeText(`${origin}/member/${data.uniqid}`);
  };

  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: "black",
  };

  return (
    <div>
      <style jsx>{`
        #deck_area {
          background-color: rgba(255, 255, 255, 0.2);
          padding-top: 20px;
        }

        @media (max-width: 999px) {
          #deck_area {
            padding-top: 3%;
          }
        }

        #deck_area .deckInner {
          width: 1000px;
          margin: auto;
          position: relative;
        }

        @media (max-width: 999px) {
          #deck_area .deckInner {
            width: 100%;
          }
        }

        #deck_area::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 200px;
          left: 0;
          bottom: -200px;
          background: rgba(255, 255, 255, 0.2);
        }

        #deck.ui-tabs-panel {
          background: none !important;
        }

        @media (max-width: 999px) {
          #deck.ui-tabs-panel {
            padding: 6% 3% 0;
          }
        }

        #deck.ui-tabs-panel:empty {
          padding: 12% 0;
        }

        @media (max-width: 999px) {
          #deck.ui-tabs-panel:empty {
            padding: 9% 3%;
          }
        }

        #deck {
          padding: 10% 0 8%;
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 999px) {
          #deck {
            padding: 15% 3%;
          }
        }

        #deck .deckListinner {
          font-size: 90%;
          margin-top: 50px;
        }

        #deck .deckListinner .deckListBox {
          background: #fff;
          margin-bottom: 20px;
          padding: 20px;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox {
            margin-bottom: 3%;
            padding: 4%;
          }
        }

        #deck .deckListinner .deckListBox + .deckListBox {
          margin-top: 10px;
        }

        #deck .deckListinner .deckListBox .cardCount {
          background: #ffe8ea;
          padding: 5px;
          width: 80px;
          text-align: center;
          color: #e13141;
          margin-bottom: 20px;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .cardCount {
            padding: 1%;
            margin-bottom: 3%;
          }
        }

        #deck .deckListinner .deckListBox .cardBox div + div {
          border-top: 1px solid #c3cfd5;
          padding-top: 20px;
        }

        #deck .deckListinner .deckListBox .cardImg {
          margin-bottom: 20px;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .cardImg {
            width: 20%;
            margin-bottom: 4%;
          }
        }

        #deck .deckListinner .deckListBox .cardName {
          display: inline-block;
          margin-left: 10px;
          vertical-align: top;
          line-height: 1.2;
          width: auto;
        }

        #deck .deckListinner .deckListBox .cardName span {
          display: block;
          font-size: 120%;
          font-weight: bold;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete {
          width: 49%;
          display: inline-block;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a {
          border-radius: 5px;
          display: inline-block;
          text-align: center;
          margin-right: 5px;
          -webkit-transition: 0.1s;
          transition: 0.1s;
          width: 35% !important;
          line-height: 1.5;
          height: 50px;
          position: relative;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .btnBox .addDelete a {
            width: 45% !important;
          }
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a:hover {
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a img {
          height: 23px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a img:hover {
          opacity: 1;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a.add {
          background: #e13141;
          -webkit-box-shadow: 0px 5px 0px 0px #b52835;
          box-shadow: 0px 5px 0px 0px #b52835;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .btnBox .addDelete a.add {
            -webkit-box-shadow: 0px 2px 0px 0px #b52835;
            box-shadow: 0px 2px 0px 0px #b52835;
          }
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a.add:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a.delete {
          background: #eb144f;
          -webkit-box-shadow: 0px 5px 0px 0px #02408f;
          box-shadow: 0px 5px 0px 0px #02408f;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .btnBox .addDelete a.delete {
            -webkit-box-shadow: 0px 2px 0px 0px #02408f;
            box-shadow: 0px 2px 0px 0px #02408f;
          }
        }

        #deck .deckListinner .deckListBox .btnBox .addDelete a.delete:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        #deck .deckListinner .deckListBox .btnBox .detail {
          width: 49%;
          display: inline-block;
          text-align: right;
          vertical-align: top;
          zoom: 1;
        }

        #deck .deckListinner .deckListBox .btnBox .detail a {
          border-radius: 5px;
          display: inline-block;
          text-align: center;
          text-decoration: none;
          font-weight: bold;
          margin-left: 5px;
          background: #2bb6ff;
          -webkit-box-shadow: 0px 5px 0px 0px #249ad8;
          box-shadow: 0px 5px 0px 0px #249ad8;
          width: 35%;
          padding: 10px 0;
          line-height: 1.5;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .btnBox .detail a {
            -webkit-box-shadow: 0px 2px 0px 0px #249ad8;
            box-shadow: 0px 2px 0px 0px #249ad8;
            width: 40%;
          }
        }

        #deck .deckListinner .deckListBox .btnBox .detail a img {
          height: 30px;
          vertical-align: middle;
          -webkit-filter: brightness(0) invert(1);
          filter: brightness(0) invert(1);
        }

        #deck .deckListinner .deckListBox .btnBox .detail a:hover {
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        #deck .deckListinner .deckListBox .btnBox .detail .qaNone {
          background: #a2a2a2 url(../../../images/mydeck/qa.png) no-repeat
            center 50%;
          background-size: 40px auto;
          text-indent: -9876px;
          -webkit-box-shadow: 0px 5px 0px 0px #7d7d7d;
          box-shadow: 0px 5px 0px 0px #7d7d7d;
          width: 35%;
          padding: 12px 0;
          line-height: 1.5;
          display: inline-block;
          border-radius: 5px;
          vertical-align: bottom;
          text-align: left;
        }

        @media (max-width: 999px) {
          #deck .deckListinner .deckListBox .btnBox .detail .qaNone {
            width: 40%;
            -webkit-box-shadow: 0px 2px 0px 0px #7d7d7d;
            box-shadow: 0px 2px 0px 0px #7d7d7d;
            height: 50px;
          }
        }

        #deck .cardSum {
          text-align: center;
          padding: 20px;
          background: #fff;
          font-size: 120%;
          margin-bottom: 20px;
        }

        #deck .deckConf {
          background: #eb144f;
          padding: 30px 30px 40px;
          color: #fff;
        }

        @media (max-width: 999px) {
          #deck .deckConf {
            padding: 5%;
          }
        }

        #deck .deckConf input[type="text"] {
          padding: 15px;
          width: 100%;
          border: none;
          border-radius: 5px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        #deck .deckConf .txtCol {
          margin-top: 10px;
        }

        #deck .deckConf .btnDeckConf {
          width: 70%;
          display: inline-block;
          padding: 10px;
          background: #ff6271;
          text-align: center;
          color: #fff;
          text-decoration: none;
          -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          font-size: 120%;
          font-weight: bold;
          margin-top: 20px;
          -webkit-transition: 0.1s;
          transition: 0.1s;
          position: relative;
          text-indent: -1em;
        }

        #deck .deckConf .btnDeckConf:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
        }

        #deck .deckConf .btnDeckConf::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 40px;
        }

        @media (max-width: 999px) {
          #deck .deckConf .btnDeckConf::before {
            width: 25px;
            height: 25px;
            right: 8px;
          }
        }

        #deck .deckConf .btnDeckConf::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #ff6271;
        }

        @media (max-width: 999px) {
          #deck .deckConf .btnDeckConf::after {
            right: 11px;
            width: 5px;
            height: 5px;
            border: 5px solid transparent;
            border-left: 6px solid #ff6271;
          }
        }

        #deck .deckConf .btnReset {
          margin-left: 8%;
          color: #fff;
          text-decoration: underline;
        }

        #deck .deckConf .btnReset:hover {
          text-decoration: none;
        }

        #deck .deckCheck {
          width: 1000px;
          margin: auto auto 50px auto;
        }

        @media (max-width: 999px) {
          #deck .deckCheck {
            width: 100%;
          }
        }

        #deck .deckCheck dt {
          background: #d9f3ff;
          padding: 15px;
          color: #2bb6ff;
          text-align: center;
          font-size: 120%;
          font-weight: bold;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dt {
            padding: 2%;
          }
        }

        #deck .deckCheck dd {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding: 20px;
          background: #fff;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dd {
            padding: 3%;
          }
        }

        #deck .deckCheck dd div {
          padding: 10px;
          position: relative;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dd div {
            padding: 2%;
          }
        }

        #deck .deckCheck dd div p {
          text-align: center;
          padding: 10px;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dd div p {
            padding: 4%;
          }
        }

        #deck .deckCheck dd div img {
          width: 100px;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dd div img {
            width: 80px;
          }
        }

        #deck .deckCheck dd div img.imgA {
          position: absolute;
          -webkit-transition: 0.2s;
          transition: 0.2s;
        }

        #deck .deckCheck dd div img.imgA.imgNone {
          opacity: 0;
        }

        #deck .deckCheck dd div .btnChenge {
          position: absolute;
          background: url(../../../images/mydeck/ico_change-mydeck.png)
            no-repeat;
          background-size: contain;
          z-index: 99;
          text-indent: -999em;
          overflow: hidden;
          width: 40%;
          height: 20%;
          right: 2%;
          right: 0;
          bottom: 25%;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 999px) {
          #deck .deckCheck dd div .btnChenge {
            bottom: 30%;
          }
        }

        #deck .deckCheck dd div .btnChenge:focus {
          outline: none;
        }

        #deck .linkBtn {
          display: block;
          clear: both;
          width: 80%;
          padding: 10px;
          margin: 20px auto 0;
          border-radius: 8px;
          background: #cc0000;
          -webkit-box-shadow: 0px 4px 0px 0px #404040;
          box-shadow: 0px 4px 0px 0px #404040;
          text-decoration: none;
          text-align: center;
          font-size: 100%;
          font-weight: bold;
          letter-spacing: normal;
          color: #fff;
          border: solid 3px #000;
        }

        #deck .linkBtn:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
        }

        #deck .btnBack {
          display: block;
          clear: both;
          width: 20%;
          padding: 10px;
          margin: 20px auto 0;
          border-radius: 8px;
          background: #b9b9b9;
          -webkit-box-shadow: 0px 4px 0px 0px #b4212b;
          box-shadow: 0px 4px 0px 0px #777777;
          text-decoration: none;
          text-align: center;
          font-size: 100%;
          font-weight: bold;
          letter-spacing: normal;
          color: #fff;
          -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
        }

        #deck .btnBack:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
        }

        #deck_area a.btn_save {
          top: 30px;
          right: 0;
          left: 0;
          margin: auto;
          position: absolute;
          background: #fff;
          padding: 20px;
          border-radius: 50px;
          color: #2bb6ff;
          font-weight: bold;
          width: 80%;
          text-align: center;
          cursor: pointer;
          -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          -webkit-transition: 0.2s;
          transition: 0.2s;
        }

        @media (max-width: 999px) {
          #deck_area a.btn_save {
            top: 0;
            padding: 10px;
            width: 90%;
            font-size: 14px;
          }
        }

        #deck_area a.btn_save::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #2bb6ff;
          border-radius: 40px;
        }

        @media (max-width: 999px) {
          #deck_area a.btn_save::before {
            right: 10px;
            width: 30px;
            height: 30px;
          }
        }

        #deck_area a.btn_save::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #fff;
        }

        @media (max-width: 999px) {
          #deck_area a.btn_save::after {
            right: 15px;
            width: 3px;
            height: 3px;
            border: 5px solid transparent;
            border-left: 6px solid #fff;
          }
        }

        #deck_area a.btn_save:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translate(0, 2%);
          transform: translate(0, 2%);
        }

        #mydecklist h1 {
          padding: 10px;
          background: #d9f3ff;
          color: #2bb6ff;
          position: static;
          font-size: 120%;
          font-weight: bold;
          text-align: center;
        }

        #deck_conf {
          background: #eb144f;
          padding: 30px 30px 40px;
          color: #fff;
          margin-top: -80px;
        }

        @media (max-width: 999px) {
          #deck_conf {
            padding: 5%;
            margin-top: 0;
          }
        }

        #deck_conf input[type="text"] {
          padding: 15px;
          width: 100%;
          border: none;
          border-radius: 5px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        #deck_conf .txtCol {
          margin-top: 10px;
        }

        #deck_conf .btnDeckConf {
          width: 70%;
          display: inline-block;
          padding: 10px;
          background: #ff6271;
          text-align: center;
          color: #fff;
          text-decoration: none;
          -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          font-size: 120%;
          font-weight: bold;
          margin-top: 20px;
          -webkit-transition: 0.1s;
          transition: 0.1s;
          position: relative;
          text-indent: -1em;
        }

        #deck_conf .btnDeckConf:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
        }

        #deck_conf .btnDeckConf::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 40px;
        }

        @media (max-width: 999px) {
          #deck_conf .btnDeckConf::before {
            width: 25px;
            height: 25px;
            right: 8px;
          }
        }

        #deck_conf .btnDeckConf::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #ff6271;
        }

        @media (max-width: 999px) {
          #deck_conf .btnDeckConf::after {
            right: 11px;
            width: 5px;
            height: 5px;
            border: 5px solid transparent;
            border-left: 6px solid #ff6271;
          }
        }

        #deck_conf .btnReset {
          margin-left: 8%;
          color: #fff;
          text-decoration: underline;
        }

        #deck_conf .btnReset:hover {
          text-decoration: none;
        }

        #deck_comp {
          width: 100%;
          padding-bottom: 7% !important;
        }

        @media (max-width: 999px) {
          #deck_comp {
            padding-bottom: 18% !important;
          }
        }

        #deck_comp .btn_cback {
          position: absolute;
          bottom: 0;
          width: 30%;
          background: #a9b2bc;
          color: #fff;
          border-radius: 30px;
          -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          right: 0;
          left: 0;
          margin: auto;
          padding: 10px;
          text-align: center;
          -webkit-transition: 0.2s;
          transition: 0.2s;
          font-weight: bold;
        }

        #deck_comp .btn_cback:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translate(0, 2%);
          transform: translate(0, 2%);
        }

        #deck_comp .btn_ccreate {
          background: #2bb6ff;
          border: none;
          border-radius: 30px;
          position: relative;
          width: 48%;
          display: inline-block;
          padding: 10px;
          color: #fff;
          -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          -webkit-transition: 0.2s;
          transition: 0.2s;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        #deck_comp .btn_ccreate:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translate(0, 2%);
          transform: translate(0, 2%);
        }

        #deck_comp .btn_csave {
          background: #eb144f;
          color: #fff;
          padding: 10px;
          width: 48%;
          display: inline-block;
          border-radius: 30px;
          text-align: center;
          margin-left: 2%;
          -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          -webkit-transition: 0.2s;
          transition: 0.2s;
        }

        #deck_comp .btn_csave:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-transform: translate(0, 2%);
          transform: translate(0, 2%);
        }

        #deck_comp .btn_csave.event {
          text-decoration: none;
          width: 80%;
          margin: auto;
          display: block;
        }

        @media screen and (max-width: 750px) {
          #facebox {
            left: 0 !important;
          }
          #facebox .popup {
            width: 90% !important;
            margin: auto !important;
          }
          #facebox .popup .expCol li {
            padding-top: 2%;
            margin-right: 0 !important;
            width: 100%;
          }
          #facebox .popup .expCol li span {
            width: calc(100% - 40px);
            text-indent: -1em;
            padding-left: 1em;
            display: inline-block;
          }
          #facebox .close {
            top: -10px !important;
            right: -10px !important;
            width: 35px !important;
            height: 35px !important;
            padding: 10px !important;
          }
        }

        .titNo {
          text-align: center;
          margin-top: -20px;
          margin-bottom: 30px;
        }

        .cardlistBox {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }

        .cardlistBox li {
          background: #fff;
          display: inline-block;
          border-radius: 10px;
          position: relative;
          margin: 0 3px 10px;
        }

        @media (max-width: 999px) {
          .cardlistBox li {
            margin: 0 0.6vw 1.4vw;
            border-radius: 3px;
          }
        }

        .cardlistBox li .btnChenge {
          position: absolute;
          background: url(../../../images/mydeck/ico_change-mydeck.png)
            no-repeat;
          background-size: contain;
          z-index: 99;
          text-indent: -999em;
          overflow: hidden;
          width: 40%;
          height: 20%;
          right: 2%;
          right: 0;
          bottom: 25%;
          border: none;
          cursor: pointer;
        }

        .cardlistBox li img {
          padding: 10px;
          position: relative;
        }

        @media (max-width: 999px) {
          .cardlistBox li img {
            width: 15vw;
            padding: 0.5vw;
          }
        }

        .cardlistBox li img.imgA {
          position: absolute;
          z-index: 2;
        }

        .cardlistBox li img.imgA.imgNone {
          opacity: 0;
        }

        .cardlistBox li .cardCount {
          color: #e13141;
          text-align: center;
        }

        .cardlistBox li .detail {
          width: 100%;
          background: #d9f3ff;
          display: block;
          padding-top: 7px;
          text-align: center;
          border-radius: 0 0 10px 10px;
        }

        @media (max-width: 999px) {
          .cardlistBox li .detail {
            border-radius: 0 0 3px 3px;
            padding-top: 0;
            height: 6vw;
          }
        }

        .cardlistBox li .detail img {
          text-align: center;
          width: 12%;
          padding: 0;
        }

        @media (max-width: 999px) {
          .cardlistBox li .detail img {
            width: 2.5vw;
            vertical-align: middle;
          }
        }

        .deckurl {
          position: relative;
        }

        .deckurl h3 {
          font-weight: bold;
          font-size: 120%;
          text-align: center;
          margin-bottom: 20px;
          color: #fff;
          background: none;
          padding: 0;
        }

        .deckurl::before {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: #eb144f;
          -webkit-transform: skewY(-3deg);
          transform: skewY(-3deg);
        }

        .deckurl .copyUrl {
          text-align: center;
        }

        .deckurl .copyUrl input {
          padding: 17px 10px 12px;
          width: 90%;
          border: none;
          border-radius: 5px 0 0 5px;
        }

        @media (max-width: 999px) {
          .deckurl .copyUrl input {
            padding: 15px 10px 14px;
            width: 74%;
          }
        }

        .deckurl .copyUrl a {
          padding: 10px 20px;
          background: #d9f3ff;
          color: #2bb6ff;
          border-radius: 0 5px 5px 0;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 999px) {
          .deckurl .copyUrl a {
            padding: 13px 20px;
          }
        }

        .deckurl .sns {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 30px;
        }

        .deckurl .sns a {
          width: 80px;
          height: auto;
          display: inline-block;
          padding: 10px;
        }

        .deckurl .sns a img {
          width: 100%;
          -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          border-radius: 50px;
          -webkit-transition: 0.2s;
          transition: 0.2s;
        }

        .deckurl .sns a img:hover {
          -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0);
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0);
          -webkit-transform: translate(0, 2%);
          transform: translate(0, 2%);
        }

        .deckurl .btnCompcreate {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          -webkit-transition: 0.3s;
          transition: 0.3s;
          width: 50%;
          padding: 15px 49px;
          position: relative;
          background: #fff;
          border-radius: 200px;
          color: #eb144f;
          font-size: 140%;
          margin: 20px auto;
          -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          border: none;
          cursor: pointer;
        }

        @media (max-width: 999px) {
          .deckurl .btnCompcreate {
            width: 90%;
          }
        }

        .deckurl .btnCompcreate::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #eb144f;
          border-radius: 40px;
        }

        .deckurl .btnCompcreate::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #fff;
        }

        @media screen and (max-width: 1000px) {
          #compDeck .inner {
            padding: 30px 1vw 40px;
          }
        }

        article#mainCol .cardlistBox {
          display: block;
        }

        article#mainCol .cardlistBox .detail img {
          margin: auto;
        }

        article#mainCol .deckurl::before {
          display: none;
        }

        article#mainCol .copyUrl a {
          background: #000000;
          color: #ffffff;
        }

        .cmnBox.table {
          padding: 0;
          margin: auto;
          width: 94%;
        }

        .cmnBox.table .tableCol dt {
          padding: 15px;
          background: #d9f3ff;
          text-align: center;
        }

        .cmnBox.table .tableCol dd {
          padding: 15px 20px;
        }

        .cmnBox.table dl + dl {
          margin: 0;
          padding: 0;
        }

        @charset "UTF-8";
        /* 基本設定 */
        body {
          color: #fff;
          font-size: 16px;
          font-family: "Noto Sans JP", sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
        }
        body:before {
          content: "";
          display: block;
          position: fixed;
          width: 100%;
          height: 100vh;
          background: url(../../images/common/bg_renew.jpg) no-repeat top center
            #2bb6ff;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: -9999;
        }

        a {
          color: #fff;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        hr {
          display: block;
          margin: 20px 0;
          height: 1px;
          border: 0;
          border-top: 1px solid #c3cfd5;
        }

        main {
          width: 100%;
          margin-top: 15px;
        }

        .inner {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 1px 20px 1px 20px;
          position: relative;
        }

        * {
          outline: none;
        }

        /* 余白設定 */
        div + div {
          margin-top: 20px;
        }

        div + dl {
          margin-top: 20px;
        }

        dl + div {
          margin-top: 20px;
        }

        div + ul {
          margin-top: 20px;
        }

        a.btnCommon + dl {
          margin-top: 40px;
        }

        a + .note {
          margin-top: 10px;
        }

        a + div {
          margin-top: 40px;
        }

        /* アコーディオン */
        input.accordion {
          display: none;
        }

        .accordionBox {
          opacity: 0;
          height: 0;
          transition: 0.5s;
        }
        .accordionBox a {
          pointer-event: none;
        }

        :checked + .accordionBox {
          opacity: 1;
          height: auto;
          pointer-events: auto;
        }
        :checked + .accordionBox a {
          pointer-event: auto;
        }

        :checked ~ .btnMore:before {
          background: url(../../images/common/icon_close.png) no-repeat;
          background-size: contain;
        }
        :checked ~ .btnMore:after {
          content: "CLOSE";
        }

        .btnMore {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          width: 20%;
          padding: 15px 0;
          background: #fff;
          position: relative;
          border-radius: 200px;
          color: #2bb6ff;
          font-size: 140%;
          margin: 20px auto 0;
          min-width: 250px;
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
        }
        .btnMore:before {
          content: "";
          position: absolute;
          top: 20%;
          right: 15px;
          width: 15%;
          height: 60%;
          background: url(../../images/common/icon_plus.png) no-repeat;
          background-size: contain;
        }
        .btnMore:after {
          content: "MORE";
        }
        .btnMore:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }

        /* ナビ */
        #menu input#menuPop {
          display: none;
        }
        #menu .menuBox {
          display: none;
          background: rgba(255, 255, 255, 0);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        #menu .menuBox label {
          width: 100%;
          height: 100%;
          display: block;
        }
        #menu .menuBoxInner {
          position: fixed;
          top: 0;
          right: 0;
          max-width: 550px;
          width: 90%;
          height: 100%;
          opacity: 0;
          z-index: -9999;
          background: #2bb6ff;
          transition: opacity 0.3s ease-in;
          font-weight: 900;
          margin-top: 0;
        }
        #menu .menuBoxInner .menuList {
          margin-top: 10%;
          margin-left: 6%;
        }
        #menu .menuBoxInner .menuList li {
          margin-top: 4%;
        }
        #menu .menuBoxInner .menuList li a {
          text-decoration: none;
          color: #fff;
          font-size: 150%;
        }
        #menu .menuBoxInner .menuList li a img {
          filter: brightness(0) invert(1);
          width: 8%;
        }
        #menu .menuBoxInner .menuList li a.none {
          opacity: 0.3;
          pointer-events: none;
        }
        #menu .menuBoxInner .menuList li a:hover {
          opacity: 0.5;
        }
        #menu .menuBoxInner .subBtn {
          font-size: 130%;
          text-decoration: none;
          padding: 15px;
          display: block;
          margin-top: 3%;
          margin-left: 7%;
          border-radius: 10px;
          width: 70%;
        }
        #menu .menuBoxInner .subBtn:hover {
          opacity: 0.5;
        }
        #menu .menuBoxInner .subBtn img {
          width: 10%;
        }
        #menu .menuBoxInner .subBtn.btnAbout {
          color: #fff;
          background: rgba(255, 255, 255, 0.3);
          margin-top: 7%;
        }
        #menu .menuBoxInner .subBtn.btnBattleskiis {
          color: #2bb6ff;
          background: #fff;
        }
        #menu .menuBoxInner .subBtn.btnLogout {
          color: #fff;
          background: #1e66b0;
        }
        #menu .menuBoxInner .subBtn.btnLogout img {
          filter: brightness(0) invert(1);
        }
        #menu :checked ~ .menuBox {
          display: block;
          z-index: 99;
          background: rgba(255, 255, 255, 0.5);
        }
        #menu :checked ~ label .btnMenu {
          background: url(../../images/common/menu_close.png) no-repeat;
          background-size: cover;
          z-index: 9999;
        }
        #menu :checked ~ label .btnMenu img {
          visibility: hidden;
        }
        #menu :checked ~ .menuBoxInner {
          z-index: 999;
          opacity: 1;
          transform: translate(0, 0);
        }

        #userPopup input#userPop {
          display: none;
        }
        #userPopup .userBoxInner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: -9999;
          background: #2bb6ff;
          overflow-y: auto;
          transition: opacity 0.3s ease-in;
        }
        #userPopup .userBoxInner::-webkit-scrollbar {
          width: 10px;
        }
        #userPopup .userBoxInner::-webkit-scrollbar-thumb {
          background: #0083c7;
        }
        #userPopup .userBoxInner.userInfo .stockInfo {
          top: 170px;
        }
        #userPopup .userBoxInner.userInfo .userName .btnConfig {
          top: 100px;
        }
        #userPopup :checked + .userBox {
          display: block;
          z-index: 999;
          background: rgba(255, 255, 255, 0.5);
        }
        #userPopup :checked ~ .userBoxInner {
          z-index: 99999;
          opacity: 1;
        }

        header h1 {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          max-width: 267px;
          width: 40%;
        }
        header h1 img {
          width: 100%;
        }
        header .navBtn {
          width: 100px;
          display: block;
          vertical-align: top;
          position: fixed;
          top: 0;
          z-index: 99;
          cursor: pointer;
          transition: 0.2s;
        }
        header .navBtn img {
          width: 100%;
        }
        header .navBtn.btnUser {
          right: 200px;
          background: #fff;
          color: #2bb6ff;
        }
        header .navBtn.btnRanking {
          right: 100px;
        }
        header .navBtn.btnMenu {
          background: #2bb6ff;
          right: 0;
          z-index: 99;
        }
        header .navBtn:hover {
          filter: brightness(90%);
        }

        .userInfo .btnCommon.user {
          margin: 40px auto;
          width: 80%;
          padding: 5px 49px;
        }
        @media (max-width: 999px) {
          .userInfo .btnCommon.user {
            width: 90%;
            margin: 20px auto;
          }
        }
        .userInfo .btnCommon.user::before {
          right: 10px;
          width: 35px;
          height: 35px;
        }
        @media (max-width: 999px) {
          .userInfo .btnCommon.user::before {
            right: 5px;
            width: 30px;
            height: 30px;
          }
        }
        .userInfo .btnCommon.user::after {
          right: 12px;
        }
        @media (max-width: 999px) {
          .userInfo .btnCommon.user::after {
            right: 10px;
          }
        }

        /* ユーザー情報 */
        section.userInfo:before {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          transform: skewY(-3deg);
        }

        .userInfo {
          position: relative;
        }
        .userInfo .userName .userImg {
          width: 120px;
          max-width: 20%;
          height: auto;
        }
        .userInfo .userName .name {
          display: inline-block;
          vertical-align: top;
          padding-left: 10px;
          line-height: 1.4;
        }
        .userInfo .userName .name strong {
          font-size: 140%;
          font-weight: bold;
        }
        .userInfo .userName .btnConfig {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          width: 300px;
          padding: 10px 0;
          background: #fff;
          border-radius: 10px;
          color: #2bb6ff;
          font-size: 120%;
          margin: 20px auto;
          position: absolute;
          top: 40px;
          right: 20px;
        }
        .userInfo .userName .btnConfig:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 10px;
          width: 43px;
          height: 43px;
          background: url(../../images/common/icon_config.png) no-repeat;
          background-size: contain;
        }
        .userInfo .userName .btnConfig:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }
        .userInfo .stockInfo {
          margin-top: 20px;
          position: absolute;
          top: 115px;
          left: 160px;
          width: 820px;
        }
        .userInfo .stockInfo dl {
          display: inline-block;
          width: calc(100% / 2 - 2%);
          font-weight: bold;
          font-size: 120%;
        }
        .userInfo .stockInfo dl + dl {
          margin-left: 2%;
        }
        .userInfo .stockInfo dl dt {
          float: left;
          background: #d9f3ff;
          color: #2bb6ff;
          padding: 10px 10%;
          box-sizing: border-box;
        }
        .userInfo .stockInfo dl dd {
          background: #fff;
          padding: 10px 0;
          box-sizing: border-box;
          color: #000;
          text-align: center;
        }

        /* バトスピ部メニュー一覧 */
        .contentsList {
          position: relative;
        }
        .contentsList:before {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          transform: skewY(-3deg);
        }
        .contentsList .accordionBox ul li {
          width: calc(100% / 3 - 3px);
          display: inline-block;
          margin-top: 10px;
        }
        .contentsList .accordionBox ul li a {
          text-decoration: none;
          color: #fff;
          position: relative;
          padding-left: 15px;
        }
        .contentsList .accordionBox ul li a:before {
          content: "";
          position: absolute;
          left: 4px;
          box-sizing: border-box;
          width: 4px;
          height: 4px;
          border: 4px solid transparent;
          border-left: 4px solid #fff;
          top: 37%;
        }
        .contentsList .accordionBox ul li a:hover {
          color: #d9f3ff !important;
        }
        .contentsList .accordionBox ul li a.none {
          color: #c3cfd5 !important;
          pointer-events: none;
        }
        .contentsList .accordionBox ul li a.none:before {
          border-left: 4px solid #c3cfd5;
        }

        /* フッター */
        footer .inner {
          padding: 60px 20px 30px 20px;
        }
        footer .sns {
          text-align: center;
          margin-bottom: 20px;
        }
        footer .sns a {
          width: 80px;
          height: auto;
          display: inline-block;
          padding: 10px;
        }
        footer .sns a img {
          width: 100%;
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          border-radius: 50px;
          transition: 0.2s;
        }
        footer .sns a img:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }
        footer .fnavi {
          margin-top: 20px;
        }
        footer .fnavi li {
          width: calc(100% / 3 - 20px);
          display: inline-block;
        }
        footer .fnavi li + li {
          margin-left: 10px;
        }
        footer .fnavi li a {
          font-size: 80%;
          display: block;
          padding: 10px 10px 10px 30px;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          transition: 0.3s;
          position: relative;
          text-decoration: none;
        }
        footer .fnavi li a:before {
          content: "";
          position: absolute;
          top: 40%;
          left: 5%;
          box-sizing: border-box;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-left: 6px solid #fff;
        }
        footer .fnavi li a:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
        }
        footer .fnavi li a:hover {
          background: white;
          color: #2bb6ff;
        }
        footer .fnavi li a:hover:before {
          border-left: 6px solid #2bb6ff;
        }
        footer .bandai {
          display: block;
          margin-top: 20px;
        }
        footer .bandai:hover {
          opacity: 0.5;
        }

        .popupImg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: 9999;
        }
        .popupImg img {
          position: absolute;
          top: 50px;
          left: 0;
          right: 0;
          margin: 0 auto;
          cursor: pointer;
        }

        /* ===============================================
   SP
=============================================== */
        @media screen and (max-width: 1000px) {
          .inner {
            padding: 30px 10px 40px 10px;
            position: relative;
          }

          .userInfo .stockInfo {
            margin-top: 20px;
            position: relative;
            width: 100%;
            top: 0;
            left: 0;
          }

          #userPopup .userBoxInner.userInfo .stockInfo {
            top: 0;
          }
        }
        @media screen and (max-width: 750px) {
          body {
            font-size: 12px;
          }

          header .navBtn {
            width: 15%;
          }
          header .navBtn.btnUser {
            right: 29.1%;
          }
          header .navBtn.btnRanking {
            right: 14.9%;
          }
          header .navBtn.btnMenu {
            right: 0;
          }

          main {
            margin-top: 80px;
          }

          #menu .menuBoxInner .menuList li a img {
            width: 10%;
          }
          #menu .menuBoxInner .subBtn {
            width: 85%;
            font-weight: 400;
            font-size: 100%;
            padding: 10px;
            font-weight: 400;
          }

          /* バトスピ部メニュー一覧 */
          .contentsList .accordionBox ul li {
            width: calc(100% / 2 - 2px);
          }

          .userInfo .userName .name {
            padding-left: 5px;
          }
          .userInfo .userName .name strong {
            font-size: 120%;
          }
          .userInfo .stockInfo dl {
            width: calc(100% / 2 - 8px);
            font-size: 90%;
          }
          .userInfo .stockInfo dl + dl {
            margin-left: 10px;
          }
          .userInfo .stockInfo dl dt {
            padding: 10px 5%;
          }

          footer .inner {
            padding: 30px 20px 30px 20px;
          }
          footer .fnavi li {
            width: 100%;
            display: block;
          }
          footer .fnavi li + li {
            margin-left: 0;
            margin-top: 10px;
          }
        }
        @media screen and (max-width: 750px) {
          section.userInfo .userName .name + .btnConfig {
            background: url(../../images/common/icon_config2.png) no-repeat top
              center;
            text-indent: -9999px;
            padding: 0;
            border-radius: 100px;
            width: 40px;
            height: 45px;
            position: absolute;
            top: 5px;
            right: 20px;
            overflow: hidden;
          }
          section.userInfo .userName .name + .btnConfig:before {
            display: none;
          }

          #userPopup .userBoxInner.userInfo .userName .btnConfig {
            position: relative;
            top: auto;
            right: auto;
            width: 80%;
          }
        }
        h1 {
          position: fixed;
          top: 0;
          left: 0;
        }

        h2 {
          font-size: 180%;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
        }

        h3 {
          font-weight: bold;
          text-align: center;
          background: #fff;
          padding: 10px;
          width: 100%;
          margin-bottom: 20px;
          color: #2bb6ff;
        }

        strong {
          font-weight: 900;
        }

        .point {
          color: #ff7986;
        }

        .pointB {
          color: #fdf9e6;
        }

        .submit {
          margin-top: 0 !important;
        }

        .contentsCol {
          position: relative;
        }
        .contentsCol:before {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          transform: skewY(-3deg);
        }

        .note {
          padding-left: 1em;
          text-indent: -1em;
          font-size: 90%;
        }
        .note li + li {
          margin-top: 5px;
        }

        .mvCol {
          width: 100%;
        }
        .mvCol img {
          width: 100%;
        }

        .catchCol {
          font-size: 120%;
          text-align: center;
        }

        /* パンくずリスト */
        .breadCrumbs {
          overflow-x: auto;
          padding: 10px 0;
          margin-bottom: 40px;
        }
        .breadCrumbs ul {
          display: table;
        }
        .breadCrumbs ul li {
          display: table-cell;
          white-space: nowrap;
          padding: 10px 20px;
        }
        .breadCrumbs ul li:first-child {
          background: #fff;
          color: #2bb6ff;
          position: relative;
        }
        .breadCrumbs ul li:first-child img {
          vertical-align: middle;
        }
        .breadCrumbs ul li:first-child:before {
          display: none;
        }
        .breadCrumbs ul li:first-child:after {
          position: absolute;
          color: #fff;
          right: -10px;
        }
        .breadCrumbs ul li:nth-child(2) {
          padding-left: 40px;
        }
        .breadCrumbs ul li:nth-child(2):before {
          display: none;
        }
        .breadCrumbs ul li + li:before {
          margin-right: 20px;
        }
        .breadCrumbs::-webkit-scrollbar {
          height: 5px;
        }
        .breadCrumbs::-webkit-scrollbar-track {
          background: #d9f3ff;
        }
        .breadCrumbs::-webkit-scrollbar-thumb {
          background: #034ba4;
        }

        /* ボタン */
        .btnCommon {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          width: 90%;
          padding: 15px 49px;
          position: relative;
          background: #fff;
          border-radius: 200px;
          color: #2bb6ff;
          font-size: 140%;
          margin: 20px auto;
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          border: none;
          cursor: pointer;
        }
        .btnCommon input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .btnCommon:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #2bb6ff;
          border-radius: 40px;
        }
        .btnCommon:after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #fff;
        }
        .btnCommon:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }
        .btnCommon.imp {
          background: #ffc321;
          color: #fff;
        }
        .btnCommon.imp:before {
          background: #fff;
        }
        .btnCommon.imp:after {
          border-left: 10px solid #ffc321;
        }

        .relationCol {
          position: relative;
          height: 140px;
        }
        .relationCol .btnNext {
          position: absolute;
          top: 0;
          right: 0;
        }
        .relationCol .btnBack {
          position: absolute;
          top: 0;
          left: 0;
        }

        .btnNext {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          width: 200px;
          padding: 15px 0;
          position: relative;
          background: #fff;
          border-radius: 200px;
          color: #2bb6ff;
          font-size: 140%;
          margin: 40px auto 0;
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          border: none;
        }
        .btnNext:before {
          content: "";
          position: absolute;
          top: 18%;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #2bb6ff;
          border-radius: 40px;
        }
        .btnNext:after {
          content: "";
          position: absolute;
          top: 36%;
          right: 20px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-left: 10px solid #fff;
        }
        .btnNext:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }

        .btnBack {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          width: 240px;
          padding: 15px 0;
          position: relative;
          background: #fff;
          border-radius: 200px;
          color: #a9b2bc;
          font-size: 140%;
          margin: 40px auto 0;
          text-indent: 1em !important;
          box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          border: none;
        }
        .btnBack input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .btnBack:before {
          content: "";
          position: absolute;
          top: 18%;
          left: 15px;
          width: 40px;
          height: 40px;
          background: #a9b2bc;
          border-radius: 40px;
        }
        .btnBack:after {
          content: "";
          position: absolute;
          top: 36%;
          left: 20px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-right: 10px solid #fff;
        }
        .btnBack:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }

        .btnNone {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          padding: 15px 0;
          width: 90%;
          background: #c3cfd5;
          border-radius: 200px;
          color: #97a0a5;
          font-size: 140%;
          margin: 20px auto;
          pointer-events: none;
        }

        /* 重要なお知らせ */
        .impNotice {
          background: #fff;
          border: solid 2px #ff7986;
          padding: 30px;
          color: #000;
          font-size: 90%;
          margin-top: 20px;
        }
        .impNotice.note {
          padding: 40px 40px 40px 50px;
        }
        .impNotice strong {
          color: #ff7986;
          display: block;
          font-size: 110%;
        }
        .impNotice strong:before {
          content: "!";
          display: inline-block;
          padding: 0 0.7em;
          border-radius: 40px;
          background: #ff7986;
          color: #fff;
          text-align: center;
          margin-right: 5px;
          font-size: 90%;
          vertical-align: top;
        }
        .impNotice a {
          color: #00e;
        }
        .impNotice li + li {
          margin-top: 0.3em;
        }

        .impNoticeS {
          background: #ff7986;
          padding: 20px;
          color: #fff;
          font-size: 90%;
        }
        .impNoticeS strong {
          display: block;
          font-size: 110%;
        }

        .cautionCol {
          background: #ff7986;
          padding: 20px;
          color: #fff;
          font-size: 120%;
          text-align: center;
          font-weight: 900;
        }
        .cautionCol:before {
          content: "!";
          display: inline-block;
          padding: 0 0.7em;
          border-radius: 40px;
          background: #fff;
          color: #ff7986;
          text-align: center;
          margin-right: 5px;
          font-size: 90%;
          vertical-align: top;
        }

        /* 汎用ボックス */
        div.cmnBox {
          background: #fff;
          color: #000;
          padding: 40px;
        }

        .cmnBox {
          margin-top: 20px;
        }
        .cmnBox em + dl {
          margin-top: 20px;
        }
        .cmnBox + a {
          margin-top: 40px !important;
        }
        .cmnBox dt {
          background: #d9f3ff;
          color: #3bbbff;
          text-align: center;
          padding: 15px;
          font-weight: 900;
          font-size: 120%;
        }
        .cmnBox dt .sub {
          background: #3bbbff;
          color: #ffffff;
          margin-top: 10px;
          padding: 5px;
          font-weight: normal;
        }
        .cmnBox dd {
          background: #fff;
          color: #000;
          padding: 40px;
        }
        .cmnBox dd a {
          color: #00e;
        }
        .cmnBox dd a:visited {
          color: #551a8b;
        }
        .cmnBox dd a:nth-child(1) {
          margin-top: 0;
        }
        .cmnBox dd em {
          text-align: center;
          display: block;
          font-weight: 900;
          font-size: 120%;
        }
        .cmnBox dd.radioCol input {
          display: none;
        }
        .cmnBox dd.radioCol input:checked + label {
          background: #3bbbff;
          color: #fff;
        }
        .cmnBox dd.radioCol input:checked + label:after {
          content: "";
          display: inline-block;
          width: 13px;
          height: 13px;
          background: #3bbbff;
          top: 1px;
          bottom: 0;
          left: 30px;
          margin: auto;
          position: absolute;
          border-radius: 200px;
        }
        .cmnBox dd.radioCol label {
          display: block;
          margin-bottom: 15px;
          position: relative;
          border: solid 2px #3fbdff;
          padding: 20px;
          border-radius: 15px;
          padding-left: 5em;
          text-indent: -3.5em;
        }
        .cmnBox dd.radioCol label:before {
          content: "";
          display: inline-block;
          width: 25px;
          height: 25px;
          background: #fff;
          vertical-align: bottom;
          border-radius: 200px;
          border: solid 2px #3bbbff;
          margin-right: 15px;
        }
        .cmnBox dd .serialnamCol {
          text-align: center;
        }
        .cmnBox dd .serialnamCol + .serialnamCol {
          border-top: 1px solid #c3cfd5;
          padding-top: 20px;
        }
        .cmnBox dd .serialnamCol input {
          width: 100px;
          padding: 10px;
          margin: 5px;
          border-radius: 5px;
          border: solid 2px #c3cfd5;
        }
        .cmnBox dd .serialnamCol input:focus {
          outline: none;
          border: solid 2px #2bb6ff;
        }
        .cmnBox dd .infoCol {
          width: 100%;
        }
        .cmnBox dd .infoCol + .infoCol {
          margin-top: 40px;
        }
        .cmnBox dd .infoCol tr {
          border: solid 1px #c3cfd5;
        }
        .cmnBox dd .infoCol tr.end th {
          background: #73909e !important;
        }
        .cmnBox dd .infoCol tr th {
          background: #d9f3ff;
          text-align: center;
          color: #3bbbff;
          padding: 20px;
        }
        .cmnBox dd .infoCol tr th.tit {
          background: #3bbbff;
          color: #fff;
        }
        .cmnBox dd .infoCol tr td {
          padding: 20px;
        }
        .cmnBox dd .infoCol tr .boxBtn {
          margin: 0 auto;
        }
        .cmnBox dd .infoCol.rank .number {
          width: 15%;
        }
        .cmnBox dd .infoCol.rank .number span {
          font-size: 130%;
          font-weight: bold;
        }
        .cmnBox dd .infoCol.rank .number.num1 {
          background: #ffcc00 url(../../images/common/ico_rank.png) no-repeat
            center;
          color: #ffcc00;
          background-size: 40%;
        }
        .cmnBox dd .infoCol.rank .number.num2 {
          background: #919fbb url(../../images/common/ico_rank.png) no-repeat
            center;
          color: #919fbb;
          background-size: 40%;
        }
        .cmnBox dd .infoCol.rank .number.num3 {
          background: #ff7e00 url(../../images/common/ico_rank.png) no-repeat
            center;
          color: #ff7e00;
          background-size: 40%;
        }
        .cmnBox dd .infoCol.rank td a {
          color: #000;
          font-weight: bold;
          position: relative;
          text-decoration: none;
          padding-left: 30px;
        }
        @media (max-width: 999px) {
          .cmnBox dd .infoCol.rank td a {
            padding-left: 23px;
          }
        }
        .cmnBox dd .infoCol.rank td a::before {
          content: "";
          position: absolute;
          left: 0px;
          top: 3px;
          width: 22px;
          height: 22px;
          border-radius: 20px;
          background: #2bb6ff;
        }
        @media (max-width: 999px) {
          .cmnBox dd .infoCol.rank td a::before {
            width: 18px;
            height: 18px;
            top: 1px;
          }
        }
        .cmnBox dd .infoCol.rank td a::after {
          content: "";
          position: absolute;
          bottom: 0;
          margin: auto;
          left: 9px;
          top: 4px;
          width: 5px;
          height: 5px;
          border: 5px solid transparent;
          border-left: 5px solid #ffffff;
        }
        @media (max-width: 999px) {
          .cmnBox dd .infoCol.rank td a::after {
            left: 7.8px;
            top: 3px;
          }
        }
        .cmnBox dd .rowInfo {
          display: inline-block;
          margin-top: 5px;
          margin-right: 10px;
        }
        .cmnBox dd .rowInfo span {
          background: #d9f3ff;
          color: #2bb6ff;
          padding: 2px 10px;
        }
        .cmnBox dl + dl {
          border-top: 1px solid #c3cfd5;
          margin-top: 20px;
          padding-top: 20px;
        }
        .cmnBox dl dt {
          background: none;
          font-size: 100%;
          text-align: left;
          padding: 0;
          box-sizing: border-box;
          padding: 0 10px;
        }
        .cmnBox dl dd {
          padding: 0 10px;
        }
        .cmnBox dl dd .sun {
          color: #f00;
        }
        .cmnBox dl dd .sat {
          color: #005aff;
        }
        .cmnBox dl.tableCol {
          display: flex;
        }
        .cmnBox dl.tableCol dt {
          width: 17%;
          position: relative;
        }
        .cmnBox dl.tableCol dd {
          width: 83%;
        }
        .cmnBox dl.tableCol.check dt::before {
          content: "";
          border: solid 2px #97a0a5;
          position: absolute;
          width: 20px;
          height: 20px;
          top: 15%;
          left: 90%;
        }
        .cmnBox dl.tableCol.check label {
          width: 17%;
        }
        .cmnBox dl.tableCol.check label p {
          opacity: 0;
          position: absolute;
          top: 0px;
          left: 20px;
        }
        .cmnBox dl.tableCol.check label input {
          opacity: 0;
        }
        .cmnBox dl.tableCol.check label input:checked + p {
          opacity: 1;
        }
        .cmnBox dl.tableCol.check label input:checked + p img {
          width: 30px;
        }
        .cmnBox dl.tableCol + .infoCol {
          border-top: 1px solid #c3cfd5;
          margin-top: 20px;
          padding-top: 20px;
        }
        .cmnBox dl.tableCol + .infoCol::before {
          content: "";
          display: block;
          width: 100%;
          height: 20px;
        }
        .cmnBox.longDt .tableCol dt {
          width: 30%;
        }
        .cmnBox.longDt .tableCol dd {
          width: 70%;
        }
        .cmnBox .boxBtn {
          display: block;
          text-decoration: none;
          text-align: center;
          font-weight: 900;
          text-indent: -1em;
          transition: 0.3s;
          position: relative;
          width: 90%;
          padding: 10px 0;
          background: #2bb6ff;
          border-radius: 200px;
          color: #fff;
          font-size: 120%;
          margin: 40px auto 10px;
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
          border-style: none;
        }
        .cmnBox .boxBtn:visited {
          color: #fff;
        }
        .cmnBox .boxBtn.non {
          background: #c3cfd5;
          color: #97a0a5;
          pointer-events: none;
        }
        .cmnBox .boxBtn.non::before {
          display: none;
        }
        .cmnBox .boxBtn input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .cmnBox .boxBtn + .boxBtn {
          margin: 20px auto 10px;
        }
        .cmnBox .boxBtn::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 15px;
          width: 1.5em;
          height: 1.5em;
          background: url(../../images/common/icon_arrow-r_b.png) no-repeat;
          background-size: contain;
        }
        .cmnBox .boxBtn:hover {
          box-shadow: 0px 12px 30px 0px transparent;
          transform: translate(0, 2%);
        }
        .cmnBox .btnCommon.red {
          background: #ff6271;
          box-shadow: none;
          color: #fff;
        }
        .cmnBox .btnCommon.red::before {
          background: #fff;
        }
        .cmnBox .btnCommon.red::after {
          border-left: 10px solid #ff6271;
        }
        .cmnBox.red dt {
          background: #ff7986;
          color: #ffffff;
        }
        .cmnBox.red dt .trgrIcon::before {
          border-top: 10px solid #ff7986;
        }
        .cmnBox.red dd {
          padding: 15px;
        }

        /* 入力フォーム */
        .inputCol {
          margin-bottom: 30px;
        }
        .inputCol dt .note {
          color: #000;
          font-weight: 500;
        }
        .inputCol dd {
          margin-top: 10px;
        }
        .inputCol dd input[type="text"] {
          width: 100%;
          font-size: 120%;
          box-sizing: border-box;
          padding: 15px;
          border-radius: 10px;
          border: solid 2px #c3cfd5;
        }
        .inputCol dd input[type="text"]:focus {
          outline: none;
          border: solid 2px #2bb6ff;
        }
        .inputCol dd input[type="text"]::placeholder {
          color: #d5dfe4;
        }
        .inputCol dd textarea {
          width: 100%;
          height: 200px;
          padding: 10px;
        }
        .inputCol dd .selectBtn {
          position: relative;
        }
        .inputCol dd .selectBtn:before {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 20px;
          margin: auto;
          width: 0;
          height: 0;
          padding: 0;
          content: "";
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #000;
          pointer-events: none;
        }
        .inputCol dd .selectBtn select {
          width: 100%;
          width: 100%;
          font-size: 120%;
          box-sizing: border-box;
          padding: 15px;
          border-radius: 10px;
          border: solid 2px #c3cfd5;
          appearance: none;
          background: #fff;
        }
        .inputCol dd .selectBtn select:focus {
          outline: none;
          border: solid 2px #2bb6ff;
        }
        .inputCol .selectList {
          color: #c3cfd5;
        }
        .inputCol .selectList input[type="radio"] {
          display: none;
        }
        .inputCol .selectList input[type="radio"]:checked + label {
          color: #2bb6ff;
        }
        .inputCol .selectList input[type="radio"]:checked + label:before {
          border: solid 2px #2bb6ff;
        }
        .inputCol .selectList input[type="radio"]:checked + label:after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          display: block;
          border-radius: 40px;
          background: #2bb6ff;
          top: 8px;
          left: -23px;
        }
        .inputCol .selectList p {
          margin-left: 2em;
          position: relative;
        }
        .inputCol .selectList p + p {
          margin-top: 10px;
        }
        .inputCol .selectList p label {
          color: #000;
          cursor: pointer;
        }
        .inputCol .selectList p label:before {
          content: "";
          width: 20px;
          height: 20px;
          display: inline-block;
          border-radius: 40px;
          background: #fff;
          border: solid 2px #c3cfd5;
          position: absolute;
          top: 1px;
          left: -30px;
        }

        /* バトスピ部メニュー一覧トップ以外 */
        .contentsCol + .contentsList h2 {
          color: #2bb6ff;
        }
        .contentsCol + .contentsList:before {
          background-color: white;
        }
        .contentsCol + .contentsList .accordionBox ul li a {
          color: #2bb6ff;
        }
        .contentsCol + .contentsList .accordionBox ul li a.none:before {
          border-left: 4px solid #c3cfd5;
        }
        .contentsCol + .contentsList .accordionBox ul li a:before {
          border-left: 4px solid #2bb6ff;
        }
        .contentsCol + .contentsList .btnMore {
          background: #2bb6ff;
          color: #fff;
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
        }
        .contentsCol + .contentsList .btnMore:before {
          filter: brightness(0) invert(1);
        }

        /* 利用規約 */
        .termCol {
          padding: 20px;
          background: #fff;
          height: 500px;
          color: #000;
          overflow-y: auto;
        }

        /* 要項同意 */
        .boxAgree {
          text-align: center;
          font-size: 120%;
          margin: 40px 0;
        }
        .boxAgree input {
          display: none;
        }
        .boxAgree input:checked + label:before {
          background: #fff;
        }
        .boxAgree input:checked + label:after {
          content: "";
          background: url(../../images/common/ico_check.png);
          background-size: cover;
          position: absolute;
          width: 25px;
          height: 20px;
          left: 0;
          top: 5px;
        }
        .boxAgree label {
          cursor: pointer;
          position: relative;
        }
        .boxAgree label:before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          border: solid 1px #fff;
          margin-top: -2px;
          margin-right: 10px;
          vertical-align: middle;
        }

        .trgr .trgrIcon {
          background: #fff;
          width: 40px;
          height: 40px;
          margin: 10px auto 0;
          border-radius: 50px;
          position: relative;
        }
        .trgr .trgrIcon::before {
          content: "";
          position: absolute;
          display: block;
          width: 10px;
          height: 10px;
          border: 8px solid transparent;
          border-top: 10px solid #3bbbff;
          top: 40%;
          left: 30%;
        }

        /* ===============================================
   SP
=============================================== */
        @media screen and (max-width: 750px) {
          /* 利用規約 */
          .termCol {
            height: 300px;
          }

          .impNotice {
            padding: 20px;
          }
          .impNotice.note {
            padding: 20px 20px 20px 30px;
          }

          .impNoticeS {
            padding: 10px;
          }

          .relationCol {
            position: static;
            height: auto;
            margin-bottom: 20px;
          }
          .relationCol .btnNext {
            position: relative;
            width: 100%;
          }
          .relationCol .btnNext input {
            background: none;
            border: none;
            font-size: 100%;
            color: #2bb6ff;
            font-weight: bold;
          }
          .relationCol .btnBack {
            position: relative;
          }

          /* ボタン */
          .btnCommon {
            width: 100%;
          }
          .btnCommon:before {
            width: 32px;
            height: 32px;
          }
          .btnCommon:after {
            width: 6px;
            height: 6px;
            border: 6px solid transparent;
            border-left: 6px solid #fff;
          }
          .btnCommon.red {
            background: #ff6271;
          }

          .btnNone {
            width: 100%;
          }

          .breadCrumbs {
            margin-bottom: 40px;
          }
          .breadCrumbs ul {
            display: table;
          }
          .breadCrumbs ul li {
            padding: 10px;
          }
          .breadCrumbs ul li:nth-child(2) {
            padding-left: 30px;
          }
          .breadCrumbs ul li:nth-child(2):before {
            display: none;
          }

          div.cmnBox {
            padding: 20px;
          }

          .cmnBox dd {
            padding: 20px;
          }
          .cmnBox dd.radioCol input:checked + label:after {
            top: 16px;
            left: 12px;
            margin: 0;
          }
          .cmnBox dd.radioCol label {
            padding: 10px;
            padding-left: 3em;
            text-indent: -2.5em;
          }
          .cmnBox dd.radioCol label:before {
            margin-right: 5px;
          }
          .cmnBox dd .serialnamCol input {
            width: 50px;
            padding: 5px;
            margin: 0;
            border-radius: 5px;
            border: solid 2px #c3cfd5;
          }
          .cmnBox dd .serialnamCol input:focus {
            outline: none;
            border: solid 2px #2bb6ff;
          }
          .cmnBox dd .infoCol {
            border: solid 1px #c3cfd5;
          }
          .cmnBox dd .infoCol + .infoCol {
            margin-top: 20px;
          }
          .cmnBox dd .infoCol tr {
            border: none;
          }
          .cmnBox dd .infoCol tr th {
            width: 100%;
            display: block;
            padding: 10px;
          }
          .cmnBox dd .infoCol tr td {
            width: 100%;
            display: block;
            padding: 10px;
          }
          .cmnBox dd .infoCol.rank {
            border-top: 1px solid #c3cfd5;
            border-left: none;
            border-right: none;
          }
          .cmnBox dd .infoCol.rank tr {
            border: 1px solid #c3cfd5;
          }
          .cmnBox dd .infoCol.rank tr th {
            display: inline-block;
          }
          .cmnBox dd .infoCol.rank tr td {
            display: inline;
          }
          .cmnBox dd .infoCol.rank .number {
            width: 70px;
          }
          .cmnBox dd .infoCol.rank .number.num1 {
            background-size: 60%;
          }
          .cmnBox dd .infoCol.rank .number.num2 {
            background-size: 60%;
          }
          .cmnBox dd .infoCol.rank .number.num3 {
            background-size: 60%;
          }
          .cmnBox dl dt {
            padding: 0;
          }
          .cmnBox dl dd {
            padding: 0;
          }
          .cmnBox dl.tableCol {
            display: block;
          }
          .cmnBox dl.tableCol dt {
            width: auto !important;
          }
          .cmnBox dl.tableCol dd {
            margin-top: 10px;
            width: auto !important;
          }
          .cmnBox dl.tableCol.check {
            display: flex;
          }
          .cmnBox dl.tableCol.check dt::before {
            top: 0;
            left: 0;
          }
          .cmnBox dl.tableCol.check dd {
            margin-top: 0;
            margin-left: 20px;
          }
          .cmnBox dl.tableCol.check label {
            left: 0;
          }
          .cmnBox dl.tableCol.check label p {
            top: -2px;
            left: -2px;
          }
          .cmnBox dl.tableCol.check label p img {
            width: 26px;
          }
          .cmnBox dl.tableCol.check label input {
            opacity: 0;
          }
          .cmnBox dl.tableCol.check label input:checked + p {
            opacity: 1;
          }
          .cmnBox .boxBtn {
            width: 100%;
            padding: 10px 40px;
            margin: 20px auto 0;
          }
        }
        .sp {
          display: none;
        }

        .pc {
          display: inline;
        }

        @media screen and (max-width: 750px) {
          .sp {
            display: inline;
          }

          .pc {
            display: none;
          }
        }
      `}</style>
      <main>
      <div
          style={{
            float: "left",
            zIndex: "20",
            position: "absolute",
            padding: "0.5rem",
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
        <section className="contentsCol">
          <div className="inner">
            <h2 style={{fontFamily: '"Poppins", sans-serif', fontWeight: '700'}}>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit", color: "#EB144F" }}>
                  {data.name.toUpperCase()}
                </font>
              </font>
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                width: "fit-content",
                borderRadius: "20rem",
                margin: "auto",
              }}
              dangerouslySetInnerHTML={{ __html: data.badge }}
            ></div>
            <div
              style={{
                margin: " 1rem auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                style={{backgroundColor: ' #eb144f', fontFamily: '"Poppins", sans-serif', fontWeight: '700'}}
                onClick={() => {
                  saveSvgAsPng.saveSvgAsPng(
                    document.getElementById("svg-chart"),
                    "badge.png",
                    imageOptions
                  );
                }}
              >
                Download
              </Button>
            </div>
          </div>
          <div className="deckurl">
            <div className="inner">
              <h3 style={{fontFamily: '"Poppins", sans-serif', fontWeight: '700'}}>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Let&#39;s Prank Your Friends!
                  </font>
                </font>
              </h3>
              <div style={{ display: "flex", fontFamily: '"Poppins", sans-serif', fontWeight: '700' }} className="copyUrl">
                <input
                  type="text"
                  defaultValue={`${origin}/member/${data.uniqid}`}
                  className="deckaddress"
                  id="fe_text"
                />
                <a onClick={copyUrl}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Copy</font>
                  </font>
                </a>
              </div>
              <div className="sns">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://api.whatsapp.com/send?text=${origin}/member/${data.uniqid}`}
                  data-action="share/whatsapp/share"
                >
                  <img src="/whatsapp.png" alt="whatsapp" />
                </a>
                <a
                  href={`https://social-plugins.line.me/lineit/share?url=https://twitter.com/share?url=${origin}/member/${data.uniqid}`}
                >
                  <img src="/ico_line.png" alt="line" />
                </a>
                <a
                  href={`http://www.facebook.com/share.php?u=${origin}/member/${data.uniqid}`}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <img src="/ico_facebook.png" alt="facebook" />
                </a>
                {/* <a
                  href="http://www.facebook.com/share.php?u=https://www.battlespirits.com/mydeck/decksrc/202202/1644294115.html"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <img
                    src="/discord.png"
                    alt="discord"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <div id="detail" />
      </main>
    </div>
  );
}

export default share;

export async function getServerSideProps(ctx) {
  const { name } = ctx.query;
  const { res, req } = ctx;
  const { origin } = absoluteUrl(req);

  const res1 = await fetch(`${origin}/api/isMember`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uniqid: name,
      auth: 'apif3e42fea-7b35-47ad-bad4-114a14323176api'
    }),
  });
  const res2 = await res1.json();
  if (res2.message) {
    return {
      props: { data: res2.message, origin },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}
