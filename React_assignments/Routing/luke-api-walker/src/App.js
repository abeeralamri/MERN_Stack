import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
import Startships from './components/Starships';
import Search from './components/Search';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Search />
       <Router>
          <People path= "/people/:id"/>
          <Planets path= "/planets/:id"/>
          <Startships path= "/starships/:id"/>
          <Error path= "/error"/>

        </Router>
  
    </div>
  );
}

export default App;
