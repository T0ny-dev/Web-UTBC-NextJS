import "./Category.css"

function Category () {

  const category = [
    {
      title:"Tecnología",
      icon: "./tecno.svg"
    },
    {
      title:"Salud y Seguridad",
      icon:"./salud.svg"
    },
    {
      title:"Educación",
      icon:"./edu.svg"
    },
    {
      title:"Idiomas",
      icon:"./lan.svg"
    },
    {
      title:"Derecho",
      icon:"./secure.svg"
    },
    {
      title:"Servicio al Cliente",
      icon:"./build.svg"
    }
  ]

  return (
    <div className="Category">
      <h2>Categorías de estudio</h2>
      <div className="Category__container">
        {category.map((category) => (<div className="box"><div className="Category__icon"><img src={category.icon} alt="" /></div><p>{category.title}</p></div>))}
      </div>
      <p>Todos los cursos</p>
    </div>
  )
}

export default Category;