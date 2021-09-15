import { setLoading } from ".";
import { loginPost, get } from "utils/services";

export const authActions = {
    setLoginError: "SET_LOGIN_ERROR",
    setLoggedUser: "SET_LOGGED_USER",
    quitLoggedUser: "QUIT_LOGGED_USER",
    removeProfile: "REMOVE_PROFILE"
}


export const setLoginError = error => ({ 
    type: authActions.setLoginError,
    payload: error
});

export const setLoggedUser = user => ({ 
    type: authActions.setLoggedUser,
    payload: user
});



export const quitLoggedUser = () => ({ type: authActions.quitLoggedUser });

export const removeProfile = () => ({ type: authActions.removeProfile });

export const doLoginThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return loginPost(data)
            .then(res => {
                dispatch(setLoggedUser(res.data.data.user));
                dispatch(setLoginError(''));
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('user_id', res.data.data.user.id)
                return 'success'
            })
            .catch(error => {
                if(error.response.status === 404){
                    dispatch(setLoginError('Credenciales incorrectas'))
                }
                return null
            })
            .finally(() => dispatch(setLoading(false)));
    }
}


export const getUserThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('users/5')
            .then(res => dispatch(setLoggedUser(res.data.data)))
            .catch(error => {
                if(error.response.status === 404) dispatch(setLoginError('Error de autenticación'))
            })
            .finally(() => dispatch(setLoading(false)))
    }
}
