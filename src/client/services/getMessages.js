/*getting initial list of messages from server*/
import axios from "axios";
export default async () => {
    return await axios({
        method: "GET",
        url : "/api/messages",
        json: true
    });
};