import {
  getAllMatches,
  getMatchBetsByUserId,
  getAllLeagues,
  getLeaderBoardByLeagueId
} from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { post , handleResponse } from "../../../services/http-service";

export const getAllMatchDetails = async () => {
  const response = await post(getAllMatches, { Version: "V1", Language: "en" });
  return response.data;
};

export const getMatchBetsByUser = async () => {
  let userId = Cookie.getCookies("userId");
  let body = {
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId : userId,
  };
  const response = await post(getMatchBetsByUserId, body);
  return response.data;
};

export const getAllLeagueOnline = async () => {

  let body = {
    Version: "V1",
    Language: "en",
    Platform: "web",
  };
  const response = await post(getAllLeagues, body);
  const data = handleResponse(response);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }

};
export const getLeaderBoardByLeague = async (leagueId , offset) => {
  let userId = Cookie.getCookies("userId");
  let body = {
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId:userId,
    LeagueId: leagueId,
    Offset:offset

  };
  const response = await post(getLeaderBoardByLeagueId, body);
  const data = handleResponse(response);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }

};

export const getAllMatchQuestions = (database, cb) => {
  database.ref("Game").on("value", (snapshot) => {
    const vals = snapshot.val();
    cb(vals);
  });
};

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
