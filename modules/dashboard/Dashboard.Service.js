import { getAdDetails } from "../../services/apilinks";
import { Cookie } from "../../services/cookies";
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

function getListOfUsers(data) {
  let array = [];
  if (data && data.data && data.data.data && data.data.data.length) {
    let customData = data.data.data.map((m) => {
      let obj = {};
      if (m.active == "TRUE" || m.active == "true" || m.active == true) {
        return (obj = {
          ...m,
          active: true,
        });
      } else {
        return (obj = {
          ...m,
          active: false,
        });
      }
    });

    array = customData;
  }
  return array;
}

function checkCredentials() {
  const adminAuth = Cookie.getCookies("adminAuth");
  const secret = Cookie.getCookies("secret");
  if (adminAuth && secret && secret == "@@@///") {
    return true;
  } else {
    return false;
  }
}
export const DashboardService = {
  editAdDetails,
  getAdData,
  customizeData,
  getListOfUsers,
  checkCredentials,
};
