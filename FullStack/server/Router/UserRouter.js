import express from "express";
const router = express.Router();

router.get("/all", (req, res, next) => {
  res.send("All user here");
});
export default router;
