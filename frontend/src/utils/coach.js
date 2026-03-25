import axios from "axios";

const api= axios.create({
    baseURL:"http://localhost:8080/coach",
    headers:{
        "content-type":"application/json"
    }
});

export const getAllCoachData = async (endpoint) =>{
    try{
        const response = await api.get(endpoint);
        return response.data
    }catch (error){
        console.error("GET Error:", error);
        throw error;
    }
}

export const getCoachDataId = async (endpoint) =>{
    try{
        const response = await api.get(endpoint);
        return response.data
    }catch (error){
        console.error("GET Error:", error);
        throw error;
    }
}

export const AddCoachData = async (endpoint,player) =>{
    try{
        const response = await api.post(endpoint,player);
        return response.data
    }catch (error){
        console.error("POST Error:", error);
        throw error;
    }
}