import { getAdDetails } from "../../services/apilinks";
import { get, post } from "../../services/http-service";

async function editAdDetails(body) {
  const data = await post(getAdDetails, body);
  return data;
}

async function getAdData(body) {
  const data = await get(getAdDetails);
  let array = [];
  if (data && data.data) {
    array = data.data.data;
  }
  return array;
}

function customizeData(data) {
  let array = [];
  if (data && data.length == 2) {
    let local = data.filter((m) => m.type.toLowerCase() == "local")[0];
    let international = data.filter(
      (m) => m.type.toLowerCase() == "international"
    )[0];

    let localAllow = false,
      intAllow = false;
    if (local && local.allow && local.allow.toLowerCase() == "true") {
      localAllow = true;
    }
    if (
      international &&
      international.allow &&
      international.allow.toLowerCase() == "true"
    ) {
      intAllow = true;
    }

    array.push({ ...local, allow: localAllow });
    array.push({ ...international, allow: intAllow });
  }

  return array;
}

export const DashboardService = {
  editAdDetails,
  getAdData,
  customizeData,
};
