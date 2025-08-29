import React, { useState} from "react";

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
      <div>
        <h1>¡Hola Mundo!</h1>
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
        <button>Register</button>
        </form>
      </div>
      <div>
        <p>
          si ya estas registrado apreta{" "}
          <a
            href="#"
            onClick={onClickLogin}
          >
            aqui
          </a>
        </p>
      </div>
    </>
  );
}

export default Register;