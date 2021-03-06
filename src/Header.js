import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import logo from './logo.png';
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from 'react-router-dom';


function Header(){

    useEffect(() => {
        Aos.init({duration: 1100});
    }, []);

    return (
        <>
        <header>
        <nav class="bit-topmenu">
            <div class="bit-logo"><a href="/"><img src={logo} alt="" /></a></div>
            <div class="bit-menu">
                <Navbar />
            </div>
            <div class="clear"></div>
        </nav>
        <div class="bit-header" data-aos="fade-up">
            <div class="container">
                <h1 class="h1-header">BITHIT DEFI AUCTION</h1>
                <h2 class="h2-header">DEFI • AUCTION • NFT</h2>
                <p class="p-header">
                A transparent financial infrastructure platform to generate <br/>returns for sellers and bidders.
                </p>
                <div class="btn-header">
                    <a href="https://exchange.pancakeswap.finance/#/swap" target="_blank" >SALE</a>
                </div>
            </div>

        </div>
        </header>
        </>
    )
}

export default Header;
