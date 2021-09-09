import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoginError } from "redux/actions";
import { useApp } from "hooks";
import { useHistory } from "react-router";
import { setLoggedUser, quitLoggedUser } from "redux/actions";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { showLoading, hideLoading } = useApp();
    const loginError = useSelector(state => state.auth.loginError);
    const loggedUser = useSelector(state => state.auth.loggedUser);
    const history = useHistory();


    const doLogin = async credentials => {

        showLoading();
        try{
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login/`, credentials);
            localStorage.setItem("token", res.data.access);
            const user = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/users/myself/`,
                {
                    headers: { Authorization: `Bearer ${res.data.access}` }
                }
            )
            addLoggedUser(user.data);
            dispatch(addLoginError(""));
            history.push('/');
        } catch(error){
            if(error.response.status === 401){
                addLoginError("Credenciales incorrectas");
            }
        } finally {
            hideLoading();
        }
    }


    const doLogout = () => {
        cleanUserLogged();
        localStorage.setItem("token", "");
        localStorage.setItem("profile", "");
        history.push('/login');
    }



    const getUser = async render => {
        if(!loggedUser.id || render){
            showLoading();
            try{
                const user = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/users/myself/`,
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                    }
                )
                addLoggedUser(user.data);
            } catch(error){
                console.log(error);
            } finally {
                hideLoading();
            }
        }
    }


    

    const addLoggedUser = user => {
        dispatch(setLoggedUser(user));
    }

    const cleanUserLogged = () => {
        dispatch(quitLoggedUser());
    }

    const addLoginError = error => dispatch(setLoginError(error));


    return { loginError, loggedUser, doLogin, doLogout, getUser }

}