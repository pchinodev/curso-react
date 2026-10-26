export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Mi blog personal';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Ideas, aprendizajes y proyectos de desarrollo';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Un espacio personal para compartir lo que voy aprendiendo.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
