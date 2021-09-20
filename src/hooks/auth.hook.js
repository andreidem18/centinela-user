import { useApp } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserThunk, createUserThunk, quitLoggedUser, doLoginThunk, recoveryPasswordThunk, changePasswordThunk } from "redux/actions";

export const useAuth = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.auth.loginError);
    const loggedUser = useSelector(state => state.auth.loggedUser);
    const { showInfoModal, showLoading, hideLoading } = useApp();
    const history = useHistory();


    const doLogin = async credentials => {
        const res = await dispatch(doLoginThunk(credentials));
        if(res === 'success') history.push('/');
        else if(res.response.data.error.code === 103){
            showInfoModal({ type: 'error', autoClose: true, showingTime: 3000, title: 'No tienes acceso', message: `Este usuario aún se encuentra en proceso de verificación` })
        }
    }


    const doLogout = () => {
        cleanUserLogged();
        localStorage.setItem("token", "");
        localStorage.setItem("user_id", "");
        history.push('/login');
    }


    const validateSession = res => {
        if(res){
            if(res.response?.data?.error?.code === 3) doLogout();
            else console.log(res.response?.data?.error);
        }
    }


    const getUser = async () => {
        if(!loggedUser.id){
            const res = await dispatch(getUserThunk());
            if(res.status !== 200) validateSession(res);
        }
    }


    const recoveryPassword = async email => {
        showLoading();
        try{
            await dispatch(recoveryPasswordThunk({email, reset_url: `${process.env.REACT_APP_HOST}/#/recuperar-contraseña`}))
            showInfoModal({ type: 'success', autoClose: false, actionModal: () => history.push('/login'), message: 'Hemos enviado un email a tu correo con los siguientes pasos para recuperar tu contraseña', title: 'Email enviado' })
        } catch(error) {
            if(error.response?.data?.error?.code === 107){
                showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'No existen usuarios con este email', title: 'Email no encontrado' });
            } else {
                showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' });
                console.log(error.response?.data?.error)
            }
        } finally { hideLoading() }
    } 


    const changePassword = async data => {
        showLoading();
        try{
            await dispatch(changePasswordThunk(data))
            showInfoModal({ type: 'success', actionModal: () => history.push('/login'), message: 'Contraseña actualizada correctamente' })
        } catch(error) {
            if(error.response?.data?.error?.code === 105){
                showInfoModal({ type: 'error', actionModal: () => history.push('/login'), showingTime: 4000, message: 'Esta solicitud ya expiró', title: 'Error' });
            } else {
                showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' });
                console.log(error.response?.data?.error)
            }
        } finally { hideLoading() }
    }


    const createUser = async data => {
        showLoading();
        try{
            await dispatch(createUserThunk(data))
            showInfoModal({ type: 'success', autoClose: false, actionModal: () => history.push('/login'), message: 'Hemos enviado un email a tu correo con los siguientes pasos para recuperar tu contraseña', title: 'Email enviado' })
        } catch(error) {
            if(error.response?.data?.error?.code === 204){
                showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: 'Tu usuario se encuentra en proceso de verificación por parte de los administradores del conjunto. ¡Te mantendremos informado acerca del mismo!', title: 'usuario creado correctamente' })
            } else {
                showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' })
                console.log(error.response.data)
            }
        } finally { hideLoading() }
    }


    const cleanUserLogged = () => {
        dispatch(quitLoggedUser());
    }


    return { loginError, loggedUser, doLogin, doLogout, getUser, createUser, validateSession, recoveryPassword, changePassword }

}