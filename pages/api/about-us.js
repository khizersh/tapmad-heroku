// const csv = require("csv-parser");

import { aboutUsCsvFile } from "../../services/apilinks";

// const fs = require("fs");
const csvFilePath = "public/about-us.csv";
const csv = require("csvtojson");

export default async (req, res) => {
  res.statusCode = 200;
  let data = [];
  await csv()
    .fromFile(aboutUsCsvFile)
    .then((jsonObj) => {
      if (jsonObj != null || jsonObj.length > 0) {
        res.json({ data: jsonObj });
      } else {
        res.json({ data: [] });
      }
    });
};
