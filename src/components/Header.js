import Logo from "../assets/shared/desktop/logo.svg"
import { HeaderStyle } from "./StyledHome"
import { useState } from "react"
import { Link } from "react-router-dom"

import BurgerMenu from "../assets/shared/mobile/menu.svg"
import BurgerMenuClose from "../assets/shared/mobile/close.svg"


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    


    return (
        <HeaderStyle>
            <Link to="/"><img src={Logo} alt="logo" /></Link>

            <div className="navLinks">
                <Link to="/stories"><h2>STORIES</h2></Link>
                <Link to="/features"><h2>FEATURES</h2></Link>
                <Link to="/pricing"><h2>PRICING</h2></Link>
                <button>GET AN INVITE</button>
            </div>
            {openMenu ?
                <img onClick={() => setOpenMenu(false)} className="burgerMenu" src={BurgerMenuClose} alt="close menu" /> :
                <img onClick={() => setOpenMenu(true)} className="burgerMenu" src={BurgerMenu} alt="open menu" />
            }
            {openMenu &&
            <div className="menuOverlay">
                <div className="menuLinks">
                    <Link to="/stories">STORIES</Link>
                    <Link to="/features">FEATURES</Link>
                    <Link to="/pricing">PRICING</Link>
                    <div className="line"></div>
                    <button>GET AN INVITE</button>
                </div>
            </div>
            }
        </HeaderStyle>
    )
}

export default Header
