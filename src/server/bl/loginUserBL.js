const MySqlAdapter = require("../adapters/mySqlAdapter");

const loginUserBL = async (userName) => {
    const sqlAdapter = new MySqlAdapter();
    const res = await sqlAdapter.getOrCreateUser(userName);
    return {
        user_id: res
    };   
}

module.exports = loginUserBL;