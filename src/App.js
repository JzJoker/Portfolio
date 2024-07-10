import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import TCToolsIcon from './assets/icons/TCTools.ico';

function App() {
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
            <a href='https://www.linkedin.com/in/justinzhao1/' target='none'><FaGithubSquare size={40} className="icon grow"/></a>
            <div className="scroll-down">            
              <FaArrowDown size={40} className="icon grow"/>
            </div>
          </div>
        </section>
        <section>
          <h3>Projects/Experience</h3>
          <div className="grid-container">
            <Project name="TC-Tools" icon={TCToolsIcon} image1={require("./assets/images/TCTools.png")}
                    image2={require("./assets/images/TCToolsLeft.png")} image3={require("./assets/images/TCToolsRight.png")}
                    tools={""} description={"IT Workflow Automation App (WPF .NET)"} type={"Professional Project"}
                    role={"Software Development Co-Op"} date={"May 2024 - Present"}/>
            <Project name="Portfolio" icon={""} image1={require("./assets/images/TCTools.png")}
                    image2={require("./assets/images/TCToolsLeft.png")} image3={require("./assets/images/TCToolsRight.png")}
                    tools={""} description={"Portfolio Web Application (React)"} type={"Personal Project"}
                    date={"July 2024 - Present"}/>
            <Project/>
            <Project/>
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
      <span className="big-box">
        <img class="image1" src={image2} alt={name + " image 2"}/>
        <img class="image2" src={image3} alt={name + " image 3"}/>
      </span>
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
