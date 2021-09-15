import axios from "axios";

export default function getAllPokeService(cant){
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${cant}`)
        .then(response => {
            return response.data.results;
        })
        .catch((error) => {
            console.log('error ' + error);
            return error;
        });
}
