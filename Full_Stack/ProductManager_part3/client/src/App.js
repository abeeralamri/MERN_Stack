import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/api/product"/>
        <Detail path="/api/product/:id" />
        <Update path = "/api/product/:id/edit" />
      </Router>
    </div>
  );
}
export default App;