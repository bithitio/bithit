import React from "react";
import Imgphone from "../img/bit-iphonex4.png";
import Imgappstore from "../img/bit-appstore.png";
import Imggoogleplay from "../img/bit-googleplay.png";

const Bitonapp = () => {
    return(
        <div class="bit-onapp">
            <div class="main-header">On App for Marketplace</div>
            <div class="onapp-topic">Connect to all reliable platform</div>
            <div class="onapp-imgsec"><img src={Imgphone} alt="bithit" /></div>
            <div class="onapp-boxicon">
                <div class="bicon-lable">Coming Soon On</div>
                <div class="bicon-btn">
                    <a href=""><img src={Imgappstore} alt="appstore" /></a>
                    <a href=""><img src={Imggoogleplay} alt="googleplay" /></a>
                </div>
            </div>
        </div>
    )
};

export default Bitonapp;
