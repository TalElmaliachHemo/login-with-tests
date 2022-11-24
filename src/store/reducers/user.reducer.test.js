
import UserReducer from './user.reducer'

describe('UserReducer', () => {

    const mockUser = {username: 'puki', email: 'puki@smhuki.com', id: '101'}
    const initialState = {
        user: null,
        error: null
    }

    it('creates initial state', async () => {
        const state = UserReducer(initialState)
        expect(state).toBe(initialState)
    })

    it('should set a user in the state', async () => {
        let state = UserReducer(initialState)
        expect(state.user).toBeFalsy()

        state = UserReducer(initialState, {type: 'SET_USER', user: mockUser})
        expect(state.user).toBeTruthy()
        expect(state.error).toBeFalsy()
    })

    it('should set an error message in the state', async () => {
        let state = UserReducer(initialState)
        expect(state.error).toBeFalsy()

        state = UserReducer(initialState, {type: 'SET_ERROR', error: 'an error'})
        expect(state.error).toBeTruthy()
        // expect(state.error).toBe('an error')
        expect(state.user).toBeFalsy()
    })
})

