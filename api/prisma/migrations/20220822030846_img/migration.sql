/*
  Warnings:

  - You are about to drop the column `address` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `minPrice` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Price` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_hotelId_fkey`;

-- AlterTable
ALTER TABLE `Hotel` DROP COLUMN `address`,
    DROP COLUMN `minPrice`,
    ADD COLUMN `Price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `img` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Room`;
