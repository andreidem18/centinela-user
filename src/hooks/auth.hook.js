import { useApp } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserThunk, createUserThunk, quitLoggedUser, doLoginThunk, setLoginError } from "redux/actions";

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
        localStorage.setItem("profile", "");
        history.push('/login');
    }



    const getUser = () => {
        if(!loggedUser.id){
            dispatch(getUserThunk())
        }
    }



    const createUser = async data => {
        showLoading();
        try{
            await dispatch(createUserThunk(data))
            showInfoModal({ type: 'success', autoClose: false, actionModal: () => history.push('/login'), message: 'Tu usuario se encuentra en proceso de verificación por parte de los administradores del conjunto. ¡Te mantendremos informado acerca del mismo!', title: 'usuario creado correctamente' })
        } catch(error) {
            showInfoModal({ type: 'error', autoClose: true, showingTime: 4000, message: `Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, comunícate con el administrador de tu unidad residencial.`, title: 'Lo sentimos' })
            console.log(error.response.data)
        } finally { hideLoading() }
    }


    const addAuthError = () => dispatch(setLoginError('Error de autenticación'))


    const cleanUserLogged = () => {
        dispatch(quitLoggedUser());
    }


    return { loginError, loggedUser, doLogin, doLogout, getUser, createUser, addAuthError }

}