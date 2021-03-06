import { AuthService } from "../../modules/auth/auth.service";
import { MYSECRET } from "../../services/secret";
var jwt = require("jsonwebtoken");
import { serialize } from "cookie";
import requestIp from "request-ip";

export const setCookie = (res, name, value, options = {}) => {
  const stringValue = value;
  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};

export const clearCookie = (res, name) => {
  res.clearCookie(name, []);
};

export default async (req, res) => {
  if (req.method == "POST") {
    const data = await AuthService.loginUserFetchApi(req.body);
    let { responseCode, message } = data.Response;

    let { User } = data;

    if (User && User.UserId) {
      var token = jwt.sign(
        { userId: User.UserId, userTypeId: User.UserTypesId },
        MYSECRET,
        {
          expiresIn: 86400, // expires in 24 hours
        }
      );
      setCookie(res, "token", token);

      let obj = {
        data: User,
        responseCode: responseCode,
        message: message,
        response: data,
      };
      res.json({ ...obj });
    } else {
      let userClone = User;
      let user = { ...userClone, jwtToken: false };
      let obj = {
        data: user,
        responseCode: responseCode,
        message: message,
        response: data,
      };
      res.json({ ...obj });
    }
  } else if (req.method == "PUT") {
    res.json({ status: 200 });
  }
};
