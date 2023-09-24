"use client"
import React, { useState } from 'react';
import "./NavbarMobile.css"


function NavbarMobile () {
  const [showAccessDiv, setShowAccessDiv] = useState(false);

  const toggleAccessDiv = () => {
    setShowAccessDiv(!showAccessDiv);
  };

  return (
    <div className="Navbar__mobile">
      <div className='Navbar__horizontal'>
        <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logoutbc.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0YmMuc3ZnIiwiaWF0IjoxNjkzOTI1Mjc3LCJleHAiOjIwMDkyODUyNzd9.3pEx9wd3HfgY_RE54Z_-ErN-OFCQWe8_uDwrp8dnS3Q"/>
        <div className="Navbar__Access" onClick={toggleAccessDiv}>
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/menu.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbWVudS5zdmciLCJpYXQiOjE2OTM5MjU0MzAsImV4cCI6MjAwOTI4NTQzMH0.GODmN-3PZjBHHO0Q3IIj1tVTf77pk2d2MjLOclvbDfw" alt="" />
        </div>
      </div>
      {showAccessDiv && (
        <div className="AccessDiv">
          {/* Contenido del div que se mostrará al hacer clic en el icono de acceso */}
          <p>Centro de idiomas</p>
          <a href="https://www.plataformaeducativautbc.com/login/index.php" id='login'>Plataforma</a>
        </div>
      )}
    </div>
  )
}

export default NavbarMobile;