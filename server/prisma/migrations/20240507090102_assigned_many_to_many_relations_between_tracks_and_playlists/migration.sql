/*
  Warnings:

  - You are about to drop the `_PlaylistsToTracks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlaylistsToTracks" DROP CONSTRAINT "_PlaylistsToTracks_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistsToTracks" DROP CONSTRAINT "_PlaylistsToTracks_B_fkey";

-- DropTable
DROP TABLE "_PlaylistsToTracks";

-- CreateTable
CREATE TABLE "_PlaylistTracks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlaylistTracks_AB_unique" ON "_PlaylistTracks"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaylistTracks_B_index" ON "_PlaylistTracks"("B");

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tracks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
