import React from 'react';
import "./com_10.css"
import com10_data from './data';

const Com10 = () => {

  return (
    <div className='Com10'>
      <section className='header'>
<h1> Some kind words from early customers...</h1>
<p>I worked with a small group of early access customers to make sure all of the content in the book was exactly what they needed. Hears what they had to say about the finished product.</p>
      </section>
    <div className='handle'>
      {com10_data.map((item)=>{
        return(
          <div className='card' key={item}>
          <p>{item.p}</p>
          <section className='photo'>
            
  <img src={item.img} alt="" />
  <div>
  <h5>{item.h5}</h5>
  <p>{item.p1}</p>
  </div>
  
          </section>
        </div>
        )
      })}
    </div>
    <div className='button'>
    <button>Read more testimonials</button>
    </div>
    </div>
  );
}

export default Com10;
