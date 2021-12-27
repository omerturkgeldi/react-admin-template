import axios from "axios"

const BASE_URL = 'https://localhost:5001/api/';

export const ENDPOINTS = {
    BOOK: 'Books',
    USER: 'Users',
}


export const createdAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';

    return{
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        fetchByName: name => axios.get(url + name),
        create: newRecord => axios.post(url,newRecord),
        update: (id,updatedRecord) => axios.put(url+id, updatedRecord),
        delete: id => axios.delete(url+id),

    }


}