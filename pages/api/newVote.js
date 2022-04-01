import User from "../../Models/Users";
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
  const { auth, token2, name, token, votingFor, data, uniqid } = req.body;
  console.log(req.body);
  if (auth === "2api2f3e42fea-7b35-47ad-bad4-114a143231762api2") {
    try {
      await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
      mongoose.connect(
        "mongodb+srv://admin:f7p0zYPDsaEIH117@cluster0.uvuoa.mongodb.net/namesuck?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err) throw err;
          console.log("Connected To Mongo");
        }
      );
      if (!name) {
        return res.status(400).json({ error: "Please enter a name" });
      } else if (!token) {
        return res.status(400).json({ error: "Please verify the Captcha" });
      } else if (!votingFor) {
        return res.status(400).json({ error: "Something went wrong!" });
      } else {
        const response = await Axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=6LfN4zQfAAAAAAeqC_LZ5mLu_OJ495lluWCbhEf6&token=${token}`
        );
        const { success } = response.data;
        if (success) {
          const user = await User.findOne({ token: [token2] });
          if (user) {
            await User.updateOne(
              { token: [token2] },
              { count: user.count + 1 }
            );
            // const user2 = await User2.findOne({
            //   name,
            //   votingFor,
            //   token: token2,
            // });
            // if (user2) {
            //   return res.status(400).json({ error: "User Exists" });
            // }
            var votingFor2 = 8 - votingFor.length;
            var votingFor3 = votingFor;

            var name2 = 8 - name.length;
            var name3 = name;

            const newUser = await new User2({
              name,
              badge: `<svg id="svg-chart" width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="cp2" d="M-120 0A120 120 0 0 0 120 0" fill="none" stroke="red" /><path id="cp1" d="M-120 0A120 120 0 0 1 120 0" fill="none" stroke="red" /><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&amp;display=swap');</style></defs><g transform="translate(150,150)"><circle x="0" y="0" r="140" fill="none" stroke="black" stroke-width="4" /><circle x="0" y="0" r="100" fill="none" stroke="black" stroke-width="4" /><g transform="translate(-145.000000,-145.000000) scale(0.027,0.027) ">
              <image width="10800" height="10800" xlink:href="/svgMiddle.png"/>
              </g><text font-size="28" style="font-family: 'Roboto', sans-serif; font-weight: '500'"  fill="black"><textPath xlink:href="#cp1" startOffset="188.5" text-anchor="middle" dominant-baseline="central">MEMBER OF HTGC</textPath>
                            <textPath xlink:href="#cp2" startOffset="100" text-anchor="middle" dominant-baseline="central" xml:space="preserve">${votingFor3.toUpperCase()}</textPath><textPath xlink:href="#cp2" startOffset="185" text-anchor="middle" dominant-baseline="central" xml:space="preserve"> &amp; </textPath>
              <textPath xlink:href="#cp2" startOffset="270" text-anchor="middle" dominant-baseline="central" xml:space="preserve">${name3.toUpperCase()}</textPath></text></g></svg>`,
              votingFor,
              data,
              token: token2,
              uniqid,
            });
            newUser.save();

            return res.status(200).json({ message: "Updated!" });
          } else {
            return res.status(400).json({ error: "No such member found!" });
          }
        } else {
          return res.status(400).json({ error: "Captcha Error!" });
        }
      }
    } catch (err) {
      res.status(429).json({ error: "Rate limit exceeded" });
    }
  } else {
    return res.status(400).json({ error: "Not Authenticated!" });
  }
};
