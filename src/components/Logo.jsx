import React from "react";
import logoImage from '../assets/01Logo.webp';

function Logo({width = '100px'}){
    return (
        <div>
            <img src={logoImage} alt="" className="logo-image"/>
        </div>
    )
}

export default Logo