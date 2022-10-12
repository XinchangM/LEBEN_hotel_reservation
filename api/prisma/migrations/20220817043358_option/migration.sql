/*
  Warnings:

  - Made the column `hotelId` on table `Room` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_reservationId_fkey`;

-- AlterTable
ALTER TABLE `Room` MODIFY `reservationId` INTEGER NULL,
    MODIFY `hotelId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
