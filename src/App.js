import React from 'react';
import productsData from "./vsProducts"
import Product from "./components/Product"

class App extends React.Component {
    // Every class-based component needs the Render method, in lower case (exact spelling)
    render() { // In here, this can work exactly like the old App() function
        const productset = productsData.map(function(eachProduct) {
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
        )
    }
}

export default App;
