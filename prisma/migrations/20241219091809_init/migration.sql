/*
  Warnings:

  - You are about to drop the column `familyId` on the `telegram_account` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `telegram_account` DROP FOREIGN KEY `telegram_account_familyId_fkey`;

-- DropIndex
DROP INDEX `telegram_account_familyId_fkey` ON `telegram_account`;

-- AlterTable
ALTER TABLE `telegram_account` DROP COLUMN `familyId`,
    ADD COLUMN `family_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `telegram_account` ADD CONSTRAINT `telegram_account_family_id_fkey` FOREIGN KEY (`family_id`) REFERENCES `family`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
