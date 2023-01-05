# Reactwordle - Adivina la palabra oculta

## Tabla de contenido

- [Descripcion](#descripcion)
- [Captura de pantalla](#captura-de-pantalla)
- [Link](#link)
- [Ejecutar localmente](#ejecutar-localmente)
- [Tecnologias utilizadas](#tecnologías-utilizadas)
- [Hoja de ruta](#hoja-de-ruta)
- [Autor](#autor)

## Descripcion

Es un juego en el que tenes que adivinar la palabra oculta en cinco intentos.
Cada intento debe ser una palabra válida de 5 letras.
Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
Cada 5 minutos cambia la palabra!

### Captura de pantalla

![Previsualizacion de la pagina web reactwordle](https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672958168/wordle/image_clts0i.png)

> Previsualizacion del sitio web

### Link

- Sitio web: [React Wordle](https://reactwordle.vercel.app/)

### Ejecutar localmente

Clona el proyecto

```bash
  git clone https://github.com/vilaslautaro/Reactwordle.git
```

Vaya a la carpeta del proyecto

```bash
  cd reactwordle
```

Instala las dependencias

```bash
  npm install
```

Inicia la app

```bash
  npm run dev
```

## Tecnologías utilizadas

-React con Vite

-Typescript

-Tailwindcss

## Optimizaciones

-Se utilizo useCallback y memo para optimizar componentes y funciones.

-Se componetizaron los componentes lo mas posible para evitar re-renders innecesarios.

-Se utilizaron customHooks para separar lo mas posible la lógica de los componentes UI y hacer código reutilizable.

-Se utilizo useContext para reutilizar estados en componentes que compartían el mismo.

-Se utilizo lazy loading para los modales.

-Se utilizo localStorage como DB para guardar los datos de usuario del juego.


## Hoja de Ruta
-Agregar testing a componentes UI y a los custom hooks

## Autor
- GitHub [@vilaslautaro](https://github.com/vilaslautaro)
- LinkedIn - [@lautarovilas](https://www.linkedin.com/in/lautarovilas/)