const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/48/people/01",
      name: "최혁",
      birthday: "750927",
      gender: "남자",
      job: "직장인",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/48/people/02",
      name: "최용운",
      birthday: "777777",
      gender: "남자",
      job: "직장인",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/48/people/03",
      name: "홍길순",
      birthday: "788888",
      gender: "여자",
      job: "직장인",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port} `));
