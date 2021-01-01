import axios from 'axios';

// make sure to put "proxy": "http://localhost:5000" in package.json
const serverUrl = 'http://localhost:5000/posts';

export const createPet = (newPet) => axios.post(serverUrl, newPet);
export const getAllPets = () => axios.get(serverUrl);
// export const getOnePet = (id) => axios.get(`${url}/${id}`);