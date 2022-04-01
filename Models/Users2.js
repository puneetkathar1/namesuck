import mongoose from "mongoose";

const user2Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      sparse: true
    },
    votingFor: {
      type: String,
      required: true,
      sparse: true
    },
    badge: {
        type: String,
        required: true,
        sparse: true,
    },
    data:{
      type: Object,
      sparse: true
    },
    token:{
      type: String,
      sparse: true
    },
    uniqid:{
      type: String,
      sparse: true,
      unique: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User2 || mongoose.model("User2", user2Schema);
