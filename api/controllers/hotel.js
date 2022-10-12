import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//get hotel by id
export const getHotel = async (req, res, next) => {
  try {
    const id  = req.params.id;
    const intId = parseInt(id);
    const hotel = await prisma.hotel.findUnique({
      where: {id : intId},
    });
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};


export const getByCity = async (req, res, next) => {
  try {
    const city = req.query.city;
    const hotel = await prisma.hotel.findMany({
      where: {city:city},
    });
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// Get featured Hotels
export const getFeatured = async (req, res, next) => {
  try {
    const hotels = await prisma.hotel.findMany({
      where: {featured: true},
    });
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// Get new released Hotel
export const getNew = async (req, res, next) => {
  try {
    const hotel = await prisma.hotel.findMany({
      orderBy : {
        createdAt: "asc",
      }
    });
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};




// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };


// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };
