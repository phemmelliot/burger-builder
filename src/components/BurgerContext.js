import React from 'react';

const burgerContext = React.createContext({
  addIngredient: (type) => {},
  removeIngredient: (type) => {},
  cancelModal: () => {},
  ingredients: {},
})

export default burgerContext;
