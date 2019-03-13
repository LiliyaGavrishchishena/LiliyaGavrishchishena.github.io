import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getData = async ({ name, email, city, phone }, limit, offset) => {
  const response = await axios.get('/', {
    params: {
      name,
      email,
      city,
      phone,
      limit,
      offset
    }
  });
  return response.data;
};

export const updatePerson = async (id, user) => {
  const response = await axios.put(`/update/${id}`, user);
  return response;
};
