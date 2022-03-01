import "./PortfolioLogo.css"
import PortfolioLogoGrid from "./PortfolioLogoGrid";
import PortfolioLogoHeading from "./PortfolioLogoHeading";

function PortfolioLogo() {
    return (
        <div className="portfolioLogo">
            <PortfolioLogoHeading />
            <PortfolioLogoGrid />
        </div>
    );
}

export default PortfolioLogo