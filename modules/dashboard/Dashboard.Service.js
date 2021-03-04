import { getAdDetails } from "../../services/apilinks";
import { get, post } from "../../services/http-service";

async function editAdDetails(body) {
  const data = await post(getAdDetails, body);
}

async function getAdData(body) {
  const data = await get(getAdDetails);
  let array = [];
  if (data && data.data) {
    array = data.data.data;
  }
  return array;
}

export const DashboardService = {
  editAdDetails,
  getAdData,
};
