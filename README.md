Plataforma de Contenido Multimedia: Turbi-TV

Autor: Fabián Rodríguez
Versión: 1.0
Fecha: 10-2025

Descripción general

Turbi-TV es un proyecto web desarrollado como práctica de diseño y desarrollo front-end.
El sitio simula una plataforma de streaming de películas y series, con secciones dinámicas y un diseño completamente responsive, moderno y adaptado a dispositivos móviles.
El proyecto fue construido utilizando HTML5, CSS3 y JavaScript puro, priorizando la semántica, accesibilidad y una interfaz visual limpia.

Objetivos del proyecto

Aplicar buenas prácticas en maquetación y estructura semántica con HTML5.
Implementar un diseño adaptable mediante flexbox y CSS Grid Layout.
Incorporar un menú hamburguesa funcional y animado para navegación móvil.
Asegurar una distribución proporcional y estética de los elementos visuales (especialmente en la sección Novedades).
Simular una experiencia de sitio multimedia con organización en secciones (Novedades, Tendencias, Series y Contacto).

Características principales

Diseño responsivo: se adapta automáticamente a pantallas grandes, tablets y móviles.
Layout híbrido: uso combinado de Flexbox y CSS Grid para equilibrar estructura y estética.
Menú hamburguesa animado: transición suave entre el ícono “☰” y “✕” con apertura/cierre gradual.
Navegación fija (sticky header): el encabezado permanece visible al desplazarse.
Animaciones suaves y sombreado personalizado: con variables de color y sombras predefinidas en :root.
Formulario de contacto validado en cliente: validación básica de nombre, email y mensaje.
Footer fijo: siempre visible al final de la página.

Estructura del proyecto

TurbiTV/
│
├── index.html          # Archivo principal (estructura HTML)
├── styles.css          # Hojas de estilo y diseño responsivo
├── main.js             # Lógica del menú y validaciones
│
├── /img                # Carpeta de recursos gráficos
│   ├── logoTurbio.jpg
│   ├── Conjuro4.jpg
│   ├── ElPadrino.jpg
│   ├── LosCazafantasma.jpg
│   ├── IndianaJones.jpg
│   ├── Thelas.jpg
│   ├── Reacher.jpg
│   ├── Umbrella.jpg
│   ├── lacasadepapel.jpg
│   ├── Merlina.jpg
│   ├── Stranger.jpg
│   ├── belleza.jpg
│   └── envidiosa.jpg
│
└── README.md           # Documentación del proyecto (este archivo)


Tecnologías utilizadas

Tecnología	Uso principal
HTML5	Estructura semántica del sitio y secciones principales
CSS3	Estilos, layout responsive con Grid/Flexbox, animaciones
JavaScript (ES6)	Funcionalidad del menú hamburguesa, validación del formulario
Google Fonts / System UI	Tipografía moderna sin dependencias externas
Git & GitHub	Control de versiones y documentación del proyecto

Diseño responsivo
≥960px: 3 columnas en Tendencias, 4 columnas en Series.
≤960px: se reduce a 2 columnas.
≤760px: el menú se convierte en hamburguesa, las Novedades pasan a una sola columna.
≤420px: Series se muestra en una sola columna.

Cómo ejecutar el proyecto

Clonar o descargar el repositorio:
git clone https://github.com/frodriguez78/turbi-tv.git
Abrir el archivo index.html directamente en tu navegador.

Detalles técnicos destacados

El menú hamburguesa alterna entre estados usando clases .is-open y animaciones CSS.
La sección Novedades utiliza CSS Grid (2 columnas) con align-items: stretch para igualar la altura entre la imagen y el texto.
Las cards de Tendencias y Series implementan aspect-ratio para mantener proporciones visuales.
Se usan variables CSS globales (:root) para mantener coherencia visual y facilitar futuras modificaciones.
El footer se mantiene siempre al fondo gracias al layout flex de .page.

Licencia

Puedes usarlo, modificarlo o adaptarlo libremente con fines personales o educativos, citando al autor.

Autor

👤 Fabián Rodríguez
Desarrollador Front-End | Diseño Web Responsivo
📧 frodriguez78@gmail.com

Año 2025
