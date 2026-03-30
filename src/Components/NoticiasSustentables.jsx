import React, { useState, useEffect } from 'react';
import '../App.css';

const NoticiasSustentables = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const apiKey = '621cf335cb3da12a242495901de851a8';

        // Solo una palabra clave genérica para probar conexión
        const url = `https://gnews.io/api/v4/search?q=ecologia&lang=es&apikey=${apiKey}`;

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Imprime en la consola para que veas qué está pasando (F12 en tu navegador)
        console.log('Datos recibidos de GNews:', datos);

        if (datos.articles && datos.articles.length > 0) {
          setNoticias(datos.articles);
        } else {
          console.log('La API conectó pero no trajo artículos.');
        }
        setCargando(false);
      } catch (error) {
        console.error('Error técnico de conexión:', error);
        setCargando(false);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <section className="noticias-dinamicas-seccion">
      <div className="noticias-cabecera">
        <h2 className="noticias-titulo">
          ACTUALIDAD EN INGENIERÍA SUSTENTABLE
        </h2>
        <p className="noticias-subtitulo">
          Sincronizado con los últimos avances en materiales y ecología a nivel
          global.
        </p>
      </div>

      <div className="noticias-cuadricula">
        {cargando ? (
          <div className="estado-carga">
            Conectando con servidores de noticias...
          </div>
        ) : noticias.length > 0 ? (
          noticias.map((articulo, indice) => (
            <a
              key={indice}
              href={articulo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="noticia-tarjeta-enlace"
            >
              <div className="noticia-tarjeta">
                <div className="noticia-imagen-contenedor">
                  <img src={articulo.image} alt={articulo.title} />
                </div>
                <div className="noticia-contenido">
                  <span className="noticia-fuente">{articulo.source.name}</span>
                  <h3 className="noticia-titular">{articulo.title}</h3>
                  <p className="noticia-extracto">{articulo.description}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="estado-carga">
            No se encontraron artículos recientes bajo estos criterios.
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticiasSustentables;
