export const profileActions = {
    setAnswer: "SET_ANSWER"
}

export const setAnswer = data => ({ 
    type: profileActions.setAnswer,
    payload: data
});
