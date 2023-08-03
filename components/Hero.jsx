import "./Hero.css"
import Link from "next/link";

function Hero () {
  return (
    <div className="Hero">
      <div className="Hero__Content">
        <h1>Impulsa tu Carrera con Educación Continua</h1>
        <p>Nuestro Programa de Educacion Continua se ha diseñado para brindarte todo lo que necesitas en un solo lugar. Desde cursos, hasta la medición de tus necesidades y desempeño laboral, aquí encontrarás una plataforma integral que impulsará tu éxito.</p>
        <div className="Hero__Buttons">
          <Link href="/categorias">
            <button className="Button__Primary">Ver Categorias</button>
          </Link>
          <button className="Button__Video"><img src="./video.svg"></img>Educacion Continua</button>
        </div>
      </div>
      <div className="Hero__Image">
        <img src="./animation.gif" alt="animation" />
      </div>
    </div>
  )
}

export default Hero;