import Header from "./Header"
import Footer from "./Footer"
import { BetaContainer, HomeContainer } from "./StyledHome"
import { PricingPlanContainer, FeatureTableMobile, FeatureTableDesk } from "./StyledPricing"

import { useEffect, useState } from "react"

import HeroMobile from "../assets/pricing/mobile/hero.jpg"
import TabletHero from "../assets/pricing/tablet/hero.jpg"
import DeskHero from "../assets/pricing/desktop/hero.jpg"

import CheckIcon from "../assets/pricing/desktop/check.svg"


const Pricing = () => {

    const [deviceWidth, setDeviceWidth] = useState();
    const [totalBasic, setTotalBasic] = useState("$19.00");
    const [totalPro, setTotalPro] = useState("$39.00");
    const [totalBusiness, setTotalBusiness] = useState("$99.00");

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setDeviceWidth(window.innerWidth);
        });
        return () => {
            setDeviceWidth()
        }
    }, [])

    const handleSwitch = () => {
        const switchWrapper = document.querySelector(".switchIcon");
        const innerSwitch = document.querySelector(".innerSwitch");

        switchWrapper.classList.toggle("yearWrapper");
        innerSwitch.classList.toggle("yearlySwitch");

        totalBasic === "$19.00" ? setTotalBasic("$190.00") : setTotalBasic("$19.00");
        totalPro === "$39.00" ? setTotalPro("$390.00") : setTotalPro("$39.00");
        totalBusiness === "$99.00" ? setTotalBusiness("$990.00") : setTotalBusiness("$99.00");
    }

    return (
        <>
            <Header />
            <HomeContainer>
                <div className="homeWrapper">
                    {deviceWidth && deviceWidth < 768 && <img src={HeroMobile} alt="closeup shot of camera" />}
                    {deviceWidth && deviceWidth < 1024 && deviceWidth >= 768 && <img src={TabletHero} alt="closeup shot of camera" />}
                    {deviceWidth && deviceWidth >= 1024 && <img src={DeskHero} alt="closeup shot of camera" />}

                    <div className="description descriptionBlack" style={{position: "relative"}}>
                        <div className="borderDiv"></div>
                        <h1>PRICING</h1>
                        <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos</p>
                    </div>
                </div>
            </HomeContainer>

            <PricingPlanContainer>
                <div className="planSwitch">
                    <p>Monthly</p>
                    <div className="switchIcon" onClick={handleSwitch}>
                        <div className="innerSwitch"></div>
                    </div>
                    <p>Yearly</p>
                </div>
                <div className="planContainerWrapper">
                    <div className="planContainer">
                        <h2>Basic</h2>
                        <p>Includes basic usage of our platform.</p>
                        <p>Recommended for new and aspiring photographers.</p>
                        <div className="price">
                            <h1>{totalBasic}</h1>
                            <p>{totalBasic === "$19.00" ? "per month" : "per year"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>
                    <div className="planContainer">
                        {deviceWidth && deviceWidth >= 1024 && <div className="borderDiv"></div>}
                        <h2>Pro</h2>
                        <p>More advanced features available.</p>
                        <p>Recommended for photography veterans and professionals.</p>
                        <div className="price">
                            <h1>{totalPro}</h1>
                            <p>{totalBasic === "$19.00" ? "per month" : "per year"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>
                    <div className="planContainer">
                        <h2>Business</h2>
                        <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                        <div className="price">
                            <h1>{totalBusiness}</h1>
                            <p>{totalBasic === "$19.00" ? "per month" : "per year"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>

                </div>
            </PricingPlanContainer>
            {deviceWidth && deviceWidth >= 768 ?
                <FeatureTableDesk>
                    <h1>COMPARE</h1>
                    <div className="featDeskTable">
                        <div className="rowWrapper">
                            <h3>THE FEATURES</h3>
                            <h3>BASIC</h3>
                            <h3>PRO</h3>
                            <h3>BUSINESS</h3>

                        </div>
                        <div className="rowWrapper">
                            <h4>UNLIMITED STORY POSTING</h4>
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />

                        </div>
                        <div className="rowWrapper">
                            <h4>UNLIMITED PHOTO UPLOAD</h4>
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />

                        </div>
                        <div className="rowWrapper">
                            <h4>EMBEDDING CUSTOM CONTENT</h4>
                            <div className="placeholder"></div>
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />

                        </div>
                        <div className="rowWrapper">
                            <h4>CUSTOMIZE METADATA</h4>
                            <div className="placeholder"></div>
                            <img src={CheckIcon} alt="check icon" />
                            <img src={CheckIcon} alt="check icon" />

                        </div>
                        <div className="rowWrapper">
                            <h4>ADVANCED METRICS</h4>
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
                            <img src={CheckIcon} alt="check icon" />

                        </div>
                        <div className="rowWrapper">
                            <h4>ADVANCED METRICS</h4>
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
                            <img src={CheckIcon} alt="check icon" />
                        </div>
                        <div className="rowWrapper">
                            <h4>ADVANCED METRICS</h4>
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
                            <img src={CheckIcon} alt="check icon" />
                        </div>
                    </div>
                </FeatureTableDesk>
                :
                <FeatureTableMobile>
                    <div className="featureHeader">
                        <h3>THE FEATURES</h3>
                    </div>
                    <div className="featContainer">
                        <h4>UNLIMITED STORY POSTING</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>UNLIMITED PHOTO UPLOAD</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>EMBEDDING CUSTOM CONTENT</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>CUSTOMIZE METADATA</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>ADVANCED METRICS</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>PHOTO DOWNLOADS</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>SEARCH ENGINE INDEXING</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                    <div className="featContainer">
                        <h4>CUSTOM ANALYTICS</h4>
                        <p>BASIC</p>
                        <p>PRO</p>
                        <p>BUSINESS</p>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <img src={CheckIcon} alt="check icon" />
                    </div>

                </FeatureTableMobile>
            }
            <BetaContainer>
                <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
                <div className="ctaBtn">
                    <p>GET AN INVITE</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                </div>
            </BetaContainer>
            <Footer />
        </>
    )
}

export default Pricing
