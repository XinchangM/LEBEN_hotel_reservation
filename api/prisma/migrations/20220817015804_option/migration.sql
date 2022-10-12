-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_hotelId_fkey`;

-- AlterTable
ALTER TABLE `Hotel` MODIFY `type` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `distance` VARCHAR(191) NULL,
    MODIFY `title` VARCHAR(191) NULL,
    MODIFY `rating` INTEGER NULL,
    MODIFY `featured` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Reservation` MODIFY `dateIn` DATE NULL,
    MODIFY `dateOut` DATE NULL;

-- AlterTable
ALTER TABLE `Room` MODIFY `price` DECIMAL(65, 30) NULL,
    MODIFY `maxPeople` INTEGER NULL,
    MODIFY `hotelId` INTEGER NULL,
    MODIFY `unavailableDates` DATE NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
