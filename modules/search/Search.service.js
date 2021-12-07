import { getItemsByKeyword } from "../../services/apilinks";
import { get, handleResponse } from "../../services/http-service";

async function getItemByKeyrwords(keyword, ip) {
  const resp = await get(getItemsByKeyword + keyword + "/1", ip);
  const data = handleResponse(resp);
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
}

export const SearchService = {
  getItemByKeyrwords,
};
