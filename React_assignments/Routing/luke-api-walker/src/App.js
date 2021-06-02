import './App.css';
import LukeAPI from './components/LukeAPI';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
       <Router>
          <LukeAPI path= "/"/>

        </Router>
  
    </div>
  );
}

export default App;
