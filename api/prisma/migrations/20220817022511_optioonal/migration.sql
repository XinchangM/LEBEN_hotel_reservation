/*
  Warnings:

  - You are about to drop the column `roomId` on the `Reservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Reservation` DROP FOREIGN KEY `Reservation_roomId_fkey`;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `roomId`;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
