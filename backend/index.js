const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const routes = require("./routes/users");
const cors = require("cors");
const db = require("./db");
const envs = require("./config/envs");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

const port = 3001;
db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Listening port ${port} 🚀`);
  });
});
