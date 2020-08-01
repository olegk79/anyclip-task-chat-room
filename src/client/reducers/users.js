import USERS_ACTIONS from "../actions/usersActions";

const loggedUserInfo = (state = null, action) => {
    switch(action.type) {
        case USERS_ACTIONS.USER_LOGGED_IN:
            return action.data;
            default:
                return state;
    }
};

// TBD
const otherUsersInfo = (state=[], action)=> {
    switch(action.type) {
        default:
                return state;
    }
};

const usersInfo = combineReducers({
    loggedUserInfo,
    otherUsersInfo
});

export default usersInfo;

///////////////SELECTORS//////////////////////////
export const getLoggedUserInfo = state => state.loggedUserInfo;
export const getOtherUsersInfo = state => state.otherUsersInfo;