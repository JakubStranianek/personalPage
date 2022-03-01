import "./PortfolioLogoGrid.css"
import bufet from "../../assets/bufet.png"
import barber from "../../assets/villiz.png"
import coffee from "../../assets/coffee.png"
import systems from "../../assets/systems.png"

function PortfolioLogoGrid() {
    return (
        <div className="container">
            <div className="img1">
            <img src={barber} alt="villizLogo"></img>
            </div>
            <div className="img2">
            <img src={bufet} alt="bufetLogo"></img>
            </div>
            <div className="img3"></div>
            <div className="img4">
            <img src={systems} alt="systemsLogo"></img>    
            </div>
            <div className="img5">
            <img src={coffee} alt="coffeeLogo"></img>
            </div>
            <div className="img6"></div>
        </div>
    );
}

export default PortfolioLogoGrid