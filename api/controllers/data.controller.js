import LeaderData from "../models/data.models.js";

export const getLeader = async (req, res, next) => {
  try {
    const leaders = await LeaderData.find();

    if (!leaders.length) {
      return res.status(404).json({ message: "No data found" });
    }

    console.log("✅ Data retrieved:", leaders); // Debugging log

    res.status(200).json(leaders);
  } catch (error) {
    console.error("❌ Error fetching leader data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};