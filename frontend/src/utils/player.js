import axios from "axios";

const api= axios.create({
    baseURL:"http://localhost:8080/player",
    headers:{
        "content-type":"application/json"
    }
});

export const getAllPlayerData = async (endpoint) =>{
    try{
        const response = await api.get(endpoint);
        return response.data
    }catch (error){
        console.error("GET Error:", error);
        throw error;
    }
}

export const getPlayerDataId = async (endpoint) =>{
    try{
        const response = await api.get(endpoint);
        return response.data
    }catch (error){
        console.error("GET Error:", error);
        throw error;
    }
}

export const AddPlayerData = async (endpoint,player) =>{
    try{
        const response = await api.post(endpoint,player);
        return response.data
    }catch (error){
        console.error("POST Error:", error);
        throw error;
    }
}