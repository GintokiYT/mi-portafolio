import { Fragment } from "react";

//* Componentes
import Navegacion from "./components/Navegacion";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionProyects from "./components/SectionProyects";
import SectionSkill from "./components/SectionSkill";
import SectionContact from "./components/SectionContact";

const HomePage = () => {
  return (  
    <Fragment>
      <Navegacion />
      <main className="main">
        <SectionHome />
        <SectionAbout />
        <SectionSkill />
        <SectionProyects />
        <SectionContact />
      </main>
    </Fragment>
  );
}
 
export default HomePage;