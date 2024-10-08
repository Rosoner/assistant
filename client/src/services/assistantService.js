import * as request from "../lib/request";

// const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/data/hotels'
// const baseUrl = 'http://localhost:3030/data/assistant'
const baseUrl = 'http://localhost:3030/jsonstore/assistant'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (hotelId) => {
    const result = await request.get(`${baseUrl}/${hotelId}`, );

    return result;
}

export const create = async (hotelData) => {
    const result = await request.post(baseUrl, hotelData);

    return result;
};

export const edit = async (hotelId, hotelData) => {
    const result = await request.put(`${baseUrl}/${hotelId}`, hotelData);

    return result;
};
 
export const remove = async (hotelId) => request.remove(`${baseUrl}/${hotelId}`);