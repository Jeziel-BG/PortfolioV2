
import './App.css';
import { Introduction } from "./Components/Introduction/Introduction";
import { Projects } from './Components/Projects/Projects';


function App() {
  return (
    <div id="Main">
      

      <Introduction />
      <div id='Intro-Proj-Gradient'></div>
      <Projects />

      
    </div>
   
  );
}

export default App;
