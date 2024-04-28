-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role_id" INTEGER NOT NULL DEFAULT 3,
    "fullname" VARCHAR(100),
    "biography" VARCHAR(100),
    "phone_number" INTEGER,
    "country" VARCHAR(100),
    "balance" INTEGER NOT NULL DEFAULT 200,
    "date_of_birth" TIMESTAMP(3),
    "status" VARCHAR(100) NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
