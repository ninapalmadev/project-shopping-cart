export const fetchProduct = () => {

};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.results;
};
