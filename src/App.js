import React, { useState } from 'react';
import './App.css';
import Defaults from './default';
import Instock from './instock';
import Outstock from './outstock';
import Fruits from './fruits';
import Vegetables from './vegtables';
function App() {
  const [active, setActive] = useState("default_card");
  return (
    <div className="App">
      <header className="App-header">
        <h3>Top Super Market</h3>
      </header>
      <div class="filter text-right">
        <h5>Fliter Your Products</h5>
        <button class="btn btn-sm btn-info filter_products" onClick={() => setActive("default_card")}>Filter</button>
        <button class="btn btn-sm btn-info filter_products" onClick={() => setActive("one")}>In Stock</button>
        <button class="btn btn-sm btn-info filter_products" onClick={() => setActive("two")}>Out of Stock</button>
        <button class="btn btn-sm btn-info filter_products" onClick={() => setActive("three")}>Fruits</button>
        <button class="btn btn-sm btn-info filter_products" onClick={() => setActive("four")}>Vegetables</button>
      </div>
      <div>
        {active === "default_card" && <Defaults />}
        {active === "one" && <Instock />}
        {active === "two" && <Outstock />}
        {active === "three" && <Fruits />}
        {active === "four" && <Vegetables />}
      </div>

    </div>

  );
}

export default App;
