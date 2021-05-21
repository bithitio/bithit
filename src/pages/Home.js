import React, { useEffect } from 'react';
import Livechart from "../components/Livechart";
import Bitrounds from "../components/Bitrounds";
import Bitcommunity from "../components/Bitcommunity";
import Bitonapp from "../components/Bitonapp";
import Bittoken from "../components/Bittoken";
import Bitexchangelist from "../components/Bitexchangelist";
import Bitroadmap from "../components/Bitroadmap";
import Bitbinance from "../img/bithit-bnc.png";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    useEffect(() => {
        document.title = "BITHIT | DEFI AUCTION";
        Aos.init({duration: 1100});
    }, []);

    return(
        <div>
            <div data-aos="fade-up">
                <div class="container">
                    <Livechart />
                </div>

                <div class="bit-cover-bnc"><img src={Bitbinance} alt="binance" /></div>
            </div>

            <div data-aos="fade-up"><Bitrounds /></div>
            <div data-aos="fade-up"><Bitcommunity /></div>
            <div data-aos="fade-up"><Bitonapp /></div>
            <div data-aos="fade-up"><Bittoken /></div>
            <div data-aos="fade-up"><Bitexchangelist /></div>
            <div data-aos="fade-up"><Bitroadmap /></div>
        </div>
    )
};

export default HomePage;