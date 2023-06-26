import "./CenterButton.css";
import centerImage from '../../../Assets/Images/whiteCenter.png';
import { useState } from "react";


function CenterButton(): JSX.Element {
    const [center,setCenter] = useState<boolean>(false);
    return (
        <button className={!center?"CenterButton":"CenterButtonActive"} onClick={()=>{setCenter(!center)}}>
			<img src={centerImage}></img>
        </button>
    );
}

export default CenterButton;
