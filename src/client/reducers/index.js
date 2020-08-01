import { combineReducers } from "redux";

//reducers
import messagesList from "./messages";
import messagesState from "./messagesState";
import users from "./users";

//reducer selectors
import * as fromMessagesList from "./messages";
import * as fromMessagesState from "./messagesState";
import * as fromUsers from "./users";


const rootReducer = combineReducers({
    messagesList,
    messagesState,
    users
});

export default rootReducer;

///////////////////////////////////SELECTORS/////////////////////////////////////////////////////////////
export const getMessagesList = state => fromMessagesList.getMessagesList(state.messagesList);

export const getMessagesLoadErrorMessage = state => fromMessagesState.getMessagesLoadErrorMessage(state.messagesState);
export const getPostMessageErrorMessage = state => fromMessagesState.getPostMessageErrorMessage(state.messagesState);
export const getIsMessagesLoading = state => fromMessagesState.isMessagesLoading(state.messagesState);
export const getIsMessagePosting = state => fromMessagesState.isMessagePosting(state.messagesState);

export const getLoggedUserInfo = state => fromUsers.getLoggedUserInfo(state.users);
export const getOtherUsersInfo = state => fromUsers.getOtherUsersInfo(state.users);

///////////////////////////////////SELECTORS/////////////////////////////////////////////////////////////
                                                                    