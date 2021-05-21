import React from "react";

const Livechart = () => {
    return(
        <div class="bit-livechart">
            <div class="lc-head"><span class="doted-red">&nbsp;</span> Live Chart</div>
            <div class="lc-box">
                <div class="lc-itemlist">
                    <div class="item-value">$0.00004365</div>
                    <div class="item-label">VALUE</div>
                </div>

                <div class="lc-itemlist">
                    <div class="item-value">1,386,465</div>
                    <div class="item-label">HOLDERS</div>
                </div>

                <div class="lc-itemlist">
                    <div class="item-value">223,772,084.99</div>
                    <div class="item-label">LIQUIDITY (USD)</div>
                </div>

                <div class="lc-itemlist">
                    <div class="item-value">2,570,620,893.77</div>
                    <div class="item-label">MARKET CAP (USD)</div>
                </div>

                <div class="lc-itemlist">
                    <div class="item-value">411.083 T</div>
                    <div class="item-label">BURNED</div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    )
};

export default Livechart;