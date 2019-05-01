import React from 'react';
import './App.css';

import Santiago from './component/Santiago';
import Zurich from './component/Zurich';
import Auckland from './component/Auckland';
import Sydney from './component/Sydney';
import Londres from './component/Londres';
import Georgia from './component/Georgia';




function App() {
  return (
    <div className="App">
      <div className="logoContainer">
        <img src="https://ripleylabs.com/images/unicorn/logo_footer.svg" className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        Desafío Ripley
      </header>
      <div className="principal">
        <div className="row">
          <Santiago></Santiago>
          <Zurich></Zurich>
          <Auckland></Auckland>
          <Sydney></Sydney>
          <Londres></Londres>
          <Georgia></Georgia>

          
        </div>
        
      </div>
    </div>
  );
}

export default App;
