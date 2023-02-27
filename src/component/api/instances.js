import axios from "axios";
import {baseUrl} from "./baseUrl";

export const blogInstance = axios.create({
    baseURL: baseUrl
})