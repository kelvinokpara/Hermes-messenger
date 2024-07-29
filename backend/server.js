const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
dotenv.config();

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": process.env.SECRET_KEY } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log("nn");
  }
});

const port = process.env.PORT;

app.listen(
  port,
  console.log(
    `server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
);
