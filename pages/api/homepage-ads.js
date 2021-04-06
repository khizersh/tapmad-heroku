import { homePageAdsCsvFile } from "../../services/apilinks";

const csv = require("csvtojson");
const fastcsv = require("fast-csv");
const fs = require("fs");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

export default async (req, res) => {
  const csvWriter = createCsvWriter({
    path: homePageAdsCsvFile,
    header: [
      { id: "row", title: "row" },
      { id: "desktop", title: "desktop" },
      { id: "mobile", title: "mobile" },
      { id: "desktopSize", title: "desktopSize" },
      { id: "mobileSize", title: "mobileSize" },
    ],
  });
  if (req.method == "POST") {
    // post request
    let body = req.body;
    console.log("body: ", body);
    csvWriter
      .writeRecords(body)
      .then(() => {
        console.log("The CSV file was written successfully");
        res.json({ statusCode: 200 });
      })
      .catch((e) => {
        console.log("error occured: ", e);
        res.json({ statusCode: 400 });
      });
  } else {
    // get request
    res.statusCode = 200;
    await csv()
      .fromFile(homePageAdsCsvFile)
      .then((jsonObj) => {
        // console.log("jsonObj: ", jsonObj);
        if (jsonObj != null || jsonObj.length > 0) {
          res.json({ data: jsonObj, responseCode: 1 });
        } else {
          res.json({ data: [], responseCode: 0 });
        }
      });
  }
};
