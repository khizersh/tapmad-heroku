import { DashboardService } from "../../modules/dashboard/Dashboard.Service";
import { adCsvFile } from "../../services/apilinks";

const csv = require("csvtojson");
const fastcsv = require("fast-csv");
const fs = require("fs");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

export default async (req, res) => {
  const csvWriter = createCsvWriter({
    path: adCsvFile,
    header: [
      { id: "type", title: "type" },
      { id: "topAdDesktop", title: "topAdDesktop" },
      { id: "topAdMobile", title: "topAdMobile" },
      { id: "onVideo", title: "onVideo" },
      { id: "rightVideoAd", title: "rightVideoAd" },
      { id: "rightAd", title: "rightAd" },
      { id: "bottomBannerAd", title: "bottomBannerAd" },
      { id: "videoAdDuration", title: "videoAdDuration" },
      { id: "allow", title: "allow" },
    ],
  });
  if (req.method == "POST") {
    // post request
    let body = req.body;

    csvWriter
      .writeRecords(body)
      .then(() => {
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
      .fromFile(adCsvFile)
      .then((jsonObj) => {
        if (jsonObj != null || jsonObj.length > 0) {
          res.json({ data: jsonObj });
        } else {
          res.json({ data: [] });
        }
      });
  }
};
