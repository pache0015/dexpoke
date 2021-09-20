import axios from "axios";

export default function getPokeById(id){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.data;
        })
        .catch((error) => {
            console.log('error ' + error);
            return error;
        });
}