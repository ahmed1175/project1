import React from "react";
import "./com_8.css";
const Com8 = () => {
  return (
    <div className="com8">
      <div>
        <div className="a1">
          <h1>Get the free sample chapters</h1>
          <p>
            Enter your email address and I’ll send you a sample from the book
            containing two of my favorite chapters.
          </p>
        </div>
        <div className="a2">
          <button>
            <span>Get two free chapters straight to your inbox→</span>
          </button>
          <form>
            <input
            required
              autoComplete="off"
              type="email"
              name=""
              placeholder="Email adress"
            />
            <button> Get free chapters</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Com8;
