import { userReducer } from './user.reducer'

describe('user reducer', () => {

    const mockUser = {username: 'roni', email: 'roni123@gmail.com', id: 'i101'}
    const initialState = {
        user: null,
        error: null
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
        expect(state.error).toBeFalsy()
    })

    it('should set an error message in the state', async () => {
        let state = userReducer(initialState)
        expect(state.error).toBeFalsy()

        state = userReducer(initialState, {type: 'SET_ERROR', error: 'an error'})
        expect(state.error).toBeTruthy()
        expect(state.error).toBe('an error')
        expect(state.user).toBeFalsy()
    })
})

