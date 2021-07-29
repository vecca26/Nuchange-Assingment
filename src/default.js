import React from 'react';
import './App.css';
import data from './data.json';
const  Defaults = () => {
    return (
        <div class="container">
        <div class="row main">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 Product">
            {data.map((product, index) => {
              return <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 card">
                <img src={product.image} width="100" class="card-img-top" />
                <h5 class="card-title">{product.name}</h5>
                <span>Price:<span>${product.price}</span> </span>
               <span><span class="quantity">Quantity:  <input  type="number" min="1" max="5"/></span><button class="btn btn-sm">Buy Now</button></span>  
                 
              </div>
            })}
          </div>
        </div>

      </div>
    );
}
export default Defaults;