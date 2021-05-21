import React from "react";
import Imgroadmap from "../img/bit-roadmap.png";
const Bitroadmap = () => {
    return(
        <div class="bit-roadmap">
            <div class="main-header">ROADMAP</div>
            <div class="container">
                <div class="road-thumbs"><img src={Imgroadmap} alt="roadmap" /></div>
            </div>
        </div>
    )
};

export default Bitroadmap;