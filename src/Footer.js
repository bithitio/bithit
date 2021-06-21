import React from 'react';
import logo from './logo.png';
import i_facebook from "./img/i-facebook.png";
//import i_intragram from "./img/i-intragram.png";
//import i_line from "./img/i-line.png";
import i_twitter from "./img/i-twitter.png";
import i_youtube from "./img/i-youtube.png";
import i_telegram from "./img/i-telegram.png";
import i_coinmarketcap from "./img/i-coinmarketcap.png";

function Footer(){
    return(
        <footer class="bg-footer">
            <div class="container">
                <div class="foot-left">
                    <a href="/">
                    <img src={logo} alt="bithit" />
                    </a>
                </div>
                <div class="foot-right">
                    <div class="foot-line">
                        <i class="far fa-envelope"></i> support@bithit.com
                    </div>
                    
                    <div class="foot-line social">
                    <div class="foot-social">
                        <a href="https://www.facebook.com/bithitprotocol/" target="_blank"><img src={i_facebook} alt="facebook" /></a>
                        <a href="https://t.me/joinchat/aFbzQs5loKU3ZDFl" target="_blank"><img src={i_telegram} alt="telegram" /></a>
                        <a href="https://www.youtube.com/channel/UCzCgOXuuNFK5_Ky9aCqBM4A" target="_blank"><img src={i_youtube} alt="youtube" /></a>
                        <a href="https://twitter.com/Bithit_io" target="_blank"><img src={i_twitter} alt="twitter" /></a>
                        <a href="https://coinmarketcap.com/" target="_blank"><img src={i_coinmarketcap} alt="coin marketcap" /></a>
                    </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </footer>
    )
}

export default Footer;
