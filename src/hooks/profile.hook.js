import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { useApp, useAuth } from "hooks";
import { setProfile } from 'redux/actions';
import axios from 'axios';

export const useProfile = () => {
    const { showLoading, hideLoading } = useApp();
    const { getUser } = useAuth();
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)
    

    const createProfile = async profile => {
        showLoading();
        try{
            await axios.post(
                `${process.env.REACT_APP_BASE_URL}/profiles/`,
                profile,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            )
        } catch(error){
            console.log(error);
        } finally {
            getUser('render');
        }
    }

    const deleteProfile = async id => {
        showLoading();
        try{
            await axios.delete(
                `${process.env.REACT_APP_BASE_URL}/profiles/${id}`,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            )
        } catch(error){
            console.log(error);
        } finally {
            getUser('render');
        }
    }

    const selectProfile = async id => {
        showLoading();
        try{
            localStorage.setItem('profile', id)
            const profile = await axios.patch(
                `${process.env.REACT_APP_BASE_URL}/profiles/${id}/`,
                { is_logged: true },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            )
            dispatch(setProfile(profile.data));
            history.push('/');
        } catch(error){
            console.log(error);
        } finally {
            hideLoading();
        }
    }

    
    const getProfile = async () => {
        if(!profile.id){
            showLoading();
            try{
                const profile = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/profiles/${localStorage.getItem('profile')}/`,
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                )
                dispatch(setProfile(profile.data));
            } catch(error){
                console.log(error);
            } finally {
                hideLoading();
            }
        }
    }
    return { profile, createProfile, deleteProfile, selectProfile, getProfile }
}
