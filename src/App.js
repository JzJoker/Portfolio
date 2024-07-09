import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="logo" href='/'>[]</a>
      </header>
      <main>
        <section className="main-section">
          <div>
            <h2>Hi, my name is</h2>
            <div className="scroll-container">
              <h1>Justin Zhao Justin Zhao</h1>
            </div>
            <h3>Software Developer</h3>
            <FaLinkedin size={40} className="icon grow"/>
            <FaGithubSquare size={40} className="icon grow"/>
            <div className="scroll-down">            
              <FaArrowDown size={40} className="icon grow"/>
            </div>
          </div>
        </section>
        <section>
          <h3>Projects/Experience</h3>
          <Project/>
          <Project/>
          <Project/>
          <Project/>

        </section>
      </main>
    </div>
  );
}

function Project({name, icon, image1, image2, image3, tools, description, type, role, date}) {
  return (
    <div>
      <span>
        <img src={icon} alt={name + " icon"}/>
        <h3>{name}</h3>
        <img src={image1} alt={name + " image 1"}/>
      </span>
      <span>
        <img src={image2} alt={name + " image 2"}/>
        <img src={image3} alt={name + " image 3"}/>
      </span>
      <span>
        <h4>{name}</h4>
        <h5>{description}</h5>
        <h5>Type: {type}</h5>
        <h5>Role: {role}</h5>
        <h5>{date}</h5>
      </span>
    </div>
  )
}

export default App;
