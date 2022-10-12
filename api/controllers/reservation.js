import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// create a reservation
export const createReservation = async (req, res, next) => {
    const auth0Id = req.user.sub;
    const checkin = req.body.dateIn;
    const checkout = req.body.dateOut;

    if(!checkin || !checkout) {
        res.status(400).send("Information is required");
    } else{
        try {
        const newReservation = await prisma.reservation.create({
          data: { dateIn : checkin,
                  dateOut: checkout,
          user:{ connect : {auth0Id}},
          },
        });
        res.status(200).json(newReservation);
        } catch (err) {
        next(err);
        }
    }
  };

//get reservation by id
export const getReservation = async (req, res, next) => {
    try {
      
        const id = req.params.id;
        const reservation = await prisma.reservation.findUnique({
        where: {id,},
      });
      res.status(200).json(reservation);
    } catch (err) {
      next(err);
    }
};

//get all reservation
export const getReservations = async (req, res, next) => {
    try {
        const auth0Id = req.user.sub;
        const user = await prisma.user.findUnique({
            where: {
              auth0Id,
            },
          });

        const reservations = await prisma.user.findMany({
            where: {
                userId: user.id,
              },
        });
      res.status(200).json(reservations);
    } catch (err) {
      next(err);
    }
};


// update reservation by id
export const updateReservation = async (req, res, next) => {
    try{
        const id = req.params.id;
        const { reservation } = req.body;

        const updatedReservation = await prisma.room.update({
            where:{ id, },
            data: {
               reservation,},
        });
        res.status(200).json(updatedReservation);
    }catch(err){
        next(err);
    }
};
//get reservation by id
export const deleteReservation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedreservation = await prisma.reservation.delete({
        where: {id,},
      });
      res.status(200).json(deletedreservation);
    } catch (err) {
      next(err);
    }
};