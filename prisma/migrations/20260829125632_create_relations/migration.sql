/*
  Warnings:

  - You are about to drop the column `profesion` on the `profiles` table. All the data in the column will be lost.
  - You are about to alter the column `social_links` on the `profiles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - A unique constraint covering the columns `[profileId]` on the table `objectives` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `strips` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `educations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `objectives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `skills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `softSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `strips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `tools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `achievements` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `educations` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `objectives` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `profesion`,
    ADD COLUMN `profession` VARCHAR(191) NOT NULL,
    MODIFY `social_links` JSON NULL;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `skills` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `softskills` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `strips` ADD COLUMN `profileId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tools` ADD COLUMN `profileId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `objectives_profileId_key` ON `objectives`(`profileId`);

-- CreateIndex
CREATE UNIQUE INDEX `strips_profileId_key` ON `strips`(`profileId`);

-- AddForeignKey
ALTER TABLE `achievements` ADD CONSTRAINT `achievements_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `educations` ADD CONSTRAINT `educations_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `objectives` ADD CONSTRAINT `objectives_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skills` ADD CONSTRAINT `skills_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `softSkills` ADD CONSTRAINT `softSkills_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `strips` ADD CONSTRAINT `strips_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tools` ADD CONSTRAINT `tools_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
