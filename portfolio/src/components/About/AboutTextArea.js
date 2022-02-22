import "./AboutTextArea.css"

function AboutTextArea() {
    return (
        <div className="ml30">
            <p>Who I am</p>
            <h1>About Me</h1>
            <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of. 
            </article>
            
            <article>
            Type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap
             into electronic typesetting, remaining essentially unchanged.
            </article>

            <button className="btnCV">DOWNLOAD CV</button>
        </div>
    );
}

export default AboutTextArea