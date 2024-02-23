import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    //hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    /*Recent Transaction */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    console.log("transactions", transactions);
    /* Overall Transaction */

    const OverallStats = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      dailyData,
    } = OverallStats[0];

    const thisMonthStats = OverallStats[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    console.log(thisMonthStats);
    const todayStats = OverallStats[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });
    console.log(todayStats);
    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
