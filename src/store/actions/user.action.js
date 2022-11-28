import { userService } from '../../services/user.service';

// Creators
const _setUser = (user) => ({ type: 'SET_USER', user });
const _setError = (error) => ({ type: 'SET_ERROR', error });

export function doLogin({username, password}) {
    return async (dispatch) => {
        try {
            const loggedInUser = await userService.login(username, password);
            dispatch(_setUser(loggedInUser));
            return loggedInUser
        } catch (err) {
            dispatch(_setError("Could not logged in"))
        }
    }
}

export function resetErrorMsg() {
    return (dispatch) => {
        dispatch(_setError(null))
    }
}
