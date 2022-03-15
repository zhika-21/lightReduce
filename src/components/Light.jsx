
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

function Light(){
    const {isOn,dispach} = useContext(GeneralContext)
    return(
        <>
        <img src={isOn ?"https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png":"https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"}/>
        <button onClick={()=>dispach('changeLight')}>Change Light</button>
        </>
    )
}

export default Light