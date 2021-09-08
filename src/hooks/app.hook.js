import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "redux/actions";

export const useApp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.app.isLoading);

    const showLoading = () => {
        dispatch(setLoading(true));
    }

    const hideLoading = () => {
        dispatch(setLoading(false));
    }


    return { showLoading, hideLoading, isLoading }
}