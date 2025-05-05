
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  userId: 'userId',
  username: 'username',
  password: 'password',
  email: 'email',
  avatar: 'avatar',
  createdAt: 'createdAt',
  level_id: 'level_id',
  exp: 'exp',
  streak: 'streak',
  lastLogin: 'lastLogin',
  role: 'role'
};

exports.Prisma.LessonScalarFieldEnum = {
  lessonId: 'lessonId',
  title: 'title',
  description: 'description',
  levelRequired: 'levelRequired',
  order: 'order',
  image: 'image'
};

exports.Prisma.ExerciseScalarFieldEnum = {
  exerciseId: 'exerciseId',
  lessonId: 'lessonId',
  question: 'question',
  type: 'type',
  choices: 'choices',
  correctAnswer: 'correctAnswer',
  audio: 'audio',
  image: 'image'
};

exports.Prisma.ProgressScalarFieldEnum = {
  progressId: 'progressId',
  userId: 'userId',
  lessonId: 'lessonId',
  status: 'status',
  score: 'score',
  completedAt: 'completedAt'
};

exports.Prisma.AchievementScalarFieldEnum = {
  achievementId: 'achievementId',
  title: 'title',
  description: 'description',
  expReward: 'expReward'
};

exports.Prisma.UserAchievementScalarFieldEnum = {
  userId: 'userId',
  achievementId: 'achievementId',
  unlockedAt: 'unlockedAt'
};

exports.Prisma.VocabularyScalarFieldEnum = {
  vocabId: 'vocabId',
  lessonId: 'lessonId',
  word: 'word',
  meaning: 'meaning',
  pronunciation: 'pronunciation',
  example: 'example'
};

exports.Prisma.UserVocabularyScalarFieldEnum = {
  userId: 'userId',
  vocabId: 'vocabId',
  learnedAt: 'learnedAt'
};

exports.Prisma.LeaderboardScalarFieldEnum = {
  leaderboardId: 'leaderboardId',
  userId: 'userId',
  week: 'week',
  score: 'score'
};

exports.Prisma.DailyChallengeScalarFieldEnum = {
  challengeId: 'challengeId',
  description: 'description',
  expReward: 'expReward',
  date: 'date'
};

exports.Prisma.UserDailyChallengeScalarFieldEnum = {
  userId: 'userId',
  challengeId: 'challengeId',
  completedAt: 'completedAt'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  feedbackId: 'feedbackId',
  userId: 'userId',
  lessonId: 'lessonId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  subscriptionId: 'subscriptionId',
  userId: 'userId',
  startDate: 'startDate',
  endDate: 'endDate',
  type: 'type'
};

exports.Prisma.PaymentScalarFieldEnum = {
  paymentId: 'paymentId',
  userId: 'userId',
  amount: 'amount',
  paymentDate: 'paymentDate',
  method: 'method'
};

exports.Prisma.SettingScalarFieldEnum = {
  userId: 'userId',
  language: 'language',
  notificationEnabled: 'notificationEnabled'
};

exports.Prisma.LevelsScalarFieldEnum = {
  level_id: 'level_id',
  level_name: 'level_name',
  exp_required: 'exp_required'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Lesson: 'Lesson',
  Exercise: 'Exercise',
  Progress: 'Progress',
  Achievement: 'Achievement',
  UserAchievement: 'UserAchievement',
  Vocabulary: 'Vocabulary',
  UserVocabulary: 'UserVocabulary',
  Leaderboard: 'Leaderboard',
  DailyChallenge: 'DailyChallenge',
  UserDailyChallenge: 'UserDailyChallenge',
  Feedback: 'Feedback',
  Subscription: 'Subscription',
  Payment: 'Payment',
  Setting: 'Setting',
  Levels: 'Levels'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
