import "./AboutTextArea.css"
import { saveAs } from "file-saver";

function AboutTextArea() {
    const saveFile = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "StranianekCV.pdf"
        );
      }
    
    return (
        <div className="ml30">
            <p>Who I am</p>
            <h1>About Me</h1>
            <article>
            Hi there. My name is Jakub and im an ex computer science 
            student from Žilina university. In my free time im focusing 
            my time on graphic design in a form of pictures or other forms such as logos , billboards etc.
            </article>
            
            <article>
            Im also selftaught web developer. Other than graphics and web 
            development, i do enjoy playing sports , watching a good 
            film and spending time with those who i care about. 
            </article>

            <button className="btnCV" onClick={saveFile}>DOWNLOAD CV</button>
        </div>
    );
}

export default AboutTextArea