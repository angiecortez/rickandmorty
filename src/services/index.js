import axios from 'axios';

export const getUsers = async () => {
  let data;
  await axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
      data = response.data;
    })
    .catch((e) => console.log('error', e));
  return data;
};
