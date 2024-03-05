// Асинхронная функция для получения всех данных с сервера

export const getClients = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/clients', {
      method: 'GET'
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

// Асинхронная функция для добавления + изменения данных на сервере
export const sendClientData = async (client, method, id = null) => {
  try {
    const response = await fetch(`http://localhost:3000/api/clients${method === 'POST' || !id ? '' : `/${id}`}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(client)
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

// Асинхронная функция для удаления данных с сервера
export const deleteClientItem = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
}

// Асинхронная функция для поиска данных на сервере
export const findClient = async (value) => {
  try {
    const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
      method: 'GET'
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}
