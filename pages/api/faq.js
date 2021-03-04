const csvFilePath = "public/faq.csv";
const csv = require("csvtojson");

export default async (req, res) => {
  res.statusCode = 200;
  let data = [];
  // await fs
  //   .createReadStream("public/data.csv")
  //   .pipe(csv())
  //   .on("data", (row) => {
  //     console.log(row);
  //     data.push(row);
  //   })
  //   .on("end", () => {
  //     console.log("CSV file successfully processed");
  //     res.json({ name: "John Doe", data: data });
  //   })
  //   .on("error", () => {
  //     res.json({ data: [] });
  //   });
  await csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      // return jsonObj;

      if (jsonObj != null || jsonObj.length > 0) {
        res.json({ data: jsonObj });
      } else {
        res.json({ data: [] });
      }
    });
};
