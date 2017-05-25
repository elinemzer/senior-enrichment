import React from 'react';
import Sidebar from './Sidebar';

const App = ({ children }) =>  {
  return (
    <div id="something" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>
      <div className="col-xs-10">
        { children }
      </div>
    </div>
  );
}

export default App;
