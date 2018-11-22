import axios from "axios";

const URL = 'http://localhost:3030/';
const URLGame = URL + 'game/'

export const requireData = async() =>{
    let infoGame = await axios.get(URLGame)
    return infoGame.data
}