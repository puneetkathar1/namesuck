import User from "../../Models/Users";
require("dotenv").config();
import mongoose from "mongoose";
import axios from "axios";

export default async (req, res) => {
  const { auth, address } = req.body;
  console.log(address);
  if (auth === 'apif3e42fea-7b35-47ad-bad4-114a14323176api') {
    try {
      let data = [];

      const options = {
        method: "GET",
        url: "https://https://api.opensea.io/assets",
        params: {
          asset_contract_address: "0x101446d295c7afF9Ca9573C611Fede0C3841D707",
          owner: address,
          order_direction: "desc",
          offset: "0",
          limit: "20401",
        },
      };
      await axios
        .request(options)
        .then(function (response) {
          data = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(429).json({ error: err });
    }
  } else {
    return res.status(400).json({ error: "Not Authenticated!" });
  }
};
