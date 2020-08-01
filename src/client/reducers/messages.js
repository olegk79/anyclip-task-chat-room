import MESSAGES_ACTIONS from "../actions/messagesActions";

const messagesList = (state = [], action) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.MESSAGES_LIST_GOT:
                return action.data;
        case MESSAGES_ACTIONS.NEW_MESSAGE_POSTED_IN_CHAT:
            return [...state.slice(1), action.data];
            default:
                return state;
            
    }
};


export default messagesList;

///////////////SELECTORS//////////////////////////
export const getMessagesList = state => state;