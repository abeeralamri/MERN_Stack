import './App.css';
import { Router } from '@reach/router';
import PlayerPerent from './components/PlayerPerent'
import AddPlayer from './components/AddPlayer'

function App() {
  return (
    <div className="App">
   
     <Router>
        <PlayerPerent path="/players/list" />

        <AddPlayer  path="/players/addPlayer" />

            </Router>
    </div>
  );
}

export default App;
