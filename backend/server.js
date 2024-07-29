const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

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
      { headers: { "private-key": "8c4c0898-cdcf-4fe4-8673-9f7d2fcaa9da" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log("nn");
  }
});

app.listen(3001);
