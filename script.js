//your code here
cy.get('ol li:last audio source')
  .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');
