import React from "react";
import "./success.scss";
import { BsSearch } from "react-icons/bs";

const Success = () => {
  return (
    <div className="success_wrapper">
      <div className="success_heading">
        <h1>Client’s success stories</h1>
        <p>
          Are you looking for ways to increase conversions but having a hard
          time turning visits into sales?
        </p>
        <button>Schedule a call</button>
      </div>
      <div className="success_img">
        <img src="./images/success-1.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
      <div className="success_img">
        <img src="./images/success-2.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
      <div className="success_img">
        <img src="./images/success-3.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
      <div className="success_img">
        <img src="./images/success-4.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
      <div className="success_img">
        <img src="./images/success-5.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
      <div className="success_img">
        <img src="./images/success-6.jpg" alt="customer" />
        <div className="img_desc">
          <div className="img_search">
            <BsSearch />
          </div>
          <div className="img_text">
            <p>RETAIL</p>
            <h1>Zero in on Customer Behavior</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
