import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserThunk, quitLoggedUser, doLoginThunk, setLoginError } from "redux/actions";

export const useAuth = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.auth.loginError);
    const loggedUser = useSelector(state => state.auth.loggedUser);
    const history = useHistory();


    const doLogin = async credentials => {
        const success = await dispatch(doLoginThunk(credentials));
        if(success) history.push('/');
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


    const addAuthError = () => dispatch(setLoginError('Error de autenticación'))


    const cleanUserLogged = () => {
        dispatch(quitLoggedUser());
    }


    return { loginError, loggedUser, doLogin, doLogout, getUser, addAuthError }

}