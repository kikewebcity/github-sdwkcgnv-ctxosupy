import React, { useState, useEffect } from 'react';
import './App.css';

import GaleriaAcabados from './Components/GaleriaAcabados';
import FeaturesSection from './Components/FeaturesSection';
import Calculadora from './Components/Calculadora';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Inspiracion from './Components/Inspiracion';
import Productos from './Components/Productos';
import Ventaja from './Components/Ventaja';
import FaqsProductos from './Components/FaqsProductos';

import { Search, ShoppingCart, Truck } from 'lucide-react';
import logoWhite from './assets/logowhite.png';
import iconYt from './assets/iconoyoutube.png';
import iconInsta from './assets/iconoinstagram.png';
import iconFb from './assets/iconofacebook.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buscadorAbierto, setBuscadorAbierto] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vistaActual, setVistaActual] = useState('inicio');

  const heroImages = ['/oficinap.jpg', '/loftp.jpg', '/rinconp.jpg'];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <div className="main-container">
      <div className="top-bar">
        <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
        <span>Envíos a todo el país</span>
      </div>

      <nav className="barra-navegacion">
        <div
          className="contenedor-logo"
          onClick={() => setVistaActual('inicio')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logoWhite} alt="Bricko" className="logo-img" />
        </div>

        <ul
          className={
            menuOpen ? 'enlaces-navegacion activos' : 'enlaces-navegacion'
          }
        >
          <li
            className={vistaActual === 'nosotros' ? 'active-link' : ''}
            onClick={() => {
              setVistaActual('nosotros');
              setMenuOpen(false);
            }}
          >
            Quienes Somos
          </li>
          <li
            className={vistaActual === 'productos' ? 'active-link' : ''}
            onClick={() => {
              setVistaActual('productos');
              setMenuOpen(false);
            }}
          >
            Productos
          </li>
          <li
            className={vistaActual === 'ventaja' ? 'active-link' : ''}
            onClick={() => {
              setVistaActual('ventaja');
              setMenuOpen(false);
            }}
          >
            Ventaja
          </li>
          <li
            className={vistaActual === 'aplicaciones' ? 'active-link' : ''}
            onClick={() => {
              setVistaActual('aplicaciones');
              setMenuOpen(false);
            }}
          >
            Aplicaciones
          </li>
          <li
            className={vistaActual === 'contacto' ? 'active-link' : ''}
            onClick={() => {
              setVistaActual('contacto');
              setMenuOpen(false);
            }}
          >
            Contacto
          </li>
        </ul>

        <div className="iconos-navegacion">
          <div className="contenedor-buscador">
            <input
              type="text"
              className={
                buscadorAbierto ? 'entrada-buscador activa' : 'entrada-buscador'
              }
              placeholder="Buscar material..."
            />
            <Search
              size={22}
              strokeWidth={2.5}
              className="boton-icono"
              onClick={() => setBuscadorAbierto(!buscadorAbierto)}
            />
          </div>
          <ShoppingCart size={22} strokeWidth={2.5} className="boton-icono" />
          <button
            className="boton-hamburguesa"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <main className="contenido-principal">
        {(() => {
          if (vistaActual === 'nosotros') return <Nosotros />;
          if (vistaActual === 'productos') return <Productos />;
          if (vistaActual === 'aplicaciones') return <Inspiracion />;
          if (vistaActual === 'contacto') return <Contacto />;
          if (vistaActual === 'ventaja') return <Ventaja />;

          return (
            <>
              {/* 1. HERO BANNER */}
              <section className="hero-slider">
                {heroImages.map((img, index) => (
                  <div
                    key={index}
                    className={`slide ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
                <div className="hero-slider-content">
                  <h1 className="titulo-monumental-limpio">
                    Bloques ecológicos
                    <br />
                    para tus proyectos
                  </h1>
                  <button
                    className="boton-accion-aislado"
                    onClick={() =>
                      document
                        .querySelector('.seccion-unificada-calculo')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Calcula tu material
                  </button>
                </div>
              </section>

              {/* 2. INTRO */}
              <section className="intro-section">
                <div className="intro-container">
                  <h2 className="intro-title">
                    <strong>
                      Redefine los espacios interiores convirtiendo el papel
                      reciclado en arquitectura.
                    </strong>
                  </h2>
                </div>
              </section>

              {/* 3. FEATURES */}
              <FeaturesSection />

              {/* 4. SECCIÓN UNIFICADA CALCULADORA */}
              <div className="seccion-unificada-calculo">
                <Calculadora />
              </div>

              {/* 5. VALIDACIÓN TÉCNICA (FAQ) */}
              <FaqsProductos />

              {/* 6. GALERÍA DE INSPIRACIÓN */}
              <section className="seccion-inspiracion-unificada">
                <h2 className="titulo-seccion-unificada">
                  GALERÍA DE INSPIRACIONES CON BRICKO
                </h2>
                <div className="carrusel-inspiracion-home">
                  <div className="inspiracion-slide-imagen">
                    <img
                      src="/oficina.png"
                      alt="Espacio Bricko"
                      className="inspiracion-img-img"
                    />
                  </div>
                  <div className="inspiracion-slide-texto">
                    <h3 className="slide-titulo">
                      MODULARIDAD Y CONFORT ACÚSTICO
                    </h3>
                    <p className="slide-parrafo">
                      Nuestros bloques de celulosa prensada segmentan oficinas
                      abiertas de forma rápida, limpia y sin fatiga estructural.
                      La alta densidad de la matriz polimérica garantiza un
                      ambiente de trabajo aislado del ruido.
                    </p>
                    <a
                      href="#"
                      className="slide-enlace-cta"
                      onClick={(e) => {
                        e.preventDefault();
                        setVistaActual('aplicaciones');
                      }}
                    >
                      Ver Aplicaciones Corporativas {'>'}
                    </a>
                  </div>
                </div>
              </section>
            </>
          );
        })()}
      </main>

      <footer className="footer">
        <div className="footer-overlay"></div>
        <div className="footer-container">
          <div className="footer-col left-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p className="footer-slogan">
              Revolución Ecológica en Construcción
            </p>
          </div>
          <div className="footer-col center-col">
            <ul className="footer-links">
              <li>Preguntas Frecuentes</li>
              <li>Tiempos de Envío</li>
              <li>Garantía y Devoluciones</li>
              <li>Aviso de Privacidad</li>
            </ul>
          </div>
          <div className="footer-col right-col">
            <p className="footer-contact">Email: ventas@bricko.com</p>
            <p className="footer-contact">Tel: -55-55-55-55-55</p>
            <div className="social-icons">
              <img src={iconYt} alt="YT" className="social-img" />
              <img src={iconInsta} alt="IG" className="social-img" />
              <img src={iconFb} alt="FB" className="social-img" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
