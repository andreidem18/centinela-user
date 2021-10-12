import { appActions } from "redux/actions";

const initialState = {
    isLoading: false,
    infoModal: {
        type: '', 
        handleClose: '', 
        autoClose: false, 
        showingTime: 3000, 
        action: null, 
        message: '', 
        title: '',
        link: '',
        linkMessage: ''
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case appActions.addTitle:
            return { ...state, title: action.payload }

        case appActions.setLoading:
            return { ...state, isLoading: action.payload }

        case appActions.setInfoModal:
            const { type, handleClose, autoClose, showingTime, actionModal, message, title, link, linkMessage } = action.payload;
            return { 
                ...state, 
                infoModal: {type, handleClose, autoClose, showingTime, action: actionModal, message, title, link, linkMessage} 
            }

        case appActions.removeInfoModal:
            return { ...state, infoModal: initialState.infoModal }

        default:
            return state;
    }
}

export default appReducer;
