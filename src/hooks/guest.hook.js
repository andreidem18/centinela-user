import { useApp } from "hooks";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { deleteGuestThunk, getGuestsThunk, addGuestThunk, createInvitationThunk, clearGuestAndInvitations } from "redux/actions";
import { useError } from "./error.hook";

export const useGuest = () => {
    const history = useHistory();
    const { showInfoModal } = useApp();
    const { error, handleError } = useError();

    const dispatch = useDispatch();
    const guests = useSelector(state => state.guests.guests);
    const invitations = useSelector(state => state.guests.invitations);

    const getGuests = async () => {
        try { if(!error && !guests) dispatch(getGuestsThunk());  } 
        catch(error) { handleError(error) }
    }

    const deleteGuest = async id => {
        try { dispatch(deleteGuestThunk(id));  } 
        catch(error) { handleError(error) }
    }

    const addGuest = async id => {
        try { dispatch(addGuestThunk(id));  } 
        catch(error) { handleError(error) }
    }

    const createInvitation = async (guest, type, date_start, date_end) => {
        const data = { code: Date.now(), status: 1, guest, type, date_start, date_end }
        try{
            const res = await dispatch(createInvitationThunk(data));
            showInfoModal({ type: 'success', autoClose: true, message: 'Tu invitación fue creada correctamente', title: '¡Bien hecho!' })
            history.push(`/visitas/codigo/${res.data.data.code}`)
        } catch (error){
            if(error) handleError(error);
        }
    }

    const cleanGuests = async () => dispatch(clearGuestAndInvitations())

    return { getGuests, deleteGuest, addGuest, createInvitation, cleanGuests, guests, invitations }
}
