import "./About.css"
import AboutPhoto from "../About/AboutPhoto"
import AboutTextArea from "../About/AboutTextArea"

function Main(){
    return (
        <div className="about">
            <div className="aboutArea">
                <AboutPhoto />
                <AboutTextArea/>
            </div>
        </div>
    );
}

export default Main