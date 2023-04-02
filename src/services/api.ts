import axios from 'axios';

export const api = axios.create({
 //Obs: para iOS localhost funcion, no andorid tem que usar endereco fisico.
 baseURL: 'http://192.168.8.109:3333'
});