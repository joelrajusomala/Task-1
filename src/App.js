import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert/Alert';
import TodoList from './components/TodoList/TodoList';
import TodoList2 from './components/TodoList/TodoList2';



function App() {
  return (
    <div className="App">
      {/* <Alert></Alert> */}
      {/* <TodoList></TodoList> */}
      <TodoList2></TodoList2>
    </div>
  );
}

export default App;
