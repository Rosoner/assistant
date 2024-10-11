import * as request from "../lib/request";

// const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/data/hotels'
// const baseUrl = 'http://localhost:3030/data/assistant'
const baseUrl = 'http://localhost:3030/jsonstore/cars'
//const baseUrl = 'http://localhost:3030/data/cars'



export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`, );

    return result;
}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const edit = async (carId, carData) => {
    const result = await request.put(`${baseUrl}/${carId}`, carData);

    return result;
};
 
export const remove = async (carId) => request.remove(`${baseUrl}/${carId}`);