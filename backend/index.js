const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/users");
const cors = require("cors");

app.use(cors("http://localhost:3000"));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);
const port = 3001;
app.listen(port, () => {
  console.log(`Listening port ${port} 🚀`);
});
