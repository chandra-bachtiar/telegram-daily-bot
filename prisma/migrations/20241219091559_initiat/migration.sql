/*
  Warnings:

  - You are about to drop the `telegramaccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `telegramaccount` DROP FOREIGN KEY `TelegramAccount_familyId_fkey`;

-- DropTable
DROP TABLE `telegramaccount`;

-- CreateTable
CREATE TABLE `telegram_account` (
    `telegramId` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `language_code` VARCHAR(191) NULL,
    `is_bot` BOOLEAN NOT NULL,
    `familyId` INTEGER NULL,

    PRIMARY KEY (`telegramId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `telegram_account` ADD CONSTRAINT `telegram_account_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
