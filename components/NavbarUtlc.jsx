import "./NavbarUtlc.css"
import "./NavbarUtlc.css"

function NavbarUtlc () {
  return (
    <div className="NavbarUtlc">
      <div className="NavbarUtlc__links">
        <img src="./utlc.png" alt="logo" />
        <ul>
          <li>Educacion Continua</li>
          <li>Modalidades</li>
          <li>Idiomas</li>
          <li>para empresas</li>
        </ul>
      </div>
      <div className="NavbarUtlc__acces">
        <button className="button__call"> <img src="./call.png" alt="" />+52 899 444 4444</button>
        <button className="button__utlc">Inscribete hoy!</button>
        <a href="#" className="acceso">Acceso a estudiantes</a>
      </div>
    </div>
  )
}

export default NavbarUtlc;