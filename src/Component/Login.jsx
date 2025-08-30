import React, { useState } from 'react'
import axios from "axios"
import styles from "./stylesLogin.module.css"
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
      <div className={styles.Content}>
        <div className={styles.header}>
            <h1>Login</h1>
      </div>
    <div >
      <form onSubmit={handleSubmit}>
            <input
            type="email" 
            name="email" 
            id="Email"
            placeholder="Email" 
            value= {formData.email}
            onChange={handleChange}
            className={styles.input}
            />
        <input 
            type="password" 
            name="password" 
            id="Password" 
            placeholder="Password"
            value= {formData.password}
            onChange={handleChange}
            className={styles.input}
        />
        <button className={styles.Content2}>Login</button>
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
    </div>
    </>
);
}
export default Login;