
import './App.css';
import { Introduction } from "./Components/Introduction/Introduction";
import { Projects } from './Components/Projects/Projects';
import { Skills } from "./Components/Skills/Skills";
import { Education } from './Components/Education/Education';
import { Contact } from './Components/Contact/Contact';


function App() {
  return (
    <div id="Main">
      

      <Introduction />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      
    </div>
   
  );
}

export default App;
