import Estilos from "../scss/Section.module.scss";

const SectionAbout = () => {
  return (  
    <section className={Estilos.sectionAbout} id="SectionAbout">
      <div className={Estilos.contenedorAbout}>
        <div className={Estilos.contenedorBody}>
          <div className={Estilos.aboutBody}>
            <h2>Sobre mí</h2>
            <p>Soy de Lima - Perú. Actualmente estoy en mi último curso de la carrera de docencia en la especialidad de informática en la Universidad Nacional de Educación Enrique Guzmán y Valle. Soy un apasionado por los videojuegos, el anime y la programación.</p>
          </div>
          <div className={Estilos.aboutImage}>
            <img src="/public/assets/gintoki-profesor.gif" alt="Profesor Gintoki" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default SectionAbout;