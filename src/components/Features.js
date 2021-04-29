import Header from "./Header"
import Footer from "./Footer"
import { HomeContainer, HomeFeatures, BetaContainer } from "./StyledHome"
import { useState, useEffect } from "react"

import MobileHero from "../assets/features/mobile/hero.jpg"
import TabletHero from "../assets/features/tablet/hero.jpg"
import DeskHero from "../assets/features/desktop/hero.jpg"

import RespSvg from "../assets/features/desktop/responsive.svg"
import NoLimitSvg from "../assets/features/desktop/no-limit.svg"
import ExposSvg from "../assets/features/desktop/boost-exposure.svg"
import CustomSvg from "../assets/features/desktop/custom-domain.svg"
import DragDropSvg from "../assets/features/desktop/drag-drop.svg"
import EmbedSvg from "../assets/features/desktop/embed.svg"



const Features = () => {

    const [deviceWidth, setDeviceWidth] = useState();

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setDeviceWidth(window.innerWidth);
        });
        return () => {
            setDeviceWidth()
        }
    }, [])

    return (
        <>
            <Header />
            <HomeContainer>
                <div className="homeWrapper">
                    {deviceWidth && deviceWidth < 768 && <img src={MobileHero} alt="closeup shot of camera" />}
                    {deviceWidth && deviceWidth < 1024 && deviceWidth >= 768 && <img src={TabletHero} alt="closeup shot of camera" />}
                    {deviceWidth && deviceWidth >= 1024 && <img src={DeskHero} alt="closeup shot of camera" />}

                    <div className="description descriptionBlack" style={{position: "relative"}}>
                        <div className="borderDiv"></div>
                        <h1>FEATURES</h1>
                        <p style={{ width: "70%" }}>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                    </div>
                </div>
            </HomeContainer>
            <HomeFeatures style={{ gridGap: "10px" }}>
                <div className="homeFeatContainer">
                    <img src={RespSvg} alt="phone" />
                    <h3>100% Responsive</h3>
                    <p>No matter which device your on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className="homeFeatContainer">
                    <img src={NoLimitSvg} alt="infinity symbol" />
                    <h3>No Photo Upload Limit</h3>
                    <p>Our tool has no limit on uploads or bandwith. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className="homeFeatContainer">
                    <img src={EmbedSvg} alt="embed symbol" />
                    <h3>Available to Embed</h3>
                    <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google maps and more.</p>
                </div>
                <div className="homeFeatContainer">
                    <img src={CustomSvg} alt="search symbol" />
                    <h3>Custom Domain</h3>
                    <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                </div>
                <div className="homeFeatContainer">
                    <img src={ExposSvg} alt="exposure symbol" />
                    <h3>Boost Your Expose</h3>
                    <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                </div>
                <div className="homeFeatContainer">
                    <img src={DragDropSvg} alt="drag and drop symbol" />
                    <h3>Drag & Drop Image</h3>
                    <p> Image Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                </div>
            </HomeFeatures>
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

export default Features
