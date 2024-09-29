
import './App.css';
import { Introduction } from "./Components/Introduction/Introduction";


function App() {
  return (
    <div id="Main">
      
      <div ref={Introduction} className="Introduction">
        <Introduction />
      </div>
      
    </div>
   
  );
}

export default App;
