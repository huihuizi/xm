import axios from "axios";
// import { resolve } from "url";
var instance = axios.create({
    baseURL:"https://api.it120.cc/small4/",
    timeout:5000
})
export default function muajax(config){
    return instance(config)
}