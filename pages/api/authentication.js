import { AuthService } from "../../modules/auth/auth.service";
import { MYSECRET } from "../../services/secret";
var jwt = require("jsonwebtoken");
import { serialize } from "cookie";

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

    if (responseCode === 1) {
      var token = jwt.sign(
        { userId: User.UserId, userTypeId: User.UserTypeId },
        MYSECRET,
        {
          expiresIn: 86400, // expires in 24 hours
        }
      );
      setCookie(res, "token", token);
      res.json({ ...data, token: token });
    } else if (responseCode === 0) {
      res.json({ ...data });
    }
  } else if (req.method == "PUT") {
    console.log("Loooogs", req.headers.cookie);
    res.json({ status: 200 });
  }
};
