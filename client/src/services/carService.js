import * as request from "../lib/request";

// const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/data/hotels'
// const baseUrl = 'http://localhost:3030/data/assistant'
const baseUrl = 'http://localhost:3030/jsonstore/cars'


export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (_idc) => {
    const result = await request.get(`${baseUrl}/${_idc}`, );

    return result;
}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const edit = async (_idc, carData) => {
    const result = await request.put(`${baseUrl}/${_idc}`, carData);

    return result;
};
 
export const remove = async (_idc) => request.remove(`${baseUrl}/${_idc}`);