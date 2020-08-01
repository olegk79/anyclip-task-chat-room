import loginUserSvc from "../services/loginUser";

const USERS_ACTIONS = {
    LOGGING_IN_USER : "LOGGING_IN_USER",
    USER_LOGGED_IN:"USER_LOGGED_IN",
    USER_LOGIN_FAILED:"USER_LOGIN_FAILED",
    UPLOADING_USER_AVATAR:"UPLOADING_USER_AVATAR",
    USER_AVATAR_UPLOADED:"USER_AVATAR_UPLOADED",
    USER_AVATAR_UPLOAD_FAILED:"USER_AVATAR_UPLOAD_FAILED",
    GETTING_USERS_AVATARS:"GETTING_USERS_AVATARS",
    USERS_AVATARS_GOT:"USERS_AVATARS_GOT",
    USERS_AVATARS_GET_FAILED:"USERS_AVATARS_GET_FAILED"
};


export const loggingInUser = () => ({
    type: USERS_ACTIONS.LOGGING_IN_USER
});

export const userLoggedIn = (data) => ({
    type: USERS_ACTIONS.USER_LOGGED_IN,
    data
});

export const userLoginFailed = (data) => ({
    type: USERS_ACTIONS.USER_LOGIN_FAILED,
        data
});

export const handleLoginUser = (username) => {
    return async (dispatch) => {
        dispatch(loggingInUser());
        try {
            let response = await loginUserSvc({username});
            if (response.data.success) {
                dispatch(userLoggedIn(response.data.data));
            } else {
                dispatch(userLoginFailed(response.data.error));
            }
        }
        catch (e) {
            dispatch(userLoginFailed(e.message));
        }
    };
};

export default USERS_ACTIONS;