import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/api/product"/>
        <Detail path="/api/product/:id" />
      </Router>
    </div>
  );
}
export default App;