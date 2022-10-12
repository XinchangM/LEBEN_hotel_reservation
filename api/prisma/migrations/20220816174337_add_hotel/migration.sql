/*
  Warnings:

  - You are about to drop the column `type` on the `Room` table. All the data in the column will be lost.
  - Added the required column `hotelId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Room` DROP COLUMN `type`,
    ADD COLUMN `hotelId` INTEGER NOT NULL,
    ADD COLUMN `roomNumber` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `unavailableDates` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` ADD COLUMN `city` VARCHAR(191) NOT NULL DEFAULT 'Vancouver',
    ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `img` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Hotel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `distance` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `featured` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
