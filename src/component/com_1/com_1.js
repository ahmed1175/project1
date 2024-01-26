import React from "react";
import "./com_1.css";
const Com1 = () => {
  return (
    <div className="com1">
      <section className="left">
        <img src="/src/assets/cover.webp" alt="" />
      </section>
      <section className="right">
        <div className="top">
          <div>
            <div>
              <span className="icon-star1" style={"color:var(--blue"}></span>
              <span className="icon-star1" style={"color:var(--blue"}></span>
              <span className="icon-star1" style={"color:var(--blue"}></span>
              <span className="icon-star1" style={"color:var(--blue"}></span>
              <span className="icon-star1" style={"color:var(--blue"}></span>
            </div>
            <p>
              “This method of designing icons is genius. I wish I had known this
              method a lot sooner.”
            </p>
            <div className="after">
              <div className="blue">Stacey Solomon, </div>
              <div className="gray">Founder at Retail Park</div>
            </div>
          </div>
        </div>
        <div className="button">
          <h1>Get lost in the world of icon design.</h1>
          <h4>
            A book and video course that teaches you how to design your own
            icons from scratch.
          </h4>
          <div>
            <button className="a1">Get Simple Chapter</button>
            <button className="a2"> Buy book</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Com1;
