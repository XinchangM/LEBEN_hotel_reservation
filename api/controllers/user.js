import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const verifyUser = async (req, res, next) => {
    try{
        const auth0Id = req.user.sub;
    
        const username = req.user[`${process.env.AUTH0_AUDIENCE}/name`];
        const email = req.user[`${process.env.AUTH0_AUDIENCE}/email`];
        const latitude = req.user[`${process.env.AUTH0_AUDIENCE}/latitude`]
        const longitude = req.user[`${process.env.AUTH0_AUDIENCE}/longitude`]

        const user = await prisma.user.findUnique({
        where: {
            auth0Id,
        },
        });
    
        if (user) {
        res.send(user);
        } else {
        const newUser = await prisma.user.create({
            data: {
            email,
            auth0Id,
            username,
            latitude,
            longitude
            },
        });
        res.send(newUser);
        }
    } catch (err) {
        next(err);
      }
  };

// get user
export const getUser = async (req, res, next) => {
    try{
        const auth0Id = req.user.sub;
        
        const user = await prisma.user.findUnique({
        where: {
            auth0Id,
        },
        });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// update user information
export const updateUser = async (req, res, next) => {
    try{
        const auth0Id = req.user.sub;
        const { information } = req.body;
        const updatedUser = await prisma.user.update({
        where: {
            auth0Id,
        },
        data: {
            information,
        }
        });
        res.json( updatedUser);
    } catch (err) {
        next(err);
    }
};


// delete user by auth0Id
export const deleteUser = async (req, res, next) => {
    try{
        const auth0Id = req.user.sub;
        const user = await prisma.user.delete({
        where: {
            auth0Id,
        },
        });
        res.send(user);
    }catch (err) {
        next(err);
      }
};

  