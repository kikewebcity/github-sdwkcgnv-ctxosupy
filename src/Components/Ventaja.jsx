import React from 'react';
import '../App.css';
import NoticiasSustentables from './NoticiasSustentables';

const Ventaja = () => {
  return (
    <div className="ventaja-pagina-maestra">
      <section className="ventaja-hero-tecnico">
        <h1 className="titulo-seccion-productos">INNOVACIÓN Y VENTAJA COMPETITIVA</h1>
        <p className="descripcion-cabecera-tecnica">
          Redefinimos la eficiencia constructiva mediante la transformación de celulosa en un sistema de alto rendimiento estructural, acústico y ecológico.
        </p>
      </section>

      <section className="ventaja-grid-contenedor">
        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">01</span>
            <h3 className="ventaja-titulo-tarjeta">ECONOMÍA CIRCULAR Y SUSTENTABILIDAD</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            Producto estrictamente amigable con el medio ambiente. La materia prima se obtiene a través de la recuperación de desechos, mitigando la contaminación activa y transformando la celulosa en un elemento arquitectónico funcional.
          </p>
        </div>

        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">02</span>
            <h3 className="ventaja-titulo-tarjeta">RESISTENCIA MECÁNICA EXTREMA</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            Cada unidad resiste hasta 1.5 toneladas de presión antes del aplastamiento. Es un material diseñado con una altísima resistencia a la deformación, garantizando la estabilidad y seguridad en muros divisorios.
          </p>
        </div>

        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">03</span>
            <h3 className="ventaja-titulo-tarjeta">BARRERA ACÚSTICA INTEGRADA</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            El sistema atenúa hasta 37.6 decibeles. La densidad del material impide el paso de frecuencias sonoras, garantizando privacidad total y bloqueando la filtración de conversaciones entre espacios contiguos.
          </p>
        </div>

        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">04</span>
            <h3 className="ventaja-titulo-tarjeta">SISTEMA ULTRA LIGERO</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            Evita la fatiga estructural en tu edificacion. Nuestros bloques tienen un peso de apenas 2.15 kilogramos, una reduccion drastica frente a los 8 kilogramos de un bloque convencional ligero.
          </p>
        </div>

        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">05</span>
            <h3 className="ventaja-titulo-tarjeta">ENSAMBLE DIRECTO SIN DESPERDICIOS</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            Eliminamos la necesidad de canaletas, rieles, pijas, pastas y herramientas complejas. Adquieres unicamente el metraje exacto que tu proyecto demanda, erradicando la generacion de escombros, polvo y mermas de material.
          </p>
        </div>

        <div className="ventaja-tarjeta-bloque">
          <div className="ventaja-icono-cabecera">
            <span className="ventaja-numero">06</span>
            <h3 className="ventaja-titulo-tarjeta">EFICIENCIA FINANCIERA Y ACABADO RÚSTICO</h3>
          </div>
          <p className="ventaja-texto-tarjeta">
            El costo final de construccion es inferior al de sistemas de yeso encartonado. Ademas, cualquier operador puede levantarlo sin especializacion, logrando un acabado rustico inmediato que solo requiere pintura de base agua, eliminando tiempos de aplanado.
          </p>
        </div>
      </section>

      <NoticiasSustentables />
      
    </div>
  );
};

export default Ventaja;
