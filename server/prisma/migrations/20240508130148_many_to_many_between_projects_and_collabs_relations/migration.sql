/*
  Warnings:

  - You are about to drop the column `collaborator_id` on the `Collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `Collaborators` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Collaborators" DROP CONSTRAINT "Collaborators_collaborator_id_fkey";

-- DropForeignKey
ALTER TABLE "Collaborators" DROP CONSTRAINT "Collaborators_project_id_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistTracks" DROP CONSTRAINT "_PlaylistTracks_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistTracks" DROP CONSTRAINT "_PlaylistTracks_B_fkey";

-- AlterTable
ALTER TABLE "Collaborators" DROP COLUMN "collaborator_id",
DROP COLUMN "project_id";

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "Collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistTracks" ADD CONSTRAINT "_PlaylistTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
