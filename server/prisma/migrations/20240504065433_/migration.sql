/*
  Warnings:

  - You are about to alter the column `title` on the `Albums` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `genre` on the `Albums` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `slice_name` on the `Collaborators` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `title` on the `Playlists` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `project_name` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `type` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `privacy` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `track_name` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `genre` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(20)`.
  - You are about to alter the column `explicit` on the `Tracks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(10)`.
  - You are about to alter the column `status` on the `Tracks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(10)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `fullname` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `country` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `status` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Albums" ALTER COLUMN "title" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "genre" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Collaborators" ALTER COLUMN "slice_name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "slice_audio" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "content" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Playlists" ALTER COLUMN "title" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "playlist_image" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Posts" ALTER COLUMN "caption" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "hashtags" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "project_name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "type" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "privacy" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "track_name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "audio_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "genre" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Tracks" ALTER COLUMN "audio_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "explicit" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "password" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "fullname" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "biography" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "country" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(10);
