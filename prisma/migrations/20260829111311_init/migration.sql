-- CreateTable
CREATE TABLE `profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `update_year` INTEGER NOT NULL,
    `profesion` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `contact_number` VARCHAR(191) NULL,
    `initials` VARCHAR(191) NOT NULL,
    `social_links` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    UNIQUE INDEX `profiles_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `achievements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `achievements` JSON NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `educations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `year` INTEGER NULL,
    `note` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `objectives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `objective_desc` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `lang` VARCHAR(191) NULL,
    `project_desc` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `skill_name` VARCHAR(191) NULL,
    `level` INTEGER NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `softSkills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `soft_skill` JSON NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `strips` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `my_strip` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tools` JSON NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_updated` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
