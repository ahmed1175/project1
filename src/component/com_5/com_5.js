import React from "react";
import "./com_5.css";
import com5_data from "./com5_data";
const Com5 = () => {
  return (
    <div className="com5">
      <section>
        {" "}
        <div id="screan">
          <span>02</span> | <h3>Screencasts</h3>
        </div>
      </section>
      <div className="word">
        <h2>
          Over an hour of high quality, step-by-step video content to sharpen
          your icon design workflow.
        </h2>
        <p>
          Learn how to design your very first icons in a series of screencasts
          that will teach you everything you need to know to go from beginner to
          pro in just over an hour.
        </p>
      </div>
      <div className="handle">
        {com5_data.map((item) => {
          return (
            <div className="key" key={item}>
              <section className="cards">
                <div className="img-sec">
                  <img src={item.img} alt="" />
                  <div>
                    {" "}
                    <span
                      className="icon-youtube2"
                      style={"color:white"}
                    />{" "}
                    <span style={"color:white"}>{item.clock}</span>
                  </div>
                </div>
                <section>
                  <h4>{item.h4}</h4>
                  <p>{item.p}</p>
                </section>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Com5;
