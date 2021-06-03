import React, { useEffect } from "react";
import '../src-roadmap/n_css/all.css';
import '../src-roadmap/n_css/fontawesome.css';
import '../src-roadmap/n_css/animate.css';
import '../src-roadmap/n_css/bootstrap.css';
import '../src-roadmap/n_css/customs.css';

import half_right from "../src-roadmap/n_img/half-right.png";
import half_left from "../src-roadmap/n_img/half-left.png";
import icon_pancake from "../src-roadmap/n_img/icon-pancake.png";
import flag from "../src-roadmap/n_img/flag.png";
import binance from "../src-roadmap/n_img/binance.png";
const Bitroadmap = () => {

    return(
        <div class="bit-roadmap">
            <div class="main-header">ROADMAP</div>
                
            <section class="section-roadmap">
            <div class="roadmap-container">
            <div class="roadmap-cover">
                <div class="road-layer r-layer-1" data-aos="fade-up">
					<div class="q1-box wow fadeInUp">
						<div class="arrow-icon"><i class="fas fa-chevron-right"></i></div>
						<div class="q-circle q1-circle bgz-1">
							<div class="inner-circle">Q1</div>
						</div>
					</div>
					<div class="road-content content-1 wow fadeInUp">
						<h3>2021</h3>
						<p>
							Team Information
						</p>
					</div>
					<div class="road-content content-1 wow fadeInUp">
						<p>
							Final Design<br />
							Concept
						</p>
					</div>
					<div class="road-content content-1 wow fadeInUp">
						<p>
							Smart Contract Design
						</p>
					</div>
				</div>

                <div class="right-half">
					<img src={half_right} />
				</div>

				<div class="road-layer r-layer-2" data-aos="fade-up">
					<div class="road-content content-2 m-order-4 wow fadeInUp">
						<p>
							Deploy Smart Contract <br />& Pool
						</p>
					</div>
					<div class="road-content content-2 m-order-3 wow fadeInUp">
						<p>
							UX, UI<br />
							website development
						</p>
					</div>
					<div class="road-content content-2 m-order-2 wow fadeInUp">
						<h3>2021</h3>
						<p>
							Final Design Defi <br />& NFT
						</p>
					</div>
					<div class="q2-box m-order-1 wow fadeInUp">
						<div class="q-circle q1-circle bgz-2">
							<div class="inner-circle">Q2</div>
						</div>
					</div>
				</div>

				<div class="left-half">
					<img src={half_left} />
				</div>

				<div class="road-layer r-layer-3" data-aos="fade-up">
					<div class="q3-box wow fadeInUp">
						<div class="q-circle q1-circle bgz-3">
							<div class="inner-circle">Q3</div>
						</div>
					</div>
					<div class="road-content content-3 wow fadeInUp">
						<h3>2021</h3>
						<p>
							Marketing promote<br />
							the platform
						</p>
					</div>
					<div class="road-content content-3 wow fadeInUp">
						<p>
							Security Audit<br /><br />
						</p>
					</div>
					<div class="road-content content-3 wow fadeInUp">
						<p>
							Listing on<br />
							Coinmarketcap<br>
							<strong class="red">PRE SALE</strong>
						</p>
					</div>
				</div>

				<div class="right-half">
					<img src={half_right} />
				</div>

				<div class="road-layer r-layer-2 r-layer-4" data-aos="fade-up">
					<div class="road-content content-3 content-4 m-order-4 wow fadeInUp">
						<p>
							Deploy&nbsp;<br />Smart Contract
						</p>
					</div>
					<div class="road-content content-3 content-4 m-order-3 wow fadeInUp">
						<p>
							Website&nbsp;<br />development
						</p>
					</div>
					<div class="road-content content-3 content-4 m-order-2 wow fadeInUp">
						<h3>2021</h3>
						<p>
							Final Design Auction<br />
							<a href="#" class="website-with-icon">
								<img src={icon_pancake} /> Pancakeswap
							</a>
						</p>
					</div>
					<div class="q4-box m-order-1 wow fadeInUp">
						<div class="q-circle q1-circle bgz-4">
							<div class="inner-circle">Q4</div>
						</div>
					</div>
					<div class="the-binance-icon m-order-5">
						<img src={flag} class="flag-img" />
						<img src={binance} class="binance-img" />
					</div>
				</div>
            </div>
            </div>
            </section>
        </div>
    )
};

export default Bitroadmap;
