# Blog personal con Next.js y Supabase

Blog renderizado en el servidor con Next.js. La lista de artículos y sus páginas
individuales se consultan dinámicamente desde la tabla `posts` de Supabase. El
contenido de cada artículo se escribe en Markdown.

## Configuración local

1. Instala las dependencias con `npm ci`.
2. Crea un proyecto en [Supabase](https://supabase.com/) y ejecuta
   [`supabase/schema.sql`](./supabase/schema.sql) en el editor SQL. El script
   crea la tabla y una publicación inicial de ejemplo.
3. Copia `.env.example` como `.env.local` y configura los valores del proyecto:

   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   Obtén ambos valores en **Project Settings → API**. Usa la clave `anon` o
   `publishable`; no uses ni publiques la clave `service_role`.
4. Personaliza `BLOG_NAME`, `BLOG_TITLE` y `BLOG_FOOTER_TEXT` en `.env.local`.
5. Inicia el proyecto con `npm run dev` y abre <http://localhost:3000>.

Los archivos `.env.local` no se incluyen en Git. En Netlify, configura las mismas
variables en los ajustes de entorno del sitio.

## Artículos

La portada lista los artículos por fecha, del más reciente al más antiguo. Cada
artículo tiene su propia ruta en `/posts/[id]`. Para publicar, inserta una fila en
`public.posts` desde el editor SQL o el panel de Supabase. La tabla usa estos
campos:

| Campo | Uso |
| --- | --- |
| `id` | UUID que identifica la ruta del artículo; se genera automáticamente |
| `title` | Título |
| `description` | Resumen opcional |
| `body` | Contenido Markdown |
| `created_at` | Fecha de publicación; se genera automáticamente |

La API usa la clave pública de Supabase solo en el servidor y las políticas RLS
permiten lectura pública, sin habilitar escritura anónima. Administra el contenido
desde Supabase.

## Comandos

- `npm run dev`: servidor local.
- `npm run build`: compilación de producción.
- `npm start`: servidor de producción después de compilar.
- `npm test`: pruebas end-to-end de Cypress. Ejecuta `npm run dev` en otra
  terminal y configura Supabase antes de iniciar las pruebas.
