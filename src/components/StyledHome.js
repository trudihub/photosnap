import styled from "styled-components"

import BetaBGMobile from "../assets/shared/mobile/bg-beta.jpg"
import BetaBGTablet from "../assets/shared/tablet/bg-beta.jpg"
import BetaBGDesk from "../assets/shared/desktop/bg-beta.jpg"

const HeaderStyle = styled.header`
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        margin-left: 1rem;
    }
    .navLinks{
        display: none;
    }
    .navLinks a:hover{
        color: gray; 
    }

    .burgerMenu{
        margin-right: 2rem;
    }
    .menuOverlay{
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        .menuLinks{
            display: flex;
            flex-direction: column;
            background: white;
            align-items: center;
            a{
                padding: 0.5rem 0;
                color: black;
                text-decoration: none;
                letter-spacing: 2px;
                :hover{
                    color: gray;
                }
            }
            .line{
                height: 2px;
                width: 250px;
                background: #DFDFDF;
                margin: 0.5rem 0;
            }
            button{
                background: black;
                color: white;
                border: none;
                cursor: pointer;
                padding: .7rem 5rem;
                margin: 0.5rem 0 2.5rem 0;
            }
        }
    }
    
    @media(min-width: 768px){
        img{
            margin-left: 2rem;
        }
        .burgerMenu{
            display: none;
        }
        .navLinks{
            display: flex;
            align-items: center;
            a{
                text-decoration: none;
                color: black;
            }
            h2{
                margin-left: 2rem;
                font-size: 1rem;
                letter-spacing: 1px;

            }
            button{
                cursor: pointer;
                color: white;
                border: none;
                background: black;
                margin-left: 2.5rem;
                margin-right: 2.5rem;
                padding: .7rem 1.1rem;
                letter-spacing: 2px;
                :hover{
                    color: black;
                    background: #DFDFDF;
                }
            }
        }
    }
`


const HomeContainer = styled.div`
    
    .homeWrapper{
        display: flex;
        flex-direction: column;
    }
    .description{
        padding: 4rem 1rem 3rem 1rem;
        h1{
            letter-spacing: 3px;
        }
        p{
            color: darkgray;
            margin: 1rem 0;
            line-height: 1.5;
        }
        .ctaBtn{
            display: flex;
            align-items: center;
            margin: 2.5rem 0 1.5rem 0;
            cursor: pointer;
            :hover{
            p{
                border-bottom: 1px solid black;
            }
        }
            p{
                font-weight: bold;
                letter-spacing: 3px;
                margin: 0 1rem 0 0;
            }
        }
        .borderDiv{
            position: absolute;
            top: 0;
            left: 2rem;
            height: 5px;
            width: 7rem;
            background: linear-gradient(90deg, #FFC593, #BC7198, #5A77FF); 
        }
    }
    .descriptionBlack{
        background: black;
        h1{
            color: white;
        }
        .ctaBtn{
            :hover{
            p{
                border-bottom: 1px solid white;
            }
        }
            p{
                color: white;
            }
        }

    }
    .descriptionWhite{
        .ctaBtn{
            :hover{
            p{
                border-bottom: 1px solid black;
            }
        }
            p{
                color: black;
            }
        }
    }
    @media(min-width: 768px){
        .homeWrapper{
            :nth-child(odd){
                flex-direction: row-reverse;
            }
            :nth-child(even){
                flex-direction: row;
            }
        }
        .description{
            padding: 10rem 3rem;
            /* >p,h1{
                width: 60%;
            } */
            .borderDiv{
                left: 0;
                top: calc(50% - 4.5rem);
                height: 9rem;
                width: 5px;
                background: linear-gradient(#5A77FF, #BC7198, #FFC593);

            }
        }
        .moonHero{
            >p,h1{
                width: 60%;
            }
        }
    }
    @media(min-width: 1024px){
        .description{
            padding: 12rem 8rem;
            p{
                width: 78%;
            }
            .ctaBtn{
                p{
                    width: auto;
                }
            }
            
        }
        .moonHero{
            >p,h1{
                width: 30%;
            }
        }
    }
`

const StoryContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    .storiesImg{
        height: 375px;
        width: 100%;
        color: white;
        transition: transform 0.5s ease-in-out;
        cursor: pointer;

        .overlay{
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5); 
            z-index: 1;
            padding-top: 70%;
        }
        
        .line{
            height: 1px;
            background: rgba(255,255,255,0.3);
            margin: .5rem 7.5%;;
        }
        h6{
            font-size: 1rem;
            margin-left: 7.5%;
            z-index: 10;

        }
        p{
            line-height: 1.5;
            margin-left: 0;
        }
        .creatorP{
            font-size: .65rem;
            font-weight: lighter;
            margin-left: 7.5%;
        }
        .ctaBtn{
            display: flex;
            margin: 1rem 7.5%;
            justify-content: space-between;
            cursor: pointer;
            :hover{
            p{
                border-bottom: 1px solid white;
            }
        }
            p{
                font-size: .75rem;
                letter-spacing: 2px;

            }
        }
        .borderDiv{
            display: none;
            height: .5rem;
            width: 100%;
            background: linear-gradient(90deg, #FFC593, #BC7198, #5A77FF);
        }
        :hover{
            transform: translateY(-2rem);
            .borderDiv{
                display: block;
            }
        }
    }
    @media(min-width: 768px){
        grid-auto-rows: min-content;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        .storiesImg{
            background-size: cover;
            height: 500px;
            .overlay{
                padding-top: 90%;
            }
        }
    }
    @media(min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
    }
`

const HomeFeatures = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin: 5rem 12.5%;
    width: 75%;
    
    .homeFeatContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        img{
            margin: 2rem 0;
        }
        h3{
            margin: 1rem 0;
        }
        p{
            color: gray;
        }
    }
    @media(min-width: 768px){
        margin: 5rem 12.5%;
        grid-template-columns: 1fr 1fr;
        .homeFeatOne{
                grid-area: 1/1/2/3;
            }
            .homeFeatTwo{
                grid-area: 2/1/3/3;
            }
            .homeFeatThree{
                grid-area: 3/1/4/3;
        }
        .homeFeatContainer{
            img{
                margin: 3rem 0;
            }
            
        }
    }
    @media(min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        margin: 7rem 12.5%;
        .homeFeatOne{
                grid-area: 1/1/2/2;
            }
            .homeFeatTwo{
                grid-area: 1/2/2/3;
            }
            .homeFeatThree{
                grid-area: 1/3/2/4;
            }
        .homeFeatContainer{
            margin: 0 3rem;
           
        }
    }
`

const FooterStyle = styled.footer`
    background: black;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, min-content);
    text-align: center;
    padding-top: 2rem;
    .logo{
        margin: auto;
    }
    .socialLinks{
        margin: 2rem 0;
        img{
            margin: 0 0.6rem;
            cursor: pointer;
        }
        
    }
    .footerLinks{
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        a{
            color: white;
            margin: .5rem 0;
            letter-spacing: 3px;
            text-decoration: none;
            :hover{
                color: gray;
            }
        }

    }
    .ctaBtn{
        display: flex;
        align-items: center;
        margin: auto;
        cursor: pointer;
        :hover{
            p{
                border-bottom: 1px solid white;
            }
        }
        p{
            color: white;
            margin-right: 1.5rem;
            letter-spacing: 3px;
        }
    }
    .copyright{
        color: gray;
        margin: 2rem 0;
    }
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        .logo{
            margin-left: 3rem;
        }
        .ctaBtn{
            grid-area: 1/2/2/3;
        }
        .footerLinks{
            grid-area: 2/1/3/3;
            flex-direction: row;
            margin-left: 3rem;
            a{
                margin-right: 2rem;
            }
        }
        .socialLinks{
            text-align: left;
            margin-left: 3rem;
        }
    }
    @media(min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
       .footerLinks{
           grid-area: 1/2/3/3;
           flex-direction: column;
           text-align: left;
           margin: 3rem 0;
       }
       .ctaBtn{
           grid-area: 1/3/2/4;
       }
    }
`
const BetaContainer = styled.div`
    height: 288px;
    padding: 4rem 2rem;
    letter-spacing: 3px;
    background: url(${BetaBGMobile});
    color: white;
    .ctaBtn{
        display: flex;
        cursor: pointer;
        margin-top: 1rem;
        :hover{
            p{
                border-bottom: 1px solid white;
            }
        }
        p{
            margin-right: 1rem;
        }
    }
    @media(min-width: 768px){
        height: 280px;
        background: url(${BetaBGTablet});
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        h1{
            width: 45%;
        }
        
    }
    @media(min-width: 1024px){
        background: url(${BetaBGDesk});
        background-size: cover;
        justify-content: space-between;
        h1{
            width: 22.5%;
            margin-left: 5rem;
        }
        .ctaBtn{
            margin-right: 5rem;
        }
    }
`

export{HeaderStyle, HomeContainer, StoryContainer, HomeFeatures, FooterStyle, BetaContainer }