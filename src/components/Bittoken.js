import React from "react";
import Imgtokendist from "../img/bit-tokendist.png";

const Bittoken = () => {
    return(
        <div class="bit-token">
            <div class="main-header">TOKEN DISTRIBUTION</div>
            <div class="token-box">
                <div class="center"><img src={Imgtokendist} alt="" /></div>
                
                <div class="clear"></div>
            </div>
        </div>
    )
};

export default Bittoken;