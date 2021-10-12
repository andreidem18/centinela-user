import { useDispatch, useSelector } from "react-redux"
import { setLoading, setInfoModal, removeInfoModal } from "redux/actions";

export const useApp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.app.isLoading);
    const infoModal = useSelector(state => state.app.infoModal);

    const showLoading = () => { dispatch(setLoading(true)); }

    const hideLoading = () => { dispatch(setLoading(false)); }

    const showInfoModal = config => {
        // Config es un objeto con lo siguiente 
        // { type'success, error, warning', autoClose, showingTime, actionModal, message, title }
        config.handleClose = hideInfoModal;
        dispatch(setInfoModal(config, dispatch))
    }

    const hideInfoModal = () => dispatch(removeInfoModal())

    return { showLoading, hideLoading, showInfoModal, hideInfoModal, isLoading, infoModal, }
}