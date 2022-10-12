import express from "express";
import { requireAuth } from "../utils/auth.js"
import { verifyUser, getUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.post("/verify", requireAuth, verifyUser);
router.get("/me", requireAuth, getUser);
router.put("/me", requireAuth, updateUser);
router.delete("/id", requireAuth, deleteUser);

export default router;