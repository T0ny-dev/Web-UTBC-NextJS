"use client"
import "./Footer.css"


function Footer () {
  return (
    <div className="Footer">
      <div className="Footer__logo">
        <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logoutbc.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0YmMuc3ZnIiwiaWF0IjoxNjkzOTI1Mjc3LCJleHAiOjIwMDkyODUyNzd9.3pEx9wd3HfgY_RE54Z_-ErN-OFCQWe8_uDwrp8dnS3Q"/>
        <h3>Aprende, Evoluciona y Trasciende.</h3>
      </div>
      <div className="Footer__category">
        <ul>
          <li>APP UTBC</li>
          <a href="https://www.canva.com/design/DAFtnSxqP2c/hvs7UhzI4OqCHwLdi5tRag/view?utm_content=DAFtnSxqP2c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target={"_blank"}><li>Catálogo virtual</li></a>
          <li>Servicio al Cliente</li>
        </ul>
      </div>
      <div className="Footer__Links">
        <ul>
          <li id="centro">Centro de Idiomas</li>
          <a href="https://www.plataformaeducativautbc.com/login/index.php" target={"_blank"}><li id="plataforma">Plataforma</li></a>
          <a href="https://siu-utbc.vercel.app/" target="_blank"><li id="siu">SIU</li></a>
        </ul>
      </div>
      <div className="Footer__buttons">
        <a href="https://share.hsforms.com/1usHgvYTDQ7-tDF67c15XKwq1sw0" target={"_blank"}><button className="button__second">Contacto</button></a>
        <a href="https://www.plataformaeducativautbc.com/login/index.php" target={"_blank"}><button className="button__solid">Plataforma</button></a>
      </div>
      <div>
      <div>
</div>
</div>
    </div>
  )
}


export default Footer;