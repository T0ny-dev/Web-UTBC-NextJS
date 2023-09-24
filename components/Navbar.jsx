"use client"

import { useState } from 'react';
import Link from 'next/link';
import "./Navbar.css";

function Navbar() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  const links = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
      clase: "no"
    },
    {
      id: 3,
      name: "Centro de Idiomas",
      link: "#",
      clase: "span-a"
    }
  ];

  return (
    <div className="Navbar">
      <div className="Navbar__Logo">
        <a href="/">
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logoutbc.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0YmMuc3ZnIiwiaWF0IjoxNjkzOTI1Mjc3LCJleHAiOjIwMDkyODUyNzd9.3pEx9wd3HfgY_RE54Z_-ErN-OFCQWe8_uDwrp8dnS3Q" alt="" />
        </a>
      </div>
      <div className="Navbar__Links">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link} id={link.clase}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="Navbar__Access">
        <div className="SubMenuToggle">
          <Link href="https://www.plataformaeducativautbc.com/login/index.php" target="_blank">
            Plataforma
          </Link>
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/menu.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbWVudS5zdmciLCJpYXQiOjE2OTM5MjU0MzAsImV4cCI6MjAwOTI4NTQzMH0.GODmN-3PZjBHHO0Q3IIj1tVTf77pk2d2MjLOclvbDfw" alt="" onClick={toggleSubMenu}/>
        </div>
        {subMenuOpen && (
          <div className="SubMenu">
            <p onClick={closeSubMenu}>Cerrar</p>
            <hr className='custom-hr'/>
            {/* Agrega tus enlaces del submenú aquí */}
            <div className='SubMenu__links'>
              <Link href="#" id='discord' >Próximamente Comunidad</Link>
              <hr className='custom-hr'/>
              <Link href="https://universidadtamaulipeca.edu.mx/" target={"_blank"}>Universidad Tamaulipeca</Link>
              <Link href="https://universidadtamaulipeca.edu.mx/consulta-de-pagos/" target={"_blank"}>Consulta de Pagos</Link>
              <Link href="https://www.plataformaeducativautbc.com/login/index.php" target={"_blank"}>Plataforma</Link>
              <Link href="https://www.canva.com/design/DAFtnSxqP2c/hvs7UhzI4OqCHwLdi5tRag/view?utm_content=DAFtnSxqP2c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target={"_blank"}>Catálogo virtual</Link>
              <Link href="#" target={"_blank"}>Próximamente APP UTBC</Link>
              <Link href="https://siu-utbc.vercel.app/" target={"_blank"}>SIU</Link>
              
            </div>
          </div>
        )}
      </div>
      {subMenuOpen && <div className="Overlay" onClick={closeSubMenu}></div>}

      {/* Coloca el overlay fuera del contenedor del menú */}
    </div>
  );
}

export default Navbar;