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

export function mwdProjectSections() {
    return (
        <section className="project-section" id="mwd-project-section">
            <div className="h2-container">
                <h2>Mr. Wheel Deal</h2>
            </div>
            <div className="project-container">
                <div className="image-container">
                    <img src={MWD1} className="project-img" alt="mwd-homepage" />
                    <img src={MWD2} className="project-img" alt="mwd-wheels-for-sale" />
                    <img src={MWD3} className="project-img" alt="mwd-modal-popup" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
            </div>
        </section>
    )
};

export function bizProjectSections() {
    return (
        <section className="project-section" id="biz-project-section">
            <div className="h2-container">
                <h2>Biz Dashboard</h2>
            </div>
            <div className="project-container">
                <div className="image-container" id="biz-image-container">
                    <img src={Biz1} className="project-img" alt="biz-homepage" />
                    <img src={Biz2} className="project-img" alt="biz-tools" />
                    <img src={Biz3} className="project-img" alt="biz-stock-tool" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
            </div>
        </section>
    )
};

export function bpProjectSections() {
    return (
        <section className="project-section" id="bp-project-section">
            <div className="h2-container">
                <h2>Backpack Travel Plan</h2>
            </div>
            <div className="project-container">
                <div className="image-container">
                    <img src={BP1} className="project-img" alt="bp-homepage" />
                    <img src={BP2} className="project-img" alt="bp-info" />
                    <img src={BP3} className="project-img" alt="bp-tool" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam at debitis tempore accusantium, aliquid dolorum dolore cum. Vitae voluptas molestiae aperiam quaerat alias culpa deserunt saepe illum eum, dolorum assumenda dolore eaque voluptate aspernatur nostrum et laborum optio nobis commodi impedit officiis, fugiat repellendus repudiandae adipisci! Cupiditate voluptatibus quam fuga, itaque veritatis aspernatur corporis sed facere mollitia, provident porro iste nisi ipsam alias, optio aliquam nesciunt quas sapiente amet libero perspiciatis totam laborum et deserunt! Eveniet nihil maiores eos magni, iusto dolor esse harum velit cum laudantium, laborum sint, voluptates aspernatur? Aut, quae quaerat deleniti quas sequi enim. Consequuntur?</p>
            </div>
        </section>
    )
};