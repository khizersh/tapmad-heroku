// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const csv = require("csv-parser");
const fs = require("fs");

export default async (req, res) => {
  res.statusCode = 200;
  let data = [];
  await fs
    .createReadStream("public/data.csv")
    .pipe(csv())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      res.json({ data: data });
    })
    .on("error", () => {
      res.json({ data: [] });
    });
};
