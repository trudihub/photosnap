import {useState, useEffect} from "react"

const StoriesTemplate = ({url, title, author}) => {

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
        <div className="storiesImg" style={{ backgroundImage: `url(${url})` }}>
                    <div className="overlay">
                        <h6>{title}</h6>
                        <p className="creatorP">{author}</p>
                        <div className="line"></div>
                        <div className="ctaBtn">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                        </div>
                        
                        </div>
                        <div className="borderDiv">
                    </div>

        </div>
        </>
    )
}

export default StoriesTemplate
