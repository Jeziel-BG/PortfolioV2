
import './App.css';
import { Introduction } from "./components/Introduction/Introduction";
import { Projects } from './components/Projects/Projects';
import { Skills } from "./components/Skills/Skills";
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
    <div id="Main">
      

      <Introduction />
      <Projects />
      <Skills />
      {//<<Education />
      }
      <Contact />

      
    </div>
   
  );
}

export default App;
