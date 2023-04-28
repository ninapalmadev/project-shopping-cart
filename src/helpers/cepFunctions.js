const cartAddress = document.querySelector('.cart__address');
const input = document.querySelector('.cep-input');

export const getAddress = async (cep) => {
  const awesomeApi = `https://cep.awesomeapi.com.br/json/${cep}`;
  const brasilApi = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const response = await Promise.any([fetch(awesomeApi), fetch(brasilApi)]);
  return response.json();
};

export const searchCep = async () => {
  try {
    const data = await getAddress(input.value);
    console.log(data);
    let address = '';
    if (data.cep) {
      address = `${data.address} - ${data.district} - ${data.city} - ${data.state}`
        || `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
    } else {
      throw new Error('CEP não encontrado');
    }
    cartAddress.innerHTML = address;
  } catch {
    cartAddress.innerHTML = 'CEP não encontrado';
  }
};
