import { userService } from '../../services/user.service';

// Creators
const _setUser = (user) => ({ type: 'SET_USER', user });
const _setError = () => ({ type: 'SET_ERROR', error: "Could not logged in" });

export function doLogin({username, password}) {
    return async (dispatch) => {
        try {
            const loggedInUser = await userService.login(username, password);
            dispatch(_setUser(loggedInUser));
        } catch (err) {
            dispatch(_setError())
        }
    }
}
