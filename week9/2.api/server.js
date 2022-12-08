var express = require("express");
var app = express();
let port = process.env.PORT || 3000;

var indexRouter = require("./routes/index");
var dataRouter = require("./routes/data");

app.use("/", indexRouter);
app.use("/data", dataRouter);

var listener = app.listen(port, function () {
    console.log("Listening on port " + listener.address().port);
});
