/*
  Warnings:

  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `city`,
    ADD COLUMN `latitude` DECIMAL(65, 30) NULL,
    ADD COLUMN `longitude` DECIMAL(65, 30) NULL,
    MODIFY `phone` VARCHAR(191) NULL;
