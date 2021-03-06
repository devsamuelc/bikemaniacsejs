const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminBikesRouter = require("./routes/admin/bikes");
const bikesRouter = require('./routes/bikes');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["81j3oasdi1"],
  })
);
app.use(authRouter);
app.use(bikesRouter);
app.use(adminBikesRouter);

app.listen(3000, () => {
  console.log("listening");
});