import React from "react";
import './App.css';
import AuthentiCated from "./Authenticated-app";
import AuthPage from './login';
import { useAuth } from "./context/auth-context";
function App() {
  const value = useAuth()
  return (
    <div className="App">
      {value?.user ? <AuthentiCated /> : <AuthPage />}
    </div>
  );

}

export default App;
