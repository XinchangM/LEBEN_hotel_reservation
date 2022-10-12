import express from "express";
import {
  createReservation,
  deleteReservation,
  getReservation,
  updateReservation,
  getReservations
} from "../controllers/reservation.js";
import { requireAuth } from "../utils/auth.js";

const router = express.Router();

//CREATE
router.post("/", requireAuth, createReservation);

//UPDATE
router.put("/:id", requireAuth,  updateReservation);

//DELETE
router.delete("/:id", requireAuth,  deleteReservation);

//GET
router.get("/find/:id", requireAuth, getReservation);

//GET ALL
router.get("/",requireAuth, getReservations);

export default router;
