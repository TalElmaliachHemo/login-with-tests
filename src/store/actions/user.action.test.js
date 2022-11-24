import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { userService } from '../../services/user-service'
import { doLogin } from './user.action'

jest.mock('../services/user-service');

describe('UserActions', () => {
    let mockStore, store

    const authUser = { username: 'puki', password: '123456' }
    const mockUser = { username: 'puki', email: 'puki@smhuki.com', id: '101' }

    beforeEach(() => {
        const middlewares = [thunk];
        userService.login.mockReset()
        mockStore = configureMockStore(middlewares)
        store = mockStore({})
    });

    it('creates SET_USER when login success', async () => {
        const httpResp = mockUser;
        userService.login.mockResolvedValue(httpResp)

        await store.dispatch(doLogin(authUser))

        const action = store.getActions() [0]
        expect(action.type).toBe('SET_USER')
    })

    it('creates SET_ERROR when login fail', async () => {
        const httpResp = {};
        userService.login.mockRejectedValue(httpResp)

        await store.dispatch(doLogin(authUser))
        const action = store.getActions()[0]
        expect(action.type).toBe('SET_ERROR')
    })
})