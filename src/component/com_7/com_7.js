import React from "react";
import "./com_7.css";
const Com7 = () => {
  return (
    <div className="com7">
      <section className="frist">
        <section className="a5" id="Resources">
          {" "}
          <div>
            <span>03</span> | <h3>Resources</h3>
          </div>
          <h2>
            Tools and resources you can use to get started even faster and
            progress even further.
          </h2>
          <p>
            Design assets, icon teardowns, and a community of fellow icon
            designers where you can ask questions, get feedback, and accelerate
            your learning.
          </p>
        </section>
        <div>
          <section className="a1">
            <div>
              <img src="/src/assets/figma.0d78130b.svg" alt="" />
            </div>
            <div className="h2">
              <h2>Figma icon templates</h2>
              <p>
                Pefectly structured templates for quickly designing new icons at
                dozens of common sizes.
              </p>
            </div>
          </section>
          <section className="a2">
            <div>
              <img src="/src/assets/video-player.e8496657.svg" alt="" />
            </div>
            <div className="h2">
              <h2>Weekly icon teardowns</h2>
              <p>
                Weekly videos where we dissect and recreate beautiful icons we
                find on the web.
              </p>
            </div>
          </section>

          <section className="a3">
            <div>
              <img src="/src/assets/discord.ad5bcc98.svg" alt="" />
            </div>
            <div className="h2">
              <h2>Community of icon designers</h2>
              <p>
                A private Discord server where you can get help and give
                feedback on each others' work.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Com7;
