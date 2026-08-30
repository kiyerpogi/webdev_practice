/*
  Warnings:

  - You are about to drop the column `tools` on the `tools` table. All the data in the column will be lost.
  - Added the required column `name` to the `tools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tools` DROP COLUMN `tools`,
    ADD COLUMN `name` JSON NOT NULL;
