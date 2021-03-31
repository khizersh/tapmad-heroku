import { getCatchupTv } from "../../services/apilinks";
import { get, handleResponse } from "../../services/http-service";

async function getCatchupTvData() {
  const resp = await get(getCatchupTv);
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

export const CatchupService = {
  getCatchupTvData,
};
