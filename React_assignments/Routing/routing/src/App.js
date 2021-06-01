import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import NumText from './components/NumText';
import TextColor from './components/TextColor';


function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <NumText path="/:num_text"/>
            <TextColor path="/:num_text/:color/:bgColor" />

            
        </Router>
    </div>
  );
}
export default App;