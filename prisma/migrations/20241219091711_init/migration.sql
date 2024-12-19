/*
  Warnings:

  - The primary key for the `telegram_account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `telegramId` on the `telegram_account` table. All the data in the column will be lost.
  - Added the required column `telegram_id` to the `telegram_account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `telegram_account` DROP PRIMARY KEY,
    DROP COLUMN `telegramId`,
    ADD COLUMN `telegram_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`telegram_id`);
