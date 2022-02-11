const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
//@acccvess Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

// @desc set goals
// @route post /api/goals
//@acccvess Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

// @desc Update goal
// @route put /api/goals/:id
//@acccvess Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc delete goals
// @route GET /api/goals/:id
//@acccvess Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
};
