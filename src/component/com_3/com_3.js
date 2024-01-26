import React from "react";
import "./com_3.css";
import com3_data from "./com3_data";
const Com3 = () => {
  return (
    <div className="com3">
      <section className="header">
        <button>
        <a href="#Table">
          <ul id="Table">
            01
            <li> Table of content </li>
          </ul>
          </a>
        </button>
        <button>
          <a href="#screan">
          <ul>
            02
            <li>Screancasts</li>
          </ul>
          </a>
        </button>
        <button>
          <a href="#Resources">
          <ul>
            03
            <li>Resourses</li>
          </ul>
          </a>
        </button>
        <button>
          <a href="#Pricing">
          <ul>
            04
            <li>Pricing</li>
          </ul>
          </a>
        </button>
        <button>
          <a href="#Auther">
          <ul>
            05
            <li>Author</li>
          </ul>
          </a>
        </button>
      </section>
      <section className="body">
        <section>
          {" "}
          <div>
            <span>01</span> | <h3>Table of contents</h3>
          </div>
        </section>
        <h2>
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </h2>
        <p>
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler. Getting started
        </p>
        {com3_data.map((item)=>{
          return(
            <div className='card' key={item}>
            <h2>{item.h2}</h2>
            <div><p>{item.p1}</p> <span>{item.span1}</span></div>
            <div><p>{item.p2}</p> <span>{item.span2}</span></div>
            <div><p>{item.p3}</p> <span>{item.span3}</span></div>
            {item.check==="true"?<div><p>{item.p4}</p> <span>{item.span4}</span></div>:""}
            {item.span5==="45"?<div><p>{item.p5}</p> <span>{item.span5}</span></div>:""}
          </div>
          )
        })}
      </section>
    </div>
  );
};

export default Com3;
