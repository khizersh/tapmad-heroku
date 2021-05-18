import {
  getAllMatches,
  getMatchBetsByUserId,
  getAllLeagues,
  getLeaderBoardByLeagueId,
  getBuyCoinsPackages,
} from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { post, handleResponse, get } from "../../../services/http-service";

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
    UserId: userId,
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
export const getLeaderBoardByLeague = async (leagueId, offset) => {
  let userId = Cookie.getCookies("userId");
  let body = {
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
    LeagueId: leagueId,
    Offset: offset,
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
export const getBuyCoinsData = async (leagueId, offset) => {
  const response = await get(getBuyCoinsPackages);
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
