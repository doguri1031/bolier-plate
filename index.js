const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://root:root@bolierplate.90zfu.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("success connected mongo..."))
  .catch((err) => console.log(err));
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
