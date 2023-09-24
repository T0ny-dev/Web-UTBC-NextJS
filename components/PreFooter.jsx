import "./PreFooter.css"

function PreFooter () {
  return (
    <div className="PreFooter">
      <div className="PreFooter__box">
        <div className="PreFooter__Content">
          <h3>Convenio de colaboración</h3>
          <p>Mejora la experiencia de todo tu equipo con desarrollo organizacional y detecta necesidades específicas de capacitación</p>
          <button className="button__second">Solicitar convenio</button>
        </div>
        <div className="PreFooter__Image">
          <img src="./eleva.png" alt="" />
        </div>
      </div>
    </div>
  )
}


export default PreFooter;