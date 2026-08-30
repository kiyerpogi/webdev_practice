/*
  Warnings:

  - You are about to drop the column `achievements` on the `achievements` table. All the data in the column will be lost.
  - Added the required column `name` to the `achievements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `achievements` DROP COLUMN `achievements`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
