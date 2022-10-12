/*
  Warnings:

  - Added the required column `hotelId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `hotelId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
