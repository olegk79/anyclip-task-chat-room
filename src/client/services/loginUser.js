/*login user*/
import axios from "axios";
export default async (data) => {
    return await axios({
        method: "POST",
        data,
        url : "/api/login",
        json: true
    });
};