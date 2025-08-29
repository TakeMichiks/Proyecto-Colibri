import { useState } from 'react'
import './App.css'
import Register from './Component/Register'
import Login from "./Component/Login"

function App() {
  const [activeSection, setActiveSection] = useState('login');

  const handleShowLogin = ()  => {
      setActiveSection("login");
  };

  const handleShowRegister = () => {
    setActiveSection('register');
  };

  return (
    <>
      <div>
        {activeSection === 'login' && <Login onClickRegister={handleShowRegister} />}
        {activeSection === 'register' && <Register onClickLogin={handleShowLogin} />}
      </div>
    </>
  )
};

export default App