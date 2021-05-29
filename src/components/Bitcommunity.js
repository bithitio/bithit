import React from "react";
import Imgcommunity from "../img/bit-community.png";

const Bitcommunity = () => {
    return(
        <div class="bit-community">
        <div class="community-box">
            <div class="community-h1">BITHIT</div>
            <div class="community-p">Community driven And transactions that create a real possible change.</div>
            <div class="col-thumbs">
                <img src={Imgcommunity} alt="binance" />
            </div>
            <div class="col-text">
                <p>
                We provide a process of buying and selling products from smart contract base auctions.     
                </p>
                <p>
                Create first global risk-free blockchain based smart contract for bidding system.
                </p>
                <p>
                We want to drive up access to financial services for unbanked entrepreneurs by converting assets into capital using NFT.    
                </p>
                <p>
                Data from entrepreneurs using the platform will receive credit score from their customers, this is part of credit rating mechanism for merchant shops and provide easier access to capital.
                </p>
                    </div>
            <div class="col-text fullcol">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                </p>
                <p>
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="clear"></div>
        </div>
        </div>
    )
};

export default Bitcommunity;
