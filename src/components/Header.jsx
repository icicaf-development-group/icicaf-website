import React, { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(true);
      else setOpen(false);
    };
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center flex-wrap">
        <div className="text-2xl font-bold">ICICAF</div>

        {isMobile && (
          <button
            className="text-3xl md:hidden focus:outline-none hover:text-sky-400 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        )}

        <ul className={`
          ${open ? 'flex' : 'hidden'} 
          md:flex 
          flex-col md:flex-row 
          gap-8 
          w-full md:w-auto 
          mt-4 md:mt-0
          items-center
        `}>
          <li>
            <a 
              href="#nosotros" 
              className="relative hover:text-sky-400 transition-all duration-300 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                         after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a 
              href="#clientes" 
              className="relative hover:text-sky-400 transition-all duration-300 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                         after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              Clientes
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className="relative hover:text-sky-400 transition-all duration-300 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                         after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}