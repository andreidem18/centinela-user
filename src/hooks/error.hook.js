import { useApp, useAuth } from "hooks";
import { useDispatch, useSelector } from "react-redux"
import { setError } from "redux/actions";

export const useError = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);

    const { doLogout } = useAuth();
    const { showInfoModal, hideLoading } = useApp();


    const handleError = (error) => {
        if(error.response){
            if(error.response?.data?.error?.code === 3) doLogout();
            console.log(error.response?.data?.error);
            dispatch(setError());
        } else if(error.message === "Network Error"){
            showInfoModal({ type: 'error', autoClose: true, showingTime: 6000, message: 'Revisa tu conexión a internet' });
            dispatch(setError());
        } else { 
            showInfoModal({ type: 'error', autoClose: true, showingTime: 6000, message: 'Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, reportalo ', link: '/comentarios/reportar-error', linkMessage: 'aquí', title: 'Lo sentimos...' });
            dispatch(setError());
        }
        hideLoading();
    }


    return { error, handleError, }
}
