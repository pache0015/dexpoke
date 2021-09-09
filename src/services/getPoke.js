import axios from "axios";

export default function getOnePokeService(url){
    return axios.get(`${url}`)
        .then(response => {
            return response.data;
        })
        .catch((error) => {
            console.log('error ' + error);
            return error;
        });
}