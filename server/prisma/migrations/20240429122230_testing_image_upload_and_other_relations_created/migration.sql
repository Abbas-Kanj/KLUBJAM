/*
  Warnings:

  - Added the required column `profile_picture` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "profile_picture" VARCHAR(240) NOT NULL;

-- CreateTable
CREATE TABLE "Tracks" (
    "id" SERIAL NOT NULL,
    "track_name" VARCHAR(45) NOT NULL,
    "duration" VARCHAR(45) NOT NULL,
    "audio_url" VARCHAR(45) NOT NULL,
    "track_image" VARCHAR(45) NOT NULL,
    "explicit" VARCHAR(45) NOT NULL,
    "status" VARCHAR(45) NOT NULL,
    "musician_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Albums" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "genre" VARCHAR(45) NOT NULL,
    "cover_image" VARCHAR(45) NOT NULL,
    "musician_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlists" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "playlist_image" VARCHAR(45) NOT NULL,
    "musician_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "project_name" VARCHAR(45) NOT NULL,
    "type" VARCHAR(45) NOT NULL,
    "description" VARCHAR(45) NOT NULL,
    "privacy" VARCHAR(45) NOT NULL,
    "track_name" VARCHAR(45) NOT NULL,
    "audio_url" VARCHAR(45) NOT NULL,
    "duration" VARCHAR(45) NOT NULL,
    "genre" VARCHAR(45) NOT NULL,
    "creator_id" INTEGER NOT NULL,
    "collaborators_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborators" (
    "id" SERIAL NOT NULL,
    "slice_name" VARCHAR(45) NOT NULL,
    "slice_audio" VARCHAR(45) NOT NULL,
    "duration" VARCHAR(45) NOT NULL,
    "collaborator_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JamBoxes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "lyrics" VARCHAR(245) NOT NULL,
    "artist_voice" VARCHAR(45) NOT NULL,
    "musician_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JamBoxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlaylistsToTracks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlaylistsToTracks_AB_unique" ON "_PlaylistsToTracks"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaylistsToTracks_B_index" ON "_PlaylistsToTracks"("B");

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_musician_id_fkey" FOREIGN KEY ("musician_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_musician_id_fkey" FOREIGN KEY ("musician_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlists" ADD CONSTRAINT "Playlists_musician_id_fkey" FOREIGN KEY ("musician_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborators" ADD CONSTRAINT "Collaborators_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborators" ADD CONSTRAINT "Collaborators_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JamBoxes" ADD CONSTRAINT "JamBoxes_musician_id_fkey" FOREIGN KEY ("musician_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistsToTracks" ADD CONSTRAINT "_PlaylistsToTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistsToTracks" ADD CONSTRAINT "_PlaylistsToTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tracks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
