import aboutMe from "../../assets/aboutMe.png"
import "./AboutPhoto.css"

function AboutPhoto() {
    return (
        <img src={aboutMe} alt="photoOfMe" className="PhotoOfMe"></img>
    );
}

export default AboutPhoto