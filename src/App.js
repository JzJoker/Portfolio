import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import TCToolsIcon from './assets/icons/TCTools.ico';
import PortfolioIcon from './assets/icons/Portfolio.ico';
import CalculatorIcon from './assets/icons/Calculator.ico';
import AutoCloseIcon from './assets/icons/AutoClose.ico';

function App() {
  function scrollToProjects() {
    var element = document.querySelector(".scroll-down");
    if (element) {
      var headerHeight = 0.175 * window.innerHeight; // Calculate header height in pixels
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <a className="logo" href='/'>[]</a>
        <a className="contact" href="none">Contact</a>
      </header>
      
      <main>
        <section className="main-section">
          <div>
            <h2>Hi, my name is</h2>
            <div className="scroll-container">
              <h1>Justin Zhao Justin Zhao</h1>
            </div>
            <h3>Software Developer</h3>
            <a href='https://www.linkedin.com/in/justinzhao1/' target='none'><FaLinkedin size={40} className="icon grow"/></a>
            <a href='https://github.com/JzJoker' target='none'><FaGithubSquare size={40} className="icon grow"/></a>
            <div className="scroll-down">            
              <FaArrowDown size={40} className="icon grow" onClick={scrollToProjects}/>
            </div>
          </div>
        </section>
        <section className="projects">
          <h3>Projects/Experience</h3>
          <div className="grid-container">
            <Project name="TC-Tools" icon={TCToolsIcon} image1={require("./assets/images/TCTools.png")}
                    image2={require("./assets/images/TCToolsLeft.png")} image3={require("./assets/images/TCToolsRight.png")}
                    tools={""} description={"IT Workflow Automation App (WPF .NET)"} type={"Professional Project"}
                    role={"Software Development Co-Op"} date={"May 2024 - Present"}/>
            <Project name="Portfolio" icon={PortfolioIcon} image1={require("./assets/images/Portfolio.png")}
                    image2={require("./assets/images/PortfolioLeft.png")} image3={require("./assets/images/PortfolioRight.png")}
                    tools={""} description={"Portfolio Web Application (React)"} type={"Personal Project"}
                    date={"July 2024 - Present"}/>
            <Project name="BillSplit" icon={CalculatorIcon} image1={require("./assets/images/Calculator.png")}
                    image2={require("./assets/images/CalculatorLeft.png")} image3={require("./assets/images/CalculatorRight.png")}
                    tools={""} description={"Web Application for Splitting Bills"} type={"Personal Project"}
                    date={"Dec 2023 - January 2024"}/>
            <Project name="AutoClose" icon={AutoCloseIcon} image1={require("./assets/images/AutoClose.png")}
                    image2={require("./assets/images/AutoCloseLeft.png")}
                    tools={""} description={"Chrome Extension for Inactivity Detection"} type={"Personal Project"}
                    date={"July 2024"}/>
          </div>
        </section>
      </main>
    </div>
  );
}

function Project({name, icon, image1, image2, image3, tools, description, type, role, date}) {
  return (
    <>
      <span className="small-box">
        <span className="horizontal">
          <img class="icon" src={icon} alt={name + " icon"}/>
          <h3>{name}</h3>
        </span>
        <img src={image1} alt={name + " image 1"}/>
      </span>
      {image3 &&
      <span className="big-box">
        <img class="image1" src={image2} alt={name + " image 2"}/>
         <img class="image2" src={image3} alt={name + " image 3"}/>
      </span>
      }{!image3 &&
        <span className="big-box-single">
          <img class="image1" src={image2} alt={name + " image 2"}/>
        </span>
        }

      <span className="description-box">
        <h4>{name}</h4>
        <p>{description}</p>
        <p><b>Type:</b> {type}</p>
        {role && <p><b>Role:</b> {role}</p>}
        <p>{date}</p>
      </span>
    </>
  )
}


export default App;
