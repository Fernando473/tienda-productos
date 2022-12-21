import React,{useState} from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import "../styles/Hearth.css"


const Hearth = () => {
    const [like, setLike] = useState(false)
    
    const handleClick = () => {
        like == true ? setLike(false) : setLike(true)
    }

    return (
        <div className="con-hearth" onClick={handleClick} >
            {like === true ? <BsHeartFill className="hearth" /> : <BsHeart className="hearth" />}
        </div>
    )
}

export default Hearth;