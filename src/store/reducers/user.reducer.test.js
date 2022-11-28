import { userReducer } from './user.reducer'

describe('user reducer', () => {

    const mockUser = {username: 'roni', email: 'roni123@gmail.com', id: 'i101'}
    const initialState = {
        user: null,
        errorMsg: null
    }

    it('creates initial state', async () => {
        const state = userReducer(initialState)
        expect(state).toBe(initialState)
    })

    it('should set a user in the state', async () => {
        let state = userReducer(initialState)
        expect(state.user).toBeFalsy()

        state = userReducer(initialState, {type: 'SET_USER', user: mockUser})
        expect(state.user).toBeTruthy()
        expect(state.errorMsg).toBeFalsy()
    })

    it('should set an error message in the state', async () => {
        let state = userReducer(initialState)
        expect(state.errorMsg).toBeFalsy()

        state = userReducer(initialState, {type: 'SET_ERROR', error: 'an error'})
        expect(state.errorMsg).toBeTruthy()
        expect(state.errorMsg).toBe('an error')
        expect(state.user).toBeFalsy()
    })
})

