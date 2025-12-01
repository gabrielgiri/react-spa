import React from "react";

const Notebook = (props) => (
  <div className="main-content">
    <div className="container">
      {/* Título Principal */}
      <h2 style={{ marginBottom: "20px", fontWeight: "700" }}>
        Notebooks Gamers: Potencia y Portabilidad
      </h2>

      {/* Sección Introductoria Expandida */}
      <div
        className="article-intro"
        style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#4a5568" }}
      >
        <p>
          Una **notebook gamer** es una computadora portátil diseñada
          específicamente para ofrecer un rendimiento superior en videojuegos y
          otras tareas exigentes como la edición de video o el renderizado 3D.
          Se diferencian de las laptops comunes por integrar **hardware de alta
          gama** en un chasis compacto, logrando un equilibrio entre poder de
          procesamiento y movilidad.
        </p>
      </div>

      <div
        className="notebook-image"
        style={{
          width: "100%",
          height: "400px",
          // Cambiar la URL temporal por una estable:
          backgroundImage:
            'url("https://images.pexels.com/photos/7771746/pexels-photo-7771746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      ></div>

      {/* Cuerpo del Artículo Detallado */}
      <div className="article-body">
        <h3>Componentes Clave que Marcan la Diferencia</h3>
        <p>
          La capacidad de una notebook gamer para ejecutar los títulos más
          recientes con tasas de cuadros (FPS) elevadas reside en su selección
          de componentes, mucho más robusta que en las portátiles estándar.
        </p>

        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            margin: "20px 0",
          }}
        >
          <li style={{ marginBottom: "10px" }}>
            **Tarjeta Gráfica (GPU) Dedicada:** Es el corazón del rendimiento
            gaming. Modelos de alta gama (NVIDIA RTX o AMD Radeon) permiten el
            uso de tecnologías avanzadas como el **Ray Tracing** y el
            **DLSS/FSR**, esenciales para gráficos realistas.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Procesador (CPU) de Alto Rendimiento:** CPUs de la serie H (alto
            consumo y potencia) de Intel o Ryzen garantizan que el procesamiento
            del juego y las tareas secundarias no generen cuellos de botella.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Pantallas de Alta Tasa de Refresco:** La fluidez visual se logra
            con paneles de **120Hz, 144Hz o superiores**, cruciales para juegos
            competitivos. Se combinan con tiempos de respuesta bajos (ms) para
            eliminar el desenfoque de movimiento.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Refrigeración Avanzada:** Dado el calor generado por el hardware
            potente, los sistemas de refrigeración con múltiples ventiladores,
            *heat pipes* y cámaras de vapor son indispensables para mantener las
            temperaturas bajo control y evitar la pérdida de rendimiento
            (*throttling*).
          </li>
        </ul>

        <h3>Ventajas sobre los PCs de Escritorio</h3>
        <p>
          Aunque un PC de escritorio siempre ofrecerá una relación
          precio/rendimiento superior, la notebook gamer ofrece una ventaja
          insuperable: la **portabilidad**. La capacidad de llevar un sistema
          completo y potente a un café, la universidad o un evento de LAN party,
          sin necesidad de monitores externos, es su principal atractivo.
          Además, son soluciones "llave en mano"; no requieren ensamblaje ni
          configuración compleja de *drivers* y componentes.
        </p>

        <h3>Consideraciones al Comprar</h3>
        <p>
          Al elegir una, es crucial considerar el equilibrio entre rendimiento y
          diseño. Los modelos más potentes suelen ser más pesados y voluminosos.
          Si la portabilidad es prioritaria, busca modelos "Thin & Light" que
          sacrifiquen un mínimo de potencia por un chasis más delgado y una
          mejor duración de batería (aunque la autonomía al jugar sigue siendo
          limitada y requiere el cargador).
        </p>
      </div>
    </div>
  </div>
);

export default Notebook;
