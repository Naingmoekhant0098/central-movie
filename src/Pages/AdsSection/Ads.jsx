import React from "react";
import "./style.css";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import ads1 from "./ads1.jpg";
const Ads = () => {
  return (
    <div className="adsmain">
        <div className="backdrop"></div>
      <div className="adsContents">
        <span
          className=" text-center"
          style={{
            color: "rgb(214, 89, 11)",
            textTransform: "uppercase",
            fontWeight: 900,
          }}
        >
          The best choice
        </span>

        <h2 className="adstitle">
          Download our app and start your free trail to get started today!
        </h2>
        <p className=" text-center" style={{ opacity: 0.6 }}>
          End-to-end payments and financial management in a single solution
        </p>
        <div className="mx-auto btns">
          <button>
            <span>
              <FaApple className=" me-2 icon" />
            </span>
            <span>AppStore</span>
          </button>
          <button>
            <span>
              <FaGooglePlay className=" me-2 icon" />
            </span>
            <span>GooglePlay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ads;
