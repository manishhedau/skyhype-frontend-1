import { combineReducers } from "redux";
import { ActivityReducer } from "./activityLinksReducer";
import editProfileReducer from "./editprofileReducer";
import socialLinksReducer from "./socialLinksReducer";
import appearanceReducer from './appearanceReducer';
import {SpotlightReducer}  from "./spotlight_reducer";
import {LoginReducer} from './login_reducer';

export default combineReducers({
    editProfile: editProfileReducer,
    activityLinks: ActivityReducer,
    socialLinks: socialLinksReducer,
    appearance: appearanceReducer,
    spotlight: SpotlightReducer,
    userData: LoginReducer
});


