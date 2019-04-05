import React from 'react';

const burgerContext = React.createContext({
  addIngredient: (type) => {},
  removeIngredient: (type) => {},
  cancelModal: () => {}
})

export default burgerContext;
