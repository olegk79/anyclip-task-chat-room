import getMessagesSvc from "../services/getMessages";
import postMessageSvc from "../services/postMessage";

const MESSAGES_ACTIONS = {
    GETTING_MESSAGES_LIST: "GETTING_MESSAGES_LIST",
    MESSAGES_LIST_GOT: "MESSAGES_LIST_GOT",
    GET_MESSAGES_LIST_FAILED: "GET_MESSAGES_LIST_FAILED",
    POSTING_MESSAGE: "POSTING_MESSAGE",
    POST_MESSAGE_DONE: "POST_MESSAGE_DONE",
    POST_MESSAGE_FAILED: "POST_MESSAGE_FAILED",
    NEW_MESSAGE_POSTED_IN_CHAT:"NEW_MESSAGE_POSTED_IN_CHAT"
};

export const gettingMessagesList = () => ({
    type: MESSAGES_ACTIONS.GETTING_MESSAGES_LIST
});

export const messagesListGot = (data) => ({
type: MESSAGES_ACTIONS.MESSAGES_LIST_GOT,
data
});

export const getMessagesListFailed = (data) => ({
    type: MESSAGES_ACTIONS.GET_MESSAGES_LIST_FAILED,
    data
});

export const handleGetMessagesList = () => {
    return async (dispatch) => {
        dispatch(gettingMessagesList());
        try {
            let response = await getMessagesSvc();
            if (response.data.success) {
                dispatch(messagesListGot(response.data.data));
            } else {
                dispatch(getMessagesListFailed(response.data.error));
            }
        }
        catch (e) {
            dispatch(getMessagesListFailed(e.message));
        }
    };
};

export const postingMessage = () =>({
    type: MESSAGES_ACTIONS.POSTING_MESSAGE
});

export const postMessageDone = (data) => ({
    type: MESSAGES_ACTIONS.POST_MESSAGE_DONE,
    data
});

export const postMessageFailed = (data) => ({
    type: MESSAGES_ACTIONS.POST_MESSAGE_FAILED,
    data
});

export const handlePostMessage = (message) => {
    return async (dispatch) => {
        dispatch(postingMessage());
        try {
            let response = await postMessageSvc(message);
            if (response.data.success) {
                dispatch(postMessageDone(response.data.data));
            } else {
                dispatch(postMessageFailed(response.data.error));
            }
        }
        catch (e) {
            dispatch(postMessageFailed(e.message));
        }
    };
};

export const newMessagePostedInChat = (data) =>({
    type: MESSAGES_ACTIONS.NEW_MESSAGE_POSTED_IN_CHAT,
    data
});

export default MESSAGES_ACTIONS;