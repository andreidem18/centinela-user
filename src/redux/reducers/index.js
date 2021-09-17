import appReducer from './app.reducer';
import userReducer from './user.reducer';
import authReducer from './auth.reducer';
import incidentReducer from './incident.reducer';
import profileReducer from './profile.reducer';
import residenceReducer from './residence.reducer';
import { combineReducers } from "redux";

export default combineReducers({
    app: appReducer,
    user: userReducer,
    auth: authReducer,
    incident: incidentReducer,
    profile: profileReducer,
    residences: residenceReducer
});
