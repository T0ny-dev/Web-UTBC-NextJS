import "./Category.css"

function Category () {

  const category = [
    {
      id:1,
      title:"Tecnología",
      icon: "./tecno.svg"
    },
    {
      id:2,
      title:"Salud y Seguridad",
      icon:"./salud.svg"
    },
    {
      id:3,
      title:"Educación",
      icon:"./edu.svg"
    },
    {
      id:4,
      title:"Idiomas",
      icon:"./lan.svg"
    },
    {
      id:5,
      title:"Derecho",
      icon:"./secure.svg"
    },
    {
      id:6,
      title:"Servicio al Cliente",
      icon:"./build.svg"
    }
  ]

  return (
    <div className="Category">
      <h2>Categorías de estudio</h2>
      <div className="Category__container">
        {category.map((category) => (<div key={category.id} className="box"><div className="Category__icon"><img src={category.icon} alt="" /></div><p>{category.title}</p></div>))}
      </div>
      <p>Todos los cursos</p>
    </div>
  )
}

export default Category;