import "./HomeFooter.css"

function HomeFooter() {

  const goToAbout = (e) => {
    e.preventDefault()
    var about = document.getElementsByClassName('about')[0];

    window.scrollTo({top: about.offsetTop, behavior: "smooth"})
}

    return (

      <div className="flexItems">
        <div className="border">
            <h2>Front-end developer X Designer</h2>
        </div>

        <a href="#" onClick={goToAbout} className="scroll-down"></a>
      </div>

    );
  }

export default HomeFooter;
