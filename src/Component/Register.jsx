import React, { useState} from "react";
import styles from "./stylesRegister.module.css"
function Register({ onClickLogin }) {

    const [formData, setFormData]= useState ({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
               ...prevState,
               [name]:value,
            }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
try{
    const response = await fetch("http://localhost:3000/api/Register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

    });

    if(!response.ok){
        throw new Error("Error la registrar")
    }
    const data = await response.json();
    console.log("Usuario registrado con exito",data);
}catch(error){
    console.log("Error al registrar", error.message);
}
};
  return (
    <>
      <div className={styles.Content}>
        <div className={styles.header}>
          <h1>Registrate</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              id="Password"
              placeholder="Password "
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
            />
            <button className={styles.Content2}>Register</button>
          </form>
        </div>
        <div>
          <p>
            si ya estas registrado apreta{" "}
            <a href="#" onClick={onClickLogin}>
              aqui
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;