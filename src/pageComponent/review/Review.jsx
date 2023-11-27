import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./review.scss";

const Review = () => {
  return (
    <div className="container review_bg">
      <div className="review_wrapper">
        <div className="video_sec">
          <h1>What client says about us</h1>
          <p>
            We help you generate high-quality online sales leads by implementing
            highly structured, persuasive Internet marketing campaigns.
          </p>
          <div className="video_bg">
            <div className="play_button">
              <div className="button_wrap">
                <BsFillPlayFill />
                <div className="ping"></div>
              </div>
              <p>See video intro!</p>
            </div>
            <div>
                <img src="./images/review_bg.png" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="reviews">
            <div className="review">
                <div className="review_desc">
                    <h4>Miler Smith</h4>
                    <p>We design & build chatbots to automate customer service, lead generation.</p>
                    <p>- CEO at Epi Technologies</p>
                </div>
                <div className="review_user">
                    <img src="./images/user.webp" alt="" />
                </div>
            </div>
            <div className="review">
                <div className="review_user">
                    <img src="./images/user.webp" alt="" />
                </div>
                <div className="review_desc">
                    <h4>Miler Smith</h4>
                    <p>We design & build chatbots to automate customer service, lead generation.</p>
                    <p>- CEO at Epi Technologies</p>
                </div>
            </div>
            <div className="review">
                <div className="review_desc">
                    <h4>Miler Smith</h4>
                    <p>We design & build chatbots to automate customer service, lead generation.</p>
                    <p>- CEO at Epi Technologies</p>
                </div>
                <div className="review_user">
                    <img src="./images/user.webp" alt="" />
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Review;
