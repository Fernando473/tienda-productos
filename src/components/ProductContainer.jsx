import React from "react";
import "../styles/ProductContainer.css"
import Card from "./Card";


const ProductContainer = (props) => {
    return (
        <section className="products-section">
            <h1 className="products-litle">Nuestros Productos</h1>
            <div className="products-container">
                {props.children}
            </div>
        </section>
    )
}

export default ProductContainer;