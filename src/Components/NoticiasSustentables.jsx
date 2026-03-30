import React, { useState, useEffect } from 'react';
import '../App.css';

const NoticiasSustentables = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const apiKey = 'TU_CLAVE_API_GRATUITA_AQUI';
        const url = `https://gnews.io/api/v4/search?q=construccion+sustentable+ecologia&lang=es&max=3&apikey=${apiKey}`;
        
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        
        if (datos.articles) {
          setNoticias(datos.articles);
        }
        setCargando(false);
      } catch (error) {
        console.error(error);
        setCargando(false);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <section className="noticias-dinamicas-seccion">
      <div className="noticias-cabecera">
        <h2 className="noticias-titulo">ACTUALIDAD EN INGENIERÍA SUSTENTABLE</h2>
        <p className="noticias-subtitulo">Mantente informado sobre los últimos avances en ecología y nuevos materiales a nivel global.</p>
      </div>

      <div className="noticias-cuadricula">
        {cargando ? (
          <div className="estado-carga">Sincronizando base de datos global...</div>
        ) : noticias.length > 0 ? (
          noticias.map((articulo, indice) => (
            <a key={indice} href={articulo.url} target="_blank" rel="noopener noreferrer" className="noticia-tarjeta-enlace">
              <div className="noticia-tarjeta">
                <div className="noticia-imagen-contenedor">
                  <img src={articulo.image || '/ladrillodetalle.png'} alt={articulo.title} />
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
          <div className="estado-carga">No se lograron recuperar los artículos en este momento.</div>
        )}
      </div>
    </section>
  );
};

export default NoticiasSustentables;
