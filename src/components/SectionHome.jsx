import { useEffect, useRef } from 'react';

import Estilos from "../scss/Section.module.scss";

import Typed from 'typed.js';

const SectionHome = () => {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Un programador y docente.',
        'Apasionado en el DESARROLLO WEB <span>💻</span>',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    // stringsElement: '#cadenas-texto', ==> ID del elemento que contiene cadenas de texto a mostrar.
    // typeSpeed: 75, ==> Velocidad en mlisegundos para poner una letra,
    // startDelay: 300, ==> Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    // backSpeed: 75, ==> Velocidad en milisegundos para borrrar una letra,
    // smartBackspace: true, ==> Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    // shuffle: false, ==> Alterar el orden en el que escribe las palabras.
    // backDelay: 1500, ==> Tiempo de espera despues de que termina de escribir una palabra.
    // loop: true, ==> Repetir el array de strings
    // loopCount: false, ==> Cantidad de veces a repetir el array.  false = infinite
    // showCursor: true, ==> Mostrar cursor palpitanto
    // cursorChar: '|', ==> Caracter para el cursor
    // contentType: 'html', ==> 'html' o 'null' para texto sin formato

    // typed.current.toggle();
    // typed.current.start();
    // typed.current.stop();
    // typed.current.reset();
    // typed.current.destroy();

    return () => typed.current.destroy();

  }, []);

  return (  
    <section className={Estilos.sectionHome} id="SectionHome">
      <div className={Estilos.contenedor}>
      <h2><span>Hola,</span> soy <br/>Renato Navarro Alberco</h2>
      <div className="type-wrap">
        <span ref={el} />
      </div>
    </div>
    </section>
  );
}
 
export default SectionHome;