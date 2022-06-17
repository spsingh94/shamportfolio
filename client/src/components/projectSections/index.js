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

export function mwdProjectSections({className = ''}) {
    return (
        <section className={`project-section${className}`} id="mwd-project-section">
            <div className="h2-container">
                <h2>Mr. Wheel Deal</h2>
            </div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
                    <input type='button' value='More Information' />
                </div>
            </div>
        </section>
    )
};

export function bizProjectSections({className = ''}) {
    return (
        <section className={`project-section${className}`} id="biz-project-section">
            <div className="h2-container">
                <h2>Biz Dashboard</h2>
            </div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
                    <input type='button' value='More Information' />
                </div>
            </div>
        </section>
    )
};

export function bpProjectSections({className = ''}) {
    return (
        <section className={`project-section${className}`} id="bp-project-section">
            <div className="h2-container">
                <h2>Backpack Travel Plan</h2>
            </div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
                    <input type='button' value='More Information' />
                </div>
            </div>
        </section>
    )
};