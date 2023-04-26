import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products');

// Requisito 4
const putLoading = () => {
  const span = document.createElement('span');
  span.innerText = 'carregando...';
  span.classList.add('loading');
  sectionProducts.appendChild(span);
};

const removeLoading = () => {
  const span = document.querySelector('.loading');
  span.remove();
};

// Requisito 3
const loadProducts = async () => {
  putLoading();
  try {
    const listProducts = await fetchProductsList('computador');
    // console.log(listProducts);
    listProducts.forEach((product) => {
      const item = createProductElement(product);
      sectionProducts.appendChild(item);
    });
  } catch {
    const span = document.createElement('span');
    span.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    span.classList.add('error');
    sectionProducts.appendChild(span);
  }
  removeLoading();
};

loadProducts();
