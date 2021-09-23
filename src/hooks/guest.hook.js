import { useAuth } from "hooks";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { deleteGuestThunk, getGuestsThunk, addGuestThunk, createInvitationThunk } from "redux/actions";

export const useGuest = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const guests = useSelector(state => state.guests.guests);
    const invitations = useSelector(state => state.guests.invitations);

    const { validateSession } = useAuth();

    const getGuests = async () => {
        if(!guests){
            const res = await dispatch(getGuestsThunk());
            if(res) validateSession(res);
        }
    }

    const deleteGuest = async id => {
        const res = await dispatch(deleteGuestThunk(id));
        if(res) validateSession(res);
    }

    const addGuest = async id => {
        const res = await dispatch(addGuestThunk(id));
        if(res) validateSession(res);
    }

    const createInvitation = async guest => {
        const data = { code: Date.now(), status: 1, guest }
        try{
            const res = await dispatch(createInvitationThunk(data));
            history.push(`/visitas/codigo/${res.data.data.code}`)
        } catch (error){
            if(error) validateSession(error);
        }
    }

    return { getGuests, deleteGuest, addGuest, createInvitation, guests, invitations }
}
