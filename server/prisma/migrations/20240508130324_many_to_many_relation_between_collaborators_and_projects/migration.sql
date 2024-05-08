-- DropForeignKey
ALTER TABLE "_PlaylistTracks" DROP CONSTRAINT "_PlaylistTracks_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistTracks" DROP CONSTRAINT "_PlaylistTracks_B_fkey";

-- CreateTable
CREATE TABLE "_ProjectsCollaborators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsCollaborators_AB_unique" ON "_ProjectsCollaborators"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsCollaborators_B_index" ON "_ProjectsCollaborators"("B");

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tracks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsCollaborators" ADD CONSTRAINT "_ProjectsCollaborators_A_fkey" FOREIGN KEY ("A") REFERENCES "Collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsCollaborators" ADD CONSTRAINT "_ProjectsCollaborators_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
