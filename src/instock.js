import React from 'react';
import './App.css';
import data from './data.json';
const Instock  = () => {
    return (
    <div class="container">
    <div class="row main">
        <h2>In Stock</h2>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 Product">
      {data.filter(products => products.available === 1).map(filteredproducts => {
          return <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 card">
            <img src={filteredproducts.image} width="100" class="card-img-top" />
            <h5 class="card-title">{filteredproducts.name}</h5>
            <span>Price:<span>${filteredproducts.price}</span> </span>
           <span><span class="quantity">Quantity:  <input  type="number" min="1" max="5"/></span><button class="btn btn-sm">Buy Now</button></span>  
             
          </div>
        })}
      </div>
    </div>

  </div>
    );
}
export default Instock;