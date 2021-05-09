import { getAllMatches } from "../../../services/apilinks";
import { post } from "../../../services/http-service";

export const getAllMatchDetails = async () => {
    const response = await post(getAllMatches, { "Version": "V1", "Language": "en" });
    return response.data;
}

export const getAllMatchQuestions = (database, cb) => {
    database.ref("Game").on("value", (snapshot) => {
        const vals = snapshot.val();
        cb(vals);
    })
}