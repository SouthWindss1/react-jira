import React from "react";
import './App.css';
import { ListPage } from './screenes/project-list';
import AuthPage from './login';

function App() {
  return (
    <div className="App">
      <ListPage />
      <AuthPage />
    </div>
  );

}

export default App;
