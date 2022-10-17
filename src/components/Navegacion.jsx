import { Fragment, useState } from "react";

//* Estilos
import Estilos from "../scss/Navegacion.module.scss";

const Header = () => {

  const logo = "<Gintoki />"

  const [ estadoMenu, guardarEstadoMenu ] = useState('');

  const handleMenu = () => {
    if(estadoMenu === '') return guardarEstadoMenu('Open');
    if(estadoMenu === 'Open') return guardarEstadoMenu('Close');
    if(estadoMenu === 'Close') return guardarEstadoMenu('Open');
  }

  const limpiarHref = () => {
    setTimeout(() => {
      let uri = window.location.toString();
      if(uri.indexOf("#") > 0) {
        let clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({},
        document.title, clean_uri);
      }
    }, 0);
  }

  return (  
    <Fragment>
      <header className={Estilos.header}>
        <nav className={Estilos.container}>
          <h1 className={Estilos.titulo}>
            <a href="#SectionHome" onClick={ limpiarHref }>{logo}</a>
          </h1>
          <div className={Estilos.menuDesktop}>
            <ul className={Estilos.navegacion}>
              <li>
                <a href="#SectionAbout" onClick={ limpiarHref }>Sobre mí</a>
              </li>
              <li>
                <a href="#SectionSkill" onClick={ limpiarHref }>Habilidades</a>
              </li>
              <li>
                <a href="#SectionProyects" onClick={ limpiarHref }>Proyectos</a>
              </li>
              <li>
                <a href="#SectionContact" onClick={ limpiarHref }>Contáctame</a>
              </li>
            </ul>
          </div>
          <div 
            className={Estilos.menuMobile} 
            onClick={ handleMenu }
          ><i className={`fa-solid ${estadoMenu === '' ? 'fa-bars' : estadoMenu === 'Open' ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </header>

      {/* Menu Hamburguesa */}
      <div 
        className={`${Estilos.menu} 
                    ${estadoMenu === '' 
                      ? Estilos.menuInicio : estadoMenu === 'Open' 
                      ? Estilos.aparecerMenu : Estilos.desaparecerMenu
                  }`}
      >
        <div className={Estilos.containerMenu}>
          <ul className={Estilos.navegacionMenu} onClick={handleMenu}>
            <li>
              <a href="#SectionAbout" onClick={ limpiarHref }>Sobre mí</a>
            </li>
            <li>
              <a href="#SectionSkill" onClick={ limpiarHref }>Habilidades</a>
            </li>
            <li>
              <a href="#SectionProyects" onClick={ limpiarHref }>Proyectos</a>
            </li>
            <li>
              <a href="#SectionContact" onClick={ limpiarHref }>Contáctame</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
 
export default Header;