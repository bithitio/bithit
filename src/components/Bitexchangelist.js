import React from "react";
import Imguniswap from "../img/ex-uniswap.png";
import Imghotbit from "../img/ex-hotbit.png";
import Imgpancake from "../img/ex-pancake.png";
import Imgbinance from "../img/ex-binance.png";

const Bitexchangelist = () => {
    return(
        <div class="bit-exchangelist">
            <div class="main-header">EXCHANGE LIST</div>
            <div class="container">
                <div class="exlist-thumbs">
                    <span class="exlist-box"><img src={Imguniswap} alt="uniswap" /></span>
                    <span class="exlist-box"><img src={Imghotbit} alt="hotbit" /></span>
                    <span class="exlist-box"><img src={Imgpancake} alt="pancake" /></span>
                    <span class="exlist-box"><img src={Imgbinance} alt="binance" /></span>
                </div>
            </div>
        </div>
    )
};

export default Bitexchangelist;