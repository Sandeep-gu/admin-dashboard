import User from "../models/User.js";
import mongoose from "mongoose";
import AffiliateStat from "../models/AffiliateStat.js";
import Transaction from "../models/Transaction.js";
export const getAdmin = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const userWithStats = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId("63701cc1f03239d59100031b"),
        },
      },

      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map(async (id) => {
        // console.log(id);
        const transaction = await Transaction.findById(id);
        // console.log("transaction", transaction);
        return transaction;
      })
    );
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
