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

export function nFormatter(num, digits) {
    var si = [
        {
            value: 1,
            symbol: "",
        },
        {
            value: 1e3,
            symbol: "k",
        },
        {
            value: 1e6,
            symbol: "M",
        },
        {
            value: 1e9,
            symbol: "B",
        },
        {
            value: 1e12,
            symbol: "T",
        },
        {
            value: 1e15,
            symbol: "P",
        },
        {
            value: 1e18,
            symbol: "E",
        },
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}