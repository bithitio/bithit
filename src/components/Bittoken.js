import React from "react";
import Imgtokendist from "../img/bit-tokendist.png";

const Bittoken = () => {
    return(
        <div class="bit-token">
            <div class="main-header">TOKEN DISTRIBUTION</div>
            <div class="token-box">
                <div class="token-col"><img src={Imgtokendist} alt="" /></div>
                <div class="token-col right">
                    <div class="token-row">
                    <div class="col-topic">PRIVATE SALE PRICE</div>
                    <div class="col-text"><span class="price">$0.001</span>/BITHIT</div>
                    </div>
                    <div class="token-row">
                    <div class="col-topic black">PLUBLIC SALE PRICE</div>
                    <div class="col-text"><span class="price">$0.0012</span>/BITHIT</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    )
};

export default Bittoken;