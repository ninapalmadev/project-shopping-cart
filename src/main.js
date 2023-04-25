import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// Requisito 3
const loadProducts = async () => {
  const sectionProducts = document.querySelector('.products');
  const listProducts = await fetchProductsList('computador');
  // console.log(listProducts);
  listProducts.forEach((product) => {
    const item = createProductElement(product);
    sectionProducts.appendChild(item);
  });
};

loadProducts();
