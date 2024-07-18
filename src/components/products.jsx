import React, { useState } from 'react';
function product({phones,add,FILT,phone,setPhone}) {
  return (
    <div className="Main">
      <div className="bar">
        <span>Filter Phones</span>
        <div className="btn">
          <button onClick={()=>setPhone(phones)}>All</button>
          <button onClick={()=>FILT('Iphone')}>IPhone</button>
          <button onClick={()=>FILT('Samsung')}>Samsung</button>
          <button onClick={()=>FILT('Xiaomi')}>Xiamoi</button>
        </div>
      </div>
      <div className="data">
        {phone.map((element,i) => {
          return (
            <div className="phone" key={i}>
                <div className="card">
                  <img src={element.img} alt={element.category} />
                  <p>Name: <span>{element.name}</span></p>
                  <p>Price: <span>{element.price}</span></p>
                  <div className="btn">
                    <button onClick={()=>add(element)}>Add to cart</button>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default product;
