import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
  return (
        <div className="App">
            <Header message="Naming contests"/> 
            <div>
              ...
            </div>
        </div>
  );
};

export default App;

ReactDOM.render(
    <App headerMsg="Messaging with Props"/>,
    document.getElementById('root')
);