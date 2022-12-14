import React from "react";
import "../styles/Card.css"
import BuyBtn from "./BuyBtn";

const Card = () =>{

    const image = "https://picsum.photos/200"
    return(
        <div className="product">
            <img className="product-img" src={image ? image: "Cargando"} alt="Foto "  />
            <h2 className="product-name">Camisa</h2>
            <div className="product-details">
                <p className="old-price">300</p>
                <p className="new-price">180</p>
                <BuyBtn/>
            </div>
        </div>
    )
}


export default Card;