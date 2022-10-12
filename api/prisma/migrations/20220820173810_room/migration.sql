/*
  Warnings:

  - You are about to drop the column `price` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `minPrice` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Reservation` DROP FOREIGN KEY `Reservation_hotelId_fkey`;

-- AlterTable
ALTER TABLE `Hotel` DROP COLUMN `price`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `minPrice` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `hotelId`;

-- CreateTable
CREATE TABLE `Photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotelId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `hotelId` INTEGER NOT NULL,
    `roomNumber` INTEGER NOT NULL,
    `unavaliableDate` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
