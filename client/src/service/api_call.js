import axios from 'axios';

const isNullOrEmpty = (value) => value === null || value === undefined || value === '';

const url = isNullOrEmpty(process.env.REACT_APP_API_URL) ? 'http://localhost:5000/api' : process.env.REACT_APP_API_URL;
const urlServ = "http://20.224.16.120:5000/api"
const http = axios.create({
  baseURL: urlServ,
  responseType: "json",
  method: "GET",
  ContentType: "application/json",
  headers: {
    "Access-Control-Allow-Origin": urlServ,
    'Authorization': 'Bearer ' + localStorage.getItem("token")
  },
});

export default http;