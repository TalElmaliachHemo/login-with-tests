import users from '../db/users.json'

/**
 * @param  {String} route
 * @param  {Object=} config
 */
function get(route, config) {
    return Promise.resolve(JSON.parse(JSON.stringify(users)))
}

/**
 * @param  {String} route
 * @param  {Object} data
 * @param  {Object=} config
 */
function post (route, data, config) {
    const user = users.find(user => user.username === data.username)
    if (!user) {
        const errors = {
            general: 'Username or password not exist'
        }
        return Promise.reject(errors)
    }
    
    return Promise.resolve(JSON.parse(JSON.stringify(user)))
}

export const httpService = {
    get,
    post,
}