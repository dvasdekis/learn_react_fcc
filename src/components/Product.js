import React from "react";

function Product(Props) {
    return (
        <div>
        <p>Key: {Props.id}, Name: {Props.name}, Description: {Props.description}, Price: {Props.price}</p>
        </div>
    )
}

export default Product