const express = require("express");
const { protect } = require("../Middlewares/authMiddleware");
const {
  accessChat,
  getAllChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../Controllers/chatController");

const router = express.Router();

router.post("/", protect, accessChat);
router.get("/", protect, getAllChats);
router.post("/group", protect, createGroupChat);
router.put("/rename", protect, renameGroup);
router.put("/remove", protect, removeFromGroup);
router.put("/add", protect, addToGroup);

module.exports = router;
