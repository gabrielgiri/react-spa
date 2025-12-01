import React from "react";

const Impresoras = (props) => (
  <div className="main-content">
    <div className="container">
      {/* Título Principal */}
      <h2 style={{ marginBottom: "20px", fontWeight: "700" }}>
        Impresoras: Tecnología para el Papel Digital
      </h2>

      {/* Sección Introductoria Expandida */}
      <div
        className="article-intro"
        style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#4a5568" }}
      >
        <p>
          Una impresora es un dispositivo esencial que actúa como el puente
          físico entre la información digital y el mundo real. Convierte datos
          de una computadora o dispositivo móvil en una copia física sobre papel
          u otros materiales. Su evolución ha ido de la mano con la
          conectividad, pasando de simples periféricos a centros de trabajo
          multifuncionales conectados a la nube.
        </p>
      </div>

      {/* Imagen Representativa (Impresora Multifuncional) */}
      <div
        className="printer-image"
        style={{
          width: "100%",
          height: "400px",
          // Usando una URL de imagen estable de una impresora moderna
          backgroundImage:
            'url("https://images.pexels.com/photos/3321798/pexels-photo-3321798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      ></div>

      {/* Cuerpo del Artículo Detallado */}
      <div className="article-body">
        <h3>Tecnologías Dominantes: Inyección de Tinta vs. Láser</h3>
        <p>
          El mercado de impresoras se divide principalmente en dos tecnologías,
          cada una optimizada para diferentes necesidades de uso:
        </p>

        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            margin: "20px 0",
          }}
        >
          <li style={{ marginBottom: "10px" }}>
            **Inyección de Tinta:** Estas impresoras utilizan pequeños
            inyectores para rociar diminutas gotas de tinta líquida sobre el
            papel. Son ideales para la impresión a color, especialmente
            fotografías de alta calidad, gracias a su excelente reproducción de
            tonos y detalles. Modelos modernos con tanques de tinta recargables
            (*EcoTank*) han reducido significativamente el costo por página.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Láser:** Emplean un tambor fotosensible y tóner (polvo seco). Un
            rayo láser dibuja la imagen o el texto en el tambor, el cual atrae
            el tóner y lo transfiere al papel, fijándolo con calor. Son la
            opción preferida para entornos de oficina debido a su alta
            velocidad, bajo costo por página en blanco y negro, y su capacidad
            para manejar grandes volúmenes de impresión.
          </li>
        </ul>

        <h3>El Auge de los Equipos Multifuncionales (MFP)</h3>
        <p>
          Hoy en día, la mayoría de las impresoras domésticas y de oficina son
          dispositivos **MFP (Multifunction Peripherals)** que combinan cuatro
          funciones esenciales:
        </p>

        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "20px",
            margin: "20px 0",
          }}
        >
          <li style={{ marginBottom: "10px" }}>
            **Impresión:** La función básica.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Escaneo:** Digitalizar documentos físicos.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Copiado:** Duplicar documentos sin necesidad de una PC.
          </li>
          <li style={{ marginBottom: "10px" }}>
            **Fax:** (Menos común, pero aún presente en modelos de oficina).
          </li>
        </ol>

        <h3>Conectividad Inalámbrica y la Nube</h3>
        <p>
          La conectividad ha revolucionado la impresión. Casi todas las
          impresoras modernas soportan **Wi-Fi** y funciones de impresión móvil
          como AirPrint (Apple) y Google Cloud Print o aplicaciones nativas del
          fabricante. Esto permite imprimir documentos directamente desde un
          smartphone, tablet o incluso desde cualquier lugar a través de
          servicios en la nube, haciendo que la dependencia del cable USB sea
          cosa del pasado.
        </p>
      </div>
    </div>
  </div>
);

export default Impresoras;
