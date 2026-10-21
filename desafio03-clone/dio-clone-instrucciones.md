# DIO Clone — Implementación desde Figma

## Objetivo

Implementar en React el diseño "DIO-CLONE" de Figma: un clon de la plataforma DIO con 4 pantallas (Home, Login, Cadastro y Usuário home). El resultado debe ser fiel al diseño en colores, tipografía, espaciados y tamaños.

## Archivo de Figma

- URL: https://www.figma.com/design/vjTpi4i06V8K2RHMDyalKk/DIO-CLONE
- fileKey: `vjTpi4i06V8K2RHMDyalKk`
- Página: `Page 1` (`0:1`)

Usa el MCP de Figma. Para cada pantalla y componente llama a `get_design_context` con el `nodeId` indicado abajo (y `get_screenshot` si necesitas comparar visualmente). Extrae los valores exactos (colores, fuentes, tamaños, radios, bordes) del diseño; no los inventes. Descarga las imágenes y el logo con los assets que devuelve la herramienta y guárdalos en `src/assets/`.

## Stack

- React + Vite (JavaScript)
- styled-components para estilos (un `styles.js` por componente/página)
- react-router-dom para las rutas
- react-hook-form + yup para validar los formularios
- react-icons para los íconos de los inputs (e‑mail, candado, usuario) y la lupa del buscador

## Estructura sugerida

```
src/
  assets/            # logo, imagen del banner, avatares
  components/
    Header/          # variantes: sin login (Entrar/Cadastrar) y autenticado (buscador + avatar)
    Button/          # "Button outlined" con variantes primary/secondary
    Input/           # input con ícono a la izquierda, mensaje de error
    Card/            # tarjeta del feed
    UserInfo/        # ítem del ranking con barra de progreso
  pages/
    Home/
    Login/
    Cadastro/
    Feed/            # pantalla "Usuário home"
  styles/
    global.js        # reset, fuente y color de fondo globales
  App.jsx            # rutas
  main.jsx
```

## Componentes (nodos en Figma)

| Componente | nodeId | Notas |
|---|---|---|
| Header | `1:31` (componente), `2:120` (versión autenticada) | Logo DIO, links "Live Code" y "Global", botones "Entrar"/"Cadastrar". La versión autenticada oculta los botones y muestra buscador ("BUSCAR" con lupa), avatar y chevron. Hacer un solo componente con prop `autenticado`. |
| Button outlined | `1:29`, `2:81` | Borde exterior + rectángulo interior. Recibe `title`, `variant`, `onClick`, `type`. |
| Input | `2:70` | 275×30. Versión con ícono: `2:75` (contraseña). Recibe `leftIcon`, `name`, `control`, `errorMessage`, `placeholder`, `type`. |

## Pantallas

### 1. Home — ruta `/` — nodeId `1:2`
- Izquierda: título "Implemente" + "o seu futuro global agora!" (frame `1:28`), texto de apoyo debajo.
- Botón "Começar agora" (`1:29`) que navega a `/login`.
- Derecha: imagen del banner (`1:20`, 563×366).

### 2. Login — ruta `/login` — nodeId `1:32`
- Izquierda: texto "A plataforma para você aprender com experts..." (`1:36`).
- Formulario (`2:82`): título "Faça seu login" (en el diseño el texto dice "Faça seu cadastro"; confirmar con el usuario cuál usar), subtítulo "Faça seu login e make the change._", inputs de e‑mail y senha, botón "Entrar", links "Esqueci minha senha" y "Criar conta" (este último navega a `/cadastro`).
- Validación con yup: e‑mail válido y obligatorio; senha obligatoria con mínimo 3 caracteres. Mostrar mensajes de error bajo cada input.
- Al enviar correctamente, navegar a `/feed`.

### 3. Cadastro — ruta `/cadastro` — nodeId `101:19`
- Izquierda: el mismo texto de la plataforma (`101:21`).
- Formulario (`101:22`): título "Comece agora grátis", subtítulo "Crie sua conta e make the change._", inputs de nome completo (ícono de usuario), e‑mail y senha, botón "Criar minha conta", texto de términos ("Ao clicar em 'criar minha conta grátis'...") y link "Já tenho conta. Fazer login" que navega a `/login`.
- Misma validación que el login más nombre obligatorio.

### 4. Feed (Usuário home) — ruta `/feed` — nodeId `2:83`
- Header autenticado (`2:120`).
- Columna izquierda: título "Feed" (`2:139`) y lista de tarjetas (`2:154`, `2:155`). Cada tarjeta: imagen superior (767×160), avatar, nombre del autor, "Há 8 minutos", título del proyecto, descripción con "Ver Mais", hashtags y contador de likes (ícono de corazón + número).
- Columna derecha: "# RANKING 5 TOP DA SEMANA" (`2:199`) con 5 usuarios: avatar 42×42, nombre y barra de progreso (fondo 137 px y relleno según el porcentaje del usuario).
- Usar datos mock en un array para las tarjetas y el ranking; renderizar con `.map()`.

## Requisitos

- Diseño base de 1280 px; contenido centrado con ancho máximo de ~1280 px. Añadir un comportamiento responsive razonable (columnas apiladas por debajo de ~900 px).
- Componentes reutilizables: el Header, Button e Input se usan en varias pantallas, no los dupliques.
- Fuente y colores del tema definidos una sola vez (en `global.js` o un `theme` de styled-components) a partir de los valores de Figma.
- Textos en portugués, tal como aparecen en el diseño.

## Orden de trabajo

1. Crear el proyecto con Vite e instalar dependencias.
2. Leer con el MCP de Figma los componentes (Header, Button, Input) y crear los estilos globales.
3. Implementar las pantallas en este orden: Home → Login → Cadastro → Feed.
4. Configurar las rutas y la navegación entre pantallas.
5. Ejecutar `npm run dev`, comparar cada pantalla con `get_screenshot` del nodo correspondiente y corregir diferencias.
