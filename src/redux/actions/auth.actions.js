import { clearGuestAndInvitations, handleError, setLoading, showInfoModal } from ".";
import { loginPost, get, post } from "utils/services";
import history from 'utils/history';

export const authActions = {
    setLoginError: "SET_LOGIN_ERROR",
    setLoggedUser: "SET_LOGGED_USER",
    removeLoggedUser: "REMOVE_LOGGED_USER",
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

// Manejo de errores para peticiones de autenticación
const handleAuthError = error => {
    return dispatch => {
        switch(error.response?.data?.error?.code){
            // Para el login
            case 100:
            case 114:
                return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Credenciales incorrectas.`, title: 'Error' }));
            // Para el registro
            case 204:
                return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'Ya existe un usuario con esta dirección de correo electrónico.', title: 'Email duplicado' }));
            // Para el cambio de contraseña
            case 105:
                return dispatch(showInfoModal({ type: 'error', actionModal: () => history.push('/login'), showingTime: 4000, message: 'Esta solicitud ya expiró', title: 'Error' }));
            case 4:
                return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'Esta dirección de correo es errónea o esta mal escrita.', title: 'Error de validación' }));
            case 107:
                return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'No existen usuarios con este email', title: 'Email no encontrado' }));
            // Genérico
            default:
                return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' }));
        }
    }
}


export const removeLoggedUser = () => ({ type: authActions.removeLoggedUser });


export const doLogout = () => {
    return dispatch => {
        localStorage.setItem("token", "");
        localStorage.setItem("user_id", "");
        dispatch(clearGuestAndInvitations());
        dispatch(removeLoggedUser());
        history.push('/login');
    }
}

export const removeProfile = () => ({ type: authActions.removeProfile });

export const doLoginThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return loginPost(data)
            .then(res => {
                dispatch(setLoggedUser(res.data.data.user));
                dispatch(setLoginError(''));
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem('user_id', res.data.data.user.id);
                history.push('/');
            })
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}


export const getUserThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('users/me')
            .then(res => dispatch(setLoggedUser(res.data.data)))
            .catch(error => dispatch(handleError(error)))
            .finally(() => dispatch(setLoading(false)))
    }
}


export const createUserThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return post('users', data)
            .then(() => dispatch(showInfoModal({ type: 'success', autoClose: false, actionModal: () => history.push('/login'), message: 'Tu usuario se encuentra en proceso de verificación por parte de los administradores de la unidad residencial. ¡Te mantendremos informado acerca del mismo!', title: 'Usuario creado correctamente' })))
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const recoveryPasswordThunk = email => {
    const data = { email, reset_url: `${process.env.REACT_APP_HOST}/recuperar-contraseña` }
    return dispatch => {
        dispatch(setLoading(true))
        return post('auth/password/request', data)
            .then(() => dispatch(showInfoModal({ type: 'success', actionModal: () => history.push('/login'), message: 'Se envió un email a tu correo electrónico con los siguientes pasos para restaurar tu contraseña', title: 'En camino...' })))
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const changePasswordThunk = data => {
    return dispatch => {
        dispatch(setLoading(true))
        return post('auth/password/reset', data)
            .then(() => dispatch(showInfoModal({ type: 'success', actionModal: () => history.push('/login'), message: 'Contraseña actualizada correctamente' })))
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}
