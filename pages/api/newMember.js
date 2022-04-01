import User from "../../Models/Users";
require("dotenv").config();
import mongoose from "mongoose";
import Axios from "axios";
import rateLimit from "../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
export default async (req, res) => {
  const { auth, owner, name, token, data, token2, uniqid } = req.body;
  console.log(req.body);

  if (auth === "2api2f3e42fea-7b35-47ad-bad4-114a143231762api2") {
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
      if (!name) {
        return res.status(400).json({ error: "Please enter a name" });
      } else if (!token) {
        return res.status(400).json({ error: "Please verify the Captcha" });
      } else {
        const response = await Axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=6LdX9TcfAAAAAAn1U-4h_oHSRfdDw1kL6TSpVVSk&response=${token}`
        );
        const { success } = response.data;
        if (success) {
          const user = await User.findOne({
            owner: owner.toLowerCase(),
            token: token2,
          });
          if (user) {
            return res.status(400).json({ error: "Image id exists.", user });
          }
          const newUser = await new User({
            name,
            badge: `<svg id="svg-chart" width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="cp2" d="M-120 0A120 120 0 0 0 120 0" fill="none" stroke="red" /><path id="cp1" d="M-120 0A120 120 0 0 1 120 0" fill="none" stroke="red" /><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&amp;display=swap');</style></defs><g transform="translate(150,150)"><circle x="0" y="0" r="140" fill="none" stroke="white" stroke-width="4" /><circle x="0" y="0" r="100" fill="none" stroke="white" stroke-width="4" /><g transform="translate(-145.000000,-145.000000) scale(0.027,0.027) ">
            <image width="10800" height="10800" xlink:href="/svgMiddle2.png"/>
            </g><text font-size="28"  style="font-family: 'Roboto', sans-serif; font-weight: '500'"  fill="white"><textPath xlink:href="#cp1" startOffset="188.5" text-anchor="middle" dominant-baseline="central">MEMBER OF HTGC</textPath><textPath xlink:href="#cp2" startOffset="188.5" text-anchor="middle" dominant-baseline="central" xml:space="preserve">${name.toUpperCase()}</textPath></text></g></svg>`,
            count: 0,
            token: token2,
            data,
            uniqid,
            owner: data.owner.address,
          });
          newUser.save();
          return res.status(200).json({ message: "User Created!" });
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
