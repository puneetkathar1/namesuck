import mongoose from "mongoose";

const news = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      sparse: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Newsletter || mongoose.model("Newsletter", news);
