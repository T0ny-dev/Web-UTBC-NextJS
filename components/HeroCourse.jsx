import Link from "next/link";
import "./Hero.css"
import "./HeroCourse.css"


function HeroCourse({ backgroundStyle, image }) {
  return (
    <div className="Hero__Course" style={backgroundStyle}>
      <div className="Hero__image">
        <img src={image} alt="" />
      </div>
      <div className="Hero__image__content">
      <h1>Descubre un <span id="spanBold">Mundo</span> de Conocimiento <span id="spanBold"> + </span></h1>
      <hr />
        <p><span id="spanBold">Nuestro programa integral:</span> cursos, seguimiento y éxito laboral, todo en un solo lugar para impulsar tu crecimiento profesional.</p>
        <div>
          <Link href={"https://bussiness-center-ut.github.io/form/"} target="_blank">
            <button className="Hero__button">¡Solicitar informacion!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroCourse;