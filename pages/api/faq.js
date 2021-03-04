import { faqCsvFile } from "../../services/apilinks";

const csvFilePath = "public/faq.csv";
const csv = require("csvtojson");

export default async (req, res) => {
  res.statusCode = 200;
  let data = [];
  await csv()
    .fromFile(faqCsvFile)
    .then((jsonObj) => {
      if (jsonObj != null || jsonObj.length > 0) {
        res.json({ data: jsonObj });
      } else {
        res.json({ data: [] });
      }
    });
};
