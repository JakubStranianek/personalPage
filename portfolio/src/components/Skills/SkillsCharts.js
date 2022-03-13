import "./SkillsCharts.css"
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import ScrollAnimation from 'react-animate-on-scroll';

function SkillsCharts() {
    const charts = [
        {
            id: "1",
            name: "HTML",
            percentage: 80,
            startColor: "#FE8500",
            endColor: "#FE4F00"
        },
        {
            id: "2",
            name: "CSS",
            percentage: 80,
            startColor: "#1E79DE",
            endColor: "#4E32BB"
        },
        {
            id: "3",
            name: "JS",
            percentage: 50,
            startColor: "#FFF301",
            endColor: "#FF9701"
        },
        {
            id: "4",
            name: "DATABASES",
            percentage: 60,
            startColor: "#D7A1CD",
            endColor: "#8441DE"
        },
        {
            id: "5",
            name: "FIGMA",
            percentage: 50,
            startColor: "#40C5A1",
            endColor: "#1D6B9E"
        },
        {
            id: "6",
            name: "ADOBE PS + AI",
            percentage: 65,
            startColor: "#4DDDFE",
            endColor: "#DA4AFC"
        }
    ]

    return (
        <div className="chartWrapper">
            {charts.map(index => 
            <div className="flexGrid" key={index.name + index.id}>
                <div className="grid-Item" >
                <CircularProgressBar id={index.id}
                   percent={index.percentage}
                   stroke={12}
                   fontColor={"white"}
                   fontSize={"16px"}
                   colorCircle={"white"}
                   rotation={0}
                   round={true}
                   speed= {1000}
                   styles={{
                    borderRadius: '50%',
                    boxShadow: "4px 4px 6px -1px inset rgba(255,255,255,0.2)"
                  }}
                   linearGradient={[index.startColor, index.endColor]}
                    />
                </div>
                <ScrollAnimation animateIn='fadeInRight' duration={0.5}>
                    <h2>{index.name}</h2>
                </ScrollAnimation>
            </div>
            )}
        </div>
    );
}

export default SkillsCharts