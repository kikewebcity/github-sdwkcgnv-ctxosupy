import React from 'react';
import { Leaf, TrendingUp, Cuboid } from 'lucide-react';

const Nosotros = () => {
  return (
    <div className="nosotros-pagina">
      
      <section className="nosotros-banner-verde">
        <div className="nosotros-banner-contenido">
          <img src="/logo-blanco.png" alt="Logo Bricko Blanco" className="nosotros-logo-centro" />
          <p className="nosotros-banner-texto">
            Nuestro slogan, La Revolución Ecológica en Construcción, encapsula nuestra misión de transformar la industria mediante prácticas innovadoras y productos eco amigables. En Bricko, estamos comprometidos a liderar un cambio hacia métodos de construcción más sostenibles y responsables con el medio ambiente.
          </p>
        </div>
      </section>

      <section className="nosotros-zigzag-contenedor">
        
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo">
              <strong>Somos una empresa 100% mexicana</strong>, se distingue como una marca dedicada a la fabricación de productos innovadores para la construcción sostenible.
            </p>
            <p className="zigzag-parrafo">
              Nuestro principal producto, Bloques ecológicos, redefine los estándares de la industria al incorporar materiales reciclados y técnicas avanzadas de producción.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/detalleladrillo.png" alt="Detalle Ladrillo Bricko" />
          </div>
        </div>
        <div className="zigzag-fila reversa">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo">
              <strong>Misión.</strong> Ofrecer una alternativa en el ámbito de la construcción, que ayude a resolver el problema ambiental de residuos sólidos y evitar el agotamiento de los recursos naturales.
            </p>
            <p className="zigzag-parrafo">
              <strong>Visión.</strong> Ser un referente en la industria de la construcción sustentable, con base en criterios de la economía circular.
            </p>
          </div>
          <div className="zigzag-imagen">
            {/* He corregido la ruta y extensión del archivo JPEG aquí */}
            <img src="/muroderecamara.jpg" alt="Muro de recámara Bricko" />
          </div>
        </div>

      </section>

      <section className="nosotros-pilares-contenedor">
        <div className="pilar-tarjeta">
          <div className="pilar-icono">
            <Leaf size={50} color="#388e3c" strokeWidth={1.5} />
          </div>
          <h4 className="pilar-subtitulo">Misión</h4>
          <h2 className="pilar-titulo">TRANSFORMAR</h2>
          <p className="pilar-texto">
            Somos Bricko. Transformamos desechos de papel en arquitectura de vanguardia mediante ingeniería patentada.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono">
            <TrendingUp size={50} color="#388e3c" strokeWidth={1.5} />
          </div>
          <h4 className="pilar-subtitulo">Visión</h4>
          <h2 className="pilar-titulo">LIDERAR</h2>
          <p className="pilar-texto">
            Ser la referencia mundial en arquitectura sostenible, demostrando que la economía circular es el único camino viable para el futuro de la construcción.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono">
            <Cuboid size={50} color="#388e3c" strokeWidth={1.5} />
          </div>
          <h4 className="pilar-subtitulo">Valores</h4>
          <h2 className="pilar-titulo">INNOVAR</h2>
          <p className="pilar-texto">
            <strong>Innovación:</strong> Cuestionamos lo establecido.<br/><br/>
            <strong>Sostenibilidad:</strong> El planeta es primero.<br/><br/>
            <strong>Calidad:</strong> Seguridad sin compromisos.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;