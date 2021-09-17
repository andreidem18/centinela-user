import { useDispatch, useSelector } from 'react-redux';
import { getResidencesThunk } from 'redux/actions';

export const useResidence = () => {
    const residences = useSelector(state => state.residences.residences);
    const dispatch = useDispatch();
    

    const getResidences = () => { if(residences.length === 0) dispatch(getResidencesThunk()) }
    
    return { residences, getResidences }
}
