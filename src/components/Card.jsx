import React, {useEffect, useState} from "react";
import "../styles/Card.css"
import BuyBtn from "./BuyBtn";
import Discount from "./Discount";
import Hearth from "./Hearth";


const Card = (props) =>{
    return(
        <div className="product" key={props.id}>
            <Discount discount={props.discount}/>
            <Hearth/>
            <img className="product-img" src={props.image} alt="Foto "  />
            <h2 className="product-name">{props.name}</h2>
            <div className="product-details">
                <p className="old-price">${props.oldPrice}</p>
                <p className="new-price">${props.newPrice}</p>
                <BuyBtn/>
            </div>
        </div>
    )
}


export default Card;