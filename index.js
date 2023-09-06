import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { rate: 0 });
});

app.post("/rate", async (req, res) => {
  let fromCurr = req.body.from;
  let toCurr = req.body.to;
  const config = {
    method: "GET",
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    headers: {
      "X-RapidAPI-Key": "fe796e9d36msh83729862ea85230p1ae96fjsncbfeb599365c",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
    params: {
      from: fromCurr,
      to: toCurr,
    },
  };
  try {
    const response = await axios.request(config);
    const result = response.data;
    res.render("index.ejs", { rate: result });
  } catch (error) {
    console.log(error.messages);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
