-- CreateTable
CREATE TABLE "Speaking" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Speaking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSpeakingProgress" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "spkId" INTEGER NOT NULL,
    "learnedWords" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserSpeakingProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSpeakingProgress_userId_spkId_key" ON "UserSpeakingProgress"("userId", "spkId");

-- AddForeignKey
ALTER TABLE "UserSpeakingProgress" ADD CONSTRAINT "UserSpeakingProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSpeakingProgress" ADD CONSTRAINT "UserSpeakingProgress_spkId_fkey" FOREIGN KEY ("spkId") REFERENCES "Speaking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
