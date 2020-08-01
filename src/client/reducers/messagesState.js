import MESSAGES_ACTIONS from "../actions/messagesActions";
import { combineReducers } from "redux";

const messagesLoadErrorMessage = (state = "", action) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.GET_MESSAGES_LIST_FAILED:
            return action.data;
        case MESSAGES_ACTIONS.MESSAGES_LIST_GOT:
            return "";
        default:
            return state;
    }
};

const postMessageErrorMessage = (state = "", action) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.POST_MESSAGE_DONE:
            return "";
        case MESSAGES_ACTIONS.POST_MESSAGE_FAILED:
            return action.data;
        default:
            return state;
    }
};

const isMessagesLoading = (state = true, action) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.MESSAGES_LIST_GOT:
        case MESSAGES_ACTIONS.GET_MESSAGES_LIST_FAILED:
            return false;
        case MESSAGES_ACTIONS.GETTING_MESSAGES_LIST:
            return true;
        default:
            return state;
    }
};

const isMessagePosting = (state = false, action) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.POSTING_MESSAGE:
            return true;
        case MESSAGES_ACTIONS.POST_MESSAGE_DONE:
        case MESSAGES_ACTIONS.POST_MESSAGE_FAILED:
            return false;
        default:
            return state;
    }
};

const messagesState = combineReducers({
    messagesLoadErrorMessage,
    postMessageErrorMessage,
    isMessagesLoading,
    isMessagePosting
});

export default messagesState;

///////////////SELECTORS//////////////////////////
export const getMessagesLoadErrorMessage = state => state.messagesLoadErrorMessage;
export const getPostMessageErrorMessage = state => state.postMessageErrorMessage;
export const getIsMessagesLoading = state => state.isMessagesLoading;
export const getIsMessagePosting = state => state.isMessagePosting;
