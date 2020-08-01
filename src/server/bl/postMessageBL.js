const MySqlAdapter = require("../adapters/mySqlAdapter");

const postMessageBL = async (message) => {
    const sqlAdapter = new MySqlAdapter();
    const res = await sqlAdapter.postMessage(message.user.user_id,message.message);
    return {
        timestamp: res.timestamp,
        message_id:res.message_id,
            user: message.user,
            text: message.message
    };   
}

module.exports = postMessageBL;