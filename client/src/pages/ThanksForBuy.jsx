import React from "react";
import { Link } from "react-router-dom";

const ThanksForBuy = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="wrapper "
      >
        <div style={{ width: "200px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
          >
            <path d="M69.6,38.3c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6c0,2.5-2.1,4.6-4.6,4.6S69.6,40.9,69.6,38.3z M25.8,42.9  c2.5,0,4.6-2.1,4.6-4.6c0-2.5-2.1-4.6-4.6-4.6s-4.6,2.1-4.6,4.6C21.2,40.9,23.3,42.9,25.8,42.9z M6.2,57.8v-39  c0-4.2,3.4-7.6,7.6-7.6h72.4c4.2,0,7.6,3.4,7.6,7.6v39c0,4.2-3.4,7.6-7.6,7.6H13.8C9.6,65.4,6.2,62,6.2,57.8z M12.7,50  c0.4-0.1,0.9-0.1,1.3-0.1c4.2,0,7.7,3.4,7.7,7.7c0,0.5,0,1-0.1,1.4h56.2c0-0.3-0.1-0.6-0.1-1c0-4.2,3.4-7.7,7.7-7.7  c0.7,0,1.3,0.1,1.9,0.2V27c-0.6,0.2-1.2,0.2-1.9,0.2c-4.2,0-7.7-3.4-7.7-7.7c0-0.6,0.1-1.3,0.2-1.9H21.6c0.1,0.5,0.1,0.9,0.1,1.4  c0,4.2-3.4,7.7-7.7,7.7c-0.5,0-0.9,0-1.3-0.1V50z M90.5,70.6h-81c-1.8,0-3.2,1.4-3.2,3.2S7.8,77,9.6,77h81c1.8,0,3.2-1.4,3.2-3.2  S92.3,70.6,90.5,70.6z M90.5,82.3h-81c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h81c1.8,0,3.2-1.4,3.2-3.2S92.3,82.3,90.5,82.3z   M33.4,38.3c0-9.2,7.5-16.6,16.6-16.6s16.6,7.5,16.6,16.6S59.2,54.9,50,54.9S33.4,47.5,33.4,38.3z M41.5,38.9l3.1,3.1l3.2,3.2  l3.2-3.2l7.4-7.4l-3.2-3.2l-7.4,7.4l-3.1-3.1L41.5,38.9z" />
            <text
              x="0"
              y="115"
              fill="#000000"
              font-size="5px"
              font-weight="bold"
              font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            ></text>
            <text
              x="0"
              y="120"
              fill="#000000"
              font-size="5px"
              font-weight="bold"
              font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            ></text>
          </svg>
        </div>
        <h3>Grazie per aver acquistato da noi</h3>

        <Link to="/">
          <div style={{ display: "flex" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
            <p className="home-return">Torna alla Home</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ThanksForBuy;