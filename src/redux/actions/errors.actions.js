import { doLogout, setLoading, showInfoModal } from ".";

export const handleError = error => {
    return dispatch => {
        if(error.response){
            if(error.response?.data?.error?.code === 3) dispatch(doLogout());
            else dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 6000, message: 'Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, reportalo ', link: '/comentarios/reportar-error', linkMessage: 'aquí', title: 'Lo sentimos...' }));
            console.log(error.response?.data?.error);
        } else if(error.message === "Network Error"){
            dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 6000, message: 'Revisa tu conexión a internet' }));
        } else { 
            dispatch(showInfoModal({ type: 'error', autoClose: true, showingTime: 6000, message: 'Ha ocurrido un error, vuelve a intentarlo. Si el problema persiste, reportalo ', link: '/comentarios/reportar-error', linkMessage: 'aquí', title: 'Lo sentimos...' }));
        }
        dispatch(setLoading(false));
    }
}

