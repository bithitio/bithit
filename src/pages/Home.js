import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Bitrounds from "../components/Bitrounds";
import Bitcommunity from "../components/Bitcommunity";
import Bitonapp from "../components/Bitonapp";
import Bittoken from "../components/Bittoken";
import Bitexchangelist from "../components/Bitexchangelist";
import Bitroadmap from "../components/Bitroadmap";
import Bitbinance from "../img/bithit-bnc.png";

const HomePage = () => {
    useEffect(() => {
        document.title = "BITHIT | DEFI AUCTION";
    }, []);

    return(
        <div>
            <Header />
            <div data-aos="fade-up">
                <div class="container">   
                </div>
                <div class="bit-cover-bnc"><img src={Bitbinance} alt="binance" /></div>
            </div>
            <div data-aos="fade-up"><Bitrounds /></div>
            <div data-aos="fade-up"><Bitcommunity /></div>
            <div data-aos="fade-up"><Bitonapp /></div>
            <div data-aos="fade-up"><Bittoken /></div>
            <div data-aos="fade-up"><Bitexchangelist /></div>
            <div><Bitroadmap /></div>
            <Footer />
        </div>
    )
};

export default HomePage;
