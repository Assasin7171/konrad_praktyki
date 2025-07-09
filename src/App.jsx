import './App.css'
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <div className="container-fluid bg-body">
          <Hero/>
          {/*<div className="code-divider text-center my-5">*/}
          {/*    <span>&lt;/&gt;</span>*/}
          {/*</div>*/}
          <AboutMe/>
          <Projects/>
          <Footer/>
      </div>
  )
}

export default App
