import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { HomeContainer, StoryContainer } from "./StyledHome"
import StoriesTemplate from "./StoriesTemplate"
import HeroTablet from "../assets/stories/tablet/moon-of-appalacia.jpg"
import HeroDesk from "../assets/stories/desktop/moon-of-appalacia.jpg"

import MountainImg from "../assets/stories/mobile/mountains.jpg"
import Sunset from "../assets/stories/mobile/cityscapes.jpg"
import DaysVoyage from "../assets/stories/mobile/18-days-voyage.jpg"
import Architecture from "../assets/stories/mobile/architecturals.jpg"
import Worldtour from "../assets/stories/mobile/world-tour.jpg"
import Corners from "../assets/stories/mobile/unforeseen-corners.jpg"
import Africa from "../assets/stories/mobile/king-on-africa.jpg"
import Nowhere from "../assets/stories/mobile/trip-to-nowhere.jpg"
import SeaRage from "../assets/stories/mobile/rage-of-the-sea.jpg"
import RunningFree from "../assets/stories/mobile/running-free.jpg"
import Waves from "../assets/stories/mobile/behind-the-waves.jpg"
import CalmWater from "../assets/stories/mobile/calm-waters.jpg"
import MilkyWay from "../assets/stories/mobile/milky-way.jpg"
import DarkForest from "../assets/stories/mobile/dark-forest.jpg"
import Somwarpet from "../assets/stories/mobile/somwarpet.jpg"
import LandOfDream from "../assets/stories/mobile/land-of-dreams.jpg"

import MountainDesk from "../assets/stories/desktop/mountains.jpg"
import SunsetDesk from "../assets/stories/desktop/cityscapes.jpg"
import DaysDesk from "../assets/stories/desktop/18-days-voyage.jpg"
import ArchDesk from "../assets/stories/desktop/architecturals.jpg"
import WorldtourDesk from "../assets/stories/desktop/world-tour.jpg"
import CornersDesk from "../assets/stories/desktop/unforeseen-corners.jpg"
import AfricaDesk from "../assets/stories/desktop/king-on-africa.jpg"
import NowhereDesk from "../assets/stories/desktop/trip-to-nowhere.jpg"
import SeaRageDesk from "../assets/stories/desktop/rage-of-the-sea.jpg"
import RunningFreeDesk from "../assets/stories/desktop/running-free.jpg"
import WavesDesk from "../assets/stories/desktop/behind-the-waves.jpg"
import CalmWaterDesk from "../assets/stories/desktop/calm-waters.jpg"
import MilkyWayDesk from "../assets/stories/desktop/milky-way.jpg"
import DarkForestDesk from "../assets/stories/desktop/dark-forest.jpg"
import SomwarpetDesk from "../assets/stories/desktop/somwarpet.jpg"
import LandOfDreamDesk from "../assets/stories/desktop/land-of-dreams.jpg"


import StoriesHeaderMobile from "../assets/stories/mobile/moon-of-appalacia.jpg"

const Stories = () => {

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
                {deviceWidth && deviceWidth >= 768 ?
                    <div className="homeWrapper" >
                        <div className="description descriptionBlack moonHero" style={{background: `url(${deviceWidth >= 1024 ? HeroDesk : HeroTablet})`, padding:"5rem 3rem"}}>
                            <p>LAST MONTH'S FEATURED STORY</p>
                            <h1>HAZY FULL</h1>
                            <h1>MOON OF</h1>
                            <h1>APPALACIA.</h1>
                            <p>March 2nd 2020 by John Appleseed</p>
                            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                            <div className="ctaBtn">
                                <p>READ THE STORY</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                            </div>
                        </div>
                    </div> :
                    <div className="homeWrapper">
                        <img src={StoriesHeaderMobile} alt="moon of appalacia" />
                        <div className="description descriptionBlack">
                            <p>LAST MONTH'S FEATURED STORY</p>
                            <h1>HAZY FULL</h1>
                            <h1>MOON OF</h1>
                            <h1>APPALACIA.</h1>
                            <p>March 2nd 2020 by John Appleseed</p>
                            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                            <div className="ctaBtn">
                                <p>READ THE STORY</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                            </div>
                        </div>
                    </div>}
            </HomeContainer>
            <StoryContainer>
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? MountainDesk : MountainImg} title="The Mountains" author="John Appleseed" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? SunsetDesk : Sunset} title="Sunset Cityscapes" author="Benjamin Cruz" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? DaysVoyage : DaysDesk} title="18 Days Voyage" author="Alexei Borodin" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? ArchDesk : Architecture} title="Architecturals" author="Samantha Brooke" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? WorldtourDesk : Worldtour} title="Worldtour 2019" author="Timothy Wagner" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? CornersDesk : Corners} title="Unforeseen Corners" author="William Malcom" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? AfricaDesk : Africa} title="King on Africa: Part II" author="Tim Hillenburg" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? NowhereDesk : Nowhere} title="Trip to Nowhere" author="Felicia Rourke" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? SeaRageDesk : SeaRage} title="Rage of the Sea" author="Mohamed Abdul" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? RunningFreeDesk : RunningFree} title="Running Free" author="Michelle" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? WavesDesk : Waves} title="Behind the Waves" author="Lamarr Wilson" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? CalmWaterDesk : CalmWater} title="Calm Waters" author="Samantha Brooke" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? MilkyWayDesk : MilkyWay} title="The Milky Way" author="Benjamin Cruz" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? DarkForestDesk : DarkForest} title="Night at the Dark Fores" author="Mohamed Abdul" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? SomwarpetDesk : Somwarpet} title="Somwarpets Beauty" author="Michelle" />
                <StoriesTemplate url={deviceWidth && deviceWidth >= 768 ? LandOfDreamDesk : LandOfDream} title="Land Of Dreams" author="William Malcom" />
            </StoryContainer>
            <Footer />
        </>
    )
}

export default Stories
