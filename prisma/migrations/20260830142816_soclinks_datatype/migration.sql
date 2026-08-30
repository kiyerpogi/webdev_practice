/*
  Warnings:

  - You are about to alter the column `social_links` on the `profiles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `profiles` MODIFY `social_links` JSON NULL;
