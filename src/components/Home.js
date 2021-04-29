import Header from "./Header"
import Footer from "./Footer"
import {useState, useEffect} from "react"
import { HomeContainer, StoryContainer, HomeFeatures } from "./StyledHome"
import ManOnDeckImg from "../assets/home/mobile/create-and-share.jpg"
import BeautifulStory from "../assets/home/mobile/beautiful-stories.jpg"
import DesignForEveryone from "../assets/home/mobile/designed-for-everyone.jpg"

import MountainImg from "../assets/stories/mobile/mountains.jpg"
import Sunset from "../assets/stories/mobile/cityscapes.jpg"
import DaysVoyage from "../assets/stories/mobile/18-days-voyage.jpg"
import Architecture from "../assets/stories/mobile/architecturals.jpg"

import ResponsiveSVG from "../assets/features/desktop/responsive.svg"
import NoLimitSVG from "../assets/features/desktop/no-limit.svg"
import EmbedSVG from "../assets/features/desktop/embed.svg"

import DeckTablet from "../assets/home/tablet/create-and-share.jpg"
import BeautyTablet from "../assets/home/tablet/beautiful-stories.jpg"
import DesignTablet from "../assets/home/tablet/designed-for-everyone.jpg"

import DeckDesktop from "../assets/home/desktop/create-and-share.jpg"
import BeautyDesktop from "../assets/home/desktop/beautiful-stories.jpg"
import DesignDesktop from "../assets/home/desktop/designed-for-everyone.jpg"

import MountainDesk from "../assets/stories/desktop/mountains.jpg"
import SunsetDesk from "../assets/stories/desktop/cityscapes.jpg"
import DaysDesk from "../assets/stories/desktop/18-days-voyage.jpg"
import ArchDesk from "../assets/stories/desktop/architecturals.jpg"

const Home = () => {

    const[deviceWidth, setDeviceWidth] = useState();

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
        window.addEventListener("resize", ()=>{
            setDeviceWidth(window.innerWidth);
        });
        return ()=> {
            setDeviceWidth()
        }
    }, [])


    return (
        <>
            <Header />
            <HomeContainer>
                <div className="homeWrapper">
                    {deviceWidth && deviceWidth < 768 && <img src={ManOnDeckImg} alt="man on deck looking at a lake" />}
                    {deviceWidth && deviceWidth < 1024 && deviceWidth >= 768 && <img src={DeckTablet} alt="man on deck looking at a lake" />}
                    {deviceWidth && deviceWidth >= 1024  && <img src={DeckDesktop} alt="man on deck looking at a lake" />}
                    
                    <div className="description descriptionBlack">
                        <h1>CREATE AND</h1>
                        <h1>SHARE YOUR</h1>
                        <h1>PHOTOS STORIES.</h1>
                        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos,tell stories and connect with others.</p>
                        <div className="ctaBtn">
                            <p>GET AN INVITE</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="homeWrapper">
                    
                    {deviceWidth && deviceWidth < 768 && <img src={BeautifulStory} alt="desk and laptop" />}
                    {deviceWidth && deviceWidth < 1024 && deviceWidth >= 768 && <img src={BeautyTablet} alt="desk an laptop" />}
                    {deviceWidth && deviceWidth >= 1024 && <img src={BeautyDesktop} alt="desk an laptop" />}

                    <div className="description descriptionWhite">
                        <h1>BEAUTIFUL</h1>
                        <h1>STORIES</h1>
                        <h1>EVERY TIME</h1>
                        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                        <div className="ctaBtn">
                            <p>VIEW THE STORIES</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="black"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="homeWrapper">
                    
                    {deviceWidth && deviceWidth < 768 && <img src={DesignForEveryone} alt="photographer" />}
                    {deviceWidth && deviceWidth < 1024 && deviceWidth >= 768 && <img src={DesignTablet} alt="photographer" />}
                    {deviceWidth && deviceWidth >= 1024 &&  <img src={DesignDesktop} alt="photographer" />}
                    
                    <div className="description descriptionWhite">
                        <h1>DESIGNED FOR</h1>
                        <h1>EVERYONE</h1>
                        <p>Photosnap can help you create stories that resonate with your audience. Our tools are designed for photographers of all levels, brand, businesses you name it.</p>
                        <div className="ctaBtn">
                            <p>VIEW THE STORIES</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="black"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
            </HomeContainer>
            <StoryContainer>
                <div className="storiesImg" style={{ backgroundImage: `url(${deviceWidth && deviceWidth >= 768 ? MountainDesk : MountainImg})` }}>
                    <div className="overlay">
                        <h6>The Mountains</h6>
                        <p className="creatorP">By John Appleseed</p>
                        <div className="line"></div>
                        <div className="ctaBtn">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>

                    </div>
                </div>
                <div className="storiesImg" style={{ backgroundImage: `url(${deviceWidth && deviceWidth >= 768 ? SunsetDesk : Sunset})`}}>
                    <div className="overlay">
                        <h6>Sunset Cityscapes</h6>
                        <p className="creatorP">By Benjamin Cruz</p>
                        <div className="line"></div>
                        <div className="ctaBtn">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="storiesImg" style={{ backgroundImage: `url(${deviceWidth && deviceWidth >= 768 ? DaysDesk : DaysVoyage})`}}>
                    <div className="overlay">
                        <h6>18 Days Voyage</h6>
                        <p className="creatorP">By Alexei Borodin</p>
                        <div className="line"></div>
                        <div className="ctaBtn">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="storiesImg" style={{ backgroundImage: `url(${deviceWidth && deviceWidth >= 768 ? ArchDesk : Architecture})` }}>
                    <div className="overlay">
                        <h6>Architecturals</h6>
                        <p className="creatorP">By Samantha Brooke</p>
                        <div className="line"></div>
                        <div className="ctaBtn">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                    </div>
                </div>
            </StoryContainer>
            <HomeFeatures>
                <div className="homeFeatContainer homeFeatOne" >
                    <img src={ResponsiveSVG} alt="phone" style={{gridArea: "1/1/2/2"}}/>
                    <h3>100% Responsive</h3>
                    <p>No matter which device your on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className="homeFeatContainer homeFeatTwo" >
                    <img src={NoLimitSVG} alt="infinity symbol" />
                    <h3>No Photo Upload Limit</h3>
                    <p>Our tool has no limit on uploads or bandwith. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className="homeFeatContainer homeFeatThree">
                    <img src={EmbedSVG} alt="embed symbol" />
                    <h3>Available to Embed</h3>
                    <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google maps and more.</p>
                </div>
            </HomeFeatures>
            <Footer />
        </>
    )
}

export default Home
