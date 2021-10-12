import { useDispatch, useSelector } from "react-redux"
import { getExamplesThunk } from "redux/actions";
import { useError } from "./error.hook";

export const useExample = () => {
    const dispatch = useDispatch();
    const examples = useSelector(state => state);
    const { error, handleError } = useError();

    const getExamples = () => {
        try { if(!error && !examples) dispatch(getExamplesThunk());  } 
        catch(error) { handleError(error) }
    }

    return { examples, getExamples }
}