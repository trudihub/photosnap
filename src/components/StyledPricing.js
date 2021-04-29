import styled from "styled-components"

const PricingPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
    .planContainer{
        width: 90%;
        margin: 3rem 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem 1rem;
        h2{
            margin-bottom: 1.5rem;
        }
        h1{
            margin-top: 1.5rem;
            letter-spacing: 3px;

        }
        p{
            color: gray;
        }
        button{
            cursor: pointer;
            padding: .7rem 5rem;
            border:none;
            margin-top: 3rem;
            
        }

        :nth-of-type(even){
            background: black;
            h1,h2{
                color: white;
            }
            p{
                color: gray;
            }
            button{
                color: black;
                background: white;
                letter-spacing: 2px;
                :hover{
                    color: black;
                    background: #DFDFDF;
            }
            }
        }
        :nth-of-type(odd){
            background: #F5F5F5;
            button{
                background: black;
                color: white;
                letter-spacing: 2px;
                :hover{
                    color: black;
                    background: #DFDFDF;
            }
            }
        }
    }
    .planSwitch{
        display: flex;
        align-items: center;
        .switchIcon{
        background: #DFDFDF;
        height: 1.5rem;
        border-radius: 1rem;
        width: 3rem;
        margin: 0 1rem;
        display: flex;
        align-items: center;
        padding: 3px;
        transition: background 0.5s ease-in-out;
        cursor: pointer;

        .innerSwitch{
            height: 1.25rem;
            width: 1.25rem;
            border-radius: 50%;
            background: black;
            margin-left:0;
            transition: margin-left 0.5s ease-in-out;
        }
        }
    }
    .yearWrapper{
        background: black !important;
    }
    .yearlySwitch{
        margin-left: 1.4rem !important;
        background: white !important;
    }
    
    @media(min-width: 1024px){
        width: 80%;
        margin-left: 10%;
        .planContainerWrapper{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            align-items: center;
            .planContainer:nth-of-type(odd){
                height: 400px;
            }
            .planContainer:nth-of-type(even){
                justify-content: center;
                height: 500px;
                position: relative;
                .borderDiv{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: .5rem;
                    width: 100%;
                    background: linear-gradient(90deg, #FFC593, #BC7198, #5A77FF);
                }
            }
        }
    }

`

const FeatureTableMobile = styled.div`
    width: 90%;
    margin: 1rem 5% 6rem 5%;
    .featureHeader{
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
    }
    .featContainer{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: 1fr 0.5fr 1fr;
        border-bottom: 1px solid #DFDFDF;
        h4{
            grid-area: 1/1/2/4;
            padding: 1rem 0 0.5rem 0;
        }
        p{
            padding: 0.5rem 0;
            color: gray;
        }
    }
`

const FeatureTableDesk = styled.div`
    width: 90%;
    margin: 3rem 5% 6rem 5%;
    h1{
        text-align: center;
        margin: 3rem;
    }
    .featDeskTable{
        .rowWrapper{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            align-items: center;
            border-bottom: 1px solid #DFDFDF;
            :first-of-type{
                border-bottom: 1px solid black;
            }
            h4, h3{
                padding: 1.5rem 0;
            }
        }

    }
    @media(min-width: 1024px){
        .featDeskTable{
            width: 60%;
            margin-left: 20%;
        }
    }
`

export { PricingPlanContainer, FeatureTableMobile, FeatureTableDesk }