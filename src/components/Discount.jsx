import React from "react";
import "../styles/Discount.css"

const Discount = (props) =>{
    return(
        <div className="discount">
            <p>{props.discount}%</p>
        </div>
    )
}

export default Discount;