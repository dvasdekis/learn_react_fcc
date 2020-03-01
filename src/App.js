import React from 'react';
import productsData from "./vsProducts"
import Product from "./components/Product"

function App() {
  let productset = productsData.map(function(eachProduct) {
      return (
          <Product
            key = {eachProduct.id}
            id={eachProduct.id}
            name = {eachProduct.name}
            description = {eachProduct.description}
            price = {eachProduct.price}
      /> )
  })

  return (
    <div className="App">
        {productset}
    </div>
  );
}

export default App;
