/*
  Warnings:

  - Made the column `school` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `degree` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `objective_desc` on table `objectives` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contact_number` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lang` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `skill_name` on table `skills` required. This step will fail if there are existing NULL values in that column.
  - Made the column `level` on table `skills` required. This step will fail if there are existing NULL values in that column.
  - Made the column `soft_skill` on table `softskills` required. This step will fail if there are existing NULL values in that column.
  - Made the column `my_strip` on table `strips` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tools` on table `tools` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `educations` MODIFY `school` VARCHAR(191) NOT NULL,
    MODIFY `degree` VARCHAR(191) NOT NULL,
    MODIFY `year` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `objectives` MODIFY `objective_desc` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profiles` MODIFY `contact_number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `projects` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `lang` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `skills` MODIFY `skill_name` VARCHAR(191) NOT NULL,
    MODIFY `level` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `softskills` MODIFY `soft_skill` JSON NOT NULL;

-- AlterTable
ALTER TABLE `strips` MODIFY `my_strip` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tools` MODIFY `tools` JSON NOT NULL;
