// @ts-check
import {httpService} from './http-service'

const userCache = {};

export const userService = {
    login,
}

/**
* @param  {string} username
* @param  {string} password
*/
async function login (username, password) {
    if (userCache[username]) {
        console.log('No need to fetch, retrieving from Cache');    
        return Promise.resolve(userCache[username]);
    }

    const res = await httpService.post('/login', {username, password})
    userCache[username] = res
    return res
}
