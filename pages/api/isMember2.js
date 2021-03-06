import User2 from "../../Models/Users2";
require("dotenv").config();
import mongoose from "mongoose";
import Axios from "axios";
import rateLimit from "../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
export default async (req, res) => {
  const { auth, id, uniqid } = req.body;

  if (auth === "apif3e42fea-7b35-47ad-bad4-114a14323176api") {
    mongoose.connect(
      "mongodb+srv://admin:HYzIdqsPNMe6bkQe@cluster0.uvuoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) throw err;
        console.log("Connected To Mongo");
      }
    );

    try {
      await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
      const user = await User2.findOne({ token: id, uniqid });
      if (user) {
        return res.status(200).json({ message: user });
      } else {
        return res.status(400).json({ message: false });
      }
    } catch (err) {
      res.status(429).json({ error: "Rate limit exceeded" });
    }
  } else {
    return res.status(400).json({ error: "Not Authenticated!" });
  }
};
