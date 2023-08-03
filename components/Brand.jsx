import "./Brand.css"

function Brand () {

  const logos = [
    {
      id: 1,
      logo:"./ut.svg"
    },
    {
      id: 2,
      logo:"./canacintra.svg"
    }
  ]

  return (
    <>
      <h2><span>+40 cursos</span> creados en educacion continua</h2>
      <div className="Logos">
        {logos.map((logo)=> (
          <img id={logo.id} src={logo.logo}></img>
        ))}
      </div>
    </>
  )
}

export default Brand;