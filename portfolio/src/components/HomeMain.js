import '../components/HomeMain.css';
import memoji from "../assets/memoji.png"
import ReactTypingEffect from "react-typing-effect"

function HomeMain() {
   return (
       <div className="Main">
           <div>
     
      <ReactTypingEffect className='heading1'
        text={["Hi, 👋"]}
        typingDelay={["2000"]}
        speed={["100"]}
        eraseDelay={[10000000000000]}
        cursor={[""]}
      />

      <br/>
      <ReactTypingEffect className='heading1 letterSp8'
        text={["I'am Jakub"]}
        typingDelay={["3000"]}
        speed={["100"]}
        eraseDelay={[10000000000000]}
        cursor={[""]}
      /> 
      <br/>
      <ReactTypingEffect className='heading1 letterSp24'
        text={["Stranianek"]}
        typingDelay={["4000"]}
        speed={["100"]}
        eraseDelay={[10000000000000]}
        cursor={[""]}
      />            
           </div>
           
           <img src={memoji} alt="memoji"/>
        </div>
       ); 
}

export default HomeMain;