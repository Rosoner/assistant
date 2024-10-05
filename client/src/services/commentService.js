import * as request from '../lib/request';

//const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/data/comments';
const baseUrl = 'http://localhost:3030/data/assistants';

export const getAll = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (carId, text) => {
    const newComment = await request.post(baseUrl, {
        carId,
        text,
    });

    return newComment;
};
