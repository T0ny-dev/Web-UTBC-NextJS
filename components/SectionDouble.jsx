import "./SectionDouble.css"
import Accordion from "./Accordion";

function SectionDouble () {
  return (
    <div className="double">
      <div className="double__section">
        <h2 className="double_title">Aplica Detección de Análisis de Capacitación a tus colaboradores</h2>
        <p>Mejora la experiencia de todo tu equipo con desarrollo organizacional <br/> y detecta necesidades específicas de capacitación</p>
        <Accordion title={"Aplicar Detección de análisis de capacitación gratis"} content={"La detección de análisis de capacitación ayuda a evaluar y mejorar las habilidades de los empleados. Colaborar con una universidad en Tamaulipas a traves de un convenio te permite acceder a este servicio de manera gratuita. Esto beneficia a tu empresa y fortalece la relación con la universidad."}/>
        <Accordion title={"Convenio de colaboración"} content={"Hacer un convenio con una universidad significa establecer un acuerdo formal para trabajar juntos en proyectos beneficiosos para ambas partes. Esto puede incluir acceso gratuito a servicios educativos, investigación conjunta y desarrollo de talento."}/>
        <Accordion title={"Resultados"} content={"Contamos con programa de aplicacion de instrumento para detectar tus necesidades con "}/>
        <button className="button__second">Solicitar información</button>
      </div>
      <div className="double__Image">
        <img src="./dnc.png" alt="dnc" />
      </div>
    </div>
  )
}


export default SectionDouble;