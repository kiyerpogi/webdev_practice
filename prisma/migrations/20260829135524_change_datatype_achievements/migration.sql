/*
  Warnings:

  - Made the column `achievements` on table `achievements` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `achievements` MODIFY `achievements` VARCHAR(191) NOT NULL;
