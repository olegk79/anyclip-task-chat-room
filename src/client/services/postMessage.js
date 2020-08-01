/*post new message*/
import axios from "axios";
export default async (data) => {
    return await axios({
        method: "POST",
        data,
        url : "/api/postMessage",
        json: true
    });
};