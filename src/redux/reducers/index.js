import appReducer from './app.reducer';
import userReducer from './user.reducer';
import authReducer from './auth.reducer';
import incidentReducer from './incident.reducer';
import residenceReducer from './residence.reducer';
import guestReducer from './guest.reducer';
import { combineReducers } from "redux";
import profileReducer from './profile.reducer';

export default combineReducers({
    app: appReducer,
    user: userReducer,
    loggedUser: authReducer,
    profile: profileReducer,
    incident: incidentReducer,
    residences: residenceReducer,
    guests: guestReducer,
});
