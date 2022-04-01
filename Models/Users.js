import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      sparse: true
    },
    count: {
      type: Number,
      required: true,
      sparse: true,
    },
    badge: {
        type: String,
        required: true,
        sparse: true,
    },
    data: {
      type: Object,
      sparse: true
    },
    token: {
      type: String,
      sparse: true
    },
    owner: {
      type: String,
      sparse: true
    },
    uniqid: {
      type: String,
      sparse: true,
      unique: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
