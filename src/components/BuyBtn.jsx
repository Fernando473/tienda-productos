import React from "react";
import "../styles/BuyBtn.css"
import swal  from "sweetalert";

const BuyBtn = () =>{

    const handleClick = () => {
        swal({
            title: "Estas seguro?",
            text: "Una vez comprado no se puede deshacer",
            icon: "warning",
            buttons:["Cancelar", "Comprar"]
        }).then((willBuy) => {
            if(willBuy){
                swal("Compra realizada con exito", {
                    icon: "success"
                }
                )
            }else{
                swal("Compra cancelada", {
                    icon: "error"
                })
            }
            
        });
    }


    return(
        <button onClick={handleClick}>Comprar</button>
    )
}

export default BuyBtn;