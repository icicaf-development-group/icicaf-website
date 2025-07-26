import React, { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil para ocultar el menú por defecto y ajustar el layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(true); // en desktop el menú siempre visible
      else setOpen(false); // en móvil oculto por defecto
    };
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style>{`
        header {
          background-color: #111827;
          color: white;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
        }
        ul.menu {
          align-items: center;
          display: flex;
          gap: 2rem;
          list-style: none;
          flex-direction: row;
        }
        ul.menu.hidden {
          display: none;
        }
        button.menu-toggle {
          font-size: 1.8rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: none;
        }
        @media (max-width: 768px) {
          ul.menu {
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
          }
          button.menu-toggle {
            display: block;
          }
        }
        ul.menu li {
          margin: 0;
        }ul.menu li a {
  position: relative;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

ul.menu li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #38bdf8; /* celeste moderno */
  transition: width 0.3s ease;
}

ul.menu li a:hover::after {
  width: 100%;
}
  


      `}</style>

      <header>
        <nav>
          <div className="logo">ICICAF</div>

          {isMobile && (
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          )}

          <ul className={`menu ${open ? '' : 'hidden'}`} >
            <li>
              <a href="#nosotros" style={{ color: 'white', textDecoration: 'none' }}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#clientes" style={{ color: 'white', textDecoration: 'none' }}>
                Clientes
              </a>
            </li>
            <li>
              <a href="#contacto" style={{ color: 'white', textDecoration: 'none' }}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
