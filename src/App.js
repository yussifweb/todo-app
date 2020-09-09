import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Dev Career To-Do List</h1>
      <Todos></Todos>
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
