import { credentialsCsvFile } from "../../services/apilinks";

const csv = require("csvtojson");

export default async (req, res) => {
  res.statusCode = 200;
  await csv()
    .fromFile(credentialsCsvFile)
    .then((jsonObj) => {
      if (jsonObj != null || jsonObj.length > 0) {
        res.json({ data: jsonObj });
      } else {
        res.json({ data: [] });
      }
    });
};
