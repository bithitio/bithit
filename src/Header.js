import React from 'react';
import Navbar from './components/Navbar';
import logo from './logo.png';


function Header(){

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
                Transperent financial infrastructure to generate returns for <br/>participants of decentralized governance believers.
                </p>
                <div class="btn-header">
                    <a href="">Funding Page</a>
                </div>
            </div>
        </div>
        </header>
        </>
    )
}

export default Header;