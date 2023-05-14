import express from "express";
import collection from "./mongo.cjs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email });
    const checkpass = await collection.findOne({ password: password });
    if (check && checkpass) {
      res.json("exist");
    } else {
      res.json("nonexist");
    }
  } catch (err) {
    res.json("error not exist");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("nonexist");
      await collection.insertMany([data]);
    }
  } catch (err) {
    res.json("error not exist");
  }
});

app.listen(8000, () => {
  console.log("port is connected");
});
