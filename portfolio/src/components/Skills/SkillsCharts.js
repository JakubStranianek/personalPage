import "./SkillsCharts.css"

function SkillsCharts() {
    const charts = [
        {
            id: "1",
            name: "HTML",
            percentage: "80%",
            startColor: "#FE8500",
            endColor: "#FE4F00"
        },
        {
            id: "2",
            name: "CSS",
            percentage: "80%",
            startColor: "#1E79DE",
            endColor: "#4E32BB"
        },
        {
            id: "3",
            name: "JS",
            percentage: "50%",
            startColor: "#FFF301",
            endColor: "#FF9701"
        },
        {
            id: "4",
            name: "DATABASES",
            percentage: "60%",
            startColor: "#D7A1CD",
            endColor: "#8441DE"
        },
        {
            id: "5",
            name: "FIGMA",
            percentage: "50%",
            startColor: "#40C5A1",
            endColor: "#1D6B9E"
        },
        {
            id: "6",
            name: "ADOBE PS + AI",
            percentage: "65%",
            startColor: "#4DDDFE",
            endColor: "#DA4AFC"
        }
    ]
    
    return (
        <div className="chartWrapper">
            {charts.map(index => 
                <div className="grid-Item" id={index.id}>
                    <div className="outerCircle">
                        <div className="innerCircle">
                            <h2>{index.percentage}</h2>
                        </div>
                    </div>
                    <h2>{index.name}</h2>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="210px" height="210px" >
         <defs>
            <linearGradient id={"GradientColor" + index.id}>
               <stop offset="0%" stopColor={index.startColor} />
               <stop offset="100%" stopColor={index.endColor} />
            </linearGradient>
         </defs>
         <circle cx="105" cy="100" r="88" strokeLinecap="round" stroke={"url(#GradientColor" + index.id + ")"}/>
        </svg>

                </div> 
            )}
        </div>
    );
}

export default SkillsCharts