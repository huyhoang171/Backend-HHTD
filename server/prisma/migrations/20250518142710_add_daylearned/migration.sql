-- CreateTable
CREATE TABLE "DayLearned" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "DayLearned_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DayLearned_userId_date_key" ON "DayLearned"("userId", "date");

-- AddForeignKey
ALTER TABLE "DayLearned" ADD CONSTRAINT "DayLearned_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
