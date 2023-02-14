Buscador de imagenes por palabra clave.

Esta App esta diseñada como trabajo practico final de la primera parte de la Diplomatura en Diseño Web de la UTN. La idea del trabajo era construir una APP que fuera capaz de mostrar todas las imagenes relacionadas a una palabra clave ingresada en el buscador. Para esto debiamos utilizar la API que nos ofrece UNSPLASH.
Las caracteristicas de la APP son:
- Busqueda de imagenes a partir de una palabra clave.
- Seccion de imagenes RANDOM al iniciar la APP
- Cada busqueda ofrece una serie de fotos las cuales contaran con acceso a informacion extra como: Camara utilizada, Ubicacion, Nombre del usuario que saco la foto, y un link que nos lleva a poder descargar la foto directamente desde la pagina de UNSPLASH.
- La app incluye SCROLL INFINITO cuando nos muestra las imagenes asociadas a la palabra clave.
- Cada imagen cuenta con sus respectivas etiquetas o TAGS que pueden utilizarse para realizar nuevas busquedas de imagenes a partir de estas etiquetas.

Diseño:

 "dependencies": {
        "@react-icons/all-files": "^4.1.0",
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-icons": "^4.7.1",
        "react-infinite-scroll-component": "^6.1.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },
      "devDependencies": {
        "gh-pages": "^5.0.0"
      }
      
Nota: Tanto la posibilidad de consultar el usuario de la foto como el linkeo para acceder a la descarga en UNSPLASH de la misma, fueron sugeridos por los administradores de la API de UNSPLASH para poder pasar la app a produccion, ya que de otra forma la app solo cuenta con 50 solicitudes por hora a la API. De todas formas a pesar de estos cambios realizados aun no fue posible pasar la APP de DEMO a PRODUCCION.
