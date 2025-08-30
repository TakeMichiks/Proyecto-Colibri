import React, { useState } from 'react';
import styles from "./stylesPanel.module.css";
function Panel() {
    return ( 
        <>
        <div className={Content} >
            <nav>
              <ul>
                <li><a href="#">inicio</a></li>
                <li><a href="#">Panel</a></li>
                <li><a href="#">Estudiantes</a></li>
                <li><a href="#">Profesores</a></li>
                <li><a href="#">Ajustes</a></li>
              </ul>
            </nav>
        </div>
        </>
     );
}

export default Panel;