import express from "express";
import {
   getByCity,
   //countByType,
    getHotel,
    getFeatured,
    getNew,
  // getHotels,
} from "../controllers/hotel.js";


const router = express.Router();



router.get("/find/:id", getHotel);
router.get("/getByCity", getByCity);

router.get("/featured", getFeatured);

router.get("/new", getNew);

// router.get("/countByType", countByType);


export default router;
