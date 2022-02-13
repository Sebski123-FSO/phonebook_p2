import axios from "axios";

const BASE_URL = "/api/persons";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then((response) => {
    return response.data;
  });
};

const add = (newContact) => {
  const request = axios.post(BASE_URL, newContact);
  return request.then((response) => {
    return response.data;
  });
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const update = (updatedContact) => {
  const request = axios.put(`${BASE_URL}/${updatedContact.id}`, updatedContact);
  return request.then((response) => {
    return response.data;
  });
};

export default {
  getAll,
  add,
  deletePerson,
  update,
};
