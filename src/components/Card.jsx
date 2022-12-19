import React, {useEffect, useState} from "react";
import "../styles/Card.css"
import BuyBtn from "./BuyBtn";

const Card = (props) =>{
    return(
        <div className="product" key={props.id}>
            <img className="product-img" src={props.image} alt="Foto "  />
            <h2 className="product-name">{props.name}</h2>
            <div className="product-details">
                <p className="old-price">{props.oldPrice}</p>
                <p className="new-price">{props.newPrice}</p>
                <BuyBtn/>
            </div>
        </div>
    )
}


export default Card;