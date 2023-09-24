import "./Banner.css"

function Banner () {
  return (
    <div className="Banner__footer">
      <p>COMIENZA APRENDER</p>
      <h2>Personaliza tu <span>Aprendizaje</span></h2>
      <div className="Banner__image">
        <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/Diploma.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvRGlwbG9tYS5qcGciLCJpYXQiOjE2OTQxNDY0MDEsImV4cCI6MTcyNTY4MjQwMX0.CDs852k5dvEyrcluKaeEqdGgNtiNadSyfjYsNrwPEjY&t=2023-09-08T04%3A13%3A21.458Z" alt="" />
      </div>
      <div className="Banner__benefits">
        <div className="Banner__box">
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/educacion-en-linea%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvZWR1Y2FjaW9uLWVuLWxpbmVhICgxKS5wbmciLCJpYXQiOjE2OTQxNDk4MTEsImV4cCI6MTcyNTY4NTgxMX0.KA62d7KlS37SqXBBvfuA8JkJJ7-TzK4egi7xmGCJDvM&t=2023-09-08T05%3A10%3A11.917Z" alt="" />
          <h3>Modalidad Mixta</h3>
          <p>Aprende flexible</p>
        </div>
        <div className="Banner__box">
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/boton-de-play.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYm90b24tZGUtcGxheS5wbmciLCJpYXQiOjE2OTQxNDkzNzEsImV4cCI6MTcyNTY4NTM3MX0.61unEy_Kj8tCU7trtwFYfUeWzqfg_PXQ8y_IwDevol0&t=2023-09-08T05%3A02%3A51.404Z" alt="" />
          <h3>Clases grabadas</h3>
          <p>Contenido accesible</p>
        </div>
        <div className="Banner__box">
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/iniciar-sesion.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvaW5pY2lhci1zZXNpb24ucG5nIiwiaWF0IjoxNjk0MTUwMTM2LCJleHAiOjE3MjU2ODYxMzZ9.S9TBifAcMyPvBZGf0rkl1tfj1B89r22Qub5gzdyu2qM&t=2023-09-08T05%3A15%3A36.226Z" alt="" />
          <h3>Plataforma</h3>
          <p>Accede a recursos</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;