export const appActions = {
    addTitle: "ADD_TITLE",
    setLoading: "SET_LOADING"
}


export const addTitle = title => ({
    type: appActions.addTitle,
    payload: title
});

                       // loading será un boolean
export const setLoading = loading => ({ 
    type: appActions.setLoading,
    payload: loading
})
