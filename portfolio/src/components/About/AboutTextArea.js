import "./AboutTextArea.css"

function AboutTextArea() {
    return (
        <div className="ml30">
            <p>Who I am</p>
            <h1>About Me</h1>
            <article>
            Hi there. My name is Jakub and im an ex computer science 
            student from Zilina university. In my free time im focusing 
            my time on graphic design in a form of pictures or other forms such as logos , billboards etc.
            </article>
            
            <article>
            Im also selftaught web developer. Other than graphics and web 
            development, i do enjoy playing sports , watching a good 
            film and spending time with those who i care about. 
            </article>

            <button className="btnCV">DOWNLOAD CV</button>
        </div>
    );
}

export default AboutTextArea