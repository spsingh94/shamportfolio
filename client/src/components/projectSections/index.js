import React from "react";
import "./style.css"
import Biz1 from "../../images/biz-tiles/homepage.png";
import Biz2 from "../../images/biz-tiles/info.png";
import Biz3 from "../../images/biz-tiles/action.png";
import MWD1 from "../../images/mwd-tiles/homepage.png";
import MWD2 from "../../images/mwd-tiles/info.png";
import MWD3 from "../../images/mwd-tiles/action.png";
import BP1 from "../../images/backpack-tiles/homepage.png";
import BP2 from "../../images/backpack-tiles/info.png";
import BP3 from "../../images/backpack-tiles/action.png";
import { OtherButton } from "../Button";

export function mwdProjectSections({ className = '' }) {
    return (
        <section className={`project-section${className}`} id="mwd-project-section">
            <div className="project-container">
                <div className="image-container">
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img src={MWD1} className="project-img project-img1" alt="mwd-homepage" />
                            </div>
                            <div class="slide">
                                <img src={MWD2} className="project-img project-img2" alt="mwd-wheels-for-sale" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD1} className="project-img project-img1" alt="mwd-homepage" />
                            </div>
                            <div class="slide">
                                <img src={MWD2} className="project-img project-img2" alt="mwd-wheels-for-sale" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                            <div class="slide">
                                <img src={MWD3} className="project-img project-img3" alt="mwd-modal-popup" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-and-button">
                    <div className="h2-container">
                        <h2>Mr. Wheel Deal</h2>
                    </div>
                    <p>A website designed to offer customers the best deal on wheels, tires, and suspension. Worked on creating the front-end, the quote modal that displays customer selected products, and cart page which includes the customer checkout process.</p>
                    <OtherButton onClick={() => { window.open("https://mrwheeldeal.com") }}>View Website</OtherButton>
                </div>
            </div>
        </section>
    )
};

export function bizProjectSections({ className = '' }) {
    return (
        <section className={`project-section${className}`} id="biz-project-section">
            <div className="project-container">
                <div className="image-container" id="biz-image-container">
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img src={Biz1} className="project-img project-img1" alt="biz-homepage" />
                            </div>
                            <div class="slide">
                                <img src={Biz2} className="project-img project-img2" alt="biz-tools" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz1} className="project-img project-img1" alt="biz-homepage" />
                            </div>
                            <div class="slide">
                                <img src={Biz2} className="project-img project-img2" alt="biz-tools" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                            <div class="slide">
                                <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-and-button">
                    <div className="h2-container">
                        <h2>Biz Dashboard</h2>
                    </div>
                    <p>Biz-Dashboard is the businessman and entrepreneur’s application. View top business-related news, check the weather, catch up on stock prices, cryptocurrency prices, and currency conversion rates.</p>
                    <OtherButton onClick={() => { window.open("http://biz-dashboard.herokuapp.com") }}>View Website</OtherButton>
                </div>
            </div>
        </section>
    )
};

export function bpProjectSections({ className = '' }) {
    return (
        <section className={`project-section${className}`} id="bp-project-section">
            <div className="project-container">
                <div className="image-container">
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img src={BP1} className="project-img project-img1" alt="bp-homepage" />
                            </div>
                            <div class="slide">
                                <img src={BP2} className="project-img project-img2" alt="bp-info" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP1} className="project-img project-img1" alt="bp-homepage" />
                            </div>
                            <div class="slide">
                                <img src={BP2} className="project-img project-img2" alt="bp-info" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                            <div class="slide">
                                <img src={BP3} className="project-img" alt="bp-tool" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-and-button">
                    <div className="h2-container">
                        <h2>Backpack Travel Plan</h2>
                    </div>
                    <p>A traveling application which helps the user discover their next backpack trip with a few clicks. Algorithm designed to generate destination at random and locate available tickets for air travel.</p>
                    <OtherButton onClick={() => { window.open("http://backpack-travelplan.herokuapp.com") }}>View Website</OtherButton>
                </div>
            </div>
        </section>
    )
};