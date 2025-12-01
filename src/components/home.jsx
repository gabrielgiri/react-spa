import React from "react";

const Home = (props) => (
  <div className="main-content">
    <div className="container">
      <h2 style={{ marginBottom: "20px", fontWeight: "700" }}>{props.title}</h2>
      <div
        className="article-intro"
        style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#4a5568" }}
      >
        <p>
          La industria del entretenimiento interactivo ha alcanzado un punto de
          inflexión histórico. Nunca antes la línea entre la potencia bruta de
          una computadora de escritorio y la comodidad optimizada de una consola
          de videojuegos había sido tan difusa. Hoy exploramos la arquitectura
          que define nuestra forma de jugar.
        </p>
      </div>

      {/* Galería de Thumbnails */}
      <div className="thumbnail-container">
        <div className="home-thumbnail home-thumbnail-1"></div>
        <div className="home-thumbnail home-thumbnail-2"></div>
        <div className="home-thumbnail home-thumbnail-3"></div>
      </div>

      {/* Cuerpo del Artículo (Mucho Texto) */}
      <div className="article-body" style={{ marginTop: "40px" }}>
        <h3>La Hegemonía del PC Gaming</h3>
        <p>
          Las computadoras personales siempre han representado la vanguardia
          tecnológica. Con la llegada de las tarjetas gráficas de la serie RTX
          40 y la implementación de tecnologías como el DLSS 3.0 y el Ray
          Tracing en tiempo real, el PC sigue siendo la plataforma definitiva
          para los entusiastas que buscan la máxima fidelidad visual. La
          modularidad del PC permite una personalización que ninguna consola
          puede igualar: desde sistemas de refrigeración líquida personalizados
          hasta overclocking de procesadores para exprimir cada hercio de
          rendimiento. Además, el ecosistema de los eSports depende casi
          exclusivamente de la precisión del teclado y el ratón, periféricos que
          ofrecen un nivel de control milimétrico.
        </p>

        <h3>El Renacimiento de las Consolas</h3>
        <p>
          Por otro lado, la novena generación de consolas ha redefinido lo que
          es posible en una caja de 500 dólares. La arquitectura basada en SSD
          NVMe personalizados ha eliminado casi por completo los tiempos de
          carga, cambiando fundamentalmente el diseño de niveles en los
          videojuegos modernos. Ya no son necesarios los "pasillos estrechos" o
          ascensores lentos para ocultar la carga de activos; los mundos son
          continuos e inmediatos.
        </p>

        <p>
          La optimización de bajo nivel que permiten las consolas significa que
          los desarrolladores pueden extraer rendimiento de un hardware cerrado
          de una manera que es imposible en la fragmentada arquitectura de PC.
          Títulos exclusivos demuestran que la dirección artística y la
          optimización a menudo superan a la fuerza bruta computacional.
        </p>

        <h3>Convergencia y Futuro</h3>
        <p>
          Hoy en día, la guerra de plataformas es menos relevante gracias al
          "Cross-play". Un jugador en una consola portátil puede competir contra
          alguien en una torre de PC de alta gama. El futuro apunta hacia la
          nube y el streaming, donde el hardware local podría volverse
          secundario frente a la velocidad de conexión a internet. Sin embargo,
          para los puristas del hardware, nada reemplazará la sensación de
          construir su propia máquina o la emoción de desempaquetar una nueva
          consola el día de su lanzamiento.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
