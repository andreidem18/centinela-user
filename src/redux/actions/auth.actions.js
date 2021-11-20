import { clearGuestAndInvitations, handleError, removeProfileThunk, setLoading, setProfile, showInfoModal } from ".";
import { get, notTokenPost } from "utils/services";
import history from 'utils/history';

export const authActions = {
    setLoggedUser: "SET_LOGGED_USER",
    removeLoggedUser: "REMOVE_LOGGED_USER",
    removeProfile: "REMOVE_PROFILE"
}


export const setLoggedUser = user => ({ 
    type: authActions.setLoggedUser,
    payload: user
});

// Manejo de errores para peticiones de autenticación
const handleAuthError = error => {
    return dispatch => {
        console.log(error);
        if(error.response?.data?.detail?.includes('No active account found with the given credentials')){
            return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'Credenciales incorrectas', title: 'Error' }));
        }
        if(error.response?.data?.detail?.includes('duplicate key value violates unique constraint "users_user_email_key"')){
            return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'Ya existe un usuario con esta dirección de correo electrónico.', title: 'Email duplicado' }));
        }
        else 
            return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' }));
    }
}


export const removeLoggedUser = () => ({ type: authActions.removeLoggedUser });


export const doLogout = () => {
    return dispatch => {
        dispatch(clearGuestAndInvitations());
        dispatch(removeProfileThunk());
        dispatch(removeLoggedUser());
        localStorage.setItem("token", "");
        history.push('/login');
    }
}

export const removeProfile = () => ({ type: authActions.removeProfile });

export const doLoginThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return notTokenPost('login/', data)
            .then(res => {
                localStorage.setItem('token', res.data.access);
                dispatch(getUserThunk());
            })
            .then(() => {
                history.push('/profiles');
            })
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}


export const getUserThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('users/myself/')
            .then(res => {
                // Si hay un perfil en el local storage, que lo busque en la respuesta y lo guarde y luego
                // Guarde el usuario. Sino, que sólo guarde el usuario
                let profile = +localStorage.getItem('profile');
                if(profile){
                    profile = res.data.profiles.find(p => profile === p.id);
                    dispatch(setProfile(profile));
                }
                dispatch(setLoggedUser(res.data));
            })
            .catch(error => dispatch(handleError(error)))
            .finally(() => dispatch(setLoading(false)))
    }
}


export const createUserThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return notTokenPost('users/', data)
            .then(() => dispatch(showInfoModal({ type: 'success', autoClose: false, actionModal: () => history.push('/login'), message: 'Tu usuario se encuentra en proceso de verificación por parte de los administradores de la unidad residencial. ¡Te mantendremos informado acerca del mismo!', title: 'Usuario creado correctamente' })))
            .catch(error => dispatch(handleAuthError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const recoveryPasswordThunk = email => {
    return dispatch => {
        dispatch(setLoading(true));
        return notTokenPost('recovery_password/', { user: email })
            .then(() => dispatch(showInfoModal({ type: 'success', actionModal: () => history.push('/login'), message: 'Se envió un email a tu correo electrónico con los siguientes pasos para restaurar tu contraseña', title: 'En camino...' })))
            .catch(error => {
                if(error.response.status === 404){
                    return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'No existen usuarios con este email', title: 'Email no encontrado' }));
                } else dispatch(handleAuthError(error));
            })
            .finally(() => dispatch(setLoading(false)));
    }
}

export const changePasswordThunk = (id, password) => {
    return dispatch => {
        dispatch(setLoading(true))
        return notTokenPost(`recovery_password/${id}/change_password/`, {new_password: password})
            .then(() => dispatch(showInfoModal({ type: 'success', actionModal: () => history.push('/login'), message: 'Contraseña actualizada correctamente' })))
            .catch(error => {
                if(error.response?.status === 404){
                    return dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, actionModal: () => history.push('/login'), message: 'La solicitud que estás usando no existe o ya expiró', title: 'Cancelado' }));
                } else dispatch(handleAuthError(error))})
            .finally(() => dispatch(setLoading(false)));
    }
}
