import Newsletter from "../../Models/Newsletter";
require("dotenv").config();
import mongoose from "mongoose";
import rateLimit from "../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
export default async (req, res) => {
  const { auth, email } = req.body;

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
      if (!email) {
        return res.status(400).json({ error: "Please enter a email" });
      } else {
        const subs = await Newsletter.findOne({ email });
        if (subs) {
          return res.status(400).json({ error: "Subscriber Exists" });
        }
        const newSubs = await new Newsletter({
          email,
        });
        newSubs.save();
        return res.status(200).json({ message: "Subscribed!" });
      }
    } catch (err) {
      res.status(429).json({ error: "Rate limit exceeded" });
    }
  } else {
    return res.status(400).json({ error: "Not Authenticated!" });
  }
};
