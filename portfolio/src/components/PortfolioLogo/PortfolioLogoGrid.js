import "./PortfolioLogoGrid.css"
import bufet from "../../assets/bufet.png"
import barber from "../../assets/villiz.png"
import coffee from "../../assets/coffee.png"
import systems from "../../assets/systems.png"
import vision from "../../assets/vision.png"
import school from "../../assets/school.png"
import pohoda from "../../assets/pohoda.png"

function PortfolioLogoGrid() {
    return (
        <div className="container">
            <div className="img1">
            <img src={barber} alt="villizLogo"></img>
            </div>
            <div className="img2">
            <img src={bufet} alt="bufetLogo"></img>
            </div>
            <div className="img3">
            <img src={vision} alt="visionLogo"></img>
            </div>
            <div className="img4">
            <img src={systems} alt="systemsLogo"></img>    
            </div>
            <div className="img5">
            <img src={coffee} alt="coffeeLogo"></img>
            </div>
            <div className="img6">
            <img src={school} alt="schoolLogo"></img>
            <img src={pohoda} alt="pohodaLogo"></img>
            </div>
        </div>
    );
}

export default PortfolioLogoGrid