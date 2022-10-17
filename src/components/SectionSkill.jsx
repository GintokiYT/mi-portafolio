import { useState, useEffect } from "react";
import Estilos from "../scss/Section.module.scss";

import db from "../data.js";

// import html5 from "../assets/html5.png";
// import css3 from "../assets/css3.png";
// import javascript from "../assets/javascript.png";
// import reactjs from "../assets/reactjs.svg";
// import nodejs from "../assets/nodejs.png";
// import python from "../assets/python.png";
// import mysql from "../assets/mysql.png";
// import mongodb from "../assets/mongodb.png";

const SectionSkill = () => {

  // const loadImage = nombreIMG => (`../assets/${nombreIMG}`);

  const [ habilidades, guardarHabilidades ] = useState([]);


  useEffect(() => {
    guardarHabilidades(db.habilidades)
  }, [habilidades]);

  return (  
    <section className={Estilos.sectionSkill} id="SectionSkill">
      <div className={Estilos.contenedorSkill}>
        <div className={Estilos.tituloSkill}>
          <h2>Habilidades</h2>
        </div>
        <div className={Estilos.bodySkill}>
          { habilidades.map((habilidad, index) => {
            const { imagen, lenguaje } = habilidad;
            return (
              <div className={Estilos.elementSkill} key={index}>
                <img src={`/public/assets/${imagen}`} alt={lenguaje} />
                <h3>{lenguaje}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 
export default SectionSkill;