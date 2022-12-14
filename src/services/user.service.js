// @ts-check
import {httpService} from './http.service.js'

const userCache = {};

export const userService = {
    login,
}

async function login (username, password) {
    if (userCache[username]) {
        console.log('No need to fetch, retrieving from Cache');    
        return Promise.resolve(userCache[username]);
    }

    const res = await httpService.post('/login', {username, password})
    userCache[username] = res
    return res
}
