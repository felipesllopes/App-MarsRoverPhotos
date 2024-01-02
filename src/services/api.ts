import axios from "axios";

export const key = "euvql4khtokVFQr78Cnf6bInZyEMfR1igp4aIDex";

export const api = axios.create({
    baseURL: "https://api.nasa.gov/",
});
