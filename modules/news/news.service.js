import { getAllNews } from "../../services/apilinks";
import { get, handleResponse } from "../../services/http-service";

export const getAllNewsData = async (ip) => {
  const resp = await get(getAllNews, ip);
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
};
