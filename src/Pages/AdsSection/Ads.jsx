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
        <p className=" text-center " style={{}}>
          End-to-end payments and financial management in a single solution
        </p>
        <div className="mx-auto btns">
          <button>
            <span style={{marginRight : '10px'}}>
              
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="googleButton" />

            </span>
            <div className=" downloadOn">
              <span className="dl">Download On</span>
            <span>Google Play</span>
            </div>
          </button>
          <button>
          <span style={{marginRight : '10px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="googleButton" style={{color : 'white'}} />
            </span>
            <div className=" downloadOn">
              <span className="dl">Download On</span>
            <span>AppStore</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ads;
