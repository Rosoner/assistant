import * as request from "../lib/request";

// const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/data/hotels'
// const baseUrl = 'http://localhost:3030/data/assistant'
const baseUrl = 'http://localhost:3030/jsonstore/car'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (_idC) => {
    const result = await request.get(`${baseUrl}/${_idC}`, );

    return result;
}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const edit = async (hotelId, carData) => {
    const result = await request.put(`${baseUrl}/${hotelId}`, carData);

    return result;
};
 
export const remove = async (hotelId) => request.remove(`${baseUrl}/${hotelId}`);