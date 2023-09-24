import "./Hero.css"
import Link from "next/link";

function Hero () {
  return (
    <div className="Hero">
      <div className="Hero__Content">
        <h1>Impulsa tu Carrera con <span>Educación Continua</span></h1>
        <hr></hr>
        <p>Nuestro Programa de Educacion Continua se ha diseñado para brindarte todo lo que necesitas en un solo lugar. Desde cursos, hasta la medición de tus necesidades y desempeño laboral, aquí encontrarás una plataforma integral que impulsará tu éxito.</p>
        <div className="Hero__Buttons">
          <Link href="/categorias">
            <button className="Button__Primary">Contactar</button>
          </Link>
          <button className="Button__Video"><img src="./video.svg"></img>Educacion Continua</button>
        </div>
      </div>
      <div className="Hero__Image">
        <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/businesscenter.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYnVzaW5lc3NjZW50ZXIuZ2lmIiwiaWF0IjoxNjk0MTk5NjA0LCJleHAiOjE3MjU3MzU2MDR9.g6KK_gv_Nx5ePjPU4kNZZMBjjfw_V3IlvU0X4j8-7o4&t=2023-09-08T19%3A00%3A04.433Z" alt="animation" />
      </div>
    </div>
  )
}

export default Hero;