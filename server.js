const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV == "production";

const app = next({ dev });
const handle = app.getRequestHandler();
const requestIp = require("request-ip"); // import it at the top

app.prepare().then(() => {
  const server = express();

  server.get("/user-ip", (req, res) => {
    ip = requestIp.getClientIp(req);
    app.render(
      {
        ...req,
        clientIP: ip,
      },
      res,
      "/userIP",
      req.query
    );
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
