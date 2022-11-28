import users from '../db/users.json'

function get() {
    return Promise.resolve(JSON.parse(JSON.stringify(users)))
}

function post (route, data) {
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