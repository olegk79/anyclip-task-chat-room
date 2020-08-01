const MySqlAdapter = require("../adapters/mySqlAdapter");

const getMessagesBL = async () => {
    const sqlAdapter = new MySqlAdapter();
    const messages = await sqlAdapter.getLastMessages(10);
    return messages.map(m=>{
        let message = {
            message_id: m.message_id,
            text: m.text,
            timestamp: m.timestamp,
            user: {
                id: m.user_id,
                name: m.User.user_name
            }
        };
        return message;
    });
}

module.exports = getMessagesBL;