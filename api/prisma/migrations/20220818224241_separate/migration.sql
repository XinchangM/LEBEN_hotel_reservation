/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_reservationId_fkey`;

-- DropIndex
DROP INDEX `User_userName_key` ON `User`;

-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `roomNumber` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `isAdmin`,
    DROP COLUMN `userName`;

-- DropTable
DROP TABLE `Hotel`;

-- DropTable
DROP TABLE `Room`;
