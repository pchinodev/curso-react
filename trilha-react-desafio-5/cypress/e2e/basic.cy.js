describe('personal blog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('lists the sample article from Supabase', () => {
    cy.get('main h1').should('be.visible');
    cy.contains('main a', 'Bienvenido a mi blog').should('be.visible');
  });

  it('opens the article and renders its Markdown content', () => {
    cy.contains('main a', 'Bienvenido a mi blog').click();
    cy.get('main h1').should('contain.text', 'Bienvenido a mi blog');
    cy.get('.prose').should('contain.text', 'Hola, mundo');
  });
});
