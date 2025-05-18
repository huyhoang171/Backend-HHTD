/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `exp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `level_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `streak` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Achievement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DailyChallenge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Leaderboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Levels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Progress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAchievement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserDailyChallenge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserVocabulary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vocabulary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_userId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_userId_fkey";

-- DropForeignKey
ALTER TABLE "Setting" DROP CONSTRAINT "Setting_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_level_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achievementId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserDailyChallenge" DROP CONSTRAINT "UserDailyChallenge_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "UserDailyChallenge" DROP CONSTRAINT "UserDailyChallenge_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserVocabulary" DROP CONSTRAINT "UserVocabulary_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserVocabulary" DROP CONSTRAINT "UserVocabulary_vocabId_fkey";

-- DropForeignKey
ALTER TABLE "Vocabulary" DROP CONSTRAINT "Vocabulary_lessonId_fkey";

-- DropIndex
DROP INDEX "User_password_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "avatar",
DROP COLUMN "exp",
DROP COLUMN "lastLogin",
DROP COLUMN "level_id",
DROP COLUMN "role",
DROP COLUMN "streak",
DROP COLUMN "userId",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Achievement";

-- DropTable
DROP TABLE "DailyChallenge";

-- DropTable
DROP TABLE "Exercise";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Leaderboard";

-- DropTable
DROP TABLE "Lesson";

-- DropTable
DROP TABLE "Levels";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Progress";

-- DropTable
DROP TABLE "Setting";

-- DropTable
DROP TABLE "Subscription";

-- DropTable
DROP TABLE "UserAchievement";

-- DropTable
DROP TABLE "UserDailyChallenge";

-- DropTable
DROP TABLE "UserVocabulary";

-- DropTable
DROP TABLE "Vocabulary";

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,
    "titleVN" TEXT,
    "image" TEXT,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "pos" TEXT,
    "phonetic" TEXT,
    "phonetic_text" TEXT,
    "phonetic_am" TEXT,
    "phonetic_am_text" TEXT,
    "topic_id" INTEGER,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sense" (
    "id" SERIAL NOT NULL,
    "word_id" INTEGER NOT NULL,
    "definition" TEXT NOT NULL,

    CONSTRAINT "Sense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "sense_id" INTEGER NOT NULL,
    "example_text" TEXT NOT NULL,
    "cf" TEXT,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrammarTopic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT,

    CONSTRAINT "GrammarTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrammarLesson" (
    "id" SERIAL NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "sub_title" TEXT,
    "path" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "GrammarLesson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_parent_id_key" ON "Topic"("name", "parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "GrammarLesson_path_key" ON "GrammarLesson"("path");

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_sense_id_fkey" FOREIGN KEY ("sense_id") REFERENCES "Sense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrammarLesson" ADD CONSTRAINT "GrammarLesson_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "GrammarTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
