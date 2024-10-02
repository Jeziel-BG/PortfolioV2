
import './App.css';
import { Introduction } from "./Components/Introduction/Introduction";
import { Projects } from './Components/Projects/Projects';
import { Skills } from "./Components/Skills/Skills";


function App() {
  return (
    <div id="Main">
      

      <Introduction />
      <div id='Intro-Proj-Gradient'></div>
      <Projects />
      <div id='Proj-Skills-Gradient'></div>
      <Skills />

      
    </div>
   
  );
}

export default App;
