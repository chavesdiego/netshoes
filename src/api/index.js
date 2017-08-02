export const getProducts = () =>
  fetch('http://localhost:8080/products').then(products => products.json() )
