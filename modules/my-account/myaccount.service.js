import {
  getUserByUserId,
  getUserPaymentHistory,
  unsubscribePaymentTransaction,
  updateUserProfile,
} from "../../services/apilinks";
import { handleResponse, post } from "../../services/http-service";

async function getUserData(body) {
  const resp = await post(getUserByUserId, body);
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

async function getUserPaymentHistoryData(body) {
  const resp = await post(getUserPaymentHistory, body);
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

async function updateUserProfileData(body) {
  const resp = await post(updateUserProfile, body);
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

async function unsubcribeUser(body) {
  const resp = await post(unsubscribePaymentTransaction, body);
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

export const MyAccountService = {
  getUserData,
  getUserPaymentHistoryData,
  updateUserProfileData,
  unsubcribeUser,
};
