describe('Pokedex', function () {
  this.beforeEach(function() {
    cy.visit('')
  })
  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('Can click on page and get result', function () {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
