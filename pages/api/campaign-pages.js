import { campaignFCsvFile } from "../../services/apilinks";

const csv = require("csvtojson");
const fastcsv = require("fast-csv");
const fs = require("fs");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

export default async (req, res) => {
    const csvWriter = createCsvWriter({
        path: campaignFCsvFile,
        header: [
            {
                id: "name",
                title: "name"
            },
            {
                id: "value",
                title: "value"
            }
        ]
    });
    if (req.method == "POST") {
        // post request
        let body = req.body;
        csvWriter
            .writeRecords(body)
            .then((e) => {
                console.log(e);
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
            .fromFile(campaignFCsvFile)
            .then((jsonObj) => {
                if (jsonObj != null || jsonObj.length > 0) {
                    res.json({ data: jsonObj });
                } else {
                    res.json({ data: [] });
                }
            });
    }
};
