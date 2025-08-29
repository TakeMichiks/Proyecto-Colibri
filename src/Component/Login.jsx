import React, { useState } from 'react'
import axios from "axios"

function Login ( { onClickRegister }) {
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
})

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
  
  try {
       const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error("Error en el login")
        }
        const data = await response.json();
        console.log("Login exitoso", data);
      } catch (error) {
        console.log("Error en el login", error.menssage);
          
 }
};
  return (
      <>
        <div>
            <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
        <input
         type="email" 
         name="email" 
         id="Email"
         placeholder="Email" 
         value= {formData.email}
         onChange={handleChange}
        />
        <input 
        type="password" 
        name="password" 
        id="Password" 
        placeholder="Password "
        value= {formData.password}
        onChange={handleChange}
        />
        <button>Login</button>
        </form>
        </div>
        <div>
        <p>
          si aun no te haz registrado{" "}
          <a
            href="#"
            onClick={onClickRegister}
          >
            aqui
          </a>
          </p>
        </div>
    </>
);
}
export default Login;