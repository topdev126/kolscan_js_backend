import mongoose from "mongoose";

const leaderSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    twitter_link: {
      type: String,
    },
    wallet_address: {
      type: String,      
    },
    buy: {
      type: Number,
      default: 0,
    },
    total_profit: {
      type: String,
    },
    usd_value: {
      type: String,
    },
  },
  { timestamps: true }
);

const LeaderData = mongoose.model("leaders", leaderSchema);

export default LeaderData;
