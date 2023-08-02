import Link from 'next/link';
import "./Navbar.css"

function Navbar() {
  
  const links = [
    {
      id: 1,
      name: "Soluciones",
      link: "/soluciones"
    },
    {
      id: 2,
      name: "Educación Continua",
      link: "/educacioncontinua"
    },
    {
      id: 3,
      name: "Centro de Idiomas",
      link: "/centrodeidiomas"
    },
    {
      id: 4,
      name: "Para empresas",
      link: "/paraempresas"
    }
  ];

  return (
    <div className="Navbar">
      <div className="Navbar__Logo">
        <a href="/">
          <img src="./logoutbc.svg"/>
        </a>
      </div>
      <div className="Navbar__Links">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="Navbar__Access">
        <Link href="https://plataformaeducativautbc.com/">Plataforma</Link>
        <img src="./menu.svg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
