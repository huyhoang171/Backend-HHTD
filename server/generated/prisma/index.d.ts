
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Sense
 * 
 */
export type Sense = $Result.DefaultSelection<Prisma.$SensePayload>
/**
 * Model Example
 * 
 */
export type Example = $Result.DefaultSelection<Prisma.$ExamplePayload>
/**
 * Model GrammarTopic
 * 
 */
export type GrammarTopic = $Result.DefaultSelection<Prisma.$GrammarTopicPayload>
/**
 * Model GrammarLesson
 * 
 */
export type GrammarLesson = $Result.DefaultSelection<Prisma.$GrammarLessonPayload>
/**
 * Model UserTopicProgress
 * 
 */
export type UserTopicProgress = $Result.DefaultSelection<Prisma.$UserTopicProgressPayload>
/**
 * Model UserGrammarLessonProgress
 * 
 */
export type UserGrammarLessonProgress = $Result.DefaultSelection<Prisma.$UserGrammarLessonProgressPayload>
/**
 * Model Speaking
 * 
 */
export type Speaking = $Result.DefaultSelection<Prisma.$SpeakingPayload>
/**
 * Model UserSpeakingProgress
 * 
 */
export type UserSpeakingProgress = $Result.DefaultSelection<Prisma.$UserSpeakingProgressPayload>
/**
 * Model DayLearned
 * 
 */
export type DayLearned = $Result.DefaultSelection<Prisma.$DayLearnedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProgressStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]

}

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sense`: Exposes CRUD operations for the **Sense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senses
    * const senses = await prisma.sense.findMany()
    * ```
    */
  get sense(): Prisma.SenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.example`: Exposes CRUD operations for the **Example** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examples
    * const examples = await prisma.example.findMany()
    * ```
    */
  get example(): Prisma.ExampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarTopic`: Exposes CRUD operations for the **GrammarTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarTopics
    * const grammarTopics = await prisma.grammarTopic.findMany()
    * ```
    */
  get grammarTopic(): Prisma.GrammarTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarLesson`: Exposes CRUD operations for the **GrammarLesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarLessons
    * const grammarLessons = await prisma.grammarLesson.findMany()
    * ```
    */
  get grammarLesson(): Prisma.GrammarLessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTopicProgress`: Exposes CRUD operations for the **UserTopicProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTopicProgresses
    * const userTopicProgresses = await prisma.userTopicProgress.findMany()
    * ```
    */
  get userTopicProgress(): Prisma.UserTopicProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGrammarLessonProgress`: Exposes CRUD operations for the **UserGrammarLessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGrammarLessonProgresses
    * const userGrammarLessonProgresses = await prisma.userGrammarLessonProgress.findMany()
    * ```
    */
  get userGrammarLessonProgress(): Prisma.UserGrammarLessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speaking`: Exposes CRUD operations for the **Speaking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Speakings
    * const speakings = await prisma.speaking.findMany()
    * ```
    */
  get speaking(): Prisma.SpeakingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSpeakingProgress`: Exposes CRUD operations for the **UserSpeakingProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSpeakingProgresses
    * const userSpeakingProgresses = await prisma.userSpeakingProgress.findMany()
    * ```
    */
  get userSpeakingProgress(): Prisma.UserSpeakingProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayLearned`: Exposes CRUD operations for the **DayLearned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayLearneds
    * const dayLearneds = await prisma.dayLearned.findMany()
    * ```
    */
  get dayLearned(): Prisma.DayLearnedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Topic: 'Topic',
    Word: 'Word',
    Sense: 'Sense',
    Example: 'Example',
    GrammarTopic: 'GrammarTopic',
    GrammarLesson: 'GrammarLesson',
    UserTopicProgress: 'UserTopicProgress',
    UserGrammarLessonProgress: 'UserGrammarLessonProgress',
    Speaking: 'Speaking',
    UserSpeakingProgress: 'UserSpeakingProgress',
    DayLearned: 'DayLearned'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "topic" | "word" | "sense" | "example" | "grammarTopic" | "grammarLesson" | "userTopicProgress" | "userGrammarLessonProgress" | "speaking" | "userSpeakingProgress" | "dayLearned"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Sense: {
        payload: Prisma.$SensePayload<ExtArgs>
        fields: Prisma.SenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          findFirst: {
            args: Prisma.SenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          findMany: {
            args: Prisma.SenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          create: {
            args: Prisma.SenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          createMany: {
            args: Prisma.SenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          delete: {
            args: Prisma.SenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          update: {
            args: Prisma.SenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          deleteMany: {
            args: Prisma.SenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          upsert: {
            args: Prisma.SenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          aggregate: {
            args: Prisma.SenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSense>
          }
          groupBy: {
            args: Prisma.SenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenseCountArgs<ExtArgs>
            result: $Utils.Optional<SenseCountAggregateOutputType> | number
          }
        }
      }
      Example: {
        payload: Prisma.$ExamplePayload<ExtArgs>
        fields: Prisma.ExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findFirst: {
            args: Prisma.ExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findMany: {
            args: Prisma.ExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          create: {
            args: Prisma.ExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          createMany: {
            args: Prisma.ExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          delete: {
            args: Prisma.ExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          update: {
            args: Prisma.ExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          deleteMany: {
            args: Prisma.ExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          upsert: {
            args: Prisma.ExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          aggregate: {
            args: Prisma.ExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExample>
          }
          groupBy: {
            args: Prisma.ExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExampleCountArgs<ExtArgs>
            result: $Utils.Optional<ExampleCountAggregateOutputType> | number
          }
        }
      }
      GrammarTopic: {
        payload: Prisma.$GrammarTopicPayload<ExtArgs>
        fields: Prisma.GrammarTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          findFirst: {
            args: Prisma.GrammarTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          findMany: {
            args: Prisma.GrammarTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>[]
          }
          create: {
            args: Prisma.GrammarTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          createMany: {
            args: Prisma.GrammarTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>[]
          }
          delete: {
            args: Prisma.GrammarTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          update: {
            args: Prisma.GrammarTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          deleteMany: {
            args: Prisma.GrammarTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>[]
          }
          upsert: {
            args: Prisma.GrammarTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTopicPayload>
          }
          aggregate: {
            args: Prisma.GrammarTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarTopic>
          }
          groupBy: {
            args: Prisma.GrammarTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarTopicCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarTopicCountAggregateOutputType> | number
          }
        }
      }
      GrammarLesson: {
        payload: Prisma.$GrammarLessonPayload<ExtArgs>
        fields: Prisma.GrammarLessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarLessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarLessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          findFirst: {
            args: Prisma.GrammarLessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarLessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          findMany: {
            args: Prisma.GrammarLessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>[]
          }
          create: {
            args: Prisma.GrammarLessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          createMany: {
            args: Prisma.GrammarLessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarLessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>[]
          }
          delete: {
            args: Prisma.GrammarLessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          update: {
            args: Prisma.GrammarLessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          deleteMany: {
            args: Prisma.GrammarLessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarLessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarLessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>[]
          }
          upsert: {
            args: Prisma.GrammarLessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarLessonPayload>
          }
          aggregate: {
            args: Prisma.GrammarLessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarLesson>
          }
          groupBy: {
            args: Prisma.GrammarLessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarLessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarLessonCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarLessonCountAggregateOutputType> | number
          }
        }
      }
      UserTopicProgress: {
        payload: Prisma.$UserTopicProgressPayload<ExtArgs>
        fields: Prisma.UserTopicProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTopicProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTopicProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          findFirst: {
            args: Prisma.UserTopicProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTopicProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          findMany: {
            args: Prisma.UserTopicProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>[]
          }
          create: {
            args: Prisma.UserTopicProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          createMany: {
            args: Prisma.UserTopicProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTopicProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>[]
          }
          delete: {
            args: Prisma.UserTopicProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          update: {
            args: Prisma.UserTopicProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserTopicProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTopicProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTopicProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserTopicProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTopicProgressPayload>
          }
          aggregate: {
            args: Prisma.UserTopicProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTopicProgress>
          }
          groupBy: {
            args: Prisma.UserTopicProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTopicProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTopicProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserTopicProgressCountAggregateOutputType> | number
          }
        }
      }
      UserGrammarLessonProgress: {
        payload: Prisma.$UserGrammarLessonProgressPayload<ExtArgs>
        fields: Prisma.UserGrammarLessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGrammarLessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGrammarLessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          findFirst: {
            args: Prisma.UserGrammarLessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGrammarLessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          findMany: {
            args: Prisma.UserGrammarLessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>[]
          }
          create: {
            args: Prisma.UserGrammarLessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          createMany: {
            args: Prisma.UserGrammarLessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGrammarLessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>[]
          }
          delete: {
            args: Prisma.UserGrammarLessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          update: {
            args: Prisma.UserGrammarLessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserGrammarLessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGrammarLessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGrammarLessonProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserGrammarLessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrammarLessonProgressPayload>
          }
          aggregate: {
            args: Prisma.UserGrammarLessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGrammarLessonProgress>
          }
          groupBy: {
            args: Prisma.UserGrammarLessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGrammarLessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGrammarLessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserGrammarLessonProgressCountAggregateOutputType> | number
          }
        }
      }
      Speaking: {
        payload: Prisma.$SpeakingPayload<ExtArgs>
        fields: Prisma.SpeakingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          findFirst: {
            args: Prisma.SpeakingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          findMany: {
            args: Prisma.SpeakingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>[]
          }
          create: {
            args: Prisma.SpeakingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          createMany: {
            args: Prisma.SpeakingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeakingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>[]
          }
          delete: {
            args: Prisma.SpeakingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          update: {
            args: Prisma.SpeakingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          deleteMany: {
            args: Prisma.SpeakingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeakingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>[]
          }
          upsert: {
            args: Prisma.SpeakingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingPayload>
          }
          aggregate: {
            args: Prisma.SpeakingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeaking>
          }
          groupBy: {
            args: Prisma.SpeakingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakingCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakingCountAggregateOutputType> | number
          }
        }
      }
      UserSpeakingProgress: {
        payload: Prisma.$UserSpeakingProgressPayload<ExtArgs>
        fields: Prisma.UserSpeakingProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSpeakingProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSpeakingProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          findFirst: {
            args: Prisma.UserSpeakingProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSpeakingProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          findMany: {
            args: Prisma.UserSpeakingProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>[]
          }
          create: {
            args: Prisma.UserSpeakingProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          createMany: {
            args: Prisma.UserSpeakingProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSpeakingProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>[]
          }
          delete: {
            args: Prisma.UserSpeakingProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          update: {
            args: Prisma.UserSpeakingProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserSpeakingProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSpeakingProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSpeakingProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserSpeakingProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpeakingProgressPayload>
          }
          aggregate: {
            args: Prisma.UserSpeakingProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSpeakingProgress>
          }
          groupBy: {
            args: Prisma.UserSpeakingProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSpeakingProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSpeakingProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserSpeakingProgressCountAggregateOutputType> | number
          }
        }
      }
      DayLearned: {
        payload: Prisma.$DayLearnedPayload<ExtArgs>
        fields: Prisma.DayLearnedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayLearnedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayLearnedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          findFirst: {
            args: Prisma.DayLearnedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayLearnedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          findMany: {
            args: Prisma.DayLearnedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>[]
          }
          create: {
            args: Prisma.DayLearnedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          createMany: {
            args: Prisma.DayLearnedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayLearnedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>[]
          }
          delete: {
            args: Prisma.DayLearnedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          update: {
            args: Prisma.DayLearnedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          deleteMany: {
            args: Prisma.DayLearnedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayLearnedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayLearnedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>[]
          }
          upsert: {
            args: Prisma.DayLearnedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayLearnedPayload>
          }
          aggregate: {
            args: Prisma.DayLearnedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayLearned>
          }
          groupBy: {
            args: Prisma.DayLearnedGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayLearnedGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayLearnedCountArgs<ExtArgs>
            result: $Utils.Optional<DayLearnedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    topic?: TopicOmit
    word?: WordOmit
    sense?: SenseOmit
    example?: ExampleOmit
    grammarTopic?: GrammarTopicOmit
    grammarLesson?: GrammarLessonOmit
    userTopicProgress?: UserTopicProgressOmit
    userGrammarLessonProgress?: UserGrammarLessonProgressOmit
    speaking?: SpeakingOmit
    userSpeakingProgress?: UserSpeakingProgressOmit
    dayLearned?: DayLearnedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    topicProgress: number
    grammarLessonProgress: number
    userSpeakingProgress: number
    dayLearned: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicProgress?: boolean | UserCountOutputTypeCountTopicProgressArgs
    grammarLessonProgress?: boolean | UserCountOutputTypeCountGrammarLessonProgressArgs
    userSpeakingProgress?: boolean | UserCountOutputTypeCountUserSpeakingProgressArgs
    dayLearned?: boolean | UserCountOutputTypeCountDayLearnedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTopicProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTopicProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGrammarLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrammarLessonProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSpeakingProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpeakingProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDayLearnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayLearnedWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    children: number
    words: number
    userProgress: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TopicCountOutputTypeCountChildrenArgs
    words?: boolean | TopicCountOutputTypeCountWordsArgs
    userProgress?: boolean | TopicCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTopicProgressWhereInput
  }


  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    senses: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senses?: boolean | WordCountOutputTypeCountSensesArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountSensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
  }


  /**
   * Count Type SenseCountOutputType
   */

  export type SenseCountOutputType = {
    examples: number
  }

  export type SenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | SenseCountOutputTypeCountExamplesArgs
  }

  // Custom InputTypes
  /**
   * SenseCountOutputType without action
   */
  export type SenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenseCountOutputType
     */
    select?: SenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SenseCountOutputType without action
   */
  export type SenseCountOutputTypeCountExamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
  }


  /**
   * Count Type GrammarTopicCountOutputType
   */

  export type GrammarTopicCountOutputType = {
    lessons: number
  }

  export type GrammarTopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | GrammarTopicCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * GrammarTopicCountOutputType without action
   */
  export type GrammarTopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopicCountOutputType
     */
    select?: GrammarTopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarTopicCountOutputType without action
   */
  export type GrammarTopicCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarLessonWhereInput
  }


  /**
   * Count Type GrammarLessonCountOutputType
   */

  export type GrammarLessonCountOutputType = {
    userProgress: number
  }

  export type GrammarLessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | GrammarLessonCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * GrammarLessonCountOutputType without action
   */
  export type GrammarLessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLessonCountOutputType
     */
    select?: GrammarLessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarLessonCountOutputType without action
   */
  export type GrammarLessonCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrammarLessonProgressWhereInput
  }


  /**
   * Count Type SpeakingCountOutputType
   */

  export type SpeakingCountOutputType = {
    userProgress: number
  }

  export type SpeakingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | SpeakingCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * SpeakingCountOutputType without action
   */
  export type SpeakingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingCountOutputType
     */
    select?: SpeakingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeakingCountOutputType without action
   */
  export type SpeakingCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpeakingProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string | null
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    topicProgress?: boolean | User$topicProgressArgs<ExtArgs>
    grammarLessonProgress?: boolean | User$grammarLessonProgressArgs<ExtArgs>
    userSpeakingProgress?: boolean | User$userSpeakingProgressArgs<ExtArgs>
    dayLearned?: boolean | User$dayLearnedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicProgress?: boolean | User$topicProgressArgs<ExtArgs>
    grammarLessonProgress?: boolean | User$grammarLessonProgressArgs<ExtArgs>
    userSpeakingProgress?: boolean | User$userSpeakingProgressArgs<ExtArgs>
    dayLearned?: boolean | User$dayLearnedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      topicProgress: Prisma.$UserTopicProgressPayload<ExtArgs>[]
      grammarLessonProgress: Prisma.$UserGrammarLessonProgressPayload<ExtArgs>[]
      userSpeakingProgress: Prisma.$UserSpeakingProgressPayload<ExtArgs>[]
      dayLearned: Prisma.$DayLearnedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string | null
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topicProgress<T extends User$topicProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$topicProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grammarLessonProgress<T extends User$grammarLessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$grammarLessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSpeakingProgress<T extends User$userSpeakingProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$userSpeakingProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dayLearned<T extends User$dayLearnedArgs<ExtArgs> = {}>(args?: Subset<T, User$dayLearnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.topicProgress
   */
  export type User$topicProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    where?: UserTopicProgressWhereInput
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    cursor?: UserTopicProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTopicProgressScalarFieldEnum | UserTopicProgressScalarFieldEnum[]
  }

  /**
   * User.grammarLessonProgress
   */
  export type User$grammarLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    where?: UserGrammarLessonProgressWhereInput
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGrammarLessonProgressScalarFieldEnum | UserGrammarLessonProgressScalarFieldEnum[]
  }

  /**
   * User.userSpeakingProgress
   */
  export type User$userSpeakingProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    where?: UserSpeakingProgressWhereInput
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    cursor?: UserSpeakingProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSpeakingProgressScalarFieldEnum | UserSpeakingProgressScalarFieldEnum[]
  }

  /**
   * User.dayLearned
   */
  export type User$dayLearnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    where?: DayLearnedWhereInput
    orderBy?: DayLearnedOrderByWithRelationInput | DayLearnedOrderByWithRelationInput[]
    cursor?: DayLearnedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayLearnedScalarFieldEnum | DayLearnedScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
    titleVN: string | null
    image: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
    titleVN: string | null
    image: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    parent_id: number
    titleVN: number
    image: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    titleVN?: true
    image?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    titleVN?: true
    image?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    titleVN?: true
    image?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    name: string
    parent_id: number | null
    titleVN: string | null
    image: string | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    titleVN?: boolean
    image?: boolean
    parent?: boolean | Topic$parentArgs<ExtArgs>
    children?: boolean | Topic$childrenArgs<ExtArgs>
    words?: boolean | Topic$wordsArgs<ExtArgs>
    userProgress?: boolean | Topic$userProgressArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    titleVN?: boolean
    image?: boolean
    parent?: boolean | Topic$parentArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    titleVN?: boolean
    image?: boolean
    parent?: boolean | Topic$parentArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    parent_id?: boolean
    titleVN?: boolean
    image?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parent_id" | "titleVN" | "image", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Topic$parentArgs<ExtArgs>
    children?: boolean | Topic$childrenArgs<ExtArgs>
    words?: boolean | Topic$wordsArgs<ExtArgs>
    userProgress?: boolean | Topic$userProgressArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Topic$parentArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Topic$parentArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      parent: Prisma.$TopicPayload<ExtArgs> | null
      children: Prisma.$TopicPayload<ExtArgs>[]
      words: Prisma.$WordPayload<ExtArgs>[]
      userProgress: Prisma.$UserTopicProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parent_id: number | null
      titleVN: string | null
      image: string | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Topic$parentArgs<ExtArgs> = {}>(args?: Subset<T, Topic$parentArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Topic$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Topic$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    words<T extends Topic$wordsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends Topic$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Topic$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'Int'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly parent_id: FieldRef<"Topic", 'Int'>
    readonly titleVN: FieldRef<"Topic", 'String'>
    readonly image: FieldRef<"Topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.parent
   */
  export type Topic$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
  }

  /**
   * Topic.children
   */
  export type Topic$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic.words
   */
  export type Topic$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Topic.userProgress
   */
  export type Topic$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    where?: UserTopicProgressWhereInput
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    cursor?: UserTopicProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTopicProgressScalarFieldEnum | UserTopicProgressScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
    topic_id: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
    topic_id: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    word: string | null
    pos: string | null
    phonetic: string | null
    phonetic_text: string | null
    phonetic_am: string | null
    phonetic_am_text: string | null
    topic_id: number | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    word: string | null
    pos: string | null
    phonetic: string | null
    phonetic_text: string | null
    phonetic_am: string | null
    phonetic_am_text: string | null
    topic_id: number | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    pos: number
    phonetic: number
    phonetic_text: number
    phonetic_am: number
    phonetic_am_text: number
    topic_id: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
    topic_id?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
    topic_id?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    pos?: true
    phonetic?: true
    phonetic_text?: true
    phonetic_am?: true
    phonetic_am_text?: true
    topic_id?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    pos?: true
    phonetic?: true
    phonetic_text?: true
    phonetic_am?: true
    phonetic_am_text?: true
    topic_id?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    pos?: true
    phonetic?: true
    phonetic_text?: true
    phonetic_am?: true
    phonetic_am_text?: true
    topic_id?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: number
    word: string
    pos: string | null
    phonetic: string | null
    phonetic_text: string | null
    phonetic_am: string | null
    phonetic_am_text: string | null
    topic_id: number | null
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pos?: boolean
    phonetic?: boolean
    phonetic_text?: boolean
    phonetic_am?: boolean
    phonetic_am_text?: boolean
    topic_id?: boolean
    topic?: boolean | Word$topicArgs<ExtArgs>
    senses?: boolean | Word$sensesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pos?: boolean
    phonetic?: boolean
    phonetic_text?: boolean
    phonetic_am?: boolean
    phonetic_am_text?: boolean
    topic_id?: boolean
    topic?: boolean | Word$topicArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pos?: boolean
    phonetic?: boolean
    phonetic_text?: boolean
    phonetic_am?: boolean
    phonetic_am_text?: boolean
    topic_id?: boolean
    topic?: boolean | Word$topicArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    word?: boolean
    pos?: boolean
    phonetic?: boolean
    phonetic_text?: boolean
    phonetic_am?: boolean
    phonetic_am_text?: boolean
    topic_id?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "pos" | "phonetic" | "phonetic_text" | "phonetic_am" | "phonetic_am_text" | "topic_id", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | Word$topicArgs<ExtArgs>
    senses?: boolean | Word$sensesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | Word$topicArgs<ExtArgs>
  }
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | Word$topicArgs<ExtArgs>
  }

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs> | null
      senses: Prisma.$SensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      pos: string | null
      phonetic: string | null
      phonetic_text: string | null
      phonetic_am: string | null
      phonetic_am_text: string | null
      topic_id: number | null
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends Word$topicArgs<ExtArgs> = {}>(args?: Subset<T, Word$topicArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    senses<T extends Word$sensesArgs<ExtArgs> = {}>(args?: Subset<T, Word$sensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'Int'>
    readonly word: FieldRef<"Word", 'String'>
    readonly pos: FieldRef<"Word", 'String'>
    readonly phonetic: FieldRef<"Word", 'String'>
    readonly phonetic_text: FieldRef<"Word", 'String'>
    readonly phonetic_am: FieldRef<"Word", 'String'>
    readonly phonetic_am_text: FieldRef<"Word", 'String'>
    readonly topic_id: FieldRef<"Word", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.topic
   */
  export type Word$topicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
  }

  /**
   * Word.senses
   */
  export type Word$sensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    cursor?: SenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model Sense
   */

  export type AggregateSense = {
    _count: SenseCountAggregateOutputType | null
    _avg: SenseAvgAggregateOutputType | null
    _sum: SenseSumAggregateOutputType | null
    _min: SenseMinAggregateOutputType | null
    _max: SenseMaxAggregateOutputType | null
  }

  export type SenseAvgAggregateOutputType = {
    id: number | null
    word_id: number | null
  }

  export type SenseSumAggregateOutputType = {
    id: number | null
    word_id: number | null
  }

  export type SenseMinAggregateOutputType = {
    id: number | null
    word_id: number | null
    definition: string | null
  }

  export type SenseMaxAggregateOutputType = {
    id: number | null
    word_id: number | null
    definition: string | null
  }

  export type SenseCountAggregateOutputType = {
    id: number
    word_id: number
    definition: number
    _all: number
  }


  export type SenseAvgAggregateInputType = {
    id?: true
    word_id?: true
  }

  export type SenseSumAggregateInputType = {
    id?: true
    word_id?: true
  }

  export type SenseMinAggregateInputType = {
    id?: true
    word_id?: true
    definition?: true
  }

  export type SenseMaxAggregateInputType = {
    id?: true
    word_id?: true
    definition?: true
  }

  export type SenseCountAggregateInputType = {
    id?: true
    word_id?: true
    definition?: true
    _all?: true
  }

  export type SenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sense to aggregate.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Senses
    **/
    _count?: true | SenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenseMaxAggregateInputType
  }

  export type GetSenseAggregateType<T extends SenseAggregateArgs> = {
        [P in keyof T & keyof AggregateSense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSense[P]>
      : GetScalarType<T[P], AggregateSense[P]>
  }




  export type SenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithAggregationInput | SenseOrderByWithAggregationInput[]
    by: SenseScalarFieldEnum[] | SenseScalarFieldEnum
    having?: SenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenseCountAggregateInputType | true
    _avg?: SenseAvgAggregateInputType
    _sum?: SenseSumAggregateInputType
    _min?: SenseMinAggregateInputType
    _max?: SenseMaxAggregateInputType
  }

  export type SenseGroupByOutputType = {
    id: number
    word_id: number
    definition: string
    _count: SenseCountAggregateOutputType | null
    _avg: SenseAvgAggregateOutputType | null
    _sum: SenseSumAggregateOutputType | null
    _min: SenseMinAggregateOutputType | null
    _max: SenseMaxAggregateOutputType | null
  }

  type GetSenseGroupByPayload<T extends SenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenseGroupByOutputType[P]>
            : GetScalarType<T[P], SenseGroupByOutputType[P]>
        }
      >
    >


  export type SenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word_id?: boolean
    definition?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    examples?: boolean | Sense$examplesArgs<ExtArgs>
    _count?: boolean | SenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word_id?: boolean
    definition?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word_id?: boolean
    definition?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectScalar = {
    id?: boolean
    word_id?: boolean
    definition?: boolean
  }

  export type SenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word_id" | "definition", ExtArgs["result"]["sense"]>
  export type SenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    examples?: boolean | Sense$examplesArgs<ExtArgs>
    _count?: boolean | SenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type SenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $SensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sense"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      examples: Prisma.$ExamplePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word_id: number
      definition: string
    }, ExtArgs["result"]["sense"]>
    composites: {}
  }

  type SenseGetPayload<S extends boolean | null | undefined | SenseDefaultArgs> = $Result.GetResult<Prisma.$SensePayload, S>

  type SenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenseCountAggregateInputType | true
    }

  export interface SenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sense'], meta: { name: 'Sense' } }
    /**
     * Find zero or one Sense that matches the filter.
     * @param {SenseFindUniqueArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenseFindUniqueArgs>(args: SelectSubset<T, SenseFindUniqueArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenseFindUniqueOrThrowArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenseFindUniqueOrThrowArgs>(args: SelectSubset<T, SenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindFirstArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenseFindFirstArgs>(args?: SelectSubset<T, SenseFindFirstArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindFirstOrThrowArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenseFindFirstOrThrowArgs>(args?: SelectSubset<T, SenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Senses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senses
     * const senses = await prisma.sense.findMany()
     * 
     * // Get first 10 Senses
     * const senses = await prisma.sense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senseWithIdOnly = await prisma.sense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenseFindManyArgs>(args?: SelectSubset<T, SenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sense.
     * @param {SenseCreateArgs} args - Arguments to create a Sense.
     * @example
     * // Create one Sense
     * const Sense = await prisma.sense.create({
     *   data: {
     *     // ... data to create a Sense
     *   }
     * })
     * 
     */
    create<T extends SenseCreateArgs>(args: SelectSubset<T, SenseCreateArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Senses.
     * @param {SenseCreateManyArgs} args - Arguments to create many Senses.
     * @example
     * // Create many Senses
     * const sense = await prisma.sense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenseCreateManyArgs>(args?: SelectSubset<T, SenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Senses and returns the data saved in the database.
     * @param {SenseCreateManyAndReturnArgs} args - Arguments to create many Senses.
     * @example
     * // Create many Senses
     * const sense = await prisma.sense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Senses and only return the `id`
     * const senseWithIdOnly = await prisma.sense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenseCreateManyAndReturnArgs>(args?: SelectSubset<T, SenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sense.
     * @param {SenseDeleteArgs} args - Arguments to delete one Sense.
     * @example
     * // Delete one Sense
     * const Sense = await prisma.sense.delete({
     *   where: {
     *     // ... filter to delete one Sense
     *   }
     * })
     * 
     */
    delete<T extends SenseDeleteArgs>(args: SelectSubset<T, SenseDeleteArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sense.
     * @param {SenseUpdateArgs} args - Arguments to update one Sense.
     * @example
     * // Update one Sense
     * const sense = await prisma.sense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenseUpdateArgs>(args: SelectSubset<T, SenseUpdateArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Senses.
     * @param {SenseDeleteManyArgs} args - Arguments to filter Senses to delete.
     * @example
     * // Delete a few Senses
     * const { count } = await prisma.sense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenseDeleteManyArgs>(args?: SelectSubset<T, SenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senses
     * const sense = await prisma.sense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenseUpdateManyArgs>(args: SelectSubset<T, SenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senses and returns the data updated in the database.
     * @param {SenseUpdateManyAndReturnArgs} args - Arguments to update many Senses.
     * @example
     * // Update many Senses
     * const sense = await prisma.sense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Senses and only return the `id`
     * const senseWithIdOnly = await prisma.sense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SenseUpdateManyAndReturnArgs>(args: SelectSubset<T, SenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sense.
     * @param {SenseUpsertArgs} args - Arguments to update or create a Sense.
     * @example
     * // Update or create a Sense
     * const sense = await prisma.sense.upsert({
     *   create: {
     *     // ... data to create a Sense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sense we want to update
     *   }
     * })
     */
    upsert<T extends SenseUpsertArgs>(args: SelectSubset<T, SenseUpsertArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Senses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseCountArgs} args - Arguments to filter Senses to count.
     * @example
     * // Count the number of Senses
     * const count = await prisma.sense.count({
     *   where: {
     *     // ... the filter for the Senses we want to count
     *   }
     * })
    **/
    count<T extends SenseCountArgs>(
      args?: Subset<T, SenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SenseAggregateArgs>(args: Subset<T, SenseAggregateArgs>): Prisma.PrismaPromise<GetSenseAggregateType<T>>

    /**
     * Group by Sense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenseGroupByArgs['orderBy'] }
        : { orderBy?: SenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sense model
   */
  readonly fields: SenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examples<T extends Sense$examplesArgs<ExtArgs> = {}>(args?: Subset<T, Sense$examplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sense model
   */
  interface SenseFieldRefs {
    readonly id: FieldRef<"Sense", 'Int'>
    readonly word_id: FieldRef<"Sense", 'Int'>
    readonly definition: FieldRef<"Sense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sense findUnique
   */
  export type SenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense findUniqueOrThrow
   */
  export type SenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense findFirst
   */
  export type SenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senses.
     */
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense findFirstOrThrow
   */
  export type SenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senses.
     */
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense findMany
   */
  export type SenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Senses to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense create
   */
  export type SenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Sense.
     */
    data: XOR<SenseCreateInput, SenseUncheckedCreateInput>
  }

  /**
   * Sense createMany
   */
  export type SenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Senses.
     */
    data: SenseCreateManyInput | SenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sense createManyAndReturn
   */
  export type SenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * The data used to create many Senses.
     */
    data: SenseCreateManyInput | SenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sense update
   */
  export type SenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Sense.
     */
    data: XOR<SenseUpdateInput, SenseUncheckedUpdateInput>
    /**
     * Choose, which Sense to update.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense updateMany
   */
  export type SenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Senses.
     */
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyInput>
    /**
     * Filter which Senses to update
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to update.
     */
    limit?: number
  }

  /**
   * Sense updateManyAndReturn
   */
  export type SenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * The data used to update Senses.
     */
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyInput>
    /**
     * Filter which Senses to update
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sense upsert
   */
  export type SenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Sense to update in case it exists.
     */
    where: SenseWhereUniqueInput
    /**
     * In case the Sense found by the `where` argument doesn't exist, create a new Sense with this data.
     */
    create: XOR<SenseCreateInput, SenseUncheckedCreateInput>
    /**
     * In case the Sense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenseUpdateInput, SenseUncheckedUpdateInput>
  }

  /**
   * Sense delete
   */
  export type SenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter which Sense to delete.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense deleteMany
   */
  export type SenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senses to delete
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to delete.
     */
    limit?: number
  }

  /**
   * Sense.examples
   */
  export type Sense$examplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    cursor?: ExampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Sense without action
   */
  export type SenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
  }


  /**
   * Model Example
   */

  export type AggregateExample = {
    _count: ExampleCountAggregateOutputType | null
    _avg: ExampleAvgAggregateOutputType | null
    _sum: ExampleSumAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  export type ExampleAvgAggregateOutputType = {
    id: number | null
    sense_id: number | null
  }

  export type ExampleSumAggregateOutputType = {
    id: number | null
    sense_id: number | null
  }

  export type ExampleMinAggregateOutputType = {
    id: number | null
    sense_id: number | null
    example_text: string | null
    cf: string | null
  }

  export type ExampleMaxAggregateOutputType = {
    id: number | null
    sense_id: number | null
    example_text: string | null
    cf: string | null
  }

  export type ExampleCountAggregateOutputType = {
    id: number
    sense_id: number
    example_text: number
    cf: number
    _all: number
  }


  export type ExampleAvgAggregateInputType = {
    id?: true
    sense_id?: true
  }

  export type ExampleSumAggregateInputType = {
    id?: true
    sense_id?: true
  }

  export type ExampleMinAggregateInputType = {
    id?: true
    sense_id?: true
    example_text?: true
    cf?: true
  }

  export type ExampleMaxAggregateInputType = {
    id?: true
    sense_id?: true
    example_text?: true
    cf?: true
  }

  export type ExampleCountAggregateInputType = {
    id?: true
    sense_id?: true
    example_text?: true
    cf?: true
    _all?: true
  }

  export type ExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Example to aggregate.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examples
    **/
    _count?: true | ExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleMaxAggregateInputType
  }

  export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExample[P]>
      : GetScalarType<T[P], AggregateExample[P]>
  }




  export type ExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithAggregationInput | ExampleOrderByWithAggregationInput[]
    by: ExampleScalarFieldEnum[] | ExampleScalarFieldEnum
    having?: ExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleCountAggregateInputType | true
    _avg?: ExampleAvgAggregateInputType
    _sum?: ExampleSumAggregateInputType
    _min?: ExampleMinAggregateInputType
    _max?: ExampleMaxAggregateInputType
  }

  export type ExampleGroupByOutputType = {
    id: number
    sense_id: number
    example_text: string
    cf: string | null
    _count: ExampleCountAggregateOutputType | null
    _avg: ExampleAvgAggregateOutputType | null
    _sum: ExampleSumAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  type GetExampleGroupByPayload<T extends ExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleGroupByOutputType[P]>
        }
      >
    >


  export type ExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sense_id?: boolean
    example_text?: boolean
    cf?: boolean
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sense_id?: boolean
    example_text?: boolean
    cf?: boolean
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sense_id?: boolean
    example_text?: boolean
    cf?: boolean
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectScalar = {
    id?: boolean
    sense_id?: boolean
    example_text?: boolean
    cf?: boolean
  }

  export type ExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sense_id" | "example_text" | "cf", ExtArgs["result"]["example"]>
  export type ExampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | SenseDefaultArgs<ExtArgs>
  }

  export type $ExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Example"
    objects: {
      sense: Prisma.$SensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sense_id: number
      example_text: string
      cf: string | null
    }, ExtArgs["result"]["example"]>
    composites: {}
  }

  type ExampleGetPayload<S extends boolean | null | undefined | ExampleDefaultArgs> = $Result.GetResult<Prisma.$ExamplePayload, S>

  type ExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExampleCountAggregateInputType | true
    }

  export interface ExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Example'], meta: { name: 'Example' } }
    /**
     * Find zero or one Example that matches the filter.
     * @param {ExampleFindUniqueArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExampleFindUniqueArgs>(args: SelectSubset<T, ExampleFindUniqueArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Example that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExampleFindUniqueOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, ExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExampleFindFirstArgs>(args?: SelectSubset<T, ExampleFindFirstArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, ExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examples
     * const examples = await prisma.example.findMany()
     * 
     * // Get first 10 Examples
     * const examples = await prisma.example.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleWithIdOnly = await prisma.example.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExampleFindManyArgs>(args?: SelectSubset<T, ExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Example.
     * @param {ExampleCreateArgs} args - Arguments to create a Example.
     * @example
     * // Create one Example
     * const Example = await prisma.example.create({
     *   data: {
     *     // ... data to create a Example
     *   }
     * })
     * 
     */
    create<T extends ExampleCreateArgs>(args: SelectSubset<T, ExampleCreateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examples.
     * @param {ExampleCreateManyArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExampleCreateManyArgs>(args?: SelectSubset<T, ExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examples and returns the data saved in the database.
     * @param {ExampleCreateManyAndReturnArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExampleCreateManyAndReturnArgs>(args?: SelectSubset<T, ExampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Example.
     * @param {ExampleDeleteArgs} args - Arguments to delete one Example.
     * @example
     * // Delete one Example
     * const Example = await prisma.example.delete({
     *   where: {
     *     // ... filter to delete one Example
     *   }
     * })
     * 
     */
    delete<T extends ExampleDeleteArgs>(args: SelectSubset<T, ExampleDeleteArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Example.
     * @param {ExampleUpdateArgs} args - Arguments to update one Example.
     * @example
     * // Update one Example
     * const example = await prisma.example.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExampleUpdateArgs>(args: SelectSubset<T, ExampleUpdateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examples.
     * @param {ExampleDeleteManyArgs} args - Arguments to filter Examples to delete.
     * @example
     * // Delete a few Examples
     * const { count } = await prisma.example.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExampleDeleteManyArgs>(args?: SelectSubset<T, ExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExampleUpdateManyArgs>(args: SelectSubset<T, ExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples and returns the data updated in the database.
     * @param {ExampleUpdateManyAndReturnArgs} args - Arguments to update many Examples.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExampleUpdateManyAndReturnArgs>(args: SelectSubset<T, ExampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Example.
     * @param {ExampleUpsertArgs} args - Arguments to update or create a Example.
     * @example
     * // Update or create a Example
     * const example = await prisma.example.upsert({
     *   create: {
     *     // ... data to create a Example
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Example we want to update
     *   }
     * })
     */
    upsert<T extends ExampleUpsertArgs>(args: SelectSubset<T, ExampleUpsertArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleCountArgs} args - Arguments to filter Examples to count.
     * @example
     * // Count the number of Examples
     * const count = await prisma.example.count({
     *   where: {
     *     // ... the filter for the Examples we want to count
     *   }
     * })
    **/
    count<T extends ExampleCountArgs>(
      args?: Subset<T, ExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExampleAggregateArgs>(args: Subset<T, ExampleAggregateArgs>): Prisma.PrismaPromise<GetExampleAggregateType<T>>

    /**
     * Group by Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Example model
   */
  readonly fields: ExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Example.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sense<T extends SenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SenseDefaultArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Example model
   */
  interface ExampleFieldRefs {
    readonly id: FieldRef<"Example", 'Int'>
    readonly sense_id: FieldRef<"Example", 'Int'>
    readonly example_text: FieldRef<"Example", 'String'>
    readonly cf: FieldRef<"Example", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Example findUnique
   */
  export type ExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findUniqueOrThrow
   */
  export type ExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findFirst
   */
  export type ExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findFirstOrThrow
   */
  export type ExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findMany
   */
  export type ExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Examples to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example create
   */
  export type ExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to create a Example.
     */
    data: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
  }

  /**
   * Example createMany
   */
  export type ExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Example createManyAndReturn
   */
  export type ExampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example update
   */
  export type ExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to update a Example.
     */
    data: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
    /**
     * Choose, which Example to update.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example updateMany
   */
  export type ExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
  }

  /**
   * Example updateManyAndReturn
   */
  export type ExampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example upsert
   */
  export type ExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The filter to search for the Example to update in case it exists.
     */
    where: ExampleWhereUniqueInput
    /**
     * In case the Example found by the `where` argument doesn't exist, create a new Example with this data.
     */
    create: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
    /**
     * In case the Example was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
  }

  /**
   * Example delete
   */
  export type ExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter which Example to delete.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example deleteMany
   */
  export type ExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examples to delete
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to delete.
     */
    limit?: number
  }

  /**
   * Example without action
   */
  export type ExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
  }


  /**
   * Model GrammarTopic
   */

  export type AggregateGrammarTopic = {
    _count: GrammarTopicCountAggregateOutputType | null
    _avg: GrammarTopicAvgAggregateOutputType | null
    _sum: GrammarTopicSumAggregateOutputType | null
    _min: GrammarTopicMinAggregateOutputType | null
    _max: GrammarTopicMaxAggregateOutputType | null
  }

  export type GrammarTopicAvgAggregateOutputType = {
    id: number | null
  }

  export type GrammarTopicSumAggregateOutputType = {
    id: number | null
  }

  export type GrammarTopicMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
  }

  export type GrammarTopicMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
  }

  export type GrammarTopicCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    _all: number
  }


  export type GrammarTopicAvgAggregateInputType = {
    id?: true
  }

  export type GrammarTopicSumAggregateInputType = {
    id?: true
  }

  export type GrammarTopicMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
  }

  export type GrammarTopicMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
  }

  export type GrammarTopicCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    _all?: true
  }

  export type GrammarTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarTopic to aggregate.
     */
    where?: GrammarTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTopics to fetch.
     */
    orderBy?: GrammarTopicOrderByWithRelationInput | GrammarTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarTopics
    **/
    _count?: true | GrammarTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarTopicMaxAggregateInputType
  }

  export type GetGrammarTopicAggregateType<T extends GrammarTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarTopic[P]>
      : GetScalarType<T[P], AggregateGrammarTopic[P]>
  }




  export type GrammarTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarTopicWhereInput
    orderBy?: GrammarTopicOrderByWithAggregationInput | GrammarTopicOrderByWithAggregationInput[]
    by: GrammarTopicScalarFieldEnum[] | GrammarTopicScalarFieldEnum
    having?: GrammarTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarTopicCountAggregateInputType | true
    _avg?: GrammarTopicAvgAggregateInputType
    _sum?: GrammarTopicSumAggregateInputType
    _min?: GrammarTopicMinAggregateInputType
    _max?: GrammarTopicMaxAggregateInputType
  }

  export type GrammarTopicGroupByOutputType = {
    id: number
    title: string
    description: string | null
    image: string | null
    _count: GrammarTopicCountAggregateOutputType | null
    _avg: GrammarTopicAvgAggregateOutputType | null
    _sum: GrammarTopicSumAggregateOutputType | null
    _min: GrammarTopicMinAggregateOutputType | null
    _max: GrammarTopicMaxAggregateOutputType | null
  }

  type GetGrammarTopicGroupByPayload<T extends GrammarTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarTopicGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarTopicGroupByOutputType[P]>
        }
      >
    >


  export type GrammarTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    lessons?: boolean | GrammarTopic$lessonsArgs<ExtArgs>
    _count?: boolean | GrammarTopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarTopic"]>

  export type GrammarTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["grammarTopic"]>

  export type GrammarTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["grammarTopic"]>

  export type GrammarTopicSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
  }

  export type GrammarTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image", ExtArgs["result"]["grammarTopic"]>
  export type GrammarTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | GrammarTopic$lessonsArgs<ExtArgs>
    _count?: boolean | GrammarTopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GrammarTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GrammarTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarTopic"
    objects: {
      lessons: Prisma.$GrammarLessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      image: string | null
    }, ExtArgs["result"]["grammarTopic"]>
    composites: {}
  }

  type GrammarTopicGetPayload<S extends boolean | null | undefined | GrammarTopicDefaultArgs> = $Result.GetResult<Prisma.$GrammarTopicPayload, S>

  type GrammarTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarTopicCountAggregateInputType | true
    }

  export interface GrammarTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarTopic'], meta: { name: 'GrammarTopic' } }
    /**
     * Find zero or one GrammarTopic that matches the filter.
     * @param {GrammarTopicFindUniqueArgs} args - Arguments to find a GrammarTopic
     * @example
     * // Get one GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarTopicFindUniqueArgs>(args: SelectSubset<T, GrammarTopicFindUniqueArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarTopicFindUniqueOrThrowArgs} args - Arguments to find a GrammarTopic
     * @example
     * // Get one GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicFindFirstArgs} args - Arguments to find a GrammarTopic
     * @example
     * // Get one GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarTopicFindFirstArgs>(args?: SelectSubset<T, GrammarTopicFindFirstArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicFindFirstOrThrowArgs} args - Arguments to find a GrammarTopic
     * @example
     * // Get one GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarTopics
     * const grammarTopics = await prisma.grammarTopic.findMany()
     * 
     * // Get first 10 GrammarTopics
     * const grammarTopics = await prisma.grammarTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarTopicWithIdOnly = await prisma.grammarTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarTopicFindManyArgs>(args?: SelectSubset<T, GrammarTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarTopic.
     * @param {GrammarTopicCreateArgs} args - Arguments to create a GrammarTopic.
     * @example
     * // Create one GrammarTopic
     * const GrammarTopic = await prisma.grammarTopic.create({
     *   data: {
     *     // ... data to create a GrammarTopic
     *   }
     * })
     * 
     */
    create<T extends GrammarTopicCreateArgs>(args: SelectSubset<T, GrammarTopicCreateArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarTopics.
     * @param {GrammarTopicCreateManyArgs} args - Arguments to create many GrammarTopics.
     * @example
     * // Create many GrammarTopics
     * const grammarTopic = await prisma.grammarTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarTopicCreateManyArgs>(args?: SelectSubset<T, GrammarTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarTopics and returns the data saved in the database.
     * @param {GrammarTopicCreateManyAndReturnArgs} args - Arguments to create many GrammarTopics.
     * @example
     * // Create many GrammarTopics
     * const grammarTopic = await prisma.grammarTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarTopics and only return the `id`
     * const grammarTopicWithIdOnly = await prisma.grammarTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarTopic.
     * @param {GrammarTopicDeleteArgs} args - Arguments to delete one GrammarTopic.
     * @example
     * // Delete one GrammarTopic
     * const GrammarTopic = await prisma.grammarTopic.delete({
     *   where: {
     *     // ... filter to delete one GrammarTopic
     *   }
     * })
     * 
     */
    delete<T extends GrammarTopicDeleteArgs>(args: SelectSubset<T, GrammarTopicDeleteArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarTopic.
     * @param {GrammarTopicUpdateArgs} args - Arguments to update one GrammarTopic.
     * @example
     * // Update one GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarTopicUpdateArgs>(args: SelectSubset<T, GrammarTopicUpdateArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarTopics.
     * @param {GrammarTopicDeleteManyArgs} args - Arguments to filter GrammarTopics to delete.
     * @example
     * // Delete a few GrammarTopics
     * const { count } = await prisma.grammarTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarTopicDeleteManyArgs>(args?: SelectSubset<T, GrammarTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarTopics
     * const grammarTopic = await prisma.grammarTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarTopicUpdateManyArgs>(args: SelectSubset<T, GrammarTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarTopics and returns the data updated in the database.
     * @param {GrammarTopicUpdateManyAndReturnArgs} args - Arguments to update many GrammarTopics.
     * @example
     * // Update many GrammarTopics
     * const grammarTopic = await prisma.grammarTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarTopics and only return the `id`
     * const grammarTopicWithIdOnly = await prisma.grammarTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrammarTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarTopic.
     * @param {GrammarTopicUpsertArgs} args - Arguments to update or create a GrammarTopic.
     * @example
     * // Update or create a GrammarTopic
     * const grammarTopic = await prisma.grammarTopic.upsert({
     *   create: {
     *     // ... data to create a GrammarTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarTopic we want to update
     *   }
     * })
     */
    upsert<T extends GrammarTopicUpsertArgs>(args: SelectSubset<T, GrammarTopicUpsertArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicCountArgs} args - Arguments to filter GrammarTopics to count.
     * @example
     * // Count the number of GrammarTopics
     * const count = await prisma.grammarTopic.count({
     *   where: {
     *     // ... the filter for the GrammarTopics we want to count
     *   }
     * })
    **/
    count<T extends GrammarTopicCountArgs>(
      args?: Subset<T, GrammarTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrammarTopicAggregateArgs>(args: Subset<T, GrammarTopicAggregateArgs>): Prisma.PrismaPromise<GetGrammarTopicAggregateType<T>>

    /**
     * Group by GrammarTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrammarTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarTopicGroupByArgs['orderBy'] }
        : { orderBy?: GrammarTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrammarTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarTopic model
   */
  readonly fields: GrammarTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends GrammarTopic$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTopic$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GrammarTopic model
   */
  interface GrammarTopicFieldRefs {
    readonly id: FieldRef<"GrammarTopic", 'Int'>
    readonly title: FieldRef<"GrammarTopic", 'String'>
    readonly description: FieldRef<"GrammarTopic", 'String'>
    readonly image: FieldRef<"GrammarTopic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarTopic findUnique
   */
  export type GrammarTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTopic to fetch.
     */
    where: GrammarTopicWhereUniqueInput
  }

  /**
   * GrammarTopic findUniqueOrThrow
   */
  export type GrammarTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTopic to fetch.
     */
    where: GrammarTopicWhereUniqueInput
  }

  /**
   * GrammarTopic findFirst
   */
  export type GrammarTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTopic to fetch.
     */
    where?: GrammarTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTopics to fetch.
     */
    orderBy?: GrammarTopicOrderByWithRelationInput | GrammarTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarTopics.
     */
    cursor?: GrammarTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarTopics.
     */
    distinct?: GrammarTopicScalarFieldEnum | GrammarTopicScalarFieldEnum[]
  }

  /**
   * GrammarTopic findFirstOrThrow
   */
  export type GrammarTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTopic to fetch.
     */
    where?: GrammarTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTopics to fetch.
     */
    orderBy?: GrammarTopicOrderByWithRelationInput | GrammarTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarTopics.
     */
    cursor?: GrammarTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarTopics.
     */
    distinct?: GrammarTopicScalarFieldEnum | GrammarTopicScalarFieldEnum[]
  }

  /**
   * GrammarTopic findMany
   */
  export type GrammarTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTopics to fetch.
     */
    where?: GrammarTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTopics to fetch.
     */
    orderBy?: GrammarTopicOrderByWithRelationInput | GrammarTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarTopics.
     */
    cursor?: GrammarTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTopics.
     */
    skip?: number
    distinct?: GrammarTopicScalarFieldEnum | GrammarTopicScalarFieldEnum[]
  }

  /**
   * GrammarTopic create
   */
  export type GrammarTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarTopic.
     */
    data: XOR<GrammarTopicCreateInput, GrammarTopicUncheckedCreateInput>
  }

  /**
   * GrammarTopic createMany
   */
  export type GrammarTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarTopics.
     */
    data: GrammarTopicCreateManyInput | GrammarTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrammarTopic createManyAndReturn
   */
  export type GrammarTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarTopics.
     */
    data: GrammarTopicCreateManyInput | GrammarTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrammarTopic update
   */
  export type GrammarTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarTopic.
     */
    data: XOR<GrammarTopicUpdateInput, GrammarTopicUncheckedUpdateInput>
    /**
     * Choose, which GrammarTopic to update.
     */
    where: GrammarTopicWhereUniqueInput
  }

  /**
   * GrammarTopic updateMany
   */
  export type GrammarTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarTopics.
     */
    data: XOR<GrammarTopicUpdateManyMutationInput, GrammarTopicUncheckedUpdateManyInput>
    /**
     * Filter which GrammarTopics to update
     */
    where?: GrammarTopicWhereInput
    /**
     * Limit how many GrammarTopics to update.
     */
    limit?: number
  }

  /**
   * GrammarTopic updateManyAndReturn
   */
  export type GrammarTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * The data used to update GrammarTopics.
     */
    data: XOR<GrammarTopicUpdateManyMutationInput, GrammarTopicUncheckedUpdateManyInput>
    /**
     * Filter which GrammarTopics to update
     */
    where?: GrammarTopicWhereInput
    /**
     * Limit how many GrammarTopics to update.
     */
    limit?: number
  }

  /**
   * GrammarTopic upsert
   */
  export type GrammarTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarTopic to update in case it exists.
     */
    where: GrammarTopicWhereUniqueInput
    /**
     * In case the GrammarTopic found by the `where` argument doesn't exist, create a new GrammarTopic with this data.
     */
    create: XOR<GrammarTopicCreateInput, GrammarTopicUncheckedCreateInput>
    /**
     * In case the GrammarTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarTopicUpdateInput, GrammarTopicUncheckedUpdateInput>
  }

  /**
   * GrammarTopic delete
   */
  export type GrammarTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
    /**
     * Filter which GrammarTopic to delete.
     */
    where: GrammarTopicWhereUniqueInput
  }

  /**
   * GrammarTopic deleteMany
   */
  export type GrammarTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarTopics to delete
     */
    where?: GrammarTopicWhereInput
    /**
     * Limit how many GrammarTopics to delete.
     */
    limit?: number
  }

  /**
   * GrammarTopic.lessons
   */
  export type GrammarTopic$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    where?: GrammarLessonWhereInput
    orderBy?: GrammarLessonOrderByWithRelationInput | GrammarLessonOrderByWithRelationInput[]
    cursor?: GrammarLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarLessonScalarFieldEnum | GrammarLessonScalarFieldEnum[]
  }

  /**
   * GrammarTopic without action
   */
  export type GrammarTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTopic
     */
    select?: GrammarTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTopic
     */
    omit?: GrammarTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTopicInclude<ExtArgs> | null
  }


  /**
   * Model GrammarLesson
   */

  export type AggregateGrammarLesson = {
    _count: GrammarLessonCountAggregateOutputType | null
    _avg: GrammarLessonAvgAggregateOutputType | null
    _sum: GrammarLessonSumAggregateOutputType | null
    _min: GrammarLessonMinAggregateOutputType | null
    _max: GrammarLessonMaxAggregateOutputType | null
  }

  export type GrammarLessonAvgAggregateOutputType = {
    id: number | null
    topic_id: number | null
  }

  export type GrammarLessonSumAggregateOutputType = {
    id: number | null
    topic_id: number | null
  }

  export type GrammarLessonMinAggregateOutputType = {
    id: number | null
    topic_id: number | null
    title: string | null
    sub_title: string | null
    path: string | null
    image: string | null
  }

  export type GrammarLessonMaxAggregateOutputType = {
    id: number | null
    topic_id: number | null
    title: string | null
    sub_title: string | null
    path: string | null
    image: string | null
  }

  export type GrammarLessonCountAggregateOutputType = {
    id: number
    topic_id: number
    title: number
    sub_title: number
    path: number
    image: number
    _all: number
  }


  export type GrammarLessonAvgAggregateInputType = {
    id?: true
    topic_id?: true
  }

  export type GrammarLessonSumAggregateInputType = {
    id?: true
    topic_id?: true
  }

  export type GrammarLessonMinAggregateInputType = {
    id?: true
    topic_id?: true
    title?: true
    sub_title?: true
    path?: true
    image?: true
  }

  export type GrammarLessonMaxAggregateInputType = {
    id?: true
    topic_id?: true
    title?: true
    sub_title?: true
    path?: true
    image?: true
  }

  export type GrammarLessonCountAggregateInputType = {
    id?: true
    topic_id?: true
    title?: true
    sub_title?: true
    path?: true
    image?: true
    _all?: true
  }

  export type GrammarLessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarLesson to aggregate.
     */
    where?: GrammarLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarLessons to fetch.
     */
    orderBy?: GrammarLessonOrderByWithRelationInput | GrammarLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarLessons
    **/
    _count?: true | GrammarLessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarLessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarLessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarLessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarLessonMaxAggregateInputType
  }

  export type GetGrammarLessonAggregateType<T extends GrammarLessonAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarLesson[P]>
      : GetScalarType<T[P], AggregateGrammarLesson[P]>
  }




  export type GrammarLessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarLessonWhereInput
    orderBy?: GrammarLessonOrderByWithAggregationInput | GrammarLessonOrderByWithAggregationInput[]
    by: GrammarLessonScalarFieldEnum[] | GrammarLessonScalarFieldEnum
    having?: GrammarLessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarLessonCountAggregateInputType | true
    _avg?: GrammarLessonAvgAggregateInputType
    _sum?: GrammarLessonSumAggregateInputType
    _min?: GrammarLessonMinAggregateInputType
    _max?: GrammarLessonMaxAggregateInputType
  }

  export type GrammarLessonGroupByOutputType = {
    id: number
    topic_id: number
    title: string
    sub_title: string | null
    path: string
    image: string | null
    _count: GrammarLessonCountAggregateOutputType | null
    _avg: GrammarLessonAvgAggregateOutputType | null
    _sum: GrammarLessonSumAggregateOutputType | null
    _min: GrammarLessonMinAggregateOutputType | null
    _max: GrammarLessonMaxAggregateOutputType | null
  }

  type GetGrammarLessonGroupByPayload<T extends GrammarLessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarLessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarLessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarLessonGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarLessonGroupByOutputType[P]>
        }
      >
    >


  export type GrammarLessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    title?: boolean
    sub_title?: boolean
    path?: boolean
    image?: boolean
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
    userProgress?: boolean | GrammarLesson$userProgressArgs<ExtArgs>
    _count?: boolean | GrammarLessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarLesson"]>

  export type GrammarLessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    title?: boolean
    sub_title?: boolean
    path?: boolean
    image?: boolean
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarLesson"]>

  export type GrammarLessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    title?: boolean
    sub_title?: boolean
    path?: boolean
    image?: boolean
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarLesson"]>

  export type GrammarLessonSelectScalar = {
    id?: boolean
    topic_id?: boolean
    title?: boolean
    sub_title?: boolean
    path?: boolean
    image?: boolean
  }

  export type GrammarLessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic_id" | "title" | "sub_title" | "path" | "image", ExtArgs["result"]["grammarLesson"]>
  export type GrammarLessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
    userProgress?: boolean | GrammarLesson$userProgressArgs<ExtArgs>
    _count?: boolean | GrammarLessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarLessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
  }
  export type GrammarLessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | GrammarTopicDefaultArgs<ExtArgs>
  }

  export type $GrammarLessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarLesson"
    objects: {
      topic: Prisma.$GrammarTopicPayload<ExtArgs>
      userProgress: Prisma.$UserGrammarLessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      topic_id: number
      title: string
      sub_title: string | null
      path: string
      image: string | null
    }, ExtArgs["result"]["grammarLesson"]>
    composites: {}
  }

  type GrammarLessonGetPayload<S extends boolean | null | undefined | GrammarLessonDefaultArgs> = $Result.GetResult<Prisma.$GrammarLessonPayload, S>

  type GrammarLessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarLessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarLessonCountAggregateInputType | true
    }

  export interface GrammarLessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarLesson'], meta: { name: 'GrammarLesson' } }
    /**
     * Find zero or one GrammarLesson that matches the filter.
     * @param {GrammarLessonFindUniqueArgs} args - Arguments to find a GrammarLesson
     * @example
     * // Get one GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarLessonFindUniqueArgs>(args: SelectSubset<T, GrammarLessonFindUniqueArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarLesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarLessonFindUniqueOrThrowArgs} args - Arguments to find a GrammarLesson
     * @example
     * // Get one GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarLessonFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarLessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarLesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonFindFirstArgs} args - Arguments to find a GrammarLesson
     * @example
     * // Get one GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarLessonFindFirstArgs>(args?: SelectSubset<T, GrammarLessonFindFirstArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarLesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonFindFirstOrThrowArgs} args - Arguments to find a GrammarLesson
     * @example
     * // Get one GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarLessonFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarLessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarLessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarLessons
     * const grammarLessons = await prisma.grammarLesson.findMany()
     * 
     * // Get first 10 GrammarLessons
     * const grammarLessons = await prisma.grammarLesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarLessonWithIdOnly = await prisma.grammarLesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarLessonFindManyArgs>(args?: SelectSubset<T, GrammarLessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarLesson.
     * @param {GrammarLessonCreateArgs} args - Arguments to create a GrammarLesson.
     * @example
     * // Create one GrammarLesson
     * const GrammarLesson = await prisma.grammarLesson.create({
     *   data: {
     *     // ... data to create a GrammarLesson
     *   }
     * })
     * 
     */
    create<T extends GrammarLessonCreateArgs>(args: SelectSubset<T, GrammarLessonCreateArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarLessons.
     * @param {GrammarLessonCreateManyArgs} args - Arguments to create many GrammarLessons.
     * @example
     * // Create many GrammarLessons
     * const grammarLesson = await prisma.grammarLesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarLessonCreateManyArgs>(args?: SelectSubset<T, GrammarLessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarLessons and returns the data saved in the database.
     * @param {GrammarLessonCreateManyAndReturnArgs} args - Arguments to create many GrammarLessons.
     * @example
     * // Create many GrammarLessons
     * const grammarLesson = await prisma.grammarLesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarLessons and only return the `id`
     * const grammarLessonWithIdOnly = await prisma.grammarLesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarLessonCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarLessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarLesson.
     * @param {GrammarLessonDeleteArgs} args - Arguments to delete one GrammarLesson.
     * @example
     * // Delete one GrammarLesson
     * const GrammarLesson = await prisma.grammarLesson.delete({
     *   where: {
     *     // ... filter to delete one GrammarLesson
     *   }
     * })
     * 
     */
    delete<T extends GrammarLessonDeleteArgs>(args: SelectSubset<T, GrammarLessonDeleteArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarLesson.
     * @param {GrammarLessonUpdateArgs} args - Arguments to update one GrammarLesson.
     * @example
     * // Update one GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarLessonUpdateArgs>(args: SelectSubset<T, GrammarLessonUpdateArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarLessons.
     * @param {GrammarLessonDeleteManyArgs} args - Arguments to filter GrammarLessons to delete.
     * @example
     * // Delete a few GrammarLessons
     * const { count } = await prisma.grammarLesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarLessonDeleteManyArgs>(args?: SelectSubset<T, GrammarLessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarLessons
     * const grammarLesson = await prisma.grammarLesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarLessonUpdateManyArgs>(args: SelectSubset<T, GrammarLessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarLessons and returns the data updated in the database.
     * @param {GrammarLessonUpdateManyAndReturnArgs} args - Arguments to update many GrammarLessons.
     * @example
     * // Update many GrammarLessons
     * const grammarLesson = await prisma.grammarLesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarLessons and only return the `id`
     * const grammarLessonWithIdOnly = await prisma.grammarLesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrammarLessonUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarLessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarLesson.
     * @param {GrammarLessonUpsertArgs} args - Arguments to update or create a GrammarLesson.
     * @example
     * // Update or create a GrammarLesson
     * const grammarLesson = await prisma.grammarLesson.upsert({
     *   create: {
     *     // ... data to create a GrammarLesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarLesson we want to update
     *   }
     * })
     */
    upsert<T extends GrammarLessonUpsertArgs>(args: SelectSubset<T, GrammarLessonUpsertArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonCountArgs} args - Arguments to filter GrammarLessons to count.
     * @example
     * // Count the number of GrammarLessons
     * const count = await prisma.grammarLesson.count({
     *   where: {
     *     // ... the filter for the GrammarLessons we want to count
     *   }
     * })
    **/
    count<T extends GrammarLessonCountArgs>(
      args?: Subset<T, GrammarLessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarLessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrammarLessonAggregateArgs>(args: Subset<T, GrammarLessonAggregateArgs>): Prisma.PrismaPromise<GetGrammarLessonAggregateType<T>>

    /**
     * Group by GrammarLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarLessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrammarLessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarLessonGroupByArgs['orderBy'] }
        : { orderBy?: GrammarLessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrammarLessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarLesson model
   */
  readonly fields: GrammarLessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarLesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarLessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends GrammarTopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTopicDefaultArgs<ExtArgs>>): Prisma__GrammarTopicClient<$Result.GetResult<Prisma.$GrammarTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userProgress<T extends GrammarLesson$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, GrammarLesson$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GrammarLesson model
   */
  interface GrammarLessonFieldRefs {
    readonly id: FieldRef<"GrammarLesson", 'Int'>
    readonly topic_id: FieldRef<"GrammarLesson", 'Int'>
    readonly title: FieldRef<"GrammarLesson", 'String'>
    readonly sub_title: FieldRef<"GrammarLesson", 'String'>
    readonly path: FieldRef<"GrammarLesson", 'String'>
    readonly image: FieldRef<"GrammarLesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarLesson findUnique
   */
  export type GrammarLessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter, which GrammarLesson to fetch.
     */
    where: GrammarLessonWhereUniqueInput
  }

  /**
   * GrammarLesson findUniqueOrThrow
   */
  export type GrammarLessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter, which GrammarLesson to fetch.
     */
    where: GrammarLessonWhereUniqueInput
  }

  /**
   * GrammarLesson findFirst
   */
  export type GrammarLessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter, which GrammarLesson to fetch.
     */
    where?: GrammarLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarLessons to fetch.
     */
    orderBy?: GrammarLessonOrderByWithRelationInput | GrammarLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarLessons.
     */
    cursor?: GrammarLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarLessons.
     */
    distinct?: GrammarLessonScalarFieldEnum | GrammarLessonScalarFieldEnum[]
  }

  /**
   * GrammarLesson findFirstOrThrow
   */
  export type GrammarLessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter, which GrammarLesson to fetch.
     */
    where?: GrammarLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarLessons to fetch.
     */
    orderBy?: GrammarLessonOrderByWithRelationInput | GrammarLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarLessons.
     */
    cursor?: GrammarLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarLessons.
     */
    distinct?: GrammarLessonScalarFieldEnum | GrammarLessonScalarFieldEnum[]
  }

  /**
   * GrammarLesson findMany
   */
  export type GrammarLessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter, which GrammarLessons to fetch.
     */
    where?: GrammarLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarLessons to fetch.
     */
    orderBy?: GrammarLessonOrderByWithRelationInput | GrammarLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarLessons.
     */
    cursor?: GrammarLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarLessons.
     */
    skip?: number
    distinct?: GrammarLessonScalarFieldEnum | GrammarLessonScalarFieldEnum[]
  }

  /**
   * GrammarLesson create
   */
  export type GrammarLessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarLesson.
     */
    data: XOR<GrammarLessonCreateInput, GrammarLessonUncheckedCreateInput>
  }

  /**
   * GrammarLesson createMany
   */
  export type GrammarLessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarLessons.
     */
    data: GrammarLessonCreateManyInput | GrammarLessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrammarLesson createManyAndReturn
   */
  export type GrammarLessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarLessons.
     */
    data: GrammarLessonCreateManyInput | GrammarLessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarLesson update
   */
  export type GrammarLessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarLesson.
     */
    data: XOR<GrammarLessonUpdateInput, GrammarLessonUncheckedUpdateInput>
    /**
     * Choose, which GrammarLesson to update.
     */
    where: GrammarLessonWhereUniqueInput
  }

  /**
   * GrammarLesson updateMany
   */
  export type GrammarLessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarLessons.
     */
    data: XOR<GrammarLessonUpdateManyMutationInput, GrammarLessonUncheckedUpdateManyInput>
    /**
     * Filter which GrammarLessons to update
     */
    where?: GrammarLessonWhereInput
    /**
     * Limit how many GrammarLessons to update.
     */
    limit?: number
  }

  /**
   * GrammarLesson updateManyAndReturn
   */
  export type GrammarLessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * The data used to update GrammarLessons.
     */
    data: XOR<GrammarLessonUpdateManyMutationInput, GrammarLessonUncheckedUpdateManyInput>
    /**
     * Filter which GrammarLessons to update
     */
    where?: GrammarLessonWhereInput
    /**
     * Limit how many GrammarLessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarLesson upsert
   */
  export type GrammarLessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarLesson to update in case it exists.
     */
    where: GrammarLessonWhereUniqueInput
    /**
     * In case the GrammarLesson found by the `where` argument doesn't exist, create a new GrammarLesson with this data.
     */
    create: XOR<GrammarLessonCreateInput, GrammarLessonUncheckedCreateInput>
    /**
     * In case the GrammarLesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarLessonUpdateInput, GrammarLessonUncheckedUpdateInput>
  }

  /**
   * GrammarLesson delete
   */
  export type GrammarLessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
    /**
     * Filter which GrammarLesson to delete.
     */
    where: GrammarLessonWhereUniqueInput
  }

  /**
   * GrammarLesson deleteMany
   */
  export type GrammarLessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarLessons to delete
     */
    where?: GrammarLessonWhereInput
    /**
     * Limit how many GrammarLessons to delete.
     */
    limit?: number
  }

  /**
   * GrammarLesson.userProgress
   */
  export type GrammarLesson$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    where?: UserGrammarLessonProgressWhereInput
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGrammarLessonProgressScalarFieldEnum | UserGrammarLessonProgressScalarFieldEnum[]
  }

  /**
   * GrammarLesson without action
   */
  export type GrammarLessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarLesson
     */
    select?: GrammarLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarLesson
     */
    omit?: GrammarLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarLessonInclude<ExtArgs> | null
  }


  /**
   * Model UserTopicProgress
   */

  export type AggregateUserTopicProgress = {
    _count: UserTopicProgressCountAggregateOutputType | null
    _avg: UserTopicProgressAvgAggregateOutputType | null
    _sum: UserTopicProgressSumAggregateOutputType | null
    _min: UserTopicProgressMinAggregateOutputType | null
    _max: UserTopicProgressMaxAggregateOutputType | null
  }

  export type UserTopicProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    topicId: number | null
    learnedWords: number | null
  }

  export type UserTopicProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    topicId: number | null
    learnedWords: number | null
  }

  export type UserTopicProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    topicId: number | null
    status: $Enums.ProgressStatus | null
    learnedWords: number | null
    lastAccessedAt: Date | null
    completedAt: Date | null
  }

  export type UserTopicProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    topicId: number | null
    status: $Enums.ProgressStatus | null
    learnedWords: number | null
    lastAccessedAt: Date | null
    completedAt: Date | null
  }

  export type UserTopicProgressCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    status: number
    learnedWords: number
    lastAccessedAt: number
    completedAt: number
    _all: number
  }


  export type UserTopicProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    learnedWords?: true
  }

  export type UserTopicProgressSumAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    learnedWords?: true
  }

  export type UserTopicProgressMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    status?: true
    learnedWords?: true
    lastAccessedAt?: true
    completedAt?: true
  }

  export type UserTopicProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    status?: true
    learnedWords?: true
    lastAccessedAt?: true
    completedAt?: true
  }

  export type UserTopicProgressCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    status?: true
    learnedWords?: true
    lastAccessedAt?: true
    completedAt?: true
    _all?: true
  }

  export type UserTopicProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTopicProgress to aggregate.
     */
    where?: UserTopicProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTopicProgresses to fetch.
     */
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTopicProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTopicProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTopicProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTopicProgresses
    **/
    _count?: true | UserTopicProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTopicProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTopicProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTopicProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTopicProgressMaxAggregateInputType
  }

  export type GetUserTopicProgressAggregateType<T extends UserTopicProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTopicProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTopicProgress[P]>
      : GetScalarType<T[P], AggregateUserTopicProgress[P]>
  }




  export type UserTopicProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTopicProgressWhereInput
    orderBy?: UserTopicProgressOrderByWithAggregationInput | UserTopicProgressOrderByWithAggregationInput[]
    by: UserTopicProgressScalarFieldEnum[] | UserTopicProgressScalarFieldEnum
    having?: UserTopicProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTopicProgressCountAggregateInputType | true
    _avg?: UserTopicProgressAvgAggregateInputType
    _sum?: UserTopicProgressSumAggregateInputType
    _min?: UserTopicProgressMinAggregateInputType
    _max?: UserTopicProgressMaxAggregateInputType
  }

  export type UserTopicProgressGroupByOutputType = {
    id: number
    userId: number
    topicId: number
    status: $Enums.ProgressStatus
    learnedWords: number
    lastAccessedAt: Date
    completedAt: Date | null
    _count: UserTopicProgressCountAggregateOutputType | null
    _avg: UserTopicProgressAvgAggregateOutputType | null
    _sum: UserTopicProgressSumAggregateOutputType | null
    _min: UserTopicProgressMinAggregateOutputType | null
    _max: UserTopicProgressMaxAggregateOutputType | null
  }

  type GetUserTopicProgressGroupByPayload<T extends UserTopicProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTopicProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTopicProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTopicProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserTopicProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserTopicProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    status?: boolean
    learnedWords?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTopicProgress"]>

  export type UserTopicProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    status?: boolean
    learnedWords?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTopicProgress"]>

  export type UserTopicProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    status?: boolean
    learnedWords?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTopicProgress"]>

  export type UserTopicProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    status?: boolean
    learnedWords?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
  }

  export type UserTopicProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "status" | "learnedWords" | "lastAccessedAt" | "completedAt", ExtArgs["result"]["userTopicProgress"]>
  export type UserTopicProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type UserTopicProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type UserTopicProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $UserTopicProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTopicProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      topicId: number
      status: $Enums.ProgressStatus
      learnedWords: number
      lastAccessedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["userTopicProgress"]>
    composites: {}
  }

  type UserTopicProgressGetPayload<S extends boolean | null | undefined | UserTopicProgressDefaultArgs> = $Result.GetResult<Prisma.$UserTopicProgressPayload, S>

  type UserTopicProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTopicProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTopicProgressCountAggregateInputType | true
    }

  export interface UserTopicProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTopicProgress'], meta: { name: 'UserTopicProgress' } }
    /**
     * Find zero or one UserTopicProgress that matches the filter.
     * @param {UserTopicProgressFindUniqueArgs} args - Arguments to find a UserTopicProgress
     * @example
     * // Get one UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTopicProgressFindUniqueArgs>(args: SelectSubset<T, UserTopicProgressFindUniqueArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTopicProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTopicProgressFindUniqueOrThrowArgs} args - Arguments to find a UserTopicProgress
     * @example
     * // Get one UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTopicProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTopicProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTopicProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressFindFirstArgs} args - Arguments to find a UserTopicProgress
     * @example
     * // Get one UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTopicProgressFindFirstArgs>(args?: SelectSubset<T, UserTopicProgressFindFirstArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTopicProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressFindFirstOrThrowArgs} args - Arguments to find a UserTopicProgress
     * @example
     * // Get one UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTopicProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTopicProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTopicProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTopicProgresses
     * const userTopicProgresses = await prisma.userTopicProgress.findMany()
     * 
     * // Get first 10 UserTopicProgresses
     * const userTopicProgresses = await prisma.userTopicProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTopicProgressWithIdOnly = await prisma.userTopicProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTopicProgressFindManyArgs>(args?: SelectSubset<T, UserTopicProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTopicProgress.
     * @param {UserTopicProgressCreateArgs} args - Arguments to create a UserTopicProgress.
     * @example
     * // Create one UserTopicProgress
     * const UserTopicProgress = await prisma.userTopicProgress.create({
     *   data: {
     *     // ... data to create a UserTopicProgress
     *   }
     * })
     * 
     */
    create<T extends UserTopicProgressCreateArgs>(args: SelectSubset<T, UserTopicProgressCreateArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTopicProgresses.
     * @param {UserTopicProgressCreateManyArgs} args - Arguments to create many UserTopicProgresses.
     * @example
     * // Create many UserTopicProgresses
     * const userTopicProgress = await prisma.userTopicProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTopicProgressCreateManyArgs>(args?: SelectSubset<T, UserTopicProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTopicProgresses and returns the data saved in the database.
     * @param {UserTopicProgressCreateManyAndReturnArgs} args - Arguments to create many UserTopicProgresses.
     * @example
     * // Create many UserTopicProgresses
     * const userTopicProgress = await prisma.userTopicProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTopicProgresses and only return the `id`
     * const userTopicProgressWithIdOnly = await prisma.userTopicProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTopicProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTopicProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTopicProgress.
     * @param {UserTopicProgressDeleteArgs} args - Arguments to delete one UserTopicProgress.
     * @example
     * // Delete one UserTopicProgress
     * const UserTopicProgress = await prisma.userTopicProgress.delete({
     *   where: {
     *     // ... filter to delete one UserTopicProgress
     *   }
     * })
     * 
     */
    delete<T extends UserTopicProgressDeleteArgs>(args: SelectSubset<T, UserTopicProgressDeleteArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTopicProgress.
     * @param {UserTopicProgressUpdateArgs} args - Arguments to update one UserTopicProgress.
     * @example
     * // Update one UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTopicProgressUpdateArgs>(args: SelectSubset<T, UserTopicProgressUpdateArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTopicProgresses.
     * @param {UserTopicProgressDeleteManyArgs} args - Arguments to filter UserTopicProgresses to delete.
     * @example
     * // Delete a few UserTopicProgresses
     * const { count } = await prisma.userTopicProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTopicProgressDeleteManyArgs>(args?: SelectSubset<T, UserTopicProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTopicProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTopicProgresses
     * const userTopicProgress = await prisma.userTopicProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTopicProgressUpdateManyArgs>(args: SelectSubset<T, UserTopicProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTopicProgresses and returns the data updated in the database.
     * @param {UserTopicProgressUpdateManyAndReturnArgs} args - Arguments to update many UserTopicProgresses.
     * @example
     * // Update many UserTopicProgresses
     * const userTopicProgress = await prisma.userTopicProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTopicProgresses and only return the `id`
     * const userTopicProgressWithIdOnly = await prisma.userTopicProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTopicProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTopicProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTopicProgress.
     * @param {UserTopicProgressUpsertArgs} args - Arguments to update or create a UserTopicProgress.
     * @example
     * // Update or create a UserTopicProgress
     * const userTopicProgress = await prisma.userTopicProgress.upsert({
     *   create: {
     *     // ... data to create a UserTopicProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTopicProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserTopicProgressUpsertArgs>(args: SelectSubset<T, UserTopicProgressUpsertArgs<ExtArgs>>): Prisma__UserTopicProgressClient<$Result.GetResult<Prisma.$UserTopicProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTopicProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressCountArgs} args - Arguments to filter UserTopicProgresses to count.
     * @example
     * // Count the number of UserTopicProgresses
     * const count = await prisma.userTopicProgress.count({
     *   where: {
     *     // ... the filter for the UserTopicProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserTopicProgressCountArgs>(
      args?: Subset<T, UserTopicProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTopicProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTopicProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTopicProgressAggregateArgs>(args: Subset<T, UserTopicProgressAggregateArgs>): Prisma.PrismaPromise<GetUserTopicProgressAggregateType<T>>

    /**
     * Group by UserTopicProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTopicProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTopicProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTopicProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserTopicProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTopicProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTopicProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTopicProgress model
   */
  readonly fields: UserTopicProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTopicProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTopicProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTopicProgress model
   */
  interface UserTopicProgressFieldRefs {
    readonly id: FieldRef<"UserTopicProgress", 'Int'>
    readonly userId: FieldRef<"UserTopicProgress", 'Int'>
    readonly topicId: FieldRef<"UserTopicProgress", 'Int'>
    readonly status: FieldRef<"UserTopicProgress", 'ProgressStatus'>
    readonly learnedWords: FieldRef<"UserTopicProgress", 'Int'>
    readonly lastAccessedAt: FieldRef<"UserTopicProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserTopicProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTopicProgress findUnique
   */
  export type UserTopicProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTopicProgress to fetch.
     */
    where: UserTopicProgressWhereUniqueInput
  }

  /**
   * UserTopicProgress findUniqueOrThrow
   */
  export type UserTopicProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTopicProgress to fetch.
     */
    where: UserTopicProgressWhereUniqueInput
  }

  /**
   * UserTopicProgress findFirst
   */
  export type UserTopicProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTopicProgress to fetch.
     */
    where?: UserTopicProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTopicProgresses to fetch.
     */
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTopicProgresses.
     */
    cursor?: UserTopicProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTopicProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTopicProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTopicProgresses.
     */
    distinct?: UserTopicProgressScalarFieldEnum | UserTopicProgressScalarFieldEnum[]
  }

  /**
   * UserTopicProgress findFirstOrThrow
   */
  export type UserTopicProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTopicProgress to fetch.
     */
    where?: UserTopicProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTopicProgresses to fetch.
     */
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTopicProgresses.
     */
    cursor?: UserTopicProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTopicProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTopicProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTopicProgresses.
     */
    distinct?: UserTopicProgressScalarFieldEnum | UserTopicProgressScalarFieldEnum[]
  }

  /**
   * UserTopicProgress findMany
   */
  export type UserTopicProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTopicProgresses to fetch.
     */
    where?: UserTopicProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTopicProgresses to fetch.
     */
    orderBy?: UserTopicProgressOrderByWithRelationInput | UserTopicProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTopicProgresses.
     */
    cursor?: UserTopicProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTopicProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTopicProgresses.
     */
    skip?: number
    distinct?: UserTopicProgressScalarFieldEnum | UserTopicProgressScalarFieldEnum[]
  }

  /**
   * UserTopicProgress create
   */
  export type UserTopicProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTopicProgress.
     */
    data: XOR<UserTopicProgressCreateInput, UserTopicProgressUncheckedCreateInput>
  }

  /**
   * UserTopicProgress createMany
   */
  export type UserTopicProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTopicProgresses.
     */
    data: UserTopicProgressCreateManyInput | UserTopicProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTopicProgress createManyAndReturn
   */
  export type UserTopicProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserTopicProgresses.
     */
    data: UserTopicProgressCreateManyInput | UserTopicProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTopicProgress update
   */
  export type UserTopicProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTopicProgress.
     */
    data: XOR<UserTopicProgressUpdateInput, UserTopicProgressUncheckedUpdateInput>
    /**
     * Choose, which UserTopicProgress to update.
     */
    where: UserTopicProgressWhereUniqueInput
  }

  /**
   * UserTopicProgress updateMany
   */
  export type UserTopicProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTopicProgresses.
     */
    data: XOR<UserTopicProgressUpdateManyMutationInput, UserTopicProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTopicProgresses to update
     */
    where?: UserTopicProgressWhereInput
    /**
     * Limit how many UserTopicProgresses to update.
     */
    limit?: number
  }

  /**
   * UserTopicProgress updateManyAndReturn
   */
  export type UserTopicProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserTopicProgresses.
     */
    data: XOR<UserTopicProgressUpdateManyMutationInput, UserTopicProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTopicProgresses to update
     */
    where?: UserTopicProgressWhereInput
    /**
     * Limit how many UserTopicProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTopicProgress upsert
   */
  export type UserTopicProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTopicProgress to update in case it exists.
     */
    where: UserTopicProgressWhereUniqueInput
    /**
     * In case the UserTopicProgress found by the `where` argument doesn't exist, create a new UserTopicProgress with this data.
     */
    create: XOR<UserTopicProgressCreateInput, UserTopicProgressUncheckedCreateInput>
    /**
     * In case the UserTopicProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTopicProgressUpdateInput, UserTopicProgressUncheckedUpdateInput>
  }

  /**
   * UserTopicProgress delete
   */
  export type UserTopicProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
    /**
     * Filter which UserTopicProgress to delete.
     */
    where: UserTopicProgressWhereUniqueInput
  }

  /**
   * UserTopicProgress deleteMany
   */
  export type UserTopicProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTopicProgresses to delete
     */
    where?: UserTopicProgressWhereInput
    /**
     * Limit how many UserTopicProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserTopicProgress without action
   */
  export type UserTopicProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTopicProgress
     */
    select?: UserTopicProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTopicProgress
     */
    omit?: UserTopicProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTopicProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserGrammarLessonProgress
   */

  export type AggregateUserGrammarLessonProgress = {
    _count: UserGrammarLessonProgressCountAggregateOutputType | null
    _avg: UserGrammarLessonProgressAvgAggregateOutputType | null
    _sum: UserGrammarLessonProgressSumAggregateOutputType | null
    _min: UserGrammarLessonProgressMinAggregateOutputType | null
    _max: UserGrammarLessonProgressMaxAggregateOutputType | null
  }

  export type UserGrammarLessonProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    grammarLessonId: number | null
  }

  export type UserGrammarLessonProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    grammarLessonId: number | null
  }

  export type UserGrammarLessonProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    grammarLessonId: number | null
    status: $Enums.ProgressStatus | null
    lastAccessedAt: Date | null
    completedAt: Date | null
  }

  export type UserGrammarLessonProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    grammarLessonId: number | null
    status: $Enums.ProgressStatus | null
    lastAccessedAt: Date | null
    completedAt: Date | null
  }

  export type UserGrammarLessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    grammarLessonId: number
    status: number
    lastAccessedAt: number
    completedAt: number
    _all: number
  }


  export type UserGrammarLessonProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    grammarLessonId?: true
  }

  export type UserGrammarLessonProgressSumAggregateInputType = {
    id?: true
    userId?: true
    grammarLessonId?: true
  }

  export type UserGrammarLessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    grammarLessonId?: true
    status?: true
    lastAccessedAt?: true
    completedAt?: true
  }

  export type UserGrammarLessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    grammarLessonId?: true
    status?: true
    lastAccessedAt?: true
    completedAt?: true
  }

  export type UserGrammarLessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    grammarLessonId?: true
    status?: true
    lastAccessedAt?: true
    completedAt?: true
    _all?: true
  }

  export type UserGrammarLessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrammarLessonProgress to aggregate.
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrammarLessonProgresses to fetch.
     */
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrammarLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrammarLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGrammarLessonProgresses
    **/
    _count?: true | UserGrammarLessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGrammarLessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGrammarLessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGrammarLessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGrammarLessonProgressMaxAggregateInputType
  }

  export type GetUserGrammarLessonProgressAggregateType<T extends UserGrammarLessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGrammarLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGrammarLessonProgress[P]>
      : GetScalarType<T[P], AggregateUserGrammarLessonProgress[P]>
  }




  export type UserGrammarLessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrammarLessonProgressWhereInput
    orderBy?: UserGrammarLessonProgressOrderByWithAggregationInput | UserGrammarLessonProgressOrderByWithAggregationInput[]
    by: UserGrammarLessonProgressScalarFieldEnum[] | UserGrammarLessonProgressScalarFieldEnum
    having?: UserGrammarLessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGrammarLessonProgressCountAggregateInputType | true
    _avg?: UserGrammarLessonProgressAvgAggregateInputType
    _sum?: UserGrammarLessonProgressSumAggregateInputType
    _min?: UserGrammarLessonProgressMinAggregateInputType
    _max?: UserGrammarLessonProgressMaxAggregateInputType
  }

  export type UserGrammarLessonProgressGroupByOutputType = {
    id: number
    userId: number
    grammarLessonId: number
    status: $Enums.ProgressStatus
    lastAccessedAt: Date
    completedAt: Date | null
    _count: UserGrammarLessonProgressCountAggregateOutputType | null
    _avg: UserGrammarLessonProgressAvgAggregateOutputType | null
    _sum: UserGrammarLessonProgressSumAggregateOutputType | null
    _min: UserGrammarLessonProgressMinAggregateOutputType | null
    _max: UserGrammarLessonProgressMaxAggregateOutputType | null
  }

  type GetUserGrammarLessonProgressGroupByPayload<T extends UserGrammarLessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGrammarLessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGrammarLessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGrammarLessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserGrammarLessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserGrammarLessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    grammarLessonId?: boolean
    status?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrammarLessonProgress"]>

  export type UserGrammarLessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    grammarLessonId?: boolean
    status?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrammarLessonProgress"]>

  export type UserGrammarLessonProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    grammarLessonId?: boolean
    status?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrammarLessonProgress"]>

  export type UserGrammarLessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    grammarLessonId?: boolean
    status?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
  }

  export type UserGrammarLessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "grammarLessonId" | "status" | "lastAccessedAt" | "completedAt", ExtArgs["result"]["userGrammarLessonProgress"]>
  export type UserGrammarLessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }
  export type UserGrammarLessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }
  export type UserGrammarLessonProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    grammarLesson?: boolean | GrammarLessonDefaultArgs<ExtArgs>
  }

  export type $UserGrammarLessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGrammarLessonProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      grammarLesson: Prisma.$GrammarLessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      grammarLessonId: number
      status: $Enums.ProgressStatus
      lastAccessedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["userGrammarLessonProgress"]>
    composites: {}
  }

  type UserGrammarLessonProgressGetPayload<S extends boolean | null | undefined | UserGrammarLessonProgressDefaultArgs> = $Result.GetResult<Prisma.$UserGrammarLessonProgressPayload, S>

  type UserGrammarLessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGrammarLessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGrammarLessonProgressCountAggregateInputType | true
    }

  export interface UserGrammarLessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGrammarLessonProgress'], meta: { name: 'UserGrammarLessonProgress' } }
    /**
     * Find zero or one UserGrammarLessonProgress that matches the filter.
     * @param {UserGrammarLessonProgressFindUniqueArgs} args - Arguments to find a UserGrammarLessonProgress
     * @example
     * // Get one UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGrammarLessonProgressFindUniqueArgs>(args: SelectSubset<T, UserGrammarLessonProgressFindUniqueArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGrammarLessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGrammarLessonProgressFindUniqueOrThrowArgs} args - Arguments to find a UserGrammarLessonProgress
     * @example
     * // Get one UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGrammarLessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGrammarLessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrammarLessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressFindFirstArgs} args - Arguments to find a UserGrammarLessonProgress
     * @example
     * // Get one UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGrammarLessonProgressFindFirstArgs>(args?: SelectSubset<T, UserGrammarLessonProgressFindFirstArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrammarLessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressFindFirstOrThrowArgs} args - Arguments to find a UserGrammarLessonProgress
     * @example
     * // Get one UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGrammarLessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGrammarLessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGrammarLessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGrammarLessonProgresses
     * const userGrammarLessonProgresses = await prisma.userGrammarLessonProgress.findMany()
     * 
     * // Get first 10 UserGrammarLessonProgresses
     * const userGrammarLessonProgresses = await prisma.userGrammarLessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGrammarLessonProgressWithIdOnly = await prisma.userGrammarLessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGrammarLessonProgressFindManyArgs>(args?: SelectSubset<T, UserGrammarLessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGrammarLessonProgress.
     * @param {UserGrammarLessonProgressCreateArgs} args - Arguments to create a UserGrammarLessonProgress.
     * @example
     * // Create one UserGrammarLessonProgress
     * const UserGrammarLessonProgress = await prisma.userGrammarLessonProgress.create({
     *   data: {
     *     // ... data to create a UserGrammarLessonProgress
     *   }
     * })
     * 
     */
    create<T extends UserGrammarLessonProgressCreateArgs>(args: SelectSubset<T, UserGrammarLessonProgressCreateArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGrammarLessonProgresses.
     * @param {UserGrammarLessonProgressCreateManyArgs} args - Arguments to create many UserGrammarLessonProgresses.
     * @example
     * // Create many UserGrammarLessonProgresses
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGrammarLessonProgressCreateManyArgs>(args?: SelectSubset<T, UserGrammarLessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGrammarLessonProgresses and returns the data saved in the database.
     * @param {UserGrammarLessonProgressCreateManyAndReturnArgs} args - Arguments to create many UserGrammarLessonProgresses.
     * @example
     * // Create many UserGrammarLessonProgresses
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGrammarLessonProgresses and only return the `id`
     * const userGrammarLessonProgressWithIdOnly = await prisma.userGrammarLessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGrammarLessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGrammarLessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGrammarLessonProgress.
     * @param {UserGrammarLessonProgressDeleteArgs} args - Arguments to delete one UserGrammarLessonProgress.
     * @example
     * // Delete one UserGrammarLessonProgress
     * const UserGrammarLessonProgress = await prisma.userGrammarLessonProgress.delete({
     *   where: {
     *     // ... filter to delete one UserGrammarLessonProgress
     *   }
     * })
     * 
     */
    delete<T extends UserGrammarLessonProgressDeleteArgs>(args: SelectSubset<T, UserGrammarLessonProgressDeleteArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGrammarLessonProgress.
     * @param {UserGrammarLessonProgressUpdateArgs} args - Arguments to update one UserGrammarLessonProgress.
     * @example
     * // Update one UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGrammarLessonProgressUpdateArgs>(args: SelectSubset<T, UserGrammarLessonProgressUpdateArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGrammarLessonProgresses.
     * @param {UserGrammarLessonProgressDeleteManyArgs} args - Arguments to filter UserGrammarLessonProgresses to delete.
     * @example
     * // Delete a few UserGrammarLessonProgresses
     * const { count } = await prisma.userGrammarLessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGrammarLessonProgressDeleteManyArgs>(args?: SelectSubset<T, UserGrammarLessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrammarLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGrammarLessonProgresses
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGrammarLessonProgressUpdateManyArgs>(args: SelectSubset<T, UserGrammarLessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrammarLessonProgresses and returns the data updated in the database.
     * @param {UserGrammarLessonProgressUpdateManyAndReturnArgs} args - Arguments to update many UserGrammarLessonProgresses.
     * @example
     * // Update many UserGrammarLessonProgresses
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGrammarLessonProgresses and only return the `id`
     * const userGrammarLessonProgressWithIdOnly = await prisma.userGrammarLessonProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGrammarLessonProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGrammarLessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGrammarLessonProgress.
     * @param {UserGrammarLessonProgressUpsertArgs} args - Arguments to update or create a UserGrammarLessonProgress.
     * @example
     * // Update or create a UserGrammarLessonProgress
     * const userGrammarLessonProgress = await prisma.userGrammarLessonProgress.upsert({
     *   create: {
     *     // ... data to create a UserGrammarLessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGrammarLessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserGrammarLessonProgressUpsertArgs>(args: SelectSubset<T, UserGrammarLessonProgressUpsertArgs<ExtArgs>>): Prisma__UserGrammarLessonProgressClient<$Result.GetResult<Prisma.$UserGrammarLessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGrammarLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressCountArgs} args - Arguments to filter UserGrammarLessonProgresses to count.
     * @example
     * // Count the number of UserGrammarLessonProgresses
     * const count = await prisma.userGrammarLessonProgress.count({
     *   where: {
     *     // ... the filter for the UserGrammarLessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserGrammarLessonProgressCountArgs>(
      args?: Subset<T, UserGrammarLessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGrammarLessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGrammarLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGrammarLessonProgressAggregateArgs>(args: Subset<T, UserGrammarLessonProgressAggregateArgs>): Prisma.PrismaPromise<GetUserGrammarLessonProgressAggregateType<T>>

    /**
     * Group by UserGrammarLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrammarLessonProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGrammarLessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGrammarLessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserGrammarLessonProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGrammarLessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGrammarLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGrammarLessonProgress model
   */
  readonly fields: UserGrammarLessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGrammarLessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGrammarLessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grammarLesson<T extends GrammarLessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarLessonDefaultArgs<ExtArgs>>): Prisma__GrammarLessonClient<$Result.GetResult<Prisma.$GrammarLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGrammarLessonProgress model
   */
  interface UserGrammarLessonProgressFieldRefs {
    readonly id: FieldRef<"UserGrammarLessonProgress", 'Int'>
    readonly userId: FieldRef<"UserGrammarLessonProgress", 'Int'>
    readonly grammarLessonId: FieldRef<"UserGrammarLessonProgress", 'Int'>
    readonly status: FieldRef<"UserGrammarLessonProgress", 'ProgressStatus'>
    readonly lastAccessedAt: FieldRef<"UserGrammarLessonProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserGrammarLessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGrammarLessonProgress findUnique
   */
  export type UserGrammarLessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserGrammarLessonProgress to fetch.
     */
    where: UserGrammarLessonProgressWhereUniqueInput
  }

  /**
   * UserGrammarLessonProgress findUniqueOrThrow
   */
  export type UserGrammarLessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserGrammarLessonProgress to fetch.
     */
    where: UserGrammarLessonProgressWhereUniqueInput
  }

  /**
   * UserGrammarLessonProgress findFirst
   */
  export type UserGrammarLessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserGrammarLessonProgress to fetch.
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrammarLessonProgresses to fetch.
     */
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrammarLessonProgresses.
     */
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrammarLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrammarLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrammarLessonProgresses.
     */
    distinct?: UserGrammarLessonProgressScalarFieldEnum | UserGrammarLessonProgressScalarFieldEnum[]
  }

  /**
   * UserGrammarLessonProgress findFirstOrThrow
   */
  export type UserGrammarLessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserGrammarLessonProgress to fetch.
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrammarLessonProgresses to fetch.
     */
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrammarLessonProgresses.
     */
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrammarLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrammarLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrammarLessonProgresses.
     */
    distinct?: UserGrammarLessonProgressScalarFieldEnum | UserGrammarLessonProgressScalarFieldEnum[]
  }

  /**
   * UserGrammarLessonProgress findMany
   */
  export type UserGrammarLessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserGrammarLessonProgresses to fetch.
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrammarLessonProgresses to fetch.
     */
    orderBy?: UserGrammarLessonProgressOrderByWithRelationInput | UserGrammarLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGrammarLessonProgresses.
     */
    cursor?: UserGrammarLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrammarLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrammarLessonProgresses.
     */
    skip?: number
    distinct?: UserGrammarLessonProgressScalarFieldEnum | UserGrammarLessonProgressScalarFieldEnum[]
  }

  /**
   * UserGrammarLessonProgress create
   */
  export type UserGrammarLessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGrammarLessonProgress.
     */
    data: XOR<UserGrammarLessonProgressCreateInput, UserGrammarLessonProgressUncheckedCreateInput>
  }

  /**
   * UserGrammarLessonProgress createMany
   */
  export type UserGrammarLessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGrammarLessonProgresses.
     */
    data: UserGrammarLessonProgressCreateManyInput | UserGrammarLessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGrammarLessonProgress createManyAndReturn
   */
  export type UserGrammarLessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserGrammarLessonProgresses.
     */
    data: UserGrammarLessonProgressCreateManyInput | UserGrammarLessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrammarLessonProgress update
   */
  export type UserGrammarLessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGrammarLessonProgress.
     */
    data: XOR<UserGrammarLessonProgressUpdateInput, UserGrammarLessonProgressUncheckedUpdateInput>
    /**
     * Choose, which UserGrammarLessonProgress to update.
     */
    where: UserGrammarLessonProgressWhereUniqueInput
  }

  /**
   * UserGrammarLessonProgress updateMany
   */
  export type UserGrammarLessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGrammarLessonProgresses.
     */
    data: XOR<UserGrammarLessonProgressUpdateManyMutationInput, UserGrammarLessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserGrammarLessonProgresses to update
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * Limit how many UserGrammarLessonProgresses to update.
     */
    limit?: number
  }

  /**
   * UserGrammarLessonProgress updateManyAndReturn
   */
  export type UserGrammarLessonProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserGrammarLessonProgresses.
     */
    data: XOR<UserGrammarLessonProgressUpdateManyMutationInput, UserGrammarLessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserGrammarLessonProgresses to update
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * Limit how many UserGrammarLessonProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrammarLessonProgress upsert
   */
  export type UserGrammarLessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGrammarLessonProgress to update in case it exists.
     */
    where: UserGrammarLessonProgressWhereUniqueInput
    /**
     * In case the UserGrammarLessonProgress found by the `where` argument doesn't exist, create a new UserGrammarLessonProgress with this data.
     */
    create: XOR<UserGrammarLessonProgressCreateInput, UserGrammarLessonProgressUncheckedCreateInput>
    /**
     * In case the UserGrammarLessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGrammarLessonProgressUpdateInput, UserGrammarLessonProgressUncheckedUpdateInput>
  }

  /**
   * UserGrammarLessonProgress delete
   */
  export type UserGrammarLessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
    /**
     * Filter which UserGrammarLessonProgress to delete.
     */
    where: UserGrammarLessonProgressWhereUniqueInput
  }

  /**
   * UserGrammarLessonProgress deleteMany
   */
  export type UserGrammarLessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrammarLessonProgresses to delete
     */
    where?: UserGrammarLessonProgressWhereInput
    /**
     * Limit how many UserGrammarLessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserGrammarLessonProgress without action
   */
  export type UserGrammarLessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrammarLessonProgress
     */
    select?: UserGrammarLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrammarLessonProgress
     */
    omit?: UserGrammarLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrammarLessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model Speaking
   */

  export type AggregateSpeaking = {
    _count: SpeakingCountAggregateOutputType | null
    _avg: SpeakingAvgAggregateOutputType | null
    _sum: SpeakingSumAggregateOutputType | null
    _min: SpeakingMinAggregateOutputType | null
    _max: SpeakingMaxAggregateOutputType | null
  }

  export type SpeakingAvgAggregateOutputType = {
    id: number | null
  }

  export type SpeakingSumAggregateOutputType = {
    id: number | null
  }

  export type SpeakingMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type SpeakingMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type SpeakingCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type SpeakingAvgAggregateInputType = {
    id?: true
  }

  export type SpeakingSumAggregateInputType = {
    id?: true
  }

  export type SpeakingMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type SpeakingMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type SpeakingCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type SpeakingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speaking to aggregate.
     */
    where?: SpeakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakings to fetch.
     */
    orderBy?: SpeakingOrderByWithRelationInput | SpeakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Speakings
    **/
    _count?: true | SpeakingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakingMaxAggregateInputType
  }

  export type GetSpeakingAggregateType<T extends SpeakingAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeaking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeaking[P]>
      : GetScalarType<T[P], AggregateSpeaking[P]>
  }




  export type SpeakingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakingWhereInput
    orderBy?: SpeakingOrderByWithAggregationInput | SpeakingOrderByWithAggregationInput[]
    by: SpeakingScalarFieldEnum[] | SpeakingScalarFieldEnum
    having?: SpeakingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakingCountAggregateInputType | true
    _avg?: SpeakingAvgAggregateInputType
    _sum?: SpeakingSumAggregateInputType
    _min?: SpeakingMinAggregateInputType
    _max?: SpeakingMaxAggregateInputType
  }

  export type SpeakingGroupByOutputType = {
    id: number
    title: string
    _count: SpeakingCountAggregateOutputType | null
    _avg: SpeakingAvgAggregateOutputType | null
    _sum: SpeakingSumAggregateOutputType | null
    _min: SpeakingMinAggregateOutputType | null
    _max: SpeakingMaxAggregateOutputType | null
  }

  type GetSpeakingGroupByPayload<T extends SpeakingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakingGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakingGroupByOutputType[P]>
        }
      >
    >


  export type SpeakingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userProgress?: boolean | Speaking$userProgressArgs<ExtArgs>
    _count?: boolean | SpeakingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speaking"]>

  export type SpeakingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["speaking"]>

  export type SpeakingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["speaking"]>

  export type SpeakingSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type SpeakingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["speaking"]>
  export type SpeakingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | Speaking$userProgressArgs<ExtArgs>
    _count?: boolean | SpeakingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpeakingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpeakingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpeakingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Speaking"
    objects: {
      userProgress: Prisma.$UserSpeakingProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["speaking"]>
    composites: {}
  }

  type SpeakingGetPayload<S extends boolean | null | undefined | SpeakingDefaultArgs> = $Result.GetResult<Prisma.$SpeakingPayload, S>

  type SpeakingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeakingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeakingCountAggregateInputType | true
    }

  export interface SpeakingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Speaking'], meta: { name: 'Speaking' } }
    /**
     * Find zero or one Speaking that matches the filter.
     * @param {SpeakingFindUniqueArgs} args - Arguments to find a Speaking
     * @example
     * // Get one Speaking
     * const speaking = await prisma.speaking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakingFindUniqueArgs>(args: SelectSubset<T, SpeakingFindUniqueArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Speaking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeakingFindUniqueOrThrowArgs} args - Arguments to find a Speaking
     * @example
     * // Get one Speaking
     * const speaking = await prisma.speaking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakingFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speaking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingFindFirstArgs} args - Arguments to find a Speaking
     * @example
     * // Get one Speaking
     * const speaking = await prisma.speaking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakingFindFirstArgs>(args?: SelectSubset<T, SpeakingFindFirstArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speaking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingFindFirstOrThrowArgs} args - Arguments to find a Speaking
     * @example
     * // Get one Speaking
     * const speaking = await prisma.speaking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakingFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Speakings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Speakings
     * const speakings = await prisma.speaking.findMany()
     * 
     * // Get first 10 Speakings
     * const speakings = await prisma.speaking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakingWithIdOnly = await prisma.speaking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakingFindManyArgs>(args?: SelectSubset<T, SpeakingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Speaking.
     * @param {SpeakingCreateArgs} args - Arguments to create a Speaking.
     * @example
     * // Create one Speaking
     * const Speaking = await prisma.speaking.create({
     *   data: {
     *     // ... data to create a Speaking
     *   }
     * })
     * 
     */
    create<T extends SpeakingCreateArgs>(args: SelectSubset<T, SpeakingCreateArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Speakings.
     * @param {SpeakingCreateManyArgs} args - Arguments to create many Speakings.
     * @example
     * // Create many Speakings
     * const speaking = await prisma.speaking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakingCreateManyArgs>(args?: SelectSubset<T, SpeakingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Speakings and returns the data saved in the database.
     * @param {SpeakingCreateManyAndReturnArgs} args - Arguments to create many Speakings.
     * @example
     * // Create many Speakings
     * const speaking = await prisma.speaking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Speakings and only return the `id`
     * const speakingWithIdOnly = await prisma.speaking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeakingCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeakingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Speaking.
     * @param {SpeakingDeleteArgs} args - Arguments to delete one Speaking.
     * @example
     * // Delete one Speaking
     * const Speaking = await prisma.speaking.delete({
     *   where: {
     *     // ... filter to delete one Speaking
     *   }
     * })
     * 
     */
    delete<T extends SpeakingDeleteArgs>(args: SelectSubset<T, SpeakingDeleteArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Speaking.
     * @param {SpeakingUpdateArgs} args - Arguments to update one Speaking.
     * @example
     * // Update one Speaking
     * const speaking = await prisma.speaking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakingUpdateArgs>(args: SelectSubset<T, SpeakingUpdateArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Speakings.
     * @param {SpeakingDeleteManyArgs} args - Arguments to filter Speakings to delete.
     * @example
     * // Delete a few Speakings
     * const { count } = await prisma.speaking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakingDeleteManyArgs>(args?: SelectSubset<T, SpeakingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Speakings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Speakings
     * const speaking = await prisma.speaking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakingUpdateManyArgs>(args: SelectSubset<T, SpeakingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Speakings and returns the data updated in the database.
     * @param {SpeakingUpdateManyAndReturnArgs} args - Arguments to update many Speakings.
     * @example
     * // Update many Speakings
     * const speaking = await prisma.speaking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Speakings and only return the `id`
     * const speakingWithIdOnly = await prisma.speaking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpeakingUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeakingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Speaking.
     * @param {SpeakingUpsertArgs} args - Arguments to update or create a Speaking.
     * @example
     * // Update or create a Speaking
     * const speaking = await prisma.speaking.upsert({
     *   create: {
     *     // ... data to create a Speaking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Speaking we want to update
     *   }
     * })
     */
    upsert<T extends SpeakingUpsertArgs>(args: SelectSubset<T, SpeakingUpsertArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Speakings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingCountArgs} args - Arguments to filter Speakings to count.
     * @example
     * // Count the number of Speakings
     * const count = await prisma.speaking.count({
     *   where: {
     *     // ... the filter for the Speakings we want to count
     *   }
     * })
    **/
    count<T extends SpeakingCountArgs>(
      args?: Subset<T, SpeakingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Speaking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeakingAggregateArgs>(args: Subset<T, SpeakingAggregateArgs>): Prisma.PrismaPromise<GetSpeakingAggregateType<T>>

    /**
     * Group by Speaking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeakingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakingGroupByArgs['orderBy'] }
        : { orderBy?: SpeakingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeakingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Speaking model
   */
  readonly fields: SpeakingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Speaking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProgress<T extends Speaking$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Speaking$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Speaking model
   */
  interface SpeakingFieldRefs {
    readonly id: FieldRef<"Speaking", 'Int'>
    readonly title: FieldRef<"Speaking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Speaking findUnique
   */
  export type SpeakingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter, which Speaking to fetch.
     */
    where: SpeakingWhereUniqueInput
  }

  /**
   * Speaking findUniqueOrThrow
   */
  export type SpeakingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter, which Speaking to fetch.
     */
    where: SpeakingWhereUniqueInput
  }

  /**
   * Speaking findFirst
   */
  export type SpeakingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter, which Speaking to fetch.
     */
    where?: SpeakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakings to fetch.
     */
    orderBy?: SpeakingOrderByWithRelationInput | SpeakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Speakings.
     */
    cursor?: SpeakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Speakings.
     */
    distinct?: SpeakingScalarFieldEnum | SpeakingScalarFieldEnum[]
  }

  /**
   * Speaking findFirstOrThrow
   */
  export type SpeakingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter, which Speaking to fetch.
     */
    where?: SpeakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakings to fetch.
     */
    orderBy?: SpeakingOrderByWithRelationInput | SpeakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Speakings.
     */
    cursor?: SpeakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Speakings.
     */
    distinct?: SpeakingScalarFieldEnum | SpeakingScalarFieldEnum[]
  }

  /**
   * Speaking findMany
   */
  export type SpeakingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter, which Speakings to fetch.
     */
    where?: SpeakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakings to fetch.
     */
    orderBy?: SpeakingOrderByWithRelationInput | SpeakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Speakings.
     */
    cursor?: SpeakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakings.
     */
    skip?: number
    distinct?: SpeakingScalarFieldEnum | SpeakingScalarFieldEnum[]
  }

  /**
   * Speaking create
   */
  export type SpeakingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * The data needed to create a Speaking.
     */
    data: XOR<SpeakingCreateInput, SpeakingUncheckedCreateInput>
  }

  /**
   * Speaking createMany
   */
  export type SpeakingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Speakings.
     */
    data: SpeakingCreateManyInput | SpeakingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speaking createManyAndReturn
   */
  export type SpeakingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * The data used to create many Speakings.
     */
    data: SpeakingCreateManyInput | SpeakingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speaking update
   */
  export type SpeakingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * The data needed to update a Speaking.
     */
    data: XOR<SpeakingUpdateInput, SpeakingUncheckedUpdateInput>
    /**
     * Choose, which Speaking to update.
     */
    where: SpeakingWhereUniqueInput
  }

  /**
   * Speaking updateMany
   */
  export type SpeakingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Speakings.
     */
    data: XOR<SpeakingUpdateManyMutationInput, SpeakingUncheckedUpdateManyInput>
    /**
     * Filter which Speakings to update
     */
    where?: SpeakingWhereInput
    /**
     * Limit how many Speakings to update.
     */
    limit?: number
  }

  /**
   * Speaking updateManyAndReturn
   */
  export type SpeakingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * The data used to update Speakings.
     */
    data: XOR<SpeakingUpdateManyMutationInput, SpeakingUncheckedUpdateManyInput>
    /**
     * Filter which Speakings to update
     */
    where?: SpeakingWhereInput
    /**
     * Limit how many Speakings to update.
     */
    limit?: number
  }

  /**
   * Speaking upsert
   */
  export type SpeakingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * The filter to search for the Speaking to update in case it exists.
     */
    where: SpeakingWhereUniqueInput
    /**
     * In case the Speaking found by the `where` argument doesn't exist, create a new Speaking with this data.
     */
    create: XOR<SpeakingCreateInput, SpeakingUncheckedCreateInput>
    /**
     * In case the Speaking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakingUpdateInput, SpeakingUncheckedUpdateInput>
  }

  /**
   * Speaking delete
   */
  export type SpeakingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
    /**
     * Filter which Speaking to delete.
     */
    where: SpeakingWhereUniqueInput
  }

  /**
   * Speaking deleteMany
   */
  export type SpeakingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speakings to delete
     */
    where?: SpeakingWhereInput
    /**
     * Limit how many Speakings to delete.
     */
    limit?: number
  }

  /**
   * Speaking.userProgress
   */
  export type Speaking$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    where?: UserSpeakingProgressWhereInput
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    cursor?: UserSpeakingProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSpeakingProgressScalarFieldEnum | UserSpeakingProgressScalarFieldEnum[]
  }

  /**
   * Speaking without action
   */
  export type SpeakingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speaking
     */
    select?: SpeakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speaking
     */
    omit?: SpeakingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingInclude<ExtArgs> | null
  }


  /**
   * Model UserSpeakingProgress
   */

  export type AggregateUserSpeakingProgress = {
    _count: UserSpeakingProgressCountAggregateOutputType | null
    _avg: UserSpeakingProgressAvgAggregateOutputType | null
    _sum: UserSpeakingProgressSumAggregateOutputType | null
    _min: UserSpeakingProgressMinAggregateOutputType | null
    _max: UserSpeakingProgressMaxAggregateOutputType | null
  }

  export type UserSpeakingProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    spkId: number | null
    learnedWords: number | null
  }

  export type UserSpeakingProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    spkId: number | null
    learnedWords: number | null
  }

  export type UserSpeakingProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    spkId: number | null
    learnedWords: number | null
  }

  export type UserSpeakingProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    spkId: number | null
    learnedWords: number | null
  }

  export type UserSpeakingProgressCountAggregateOutputType = {
    id: number
    userId: number
    spkId: number
    learnedWords: number
    _all: number
  }


  export type UserSpeakingProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    spkId?: true
    learnedWords?: true
  }

  export type UserSpeakingProgressSumAggregateInputType = {
    id?: true
    userId?: true
    spkId?: true
    learnedWords?: true
  }

  export type UserSpeakingProgressMinAggregateInputType = {
    id?: true
    userId?: true
    spkId?: true
    learnedWords?: true
  }

  export type UserSpeakingProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    spkId?: true
    learnedWords?: true
  }

  export type UserSpeakingProgressCountAggregateInputType = {
    id?: true
    userId?: true
    spkId?: true
    learnedWords?: true
    _all?: true
  }

  export type UserSpeakingProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSpeakingProgress to aggregate.
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpeakingProgresses to fetch.
     */
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSpeakingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpeakingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpeakingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSpeakingProgresses
    **/
    _count?: true | UserSpeakingProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSpeakingProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSpeakingProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSpeakingProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSpeakingProgressMaxAggregateInputType
  }

  export type GetUserSpeakingProgressAggregateType<T extends UserSpeakingProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSpeakingProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSpeakingProgress[P]>
      : GetScalarType<T[P], AggregateUserSpeakingProgress[P]>
  }




  export type UserSpeakingProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpeakingProgressWhereInput
    orderBy?: UserSpeakingProgressOrderByWithAggregationInput | UserSpeakingProgressOrderByWithAggregationInput[]
    by: UserSpeakingProgressScalarFieldEnum[] | UserSpeakingProgressScalarFieldEnum
    having?: UserSpeakingProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSpeakingProgressCountAggregateInputType | true
    _avg?: UserSpeakingProgressAvgAggregateInputType
    _sum?: UserSpeakingProgressSumAggregateInputType
    _min?: UserSpeakingProgressMinAggregateInputType
    _max?: UserSpeakingProgressMaxAggregateInputType
  }

  export type UserSpeakingProgressGroupByOutputType = {
    id: number
    userId: number
    spkId: number
    learnedWords: number
    _count: UserSpeakingProgressCountAggregateOutputType | null
    _avg: UserSpeakingProgressAvgAggregateOutputType | null
    _sum: UserSpeakingProgressSumAggregateOutputType | null
    _min: UserSpeakingProgressMinAggregateOutputType | null
    _max: UserSpeakingProgressMaxAggregateOutputType | null
  }

  type GetUserSpeakingProgressGroupByPayload<T extends UserSpeakingProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSpeakingProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSpeakingProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSpeakingProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserSpeakingProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserSpeakingProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spkId?: boolean
    learnedWords?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpeakingProgress"]>

  export type UserSpeakingProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spkId?: boolean
    learnedWords?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpeakingProgress"]>

  export type UserSpeakingProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spkId?: boolean
    learnedWords?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpeakingProgress"]>

  export type UserSpeakingProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    spkId?: boolean
    learnedWords?: boolean
  }

  export type UserSpeakingProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "spkId" | "learnedWords", ExtArgs["result"]["userSpeakingProgress"]>
  export type UserSpeakingProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }
  export type UserSpeakingProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }
  export type UserSpeakingProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    speaking?: boolean | SpeakingDefaultArgs<ExtArgs>
  }

  export type $UserSpeakingProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSpeakingProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      speaking: Prisma.$SpeakingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      spkId: number
      learnedWords: number
    }, ExtArgs["result"]["userSpeakingProgress"]>
    composites: {}
  }

  type UserSpeakingProgressGetPayload<S extends boolean | null | undefined | UserSpeakingProgressDefaultArgs> = $Result.GetResult<Prisma.$UserSpeakingProgressPayload, S>

  type UserSpeakingProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSpeakingProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSpeakingProgressCountAggregateInputType | true
    }

  export interface UserSpeakingProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSpeakingProgress'], meta: { name: 'UserSpeakingProgress' } }
    /**
     * Find zero or one UserSpeakingProgress that matches the filter.
     * @param {UserSpeakingProgressFindUniqueArgs} args - Arguments to find a UserSpeakingProgress
     * @example
     * // Get one UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSpeakingProgressFindUniqueArgs>(args: SelectSubset<T, UserSpeakingProgressFindUniqueArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSpeakingProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSpeakingProgressFindUniqueOrThrowArgs} args - Arguments to find a UserSpeakingProgress
     * @example
     * // Get one UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSpeakingProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSpeakingProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSpeakingProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressFindFirstArgs} args - Arguments to find a UserSpeakingProgress
     * @example
     * // Get one UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSpeakingProgressFindFirstArgs>(args?: SelectSubset<T, UserSpeakingProgressFindFirstArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSpeakingProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressFindFirstOrThrowArgs} args - Arguments to find a UserSpeakingProgress
     * @example
     * // Get one UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSpeakingProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSpeakingProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSpeakingProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSpeakingProgresses
     * const userSpeakingProgresses = await prisma.userSpeakingProgress.findMany()
     * 
     * // Get first 10 UserSpeakingProgresses
     * const userSpeakingProgresses = await prisma.userSpeakingProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSpeakingProgressWithIdOnly = await prisma.userSpeakingProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSpeakingProgressFindManyArgs>(args?: SelectSubset<T, UserSpeakingProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSpeakingProgress.
     * @param {UserSpeakingProgressCreateArgs} args - Arguments to create a UserSpeakingProgress.
     * @example
     * // Create one UserSpeakingProgress
     * const UserSpeakingProgress = await prisma.userSpeakingProgress.create({
     *   data: {
     *     // ... data to create a UserSpeakingProgress
     *   }
     * })
     * 
     */
    create<T extends UserSpeakingProgressCreateArgs>(args: SelectSubset<T, UserSpeakingProgressCreateArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSpeakingProgresses.
     * @param {UserSpeakingProgressCreateManyArgs} args - Arguments to create many UserSpeakingProgresses.
     * @example
     * // Create many UserSpeakingProgresses
     * const userSpeakingProgress = await prisma.userSpeakingProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSpeakingProgressCreateManyArgs>(args?: SelectSubset<T, UserSpeakingProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSpeakingProgresses and returns the data saved in the database.
     * @param {UserSpeakingProgressCreateManyAndReturnArgs} args - Arguments to create many UserSpeakingProgresses.
     * @example
     * // Create many UserSpeakingProgresses
     * const userSpeakingProgress = await prisma.userSpeakingProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSpeakingProgresses and only return the `id`
     * const userSpeakingProgressWithIdOnly = await prisma.userSpeakingProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSpeakingProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSpeakingProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSpeakingProgress.
     * @param {UserSpeakingProgressDeleteArgs} args - Arguments to delete one UserSpeakingProgress.
     * @example
     * // Delete one UserSpeakingProgress
     * const UserSpeakingProgress = await prisma.userSpeakingProgress.delete({
     *   where: {
     *     // ... filter to delete one UserSpeakingProgress
     *   }
     * })
     * 
     */
    delete<T extends UserSpeakingProgressDeleteArgs>(args: SelectSubset<T, UserSpeakingProgressDeleteArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSpeakingProgress.
     * @param {UserSpeakingProgressUpdateArgs} args - Arguments to update one UserSpeakingProgress.
     * @example
     * // Update one UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSpeakingProgressUpdateArgs>(args: SelectSubset<T, UserSpeakingProgressUpdateArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSpeakingProgresses.
     * @param {UserSpeakingProgressDeleteManyArgs} args - Arguments to filter UserSpeakingProgresses to delete.
     * @example
     * // Delete a few UserSpeakingProgresses
     * const { count } = await prisma.userSpeakingProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSpeakingProgressDeleteManyArgs>(args?: SelectSubset<T, UserSpeakingProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSpeakingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSpeakingProgresses
     * const userSpeakingProgress = await prisma.userSpeakingProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSpeakingProgressUpdateManyArgs>(args: SelectSubset<T, UserSpeakingProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSpeakingProgresses and returns the data updated in the database.
     * @param {UserSpeakingProgressUpdateManyAndReturnArgs} args - Arguments to update many UserSpeakingProgresses.
     * @example
     * // Update many UserSpeakingProgresses
     * const userSpeakingProgress = await prisma.userSpeakingProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSpeakingProgresses and only return the `id`
     * const userSpeakingProgressWithIdOnly = await prisma.userSpeakingProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSpeakingProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSpeakingProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSpeakingProgress.
     * @param {UserSpeakingProgressUpsertArgs} args - Arguments to update or create a UserSpeakingProgress.
     * @example
     * // Update or create a UserSpeakingProgress
     * const userSpeakingProgress = await prisma.userSpeakingProgress.upsert({
     *   create: {
     *     // ... data to create a UserSpeakingProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSpeakingProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserSpeakingProgressUpsertArgs>(args: SelectSubset<T, UserSpeakingProgressUpsertArgs<ExtArgs>>): Prisma__UserSpeakingProgressClient<$Result.GetResult<Prisma.$UserSpeakingProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSpeakingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressCountArgs} args - Arguments to filter UserSpeakingProgresses to count.
     * @example
     * // Count the number of UserSpeakingProgresses
     * const count = await prisma.userSpeakingProgress.count({
     *   where: {
     *     // ... the filter for the UserSpeakingProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserSpeakingProgressCountArgs>(
      args?: Subset<T, UserSpeakingProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSpeakingProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSpeakingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSpeakingProgressAggregateArgs>(args: Subset<T, UserSpeakingProgressAggregateArgs>): Prisma.PrismaPromise<GetUserSpeakingProgressAggregateType<T>>

    /**
     * Group by UserSpeakingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpeakingProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSpeakingProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSpeakingProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserSpeakingProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSpeakingProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSpeakingProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSpeakingProgress model
   */
  readonly fields: UserSpeakingProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSpeakingProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSpeakingProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    speaking<T extends SpeakingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeakingDefaultArgs<ExtArgs>>): Prisma__SpeakingClient<$Result.GetResult<Prisma.$SpeakingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSpeakingProgress model
   */
  interface UserSpeakingProgressFieldRefs {
    readonly id: FieldRef<"UserSpeakingProgress", 'Int'>
    readonly userId: FieldRef<"UserSpeakingProgress", 'Int'>
    readonly spkId: FieldRef<"UserSpeakingProgress", 'Int'>
    readonly learnedWords: FieldRef<"UserSpeakingProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserSpeakingProgress findUnique
   */
  export type UserSpeakingProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSpeakingProgress to fetch.
     */
    where: UserSpeakingProgressWhereUniqueInput
  }

  /**
   * UserSpeakingProgress findUniqueOrThrow
   */
  export type UserSpeakingProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSpeakingProgress to fetch.
     */
    where: UserSpeakingProgressWhereUniqueInput
  }

  /**
   * UserSpeakingProgress findFirst
   */
  export type UserSpeakingProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSpeakingProgress to fetch.
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpeakingProgresses to fetch.
     */
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSpeakingProgresses.
     */
    cursor?: UserSpeakingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpeakingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpeakingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSpeakingProgresses.
     */
    distinct?: UserSpeakingProgressScalarFieldEnum | UserSpeakingProgressScalarFieldEnum[]
  }

  /**
   * UserSpeakingProgress findFirstOrThrow
   */
  export type UserSpeakingProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSpeakingProgress to fetch.
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpeakingProgresses to fetch.
     */
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSpeakingProgresses.
     */
    cursor?: UserSpeakingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpeakingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpeakingProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSpeakingProgresses.
     */
    distinct?: UserSpeakingProgressScalarFieldEnum | UserSpeakingProgressScalarFieldEnum[]
  }

  /**
   * UserSpeakingProgress findMany
   */
  export type UserSpeakingProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSpeakingProgresses to fetch.
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpeakingProgresses to fetch.
     */
    orderBy?: UserSpeakingProgressOrderByWithRelationInput | UserSpeakingProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSpeakingProgresses.
     */
    cursor?: UserSpeakingProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpeakingProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpeakingProgresses.
     */
    skip?: number
    distinct?: UserSpeakingProgressScalarFieldEnum | UserSpeakingProgressScalarFieldEnum[]
  }

  /**
   * UserSpeakingProgress create
   */
  export type UserSpeakingProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSpeakingProgress.
     */
    data: XOR<UserSpeakingProgressCreateInput, UserSpeakingProgressUncheckedCreateInput>
  }

  /**
   * UserSpeakingProgress createMany
   */
  export type UserSpeakingProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSpeakingProgresses.
     */
    data: UserSpeakingProgressCreateManyInput | UserSpeakingProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSpeakingProgress createManyAndReturn
   */
  export type UserSpeakingProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserSpeakingProgresses.
     */
    data: UserSpeakingProgressCreateManyInput | UserSpeakingProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSpeakingProgress update
   */
  export type UserSpeakingProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSpeakingProgress.
     */
    data: XOR<UserSpeakingProgressUpdateInput, UserSpeakingProgressUncheckedUpdateInput>
    /**
     * Choose, which UserSpeakingProgress to update.
     */
    where: UserSpeakingProgressWhereUniqueInput
  }

  /**
   * UserSpeakingProgress updateMany
   */
  export type UserSpeakingProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSpeakingProgresses.
     */
    data: XOR<UserSpeakingProgressUpdateManyMutationInput, UserSpeakingProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSpeakingProgresses to update
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * Limit how many UserSpeakingProgresses to update.
     */
    limit?: number
  }

  /**
   * UserSpeakingProgress updateManyAndReturn
   */
  export type UserSpeakingProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserSpeakingProgresses.
     */
    data: XOR<UserSpeakingProgressUpdateManyMutationInput, UserSpeakingProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSpeakingProgresses to update
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * Limit how many UserSpeakingProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSpeakingProgress upsert
   */
  export type UserSpeakingProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSpeakingProgress to update in case it exists.
     */
    where: UserSpeakingProgressWhereUniqueInput
    /**
     * In case the UserSpeakingProgress found by the `where` argument doesn't exist, create a new UserSpeakingProgress with this data.
     */
    create: XOR<UserSpeakingProgressCreateInput, UserSpeakingProgressUncheckedCreateInput>
    /**
     * In case the UserSpeakingProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSpeakingProgressUpdateInput, UserSpeakingProgressUncheckedUpdateInput>
  }

  /**
   * UserSpeakingProgress delete
   */
  export type UserSpeakingProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
    /**
     * Filter which UserSpeakingProgress to delete.
     */
    where: UserSpeakingProgressWhereUniqueInput
  }

  /**
   * UserSpeakingProgress deleteMany
   */
  export type UserSpeakingProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSpeakingProgresses to delete
     */
    where?: UserSpeakingProgressWhereInput
    /**
     * Limit how many UserSpeakingProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserSpeakingProgress without action
   */
  export type UserSpeakingProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpeakingProgress
     */
    select?: UserSpeakingProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpeakingProgress
     */
    omit?: UserSpeakingProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpeakingProgressInclude<ExtArgs> | null
  }


  /**
   * Model DayLearned
   */

  export type AggregateDayLearned = {
    _count: DayLearnedCountAggregateOutputType | null
    _avg: DayLearnedAvgAggregateOutputType | null
    _sum: DayLearnedSumAggregateOutputType | null
    _min: DayLearnedMinAggregateOutputType | null
    _max: DayLearnedMaxAggregateOutputType | null
  }

  export type DayLearnedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DayLearnedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DayLearnedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: string | null
  }

  export type DayLearnedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: string | null
  }

  export type DayLearnedCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    _all: number
  }


  export type DayLearnedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DayLearnedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DayLearnedMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
  }

  export type DayLearnedMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
  }

  export type DayLearnedCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    _all?: true
  }

  export type DayLearnedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayLearned to aggregate.
     */
    where?: DayLearnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayLearneds to fetch.
     */
    orderBy?: DayLearnedOrderByWithRelationInput | DayLearnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayLearnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayLearneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayLearneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayLearneds
    **/
    _count?: true | DayLearnedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayLearnedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayLearnedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayLearnedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayLearnedMaxAggregateInputType
  }

  export type GetDayLearnedAggregateType<T extends DayLearnedAggregateArgs> = {
        [P in keyof T & keyof AggregateDayLearned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayLearned[P]>
      : GetScalarType<T[P], AggregateDayLearned[P]>
  }




  export type DayLearnedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayLearnedWhereInput
    orderBy?: DayLearnedOrderByWithAggregationInput | DayLearnedOrderByWithAggregationInput[]
    by: DayLearnedScalarFieldEnum[] | DayLearnedScalarFieldEnum
    having?: DayLearnedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayLearnedCountAggregateInputType | true
    _avg?: DayLearnedAvgAggregateInputType
    _sum?: DayLearnedSumAggregateInputType
    _min?: DayLearnedMinAggregateInputType
    _max?: DayLearnedMaxAggregateInputType
  }

  export type DayLearnedGroupByOutputType = {
    id: number
    userId: number
    date: string
    _count: DayLearnedCountAggregateOutputType | null
    _avg: DayLearnedAvgAggregateOutputType | null
    _sum: DayLearnedSumAggregateOutputType | null
    _min: DayLearnedMinAggregateOutputType | null
    _max: DayLearnedMaxAggregateOutputType | null
  }

  type GetDayLearnedGroupByPayload<T extends DayLearnedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayLearnedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayLearnedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayLearnedGroupByOutputType[P]>
            : GetScalarType<T[P], DayLearnedGroupByOutputType[P]>
        }
      >
    >


  export type DayLearnedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayLearned"]>

  export type DayLearnedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayLearned"]>

  export type DayLearnedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayLearned"]>

  export type DayLearnedSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
  }

  export type DayLearnedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date", ExtArgs["result"]["dayLearned"]>
  export type DayLearnedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DayLearnedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DayLearnedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DayLearnedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayLearned"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: string
    }, ExtArgs["result"]["dayLearned"]>
    composites: {}
  }

  type DayLearnedGetPayload<S extends boolean | null | undefined | DayLearnedDefaultArgs> = $Result.GetResult<Prisma.$DayLearnedPayload, S>

  type DayLearnedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayLearnedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayLearnedCountAggregateInputType | true
    }

  export interface DayLearnedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayLearned'], meta: { name: 'DayLearned' } }
    /**
     * Find zero or one DayLearned that matches the filter.
     * @param {DayLearnedFindUniqueArgs} args - Arguments to find a DayLearned
     * @example
     * // Get one DayLearned
     * const dayLearned = await prisma.dayLearned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayLearnedFindUniqueArgs>(args: SelectSubset<T, DayLearnedFindUniqueArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayLearned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayLearnedFindUniqueOrThrowArgs} args - Arguments to find a DayLearned
     * @example
     * // Get one DayLearned
     * const dayLearned = await prisma.dayLearned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayLearnedFindUniqueOrThrowArgs>(args: SelectSubset<T, DayLearnedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayLearned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedFindFirstArgs} args - Arguments to find a DayLearned
     * @example
     * // Get one DayLearned
     * const dayLearned = await prisma.dayLearned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayLearnedFindFirstArgs>(args?: SelectSubset<T, DayLearnedFindFirstArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayLearned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedFindFirstOrThrowArgs} args - Arguments to find a DayLearned
     * @example
     * // Get one DayLearned
     * const dayLearned = await prisma.dayLearned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayLearnedFindFirstOrThrowArgs>(args?: SelectSubset<T, DayLearnedFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayLearneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayLearneds
     * const dayLearneds = await prisma.dayLearned.findMany()
     * 
     * // Get first 10 DayLearneds
     * const dayLearneds = await prisma.dayLearned.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayLearnedWithIdOnly = await prisma.dayLearned.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayLearnedFindManyArgs>(args?: SelectSubset<T, DayLearnedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayLearned.
     * @param {DayLearnedCreateArgs} args - Arguments to create a DayLearned.
     * @example
     * // Create one DayLearned
     * const DayLearned = await prisma.dayLearned.create({
     *   data: {
     *     // ... data to create a DayLearned
     *   }
     * })
     * 
     */
    create<T extends DayLearnedCreateArgs>(args: SelectSubset<T, DayLearnedCreateArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayLearneds.
     * @param {DayLearnedCreateManyArgs} args - Arguments to create many DayLearneds.
     * @example
     * // Create many DayLearneds
     * const dayLearned = await prisma.dayLearned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayLearnedCreateManyArgs>(args?: SelectSubset<T, DayLearnedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayLearneds and returns the data saved in the database.
     * @param {DayLearnedCreateManyAndReturnArgs} args - Arguments to create many DayLearneds.
     * @example
     * // Create many DayLearneds
     * const dayLearned = await prisma.dayLearned.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayLearneds and only return the `id`
     * const dayLearnedWithIdOnly = await prisma.dayLearned.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayLearnedCreateManyAndReturnArgs>(args?: SelectSubset<T, DayLearnedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DayLearned.
     * @param {DayLearnedDeleteArgs} args - Arguments to delete one DayLearned.
     * @example
     * // Delete one DayLearned
     * const DayLearned = await prisma.dayLearned.delete({
     *   where: {
     *     // ... filter to delete one DayLearned
     *   }
     * })
     * 
     */
    delete<T extends DayLearnedDeleteArgs>(args: SelectSubset<T, DayLearnedDeleteArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayLearned.
     * @param {DayLearnedUpdateArgs} args - Arguments to update one DayLearned.
     * @example
     * // Update one DayLearned
     * const dayLearned = await prisma.dayLearned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayLearnedUpdateArgs>(args: SelectSubset<T, DayLearnedUpdateArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayLearneds.
     * @param {DayLearnedDeleteManyArgs} args - Arguments to filter DayLearneds to delete.
     * @example
     * // Delete a few DayLearneds
     * const { count } = await prisma.dayLearned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayLearnedDeleteManyArgs>(args?: SelectSubset<T, DayLearnedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayLearneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayLearneds
     * const dayLearned = await prisma.dayLearned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayLearnedUpdateManyArgs>(args: SelectSubset<T, DayLearnedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayLearneds and returns the data updated in the database.
     * @param {DayLearnedUpdateManyAndReturnArgs} args - Arguments to update many DayLearneds.
     * @example
     * // Update many DayLearneds
     * const dayLearned = await prisma.dayLearned.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DayLearneds and only return the `id`
     * const dayLearnedWithIdOnly = await prisma.dayLearned.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DayLearnedUpdateManyAndReturnArgs>(args: SelectSubset<T, DayLearnedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DayLearned.
     * @param {DayLearnedUpsertArgs} args - Arguments to update or create a DayLearned.
     * @example
     * // Update or create a DayLearned
     * const dayLearned = await prisma.dayLearned.upsert({
     *   create: {
     *     // ... data to create a DayLearned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayLearned we want to update
     *   }
     * })
     */
    upsert<T extends DayLearnedUpsertArgs>(args: SelectSubset<T, DayLearnedUpsertArgs<ExtArgs>>): Prisma__DayLearnedClient<$Result.GetResult<Prisma.$DayLearnedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayLearneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedCountArgs} args - Arguments to filter DayLearneds to count.
     * @example
     * // Count the number of DayLearneds
     * const count = await prisma.dayLearned.count({
     *   where: {
     *     // ... the filter for the DayLearneds we want to count
     *   }
     * })
    **/
    count<T extends DayLearnedCountArgs>(
      args?: Subset<T, DayLearnedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayLearnedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayLearned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayLearnedAggregateArgs>(args: Subset<T, DayLearnedAggregateArgs>): Prisma.PrismaPromise<GetDayLearnedAggregateType<T>>

    /**
     * Group by DayLearned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayLearnedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayLearnedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayLearnedGroupByArgs['orderBy'] }
        : { orderBy?: DayLearnedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayLearnedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayLearnedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayLearned model
   */
  readonly fields: DayLearnedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayLearned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayLearnedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayLearned model
   */
  interface DayLearnedFieldRefs {
    readonly id: FieldRef<"DayLearned", 'Int'>
    readonly userId: FieldRef<"DayLearned", 'Int'>
    readonly date: FieldRef<"DayLearned", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DayLearned findUnique
   */
  export type DayLearnedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter, which DayLearned to fetch.
     */
    where: DayLearnedWhereUniqueInput
  }

  /**
   * DayLearned findUniqueOrThrow
   */
  export type DayLearnedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter, which DayLearned to fetch.
     */
    where: DayLearnedWhereUniqueInput
  }

  /**
   * DayLearned findFirst
   */
  export type DayLearnedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter, which DayLearned to fetch.
     */
    where?: DayLearnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayLearneds to fetch.
     */
    orderBy?: DayLearnedOrderByWithRelationInput | DayLearnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayLearneds.
     */
    cursor?: DayLearnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayLearneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayLearneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayLearneds.
     */
    distinct?: DayLearnedScalarFieldEnum | DayLearnedScalarFieldEnum[]
  }

  /**
   * DayLearned findFirstOrThrow
   */
  export type DayLearnedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter, which DayLearned to fetch.
     */
    where?: DayLearnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayLearneds to fetch.
     */
    orderBy?: DayLearnedOrderByWithRelationInput | DayLearnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayLearneds.
     */
    cursor?: DayLearnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayLearneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayLearneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayLearneds.
     */
    distinct?: DayLearnedScalarFieldEnum | DayLearnedScalarFieldEnum[]
  }

  /**
   * DayLearned findMany
   */
  export type DayLearnedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter, which DayLearneds to fetch.
     */
    where?: DayLearnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayLearneds to fetch.
     */
    orderBy?: DayLearnedOrderByWithRelationInput | DayLearnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayLearneds.
     */
    cursor?: DayLearnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayLearneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayLearneds.
     */
    skip?: number
    distinct?: DayLearnedScalarFieldEnum | DayLearnedScalarFieldEnum[]
  }

  /**
   * DayLearned create
   */
  export type DayLearnedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * The data needed to create a DayLearned.
     */
    data: XOR<DayLearnedCreateInput, DayLearnedUncheckedCreateInput>
  }

  /**
   * DayLearned createMany
   */
  export type DayLearnedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayLearneds.
     */
    data: DayLearnedCreateManyInput | DayLearnedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayLearned createManyAndReturn
   */
  export type DayLearnedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * The data used to create many DayLearneds.
     */
    data: DayLearnedCreateManyInput | DayLearnedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayLearned update
   */
  export type DayLearnedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * The data needed to update a DayLearned.
     */
    data: XOR<DayLearnedUpdateInput, DayLearnedUncheckedUpdateInput>
    /**
     * Choose, which DayLearned to update.
     */
    where: DayLearnedWhereUniqueInput
  }

  /**
   * DayLearned updateMany
   */
  export type DayLearnedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayLearneds.
     */
    data: XOR<DayLearnedUpdateManyMutationInput, DayLearnedUncheckedUpdateManyInput>
    /**
     * Filter which DayLearneds to update
     */
    where?: DayLearnedWhereInput
    /**
     * Limit how many DayLearneds to update.
     */
    limit?: number
  }

  /**
   * DayLearned updateManyAndReturn
   */
  export type DayLearnedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * The data used to update DayLearneds.
     */
    data: XOR<DayLearnedUpdateManyMutationInput, DayLearnedUncheckedUpdateManyInput>
    /**
     * Filter which DayLearneds to update
     */
    where?: DayLearnedWhereInput
    /**
     * Limit how many DayLearneds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayLearned upsert
   */
  export type DayLearnedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * The filter to search for the DayLearned to update in case it exists.
     */
    where: DayLearnedWhereUniqueInput
    /**
     * In case the DayLearned found by the `where` argument doesn't exist, create a new DayLearned with this data.
     */
    create: XOR<DayLearnedCreateInput, DayLearnedUncheckedCreateInput>
    /**
     * In case the DayLearned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayLearnedUpdateInput, DayLearnedUncheckedUpdateInput>
  }

  /**
   * DayLearned delete
   */
  export type DayLearnedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
    /**
     * Filter which DayLearned to delete.
     */
    where: DayLearnedWhereUniqueInput
  }

  /**
   * DayLearned deleteMany
   */
  export type DayLearnedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayLearneds to delete
     */
    where?: DayLearnedWhereInput
    /**
     * Limit how many DayLearneds to delete.
     */
    limit?: number
  }

  /**
   * DayLearned without action
   */
  export type DayLearnedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayLearned
     */
    select?: DayLearnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayLearned
     */
    omit?: DayLearnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayLearnedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent_id: 'parent_id',
    titleVN: 'titleVN',
    image: 'image'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    pos: 'pos',
    phonetic: 'phonetic',
    phonetic_text: 'phonetic_text',
    phonetic_am: 'phonetic_am',
    phonetic_am_text: 'phonetic_am_text',
    topic_id: 'topic_id'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const SenseScalarFieldEnum: {
    id: 'id',
    word_id: 'word_id',
    definition: 'definition'
  };

  export type SenseScalarFieldEnum = (typeof SenseScalarFieldEnum)[keyof typeof SenseScalarFieldEnum]


  export const ExampleScalarFieldEnum: {
    id: 'id',
    sense_id: 'sense_id',
    example_text: 'example_text',
    cf: 'cf'
  };

  export type ExampleScalarFieldEnum = (typeof ExampleScalarFieldEnum)[keyof typeof ExampleScalarFieldEnum]


  export const GrammarTopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type GrammarTopicScalarFieldEnum = (typeof GrammarTopicScalarFieldEnum)[keyof typeof GrammarTopicScalarFieldEnum]


  export const GrammarLessonScalarFieldEnum: {
    id: 'id',
    topic_id: 'topic_id',
    title: 'title',
    sub_title: 'sub_title',
    path: 'path',
    image: 'image'
  };

  export type GrammarLessonScalarFieldEnum = (typeof GrammarLessonScalarFieldEnum)[keyof typeof GrammarLessonScalarFieldEnum]


  export const UserTopicProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    status: 'status',
    learnedWords: 'learnedWords',
    lastAccessedAt: 'lastAccessedAt',
    completedAt: 'completedAt'
  };

  export type UserTopicProgressScalarFieldEnum = (typeof UserTopicProgressScalarFieldEnum)[keyof typeof UserTopicProgressScalarFieldEnum]


  export const UserGrammarLessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    grammarLessonId: 'grammarLessonId',
    status: 'status',
    lastAccessedAt: 'lastAccessedAt',
    completedAt: 'completedAt'
  };

  export type UserGrammarLessonProgressScalarFieldEnum = (typeof UserGrammarLessonProgressScalarFieldEnum)[keyof typeof UserGrammarLessonProgressScalarFieldEnum]


  export const SpeakingScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type SpeakingScalarFieldEnum = (typeof SpeakingScalarFieldEnum)[keyof typeof SpeakingScalarFieldEnum]


  export const UserSpeakingProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    spkId: 'spkId',
    learnedWords: 'learnedWords'
  };

  export type UserSpeakingProgressScalarFieldEnum = (typeof UserSpeakingProgressScalarFieldEnum)[keyof typeof UserSpeakingProgressScalarFieldEnum]


  export const DayLearnedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date'
  };

  export type DayLearnedScalarFieldEnum = (typeof DayLearnedScalarFieldEnum)[keyof typeof DayLearnedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    topicProgress?: UserTopicProgressListRelationFilter
    grammarLessonProgress?: UserGrammarLessonProgressListRelationFilter
    userSpeakingProgress?: UserSpeakingProgressListRelationFilter
    dayLearned?: DayLearnedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    topicProgress?: UserTopicProgressOrderByRelationAggregateInput
    grammarLessonProgress?: UserGrammarLessonProgressOrderByRelationAggregateInput
    userSpeakingProgress?: UserSpeakingProgressOrderByRelationAggregateInput
    dayLearned?: DayLearnedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    topicProgress?: UserTopicProgressListRelationFilter
    grammarLessonProgress?: UserGrammarLessonProgressListRelationFilter
    userSpeakingProgress?: UserSpeakingProgressListRelationFilter
    dayLearned?: DayLearnedListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    parent_id?: IntNullableFilter<"Topic"> | number | null
    titleVN?: StringNullableFilter<"Topic"> | string | null
    image?: StringNullableFilter<"Topic"> | string | null
    parent?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    children?: TopicListRelationFilter
    words?: WordListRelationFilter
    userProgress?: UserTopicProgressListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    titleVN?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    parent?: TopicOrderByWithRelationInput
    children?: TopicOrderByRelationAggregateInput
    words?: WordOrderByRelationAggregateInput
    userProgress?: UserTopicProgressOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_parent_id?: TopicNameParent_idCompoundUniqueInput
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    parent_id?: IntNullableFilter<"Topic"> | number | null
    titleVN?: StringNullableFilter<"Topic"> | string | null
    image?: StringNullableFilter<"Topic"> | string | null
    parent?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    children?: TopicListRelationFilter
    words?: WordListRelationFilter
    userProgress?: UserTopicProgressListRelationFilter
  }, "id" | "name_parent_id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    titleVN?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topic"> | number
    name?: StringWithAggregatesFilter<"Topic"> | string
    parent_id?: IntNullableWithAggregatesFilter<"Topic"> | number | null
    titleVN?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    image?: StringNullableWithAggregatesFilter<"Topic"> | string | null
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: IntFilter<"Word"> | number
    word?: StringFilter<"Word"> | string
    pos?: StringNullableFilter<"Word"> | string | null
    phonetic?: StringNullableFilter<"Word"> | string | null
    phonetic_text?: StringNullableFilter<"Word"> | string | null
    phonetic_am?: StringNullableFilter<"Word"> | string | null
    phonetic_am_text?: StringNullableFilter<"Word"> | string | null
    topic_id?: IntNullableFilter<"Word"> | number | null
    topic?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    senses?: SenseListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    pos?: SortOrderInput | SortOrder
    phonetic?: SortOrderInput | SortOrder
    phonetic_text?: SortOrderInput | SortOrder
    phonetic_am?: SortOrderInput | SortOrder
    phonetic_am_text?: SortOrderInput | SortOrder
    topic_id?: SortOrderInput | SortOrder
    topic?: TopicOrderByWithRelationInput
    senses?: SenseOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    word?: StringFilter<"Word"> | string
    pos?: StringNullableFilter<"Word"> | string | null
    phonetic?: StringNullableFilter<"Word"> | string | null
    phonetic_text?: StringNullableFilter<"Word"> | string | null
    phonetic_am?: StringNullableFilter<"Word"> | string | null
    phonetic_am_text?: StringNullableFilter<"Word"> | string | null
    topic_id?: IntNullableFilter<"Word"> | number | null
    topic?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    senses?: SenseListRelationFilter
  }, "id">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    pos?: SortOrderInput | SortOrder
    phonetic?: SortOrderInput | SortOrder
    phonetic_text?: SortOrderInput | SortOrder
    phonetic_am?: SortOrderInput | SortOrder
    phonetic_am_text?: SortOrderInput | SortOrder
    topic_id?: SortOrderInput | SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Word"> | number
    word?: StringWithAggregatesFilter<"Word"> | string
    pos?: StringNullableWithAggregatesFilter<"Word"> | string | null
    phonetic?: StringNullableWithAggregatesFilter<"Word"> | string | null
    phonetic_text?: StringNullableWithAggregatesFilter<"Word"> | string | null
    phonetic_am?: StringNullableWithAggregatesFilter<"Word"> | string | null
    phonetic_am_text?: StringNullableWithAggregatesFilter<"Word"> | string | null
    topic_id?: IntNullableWithAggregatesFilter<"Word"> | number | null
  }

  export type SenseWhereInput = {
    AND?: SenseWhereInput | SenseWhereInput[]
    OR?: SenseWhereInput[]
    NOT?: SenseWhereInput | SenseWhereInput[]
    id?: IntFilter<"Sense"> | number
    word_id?: IntFilter<"Sense"> | number
    definition?: StringFilter<"Sense"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    examples?: ExampleListRelationFilter
  }

  export type SenseOrderByWithRelationInput = {
    id?: SortOrder
    word_id?: SortOrder
    definition?: SortOrder
    word?: WordOrderByWithRelationInput
    examples?: ExampleOrderByRelationAggregateInput
  }

  export type SenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SenseWhereInput | SenseWhereInput[]
    OR?: SenseWhereInput[]
    NOT?: SenseWhereInput | SenseWhereInput[]
    word_id?: IntFilter<"Sense"> | number
    definition?: StringFilter<"Sense"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    examples?: ExampleListRelationFilter
  }, "id">

  export type SenseOrderByWithAggregationInput = {
    id?: SortOrder
    word_id?: SortOrder
    definition?: SortOrder
    _count?: SenseCountOrderByAggregateInput
    _avg?: SenseAvgOrderByAggregateInput
    _max?: SenseMaxOrderByAggregateInput
    _min?: SenseMinOrderByAggregateInput
    _sum?: SenseSumOrderByAggregateInput
  }

  export type SenseScalarWhereWithAggregatesInput = {
    AND?: SenseScalarWhereWithAggregatesInput | SenseScalarWhereWithAggregatesInput[]
    OR?: SenseScalarWhereWithAggregatesInput[]
    NOT?: SenseScalarWhereWithAggregatesInput | SenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sense"> | number
    word_id?: IntWithAggregatesFilter<"Sense"> | number
    definition?: StringWithAggregatesFilter<"Sense"> | string
  }

  export type ExampleWhereInput = {
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    id?: IntFilter<"Example"> | number
    sense_id?: IntFilter<"Example"> | number
    example_text?: StringFilter<"Example"> | string
    cf?: StringNullableFilter<"Example"> | string | null
    sense?: XOR<SenseScalarRelationFilter, SenseWhereInput>
  }

  export type ExampleOrderByWithRelationInput = {
    id?: SortOrder
    sense_id?: SortOrder
    example_text?: SortOrder
    cf?: SortOrderInput | SortOrder
    sense?: SenseOrderByWithRelationInput
  }

  export type ExampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    sense_id?: IntFilter<"Example"> | number
    example_text?: StringFilter<"Example"> | string
    cf?: StringNullableFilter<"Example"> | string | null
    sense?: XOR<SenseScalarRelationFilter, SenseWhereInput>
  }, "id">

  export type ExampleOrderByWithAggregationInput = {
    id?: SortOrder
    sense_id?: SortOrder
    example_text?: SortOrder
    cf?: SortOrderInput | SortOrder
    _count?: ExampleCountOrderByAggregateInput
    _avg?: ExampleAvgOrderByAggregateInput
    _max?: ExampleMaxOrderByAggregateInput
    _min?: ExampleMinOrderByAggregateInput
    _sum?: ExampleSumOrderByAggregateInput
  }

  export type ExampleScalarWhereWithAggregatesInput = {
    AND?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    OR?: ExampleScalarWhereWithAggregatesInput[]
    NOT?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Example"> | number
    sense_id?: IntWithAggregatesFilter<"Example"> | number
    example_text?: StringWithAggregatesFilter<"Example"> | string
    cf?: StringNullableWithAggregatesFilter<"Example"> | string | null
  }

  export type GrammarTopicWhereInput = {
    AND?: GrammarTopicWhereInput | GrammarTopicWhereInput[]
    OR?: GrammarTopicWhereInput[]
    NOT?: GrammarTopicWhereInput | GrammarTopicWhereInput[]
    id?: IntFilter<"GrammarTopic"> | number
    title?: StringFilter<"GrammarTopic"> | string
    description?: StringNullableFilter<"GrammarTopic"> | string | null
    image?: StringNullableFilter<"GrammarTopic"> | string | null
    lessons?: GrammarLessonListRelationFilter
  }

  export type GrammarTopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    lessons?: GrammarLessonOrderByRelationAggregateInput
  }

  export type GrammarTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarTopicWhereInput | GrammarTopicWhereInput[]
    OR?: GrammarTopicWhereInput[]
    NOT?: GrammarTopicWhereInput | GrammarTopicWhereInput[]
    title?: StringFilter<"GrammarTopic"> | string
    description?: StringNullableFilter<"GrammarTopic"> | string | null
    image?: StringNullableFilter<"GrammarTopic"> | string | null
    lessons?: GrammarLessonListRelationFilter
  }, "id">

  export type GrammarTopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: GrammarTopicCountOrderByAggregateInput
    _avg?: GrammarTopicAvgOrderByAggregateInput
    _max?: GrammarTopicMaxOrderByAggregateInput
    _min?: GrammarTopicMinOrderByAggregateInput
    _sum?: GrammarTopicSumOrderByAggregateInput
  }

  export type GrammarTopicScalarWhereWithAggregatesInput = {
    AND?: GrammarTopicScalarWhereWithAggregatesInput | GrammarTopicScalarWhereWithAggregatesInput[]
    OR?: GrammarTopicScalarWhereWithAggregatesInput[]
    NOT?: GrammarTopicScalarWhereWithAggregatesInput | GrammarTopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarTopic"> | number
    title?: StringWithAggregatesFilter<"GrammarTopic"> | string
    description?: StringNullableWithAggregatesFilter<"GrammarTopic"> | string | null
    image?: StringNullableWithAggregatesFilter<"GrammarTopic"> | string | null
  }

  export type GrammarLessonWhereInput = {
    AND?: GrammarLessonWhereInput | GrammarLessonWhereInput[]
    OR?: GrammarLessonWhereInput[]
    NOT?: GrammarLessonWhereInput | GrammarLessonWhereInput[]
    id?: IntFilter<"GrammarLesson"> | number
    topic_id?: IntFilter<"GrammarLesson"> | number
    title?: StringFilter<"GrammarLesson"> | string
    sub_title?: StringNullableFilter<"GrammarLesson"> | string | null
    path?: StringFilter<"GrammarLesson"> | string
    image?: StringNullableFilter<"GrammarLesson"> | string | null
    topic?: XOR<GrammarTopicScalarRelationFilter, GrammarTopicWhereInput>
    userProgress?: UserGrammarLessonProgressListRelationFilter
  }

  export type GrammarLessonOrderByWithRelationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrderInput | SortOrder
    path?: SortOrder
    image?: SortOrderInput | SortOrder
    topic?: GrammarTopicOrderByWithRelationInput
    userProgress?: UserGrammarLessonProgressOrderByRelationAggregateInput
  }

  export type GrammarLessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    path?: string
    AND?: GrammarLessonWhereInput | GrammarLessonWhereInput[]
    OR?: GrammarLessonWhereInput[]
    NOT?: GrammarLessonWhereInput | GrammarLessonWhereInput[]
    topic_id?: IntFilter<"GrammarLesson"> | number
    title?: StringFilter<"GrammarLesson"> | string
    sub_title?: StringNullableFilter<"GrammarLesson"> | string | null
    image?: StringNullableFilter<"GrammarLesson"> | string | null
    topic?: XOR<GrammarTopicScalarRelationFilter, GrammarTopicWhereInput>
    userProgress?: UserGrammarLessonProgressListRelationFilter
  }, "id" | "path">

  export type GrammarLessonOrderByWithAggregationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrderInput | SortOrder
    path?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: GrammarLessonCountOrderByAggregateInput
    _avg?: GrammarLessonAvgOrderByAggregateInput
    _max?: GrammarLessonMaxOrderByAggregateInput
    _min?: GrammarLessonMinOrderByAggregateInput
    _sum?: GrammarLessonSumOrderByAggregateInput
  }

  export type GrammarLessonScalarWhereWithAggregatesInput = {
    AND?: GrammarLessonScalarWhereWithAggregatesInput | GrammarLessonScalarWhereWithAggregatesInput[]
    OR?: GrammarLessonScalarWhereWithAggregatesInput[]
    NOT?: GrammarLessonScalarWhereWithAggregatesInput | GrammarLessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarLesson"> | number
    topic_id?: IntWithAggregatesFilter<"GrammarLesson"> | number
    title?: StringWithAggregatesFilter<"GrammarLesson"> | string
    sub_title?: StringNullableWithAggregatesFilter<"GrammarLesson"> | string | null
    path?: StringWithAggregatesFilter<"GrammarLesson"> | string
    image?: StringNullableWithAggregatesFilter<"GrammarLesson"> | string | null
  }

  export type UserTopicProgressWhereInput = {
    AND?: UserTopicProgressWhereInput | UserTopicProgressWhereInput[]
    OR?: UserTopicProgressWhereInput[]
    NOT?: UserTopicProgressWhereInput | UserTopicProgressWhereInput[]
    id?: IntFilter<"UserTopicProgress"> | number
    userId?: IntFilter<"UserTopicProgress"> | number
    topicId?: IntFilter<"UserTopicProgress"> | number
    status?: EnumProgressStatusFilter<"UserTopicProgress"> | $Enums.ProgressStatus
    learnedWords?: IntFilter<"UserTopicProgress"> | number
    lastAccessedAt?: DateTimeFilter<"UserTopicProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserTopicProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type UserTopicProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    status?: SortOrder
    learnedWords?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type UserTopicProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_topicId?: UserTopicProgressUserIdTopicIdCompoundUniqueInput
    AND?: UserTopicProgressWhereInput | UserTopicProgressWhereInput[]
    OR?: UserTopicProgressWhereInput[]
    NOT?: UserTopicProgressWhereInput | UserTopicProgressWhereInput[]
    userId?: IntFilter<"UserTopicProgress"> | number
    topicId?: IntFilter<"UserTopicProgress"> | number
    status?: EnumProgressStatusFilter<"UserTopicProgress"> | $Enums.ProgressStatus
    learnedWords?: IntFilter<"UserTopicProgress"> | number
    lastAccessedAt?: DateTimeFilter<"UserTopicProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserTopicProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id" | "userId_topicId">

  export type UserTopicProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    status?: SortOrder
    learnedWords?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: UserTopicProgressCountOrderByAggregateInput
    _avg?: UserTopicProgressAvgOrderByAggregateInput
    _max?: UserTopicProgressMaxOrderByAggregateInput
    _min?: UserTopicProgressMinOrderByAggregateInput
    _sum?: UserTopicProgressSumOrderByAggregateInput
  }

  export type UserTopicProgressScalarWhereWithAggregatesInput = {
    AND?: UserTopicProgressScalarWhereWithAggregatesInput | UserTopicProgressScalarWhereWithAggregatesInput[]
    OR?: UserTopicProgressScalarWhereWithAggregatesInput[]
    NOT?: UserTopicProgressScalarWhereWithAggregatesInput | UserTopicProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTopicProgress"> | number
    userId?: IntWithAggregatesFilter<"UserTopicProgress"> | number
    topicId?: IntWithAggregatesFilter<"UserTopicProgress"> | number
    status?: EnumProgressStatusWithAggregatesFilter<"UserTopicProgress"> | $Enums.ProgressStatus
    learnedWords?: IntWithAggregatesFilter<"UserTopicProgress"> | number
    lastAccessedAt?: DateTimeWithAggregatesFilter<"UserTopicProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserTopicProgress"> | Date | string | null
  }

  export type UserGrammarLessonProgressWhereInput = {
    AND?: UserGrammarLessonProgressWhereInput | UserGrammarLessonProgressWhereInput[]
    OR?: UserGrammarLessonProgressWhereInput[]
    NOT?: UserGrammarLessonProgressWhereInput | UserGrammarLessonProgressWhereInput[]
    id?: IntFilter<"UserGrammarLessonProgress"> | number
    userId?: IntFilter<"UserGrammarLessonProgress"> | number
    grammarLessonId?: IntFilter<"UserGrammarLessonProgress"> | number
    status?: EnumProgressStatusFilter<"UserGrammarLessonProgress"> | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFilter<"UserGrammarLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserGrammarLessonProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    grammarLesson?: XOR<GrammarLessonScalarRelationFilter, GrammarLessonWhereInput>
  }

  export type UserGrammarLessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
    status?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    grammarLesson?: GrammarLessonOrderByWithRelationInput
  }

  export type UserGrammarLessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_grammarLessonId?: UserGrammarLessonProgressUserIdGrammarLessonIdCompoundUniqueInput
    AND?: UserGrammarLessonProgressWhereInput | UserGrammarLessonProgressWhereInput[]
    OR?: UserGrammarLessonProgressWhereInput[]
    NOT?: UserGrammarLessonProgressWhereInput | UserGrammarLessonProgressWhereInput[]
    userId?: IntFilter<"UserGrammarLessonProgress"> | number
    grammarLessonId?: IntFilter<"UserGrammarLessonProgress"> | number
    status?: EnumProgressStatusFilter<"UserGrammarLessonProgress"> | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFilter<"UserGrammarLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserGrammarLessonProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    grammarLesson?: XOR<GrammarLessonScalarRelationFilter, GrammarLessonWhereInput>
  }, "id" | "userId_grammarLessonId">

  export type UserGrammarLessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
    status?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: UserGrammarLessonProgressCountOrderByAggregateInput
    _avg?: UserGrammarLessonProgressAvgOrderByAggregateInput
    _max?: UserGrammarLessonProgressMaxOrderByAggregateInput
    _min?: UserGrammarLessonProgressMinOrderByAggregateInput
    _sum?: UserGrammarLessonProgressSumOrderByAggregateInput
  }

  export type UserGrammarLessonProgressScalarWhereWithAggregatesInput = {
    AND?: UserGrammarLessonProgressScalarWhereWithAggregatesInput | UserGrammarLessonProgressScalarWhereWithAggregatesInput[]
    OR?: UserGrammarLessonProgressScalarWhereWithAggregatesInput[]
    NOT?: UserGrammarLessonProgressScalarWhereWithAggregatesInput | UserGrammarLessonProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGrammarLessonProgress"> | number
    userId?: IntWithAggregatesFilter<"UserGrammarLessonProgress"> | number
    grammarLessonId?: IntWithAggregatesFilter<"UserGrammarLessonProgress"> | number
    status?: EnumProgressStatusWithAggregatesFilter<"UserGrammarLessonProgress"> | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeWithAggregatesFilter<"UserGrammarLessonProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserGrammarLessonProgress"> | Date | string | null
  }

  export type SpeakingWhereInput = {
    AND?: SpeakingWhereInput | SpeakingWhereInput[]
    OR?: SpeakingWhereInput[]
    NOT?: SpeakingWhereInput | SpeakingWhereInput[]
    id?: IntFilter<"Speaking"> | number
    title?: StringFilter<"Speaking"> | string
    userProgress?: UserSpeakingProgressListRelationFilter
  }

  export type SpeakingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userProgress?: UserSpeakingProgressOrderByRelationAggregateInput
  }

  export type SpeakingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpeakingWhereInput | SpeakingWhereInput[]
    OR?: SpeakingWhereInput[]
    NOT?: SpeakingWhereInput | SpeakingWhereInput[]
    title?: StringFilter<"Speaking"> | string
    userProgress?: UserSpeakingProgressListRelationFilter
  }, "id">

  export type SpeakingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: SpeakingCountOrderByAggregateInput
    _avg?: SpeakingAvgOrderByAggregateInput
    _max?: SpeakingMaxOrderByAggregateInput
    _min?: SpeakingMinOrderByAggregateInput
    _sum?: SpeakingSumOrderByAggregateInput
  }

  export type SpeakingScalarWhereWithAggregatesInput = {
    AND?: SpeakingScalarWhereWithAggregatesInput | SpeakingScalarWhereWithAggregatesInput[]
    OR?: SpeakingScalarWhereWithAggregatesInput[]
    NOT?: SpeakingScalarWhereWithAggregatesInput | SpeakingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Speaking"> | number
    title?: StringWithAggregatesFilter<"Speaking"> | string
  }

  export type UserSpeakingProgressWhereInput = {
    AND?: UserSpeakingProgressWhereInput | UserSpeakingProgressWhereInput[]
    OR?: UserSpeakingProgressWhereInput[]
    NOT?: UserSpeakingProgressWhereInput | UserSpeakingProgressWhereInput[]
    id?: IntFilter<"UserSpeakingProgress"> | number
    userId?: IntFilter<"UserSpeakingProgress"> | number
    spkId?: IntFilter<"UserSpeakingProgress"> | number
    learnedWords?: IntFilter<"UserSpeakingProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    speaking?: XOR<SpeakingScalarRelationFilter, SpeakingWhereInput>
  }

  export type UserSpeakingProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
    user?: UserOrderByWithRelationInput
    speaking?: SpeakingOrderByWithRelationInput
  }

  export type UserSpeakingProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_spkId?: UserSpeakingProgressUserIdSpkIdCompoundUniqueInput
    AND?: UserSpeakingProgressWhereInput | UserSpeakingProgressWhereInput[]
    OR?: UserSpeakingProgressWhereInput[]
    NOT?: UserSpeakingProgressWhereInput | UserSpeakingProgressWhereInput[]
    userId?: IntFilter<"UserSpeakingProgress"> | number
    spkId?: IntFilter<"UserSpeakingProgress"> | number
    learnedWords?: IntFilter<"UserSpeakingProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    speaking?: XOR<SpeakingScalarRelationFilter, SpeakingWhereInput>
  }, "id" | "userId_spkId">

  export type UserSpeakingProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
    _count?: UserSpeakingProgressCountOrderByAggregateInput
    _avg?: UserSpeakingProgressAvgOrderByAggregateInput
    _max?: UserSpeakingProgressMaxOrderByAggregateInput
    _min?: UserSpeakingProgressMinOrderByAggregateInput
    _sum?: UserSpeakingProgressSumOrderByAggregateInput
  }

  export type UserSpeakingProgressScalarWhereWithAggregatesInput = {
    AND?: UserSpeakingProgressScalarWhereWithAggregatesInput | UserSpeakingProgressScalarWhereWithAggregatesInput[]
    OR?: UserSpeakingProgressScalarWhereWithAggregatesInput[]
    NOT?: UserSpeakingProgressScalarWhereWithAggregatesInput | UserSpeakingProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSpeakingProgress"> | number
    userId?: IntWithAggregatesFilter<"UserSpeakingProgress"> | number
    spkId?: IntWithAggregatesFilter<"UserSpeakingProgress"> | number
    learnedWords?: IntWithAggregatesFilter<"UserSpeakingProgress"> | number
  }

  export type DayLearnedWhereInput = {
    AND?: DayLearnedWhereInput | DayLearnedWhereInput[]
    OR?: DayLearnedWhereInput[]
    NOT?: DayLearnedWhereInput | DayLearnedWhereInput[]
    id?: IntFilter<"DayLearned"> | number
    userId?: IntFilter<"DayLearned"> | number
    date?: StringFilter<"DayLearned"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DayLearnedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DayLearnedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: DayLearnedUserIdDateCompoundUniqueInput
    AND?: DayLearnedWhereInput | DayLearnedWhereInput[]
    OR?: DayLearnedWhereInput[]
    NOT?: DayLearnedWhereInput | DayLearnedWhereInput[]
    userId?: IntFilter<"DayLearned"> | number
    date?: StringFilter<"DayLearned"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DayLearnedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    _count?: DayLearnedCountOrderByAggregateInput
    _avg?: DayLearnedAvgOrderByAggregateInput
    _max?: DayLearnedMaxOrderByAggregateInput
    _min?: DayLearnedMinOrderByAggregateInput
    _sum?: DayLearnedSumOrderByAggregateInput
  }

  export type DayLearnedScalarWhereWithAggregatesInput = {
    AND?: DayLearnedScalarWhereWithAggregatesInput | DayLearnedScalarWhereWithAggregatesInput[]
    OR?: DayLearnedScalarWhereWithAggregatesInput[]
    NOT?: DayLearnedScalarWhereWithAggregatesInput | DayLearnedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DayLearned"> | number
    userId?: IntWithAggregatesFilter<"DayLearned"> | number
    date?: StringWithAggregatesFilter<"DayLearned"> | string
  }

  export type UserCreateInput = {
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUncheckedUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    name: string
    titleVN?: string | null
    image?: string | null
    parent?: TopicCreateNestedOneWithoutChildrenInput
    children?: TopicCreateNestedManyWithoutParentInput
    words?: WordCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: number
    name: string
    parent_id?: number | null
    titleVN?: string | null
    image?: string | null
    children?: TopicUncheckedCreateNestedManyWithoutParentInput
    words?: WordUncheckedCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TopicUpdateOneWithoutChildrenNestedInput
    children?: TopicUpdateManyWithoutParentNestedInput
    words?: WordUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TopicUncheckedUpdateManyWithoutParentNestedInput
    words?: WordUncheckedUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: number
    name: string
    parent_id?: number | null
    titleVN?: string | null
    image?: string | null
  }

  export type TopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordCreateInput = {
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    topic?: TopicCreateNestedOneWithoutWordsInput
    senses?: SenseCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    topic_id?: number | null
    senses?: SenseUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: TopicUpdateOneWithoutWordsNestedInput
    senses?: SenseUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    topic_id?: NullableIntFieldUpdateOperationsInput | number | null
    senses?: SenseUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: number
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    topic_id?: number | null
  }

  export type WordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    topic_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SenseCreateInput = {
    definition: string
    word: WordCreateNestedOneWithoutSensesInput
    examples?: ExampleCreateNestedManyWithoutSenseInput
  }

  export type SenseUncheckedCreateInput = {
    id?: number
    word_id: number
    definition: string
    examples?: ExampleUncheckedCreateNestedManyWithoutSenseInput
  }

  export type SenseUpdateInput = {
    definition?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutSensesNestedInput
    examples?: ExampleUpdateManyWithoutSenseNestedInput
  }

  export type SenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word_id?: IntFieldUpdateOperationsInput | number
    definition?: StringFieldUpdateOperationsInput | string
    examples?: ExampleUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type SenseCreateManyInput = {
    id?: number
    word_id: number
    definition: string
  }

  export type SenseUpdateManyMutationInput = {
    definition?: StringFieldUpdateOperationsInput | string
  }

  export type SenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word_id?: IntFieldUpdateOperationsInput | number
    definition?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleCreateInput = {
    example_text: string
    cf?: string | null
    sense: SenseCreateNestedOneWithoutExamplesInput
  }

  export type ExampleUncheckedCreateInput = {
    id?: number
    sense_id: number
    example_text: string
    cf?: string | null
  }

  export type ExampleUpdateInput = {
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
    sense?: SenseUpdateOneRequiredWithoutExamplesNestedInput
  }

  export type ExampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sense_id?: IntFieldUpdateOperationsInput | number
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleCreateManyInput = {
    id?: number
    sense_id: number
    example_text: string
    cf?: string | null
  }

  export type ExampleUpdateManyMutationInput = {
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sense_id?: IntFieldUpdateOperationsInput | number
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarTopicCreateInput = {
    title: string
    description?: string | null
    image?: string | null
    lessons?: GrammarLessonCreateNestedManyWithoutTopicInput
  }

  export type GrammarTopicUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    image?: string | null
    lessons?: GrammarLessonUncheckedCreateNestedManyWithoutTopicInput
  }

  export type GrammarTopicUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lessons?: GrammarLessonUpdateManyWithoutTopicNestedInput
  }

  export type GrammarTopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lessons?: GrammarLessonUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type GrammarTopicCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    image?: string | null
  }

  export type GrammarTopicUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarTopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarLessonCreateInput = {
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
    topic: GrammarTopicCreateNestedOneWithoutLessonsInput
    userProgress?: UserGrammarLessonProgressCreateNestedManyWithoutGrammarLessonInput
  }

  export type GrammarLessonUncheckedCreateInput = {
    id?: number
    topic_id: number
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
    userProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutGrammarLessonInput
  }

  export type GrammarLessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: GrammarTopicUpdateOneRequiredWithoutLessonsNestedInput
    userProgress?: UserGrammarLessonProgressUpdateManyWithoutGrammarLessonNestedInput
  }

  export type GrammarLessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutGrammarLessonNestedInput
  }

  export type GrammarLessonCreateManyInput = {
    id?: number
    topic_id: number
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
  }

  export type GrammarLessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarLessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTopicProgressCreateInput = {
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTopicProgressInput
    topic: TopicCreateNestedOneWithoutUserProgressInput
  }

  export type UserTopicProgressUncheckedCreateInput = {
    id?: number
    userId: number
    topicId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserTopicProgressUpdateInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTopicProgressNestedInput
    topic?: TopicUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserTopicProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTopicProgressCreateManyInput = {
    id?: number
    userId: number
    topicId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserTopicProgressUpdateManyMutationInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTopicProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressCreateInput = {
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutGrammarLessonProgressInput
    grammarLesson: GrammarLessonCreateNestedOneWithoutUserProgressInput
  }

  export type UserGrammarLessonProgressUncheckedCreateInput = {
    id?: number
    userId: number
    grammarLessonId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressUpdateInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGrammarLessonProgressNestedInput
    grammarLesson?: GrammarLessonUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserGrammarLessonProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grammarLessonId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressCreateManyInput = {
    id?: number
    userId: number
    grammarLessonId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressUpdateManyMutationInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    grammarLessonId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpeakingCreateInput = {
    title: string
    userProgress?: UserSpeakingProgressCreateNestedManyWithoutSpeakingInput
  }

  export type SpeakingUncheckedCreateInput = {
    id?: number
    title: string
    userProgress?: UserSpeakingProgressUncheckedCreateNestedManyWithoutSpeakingInput
  }

  export type SpeakingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    userProgress?: UserSpeakingProgressUpdateManyWithoutSpeakingNestedInput
  }

  export type SpeakingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userProgress?: UserSpeakingProgressUncheckedUpdateManyWithoutSpeakingNestedInput
  }

  export type SpeakingCreateManyInput = {
    id?: number
    title: string
  }

  export type SpeakingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SpeakingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserSpeakingProgressCreateInput = {
    learnedWords?: number
    user: UserCreateNestedOneWithoutUserSpeakingProgressInput
    speaking: SpeakingCreateNestedOneWithoutUserProgressInput
  }

  export type UserSpeakingProgressUncheckedCreateInput = {
    id?: number
    userId: number
    spkId: number
    learnedWords?: number
  }

  export type UserSpeakingProgressUpdateInput = {
    learnedWords?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserSpeakingProgressNestedInput
    speaking?: SpeakingUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSpeakingProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    spkId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type UserSpeakingProgressCreateManyInput = {
    id?: number
    userId: number
    spkId: number
    learnedWords?: number
  }

  export type UserSpeakingProgressUpdateManyMutationInput = {
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type UserSpeakingProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    spkId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type DayLearnedCreateInput = {
    date: string
    user: UserCreateNestedOneWithoutDayLearnedInput
  }

  export type DayLearnedUncheckedCreateInput = {
    id?: number
    userId: number
    date: string
  }

  export type DayLearnedUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDayLearnedNestedInput
  }

  export type DayLearnedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DayLearnedCreateManyInput = {
    id?: number
    userId: number
    date: string
  }

  export type DayLearnedUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DayLearnedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTopicProgressListRelationFilter = {
    every?: UserTopicProgressWhereInput
    some?: UserTopicProgressWhereInput
    none?: UserTopicProgressWhereInput
  }

  export type UserGrammarLessonProgressListRelationFilter = {
    every?: UserGrammarLessonProgressWhereInput
    some?: UserGrammarLessonProgressWhereInput
    none?: UserGrammarLessonProgressWhereInput
  }

  export type UserSpeakingProgressListRelationFilter = {
    every?: UserSpeakingProgressWhereInput
    some?: UserSpeakingProgressWhereInput
    none?: UserSpeakingProgressWhereInput
  }

  export type DayLearnedListRelationFilter = {
    every?: DayLearnedWhereInput
    some?: DayLearnedWhereInput
    none?: DayLearnedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTopicProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGrammarLessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSpeakingProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayLearnedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TopicNullableScalarRelationFilter = {
    is?: TopicWhereInput | null
    isNot?: TopicWhereInput | null
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicNameParent_idCompoundUniqueInput = {
    name: string
    parent_id: number
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
    titleVN?: SortOrder
    image?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
    titleVN?: SortOrder
    image?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
    titleVN?: SortOrder
    image?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SenseListRelationFilter = {
    every?: SenseWhereInput
    some?: SenseWhereInput
    none?: SenseWhereInput
  }

  export type SenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pos?: SortOrder
    phonetic?: SortOrder
    phonetic_text?: SortOrder
    phonetic_am?: SortOrder
    phonetic_am_text?: SortOrder
    topic_id?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pos?: SortOrder
    phonetic?: SortOrder
    phonetic_text?: SortOrder
    phonetic_am?: SortOrder
    phonetic_am_text?: SortOrder
    topic_id?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pos?: SortOrder
    phonetic?: SortOrder
    phonetic_text?: SortOrder
    phonetic_am?: SortOrder
    phonetic_am_text?: SortOrder
    topic_id?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type ExampleListRelationFilter = {
    every?: ExampleWhereInput
    some?: ExampleWhereInput
    none?: ExampleWhereInput
  }

  export type ExampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SenseCountOrderByAggregateInput = {
    id?: SortOrder
    word_id?: SortOrder
    definition?: SortOrder
  }

  export type SenseAvgOrderByAggregateInput = {
    id?: SortOrder
    word_id?: SortOrder
  }

  export type SenseMaxOrderByAggregateInput = {
    id?: SortOrder
    word_id?: SortOrder
    definition?: SortOrder
  }

  export type SenseMinOrderByAggregateInput = {
    id?: SortOrder
    word_id?: SortOrder
    definition?: SortOrder
  }

  export type SenseSumOrderByAggregateInput = {
    id?: SortOrder
    word_id?: SortOrder
  }

  export type SenseScalarRelationFilter = {
    is?: SenseWhereInput
    isNot?: SenseWhereInput
  }

  export type ExampleCountOrderByAggregateInput = {
    id?: SortOrder
    sense_id?: SortOrder
    example_text?: SortOrder
    cf?: SortOrder
  }

  export type ExampleAvgOrderByAggregateInput = {
    id?: SortOrder
    sense_id?: SortOrder
  }

  export type ExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    sense_id?: SortOrder
    example_text?: SortOrder
    cf?: SortOrder
  }

  export type ExampleMinOrderByAggregateInput = {
    id?: SortOrder
    sense_id?: SortOrder
    example_text?: SortOrder
    cf?: SortOrder
  }

  export type ExampleSumOrderByAggregateInput = {
    id?: SortOrder
    sense_id?: SortOrder
  }

  export type GrammarLessonListRelationFilter = {
    every?: GrammarLessonWhereInput
    some?: GrammarLessonWhereInput
    none?: GrammarLessonWhereInput
  }

  export type GrammarLessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarTopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type GrammarTopicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type GrammarTopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type GrammarTopicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarTopicScalarRelationFilter = {
    is?: GrammarTopicWhereInput
    isNot?: GrammarTopicWhereInput
  }

  export type GrammarLessonCountOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    path?: SortOrder
    image?: SortOrder
  }

  export type GrammarLessonAvgOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
  }

  export type GrammarLessonMaxOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    path?: SortOrder
    image?: SortOrder
  }

  export type GrammarLessonMinOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    path?: SortOrder
    image?: SortOrder
  }

  export type GrammarLessonSumOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type UserTopicProgressUserIdTopicIdCompoundUniqueInput = {
    userId: number
    topicId: number
  }

  export type UserTopicProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    status?: SortOrder
    learnedWords?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTopicProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    learnedWords?: SortOrder
  }

  export type UserTopicProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    status?: SortOrder
    learnedWords?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTopicProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    status?: SortOrder
    learnedWords?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTopicProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    learnedWords?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GrammarLessonScalarRelationFilter = {
    is?: GrammarLessonWhereInput
    isNot?: GrammarLessonWhereInput
  }

  export type UserGrammarLessonProgressUserIdGrammarLessonIdCompoundUniqueInput = {
    userId: number
    grammarLessonId: number
  }

  export type UserGrammarLessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
    status?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserGrammarLessonProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
  }

  export type UserGrammarLessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
    status?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserGrammarLessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
    status?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserGrammarLessonProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    grammarLessonId?: SortOrder
  }

  export type SpeakingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SpeakingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeakingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SpeakingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SpeakingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeakingScalarRelationFilter = {
    is?: SpeakingWhereInput
    isNot?: SpeakingWhereInput
  }

  export type UserSpeakingProgressUserIdSpkIdCompoundUniqueInput = {
    userId: number
    spkId: number
  }

  export type UserSpeakingProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
  }

  export type UserSpeakingProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
  }

  export type UserSpeakingProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
  }

  export type UserSpeakingProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
  }

  export type UserSpeakingProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spkId?: SortOrder
    learnedWords?: SortOrder
  }

  export type DayLearnedUserIdDateCompoundUniqueInput = {
    userId: number
    date: string
  }

  export type DayLearnedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DayLearnedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DayLearnedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DayLearnedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DayLearnedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserTopicProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput> | UserTopicProgressCreateWithoutUserInput[] | UserTopicProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutUserInput | UserTopicProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTopicProgressCreateManyUserInputEnvelope
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
  }

  export type UserGrammarLessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput> | UserGrammarLessonProgressCreateWithoutUserInput[] | UserGrammarLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutUserInput | UserGrammarLessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserGrammarLessonProgressCreateManyUserInputEnvelope
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
  }

  export type UserSpeakingProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput> | UserSpeakingProgressCreateWithoutUserInput[] | UserSpeakingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutUserInput | UserSpeakingProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSpeakingProgressCreateManyUserInputEnvelope
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
  }

  export type DayLearnedCreateNestedManyWithoutUserInput = {
    create?: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput> | DayLearnedCreateWithoutUserInput[] | DayLearnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayLearnedCreateOrConnectWithoutUserInput | DayLearnedCreateOrConnectWithoutUserInput[]
    createMany?: DayLearnedCreateManyUserInputEnvelope
    connect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
  }

  export type UserTopicProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput> | UserTopicProgressCreateWithoutUserInput[] | UserTopicProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutUserInput | UserTopicProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTopicProgressCreateManyUserInputEnvelope
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
  }

  export type UserGrammarLessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput> | UserGrammarLessonProgressCreateWithoutUserInput[] | UserGrammarLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutUserInput | UserGrammarLessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserGrammarLessonProgressCreateManyUserInputEnvelope
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
  }

  export type UserSpeakingProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput> | UserSpeakingProgressCreateWithoutUserInput[] | UserSpeakingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutUserInput | UserSpeakingProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSpeakingProgressCreateManyUserInputEnvelope
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
  }

  export type DayLearnedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput> | DayLearnedCreateWithoutUserInput[] | DayLearnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayLearnedCreateOrConnectWithoutUserInput | DayLearnedCreateOrConnectWithoutUserInput[]
    createMany?: DayLearnedCreateManyUserInputEnvelope
    connect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTopicProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput> | UserTopicProgressCreateWithoutUserInput[] | UserTopicProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutUserInput | UserTopicProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTopicProgressUpsertWithWhereUniqueWithoutUserInput | UserTopicProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTopicProgressCreateManyUserInputEnvelope
    set?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    disconnect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    delete?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    update?: UserTopicProgressUpdateWithWhereUniqueWithoutUserInput | UserTopicProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTopicProgressUpdateManyWithWhereWithoutUserInput | UserTopicProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
  }

  export type UserGrammarLessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput> | UserGrammarLessonProgressCreateWithoutUserInput[] | UserGrammarLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutUserInput | UserGrammarLessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserGrammarLessonProgressUpsertWithWhereUniqueWithoutUserInput | UserGrammarLessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGrammarLessonProgressCreateManyUserInputEnvelope
    set?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    disconnect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    delete?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    update?: UserGrammarLessonProgressUpdateWithWhereUniqueWithoutUserInput | UserGrammarLessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGrammarLessonProgressUpdateManyWithWhereWithoutUserInput | UserGrammarLessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
  }

  export type UserSpeakingProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput> | UserSpeakingProgressCreateWithoutUserInput[] | UserSpeakingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutUserInput | UserSpeakingProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSpeakingProgressUpsertWithWhereUniqueWithoutUserInput | UserSpeakingProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSpeakingProgressCreateManyUserInputEnvelope
    set?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    disconnect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    delete?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    update?: UserSpeakingProgressUpdateWithWhereUniqueWithoutUserInput | UserSpeakingProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSpeakingProgressUpdateManyWithWhereWithoutUserInput | UserSpeakingProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
  }

  export type DayLearnedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput> | DayLearnedCreateWithoutUserInput[] | DayLearnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayLearnedCreateOrConnectWithoutUserInput | DayLearnedCreateOrConnectWithoutUserInput[]
    upsert?: DayLearnedUpsertWithWhereUniqueWithoutUserInput | DayLearnedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DayLearnedCreateManyUserInputEnvelope
    set?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    disconnect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    delete?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    connect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    update?: DayLearnedUpdateWithWhereUniqueWithoutUserInput | DayLearnedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DayLearnedUpdateManyWithWhereWithoutUserInput | DayLearnedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DayLearnedScalarWhereInput | DayLearnedScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserTopicProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput> | UserTopicProgressCreateWithoutUserInput[] | UserTopicProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutUserInput | UserTopicProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTopicProgressUpsertWithWhereUniqueWithoutUserInput | UserTopicProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTopicProgressCreateManyUserInputEnvelope
    set?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    disconnect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    delete?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    update?: UserTopicProgressUpdateWithWhereUniqueWithoutUserInput | UserTopicProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTopicProgressUpdateManyWithWhereWithoutUserInput | UserTopicProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
  }

  export type UserGrammarLessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput> | UserGrammarLessonProgressCreateWithoutUserInput[] | UserGrammarLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutUserInput | UserGrammarLessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserGrammarLessonProgressUpsertWithWhereUniqueWithoutUserInput | UserGrammarLessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGrammarLessonProgressCreateManyUserInputEnvelope
    set?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    disconnect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    delete?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    update?: UserGrammarLessonProgressUpdateWithWhereUniqueWithoutUserInput | UserGrammarLessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGrammarLessonProgressUpdateManyWithWhereWithoutUserInput | UserGrammarLessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
  }

  export type UserSpeakingProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput> | UserSpeakingProgressCreateWithoutUserInput[] | UserSpeakingProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutUserInput | UserSpeakingProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSpeakingProgressUpsertWithWhereUniqueWithoutUserInput | UserSpeakingProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSpeakingProgressCreateManyUserInputEnvelope
    set?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    disconnect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    delete?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    update?: UserSpeakingProgressUpdateWithWhereUniqueWithoutUserInput | UserSpeakingProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSpeakingProgressUpdateManyWithWhereWithoutUserInput | UserSpeakingProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
  }

  export type DayLearnedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput> | DayLearnedCreateWithoutUserInput[] | DayLearnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayLearnedCreateOrConnectWithoutUserInput | DayLearnedCreateOrConnectWithoutUserInput[]
    upsert?: DayLearnedUpsertWithWhereUniqueWithoutUserInput | DayLearnedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DayLearnedCreateManyUserInputEnvelope
    set?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    disconnect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    delete?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    connect?: DayLearnedWhereUniqueInput | DayLearnedWhereUniqueInput[]
    update?: DayLearnedUpdateWithWhereUniqueWithoutUserInput | DayLearnedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DayLearnedUpdateManyWithWhereWithoutUserInput | DayLearnedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DayLearnedScalarWhereInput | DayLearnedScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TopicCreateWithoutChildrenInput, TopicUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TopicCreateOrConnectWithoutChildrenInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutParentInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type WordCreateNestedManyWithoutTopicInput = {
    create?: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput> | WordCreateWithoutTopicInput[] | WordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WordCreateOrConnectWithoutTopicInput | WordCreateOrConnectWithoutTopicInput[]
    createMany?: WordCreateManyTopicInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type UserTopicProgressCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput> | UserTopicProgressCreateWithoutTopicInput[] | UserTopicProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutTopicInput | UserTopicProgressCreateOrConnectWithoutTopicInput[]
    createMany?: UserTopicProgressCreateManyTopicInputEnvelope
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput> | WordCreateWithoutTopicInput[] | WordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WordCreateOrConnectWithoutTopicInput | WordCreateOrConnectWithoutTopicInput[]
    createMany?: WordCreateManyTopicInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type UserTopicProgressUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput> | UserTopicProgressCreateWithoutTopicInput[] | UserTopicProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutTopicInput | UserTopicProgressCreateOrConnectWithoutTopicInput[]
    createMany?: UserTopicProgressCreateManyTopicInputEnvelope
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
  }

  export type TopicUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TopicCreateWithoutChildrenInput, TopicUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TopicCreateOrConnectWithoutChildrenInput
    upsert?: TopicUpsertWithoutChildrenInput
    disconnect?: TopicWhereInput | boolean
    delete?: TopicWhereInput | boolean
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutChildrenInput, TopicUpdateWithoutChildrenInput>, TopicUncheckedUpdateWithoutChildrenInput>
  }

  export type TopicUpdateManyWithoutParentNestedInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentInput | TopicUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentInput | TopicUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentInput | TopicUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type WordUpdateManyWithoutTopicNestedInput = {
    create?: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput> | WordCreateWithoutTopicInput[] | WordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WordCreateOrConnectWithoutTopicInput | WordCreateOrConnectWithoutTopicInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutTopicInput | WordUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: WordCreateManyTopicInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutTopicInput | WordUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: WordUpdateManyWithWhereWithoutTopicInput | WordUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type UserTopicProgressUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput> | UserTopicProgressCreateWithoutTopicInput[] | UserTopicProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutTopicInput | UserTopicProgressCreateOrConnectWithoutTopicInput[]
    upsert?: UserTopicProgressUpsertWithWhereUniqueWithoutTopicInput | UserTopicProgressUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserTopicProgressCreateManyTopicInputEnvelope
    set?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    disconnect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    delete?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    update?: UserTopicProgressUpdateWithWhereUniqueWithoutTopicInput | UserTopicProgressUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserTopicProgressUpdateManyWithWhereWithoutTopicInput | UserTopicProgressUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TopicUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentInput | TopicUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentInput | TopicUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentInput | TopicUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput> | WordCreateWithoutTopicInput[] | WordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WordCreateOrConnectWithoutTopicInput | WordCreateOrConnectWithoutTopicInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutTopicInput | WordUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: WordCreateManyTopicInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutTopicInput | WordUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: WordUpdateManyWithWhereWithoutTopicInput | WordUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type UserTopicProgressUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput> | UserTopicProgressCreateWithoutTopicInput[] | UserTopicProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserTopicProgressCreateOrConnectWithoutTopicInput | UserTopicProgressCreateOrConnectWithoutTopicInput[]
    upsert?: UserTopicProgressUpsertWithWhereUniqueWithoutTopicInput | UserTopicProgressUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserTopicProgressCreateManyTopicInputEnvelope
    set?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    disconnect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    delete?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    connect?: UserTopicProgressWhereUniqueInput | UserTopicProgressWhereUniqueInput[]
    update?: UserTopicProgressUpdateWithWhereUniqueWithoutTopicInput | UserTopicProgressUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserTopicProgressUpdateManyWithWhereWithoutTopicInput | UserTopicProgressUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutWordsInput = {
    create?: XOR<TopicCreateWithoutWordsInput, TopicUncheckedCreateWithoutWordsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutWordsInput
    connect?: TopicWhereUniqueInput
  }

  export type SenseCreateNestedManyWithoutWordInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type SenseUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type TopicUpdateOneWithoutWordsNestedInput = {
    create?: XOR<TopicCreateWithoutWordsInput, TopicUncheckedCreateWithoutWordsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutWordsInput
    upsert?: TopicUpsertWithoutWordsInput
    disconnect?: TopicWhereInput | boolean
    delete?: TopicWhereInput | boolean
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutWordsInput, TopicUpdateWithoutWordsInput>, TopicUncheckedUpdateWithoutWordsInput>
  }

  export type SenseUpdateManyWithoutWordNestedInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutWordInput | SenseUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutWordInput | SenseUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutWordInput | SenseUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type SenseUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutWordInput | SenseUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutWordInput | SenseUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutWordInput | SenseUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutSensesInput = {
    create?: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSensesInput
    connect?: WordWhereUniqueInput
  }

  export type ExampleCreateNestedManyWithoutSenseInput = {
    create?: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput> | ExampleCreateWithoutSenseInput[] | ExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSenseInput | ExampleCreateOrConnectWithoutSenseInput[]
    createMany?: ExampleCreateManySenseInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type ExampleUncheckedCreateNestedManyWithoutSenseInput = {
    create?: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput> | ExampleCreateWithoutSenseInput[] | ExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSenseInput | ExampleCreateOrConnectWithoutSenseInput[]
    createMany?: ExampleCreateManySenseInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type WordUpdateOneRequiredWithoutSensesNestedInput = {
    create?: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSensesInput
    upsert?: WordUpsertWithoutSensesInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutSensesInput, WordUpdateWithoutSensesInput>, WordUncheckedUpdateWithoutSensesInput>
  }

  export type ExampleUpdateManyWithoutSenseNestedInput = {
    create?: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput> | ExampleCreateWithoutSenseInput[] | ExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSenseInput | ExampleCreateOrConnectWithoutSenseInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutSenseInput | ExampleUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: ExampleCreateManySenseInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutSenseInput | ExampleUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutSenseInput | ExampleUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type ExampleUncheckedUpdateManyWithoutSenseNestedInput = {
    create?: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput> | ExampleCreateWithoutSenseInput[] | ExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSenseInput | ExampleCreateOrConnectWithoutSenseInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutSenseInput | ExampleUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: ExampleCreateManySenseInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutSenseInput | ExampleUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutSenseInput | ExampleUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type SenseCreateNestedOneWithoutExamplesInput = {
    create?: XOR<SenseCreateWithoutExamplesInput, SenseUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: SenseCreateOrConnectWithoutExamplesInput
    connect?: SenseWhereUniqueInput
  }

  export type SenseUpdateOneRequiredWithoutExamplesNestedInput = {
    create?: XOR<SenseCreateWithoutExamplesInput, SenseUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: SenseCreateOrConnectWithoutExamplesInput
    upsert?: SenseUpsertWithoutExamplesInput
    connect?: SenseWhereUniqueInput
    update?: XOR<XOR<SenseUpdateToOneWithWhereWithoutExamplesInput, SenseUpdateWithoutExamplesInput>, SenseUncheckedUpdateWithoutExamplesInput>
  }

  export type GrammarLessonCreateNestedManyWithoutTopicInput = {
    create?: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput> | GrammarLessonCreateWithoutTopicInput[] | GrammarLessonUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutTopicInput | GrammarLessonCreateOrConnectWithoutTopicInput[]
    createMany?: GrammarLessonCreateManyTopicInputEnvelope
    connect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
  }

  export type GrammarLessonUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput> | GrammarLessonCreateWithoutTopicInput[] | GrammarLessonUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutTopicInput | GrammarLessonCreateOrConnectWithoutTopicInput[]
    createMany?: GrammarLessonCreateManyTopicInputEnvelope
    connect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
  }

  export type GrammarLessonUpdateManyWithoutTopicNestedInput = {
    create?: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput> | GrammarLessonCreateWithoutTopicInput[] | GrammarLessonUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutTopicInput | GrammarLessonCreateOrConnectWithoutTopicInput[]
    upsert?: GrammarLessonUpsertWithWhereUniqueWithoutTopicInput | GrammarLessonUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: GrammarLessonCreateManyTopicInputEnvelope
    set?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    disconnect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    delete?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    connect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    update?: GrammarLessonUpdateWithWhereUniqueWithoutTopicInput | GrammarLessonUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: GrammarLessonUpdateManyWithWhereWithoutTopicInput | GrammarLessonUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: GrammarLessonScalarWhereInput | GrammarLessonScalarWhereInput[]
  }

  export type GrammarLessonUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput> | GrammarLessonCreateWithoutTopicInput[] | GrammarLessonUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutTopicInput | GrammarLessonCreateOrConnectWithoutTopicInput[]
    upsert?: GrammarLessonUpsertWithWhereUniqueWithoutTopicInput | GrammarLessonUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: GrammarLessonCreateManyTopicInputEnvelope
    set?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    disconnect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    delete?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    connect?: GrammarLessonWhereUniqueInput | GrammarLessonWhereUniqueInput[]
    update?: GrammarLessonUpdateWithWhereUniqueWithoutTopicInput | GrammarLessonUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: GrammarLessonUpdateManyWithWhereWithoutTopicInput | GrammarLessonUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: GrammarLessonScalarWhereInput | GrammarLessonScalarWhereInput[]
  }

  export type GrammarTopicCreateNestedOneWithoutLessonsInput = {
    create?: XOR<GrammarTopicCreateWithoutLessonsInput, GrammarTopicUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: GrammarTopicCreateOrConnectWithoutLessonsInput
    connect?: GrammarTopicWhereUniqueInput
  }

  export type UserGrammarLessonProgressCreateNestedManyWithoutGrammarLessonInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput> | UserGrammarLessonProgressCreateWithoutGrammarLessonInput[] | UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput | UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput[]
    createMany?: UserGrammarLessonProgressCreateManyGrammarLessonInputEnvelope
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
  }

  export type UserGrammarLessonProgressUncheckedCreateNestedManyWithoutGrammarLessonInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput> | UserGrammarLessonProgressCreateWithoutGrammarLessonInput[] | UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput | UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput[]
    createMany?: UserGrammarLessonProgressCreateManyGrammarLessonInputEnvelope
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
  }

  export type GrammarTopicUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<GrammarTopicCreateWithoutLessonsInput, GrammarTopicUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: GrammarTopicCreateOrConnectWithoutLessonsInput
    upsert?: GrammarTopicUpsertWithoutLessonsInput
    connect?: GrammarTopicWhereUniqueInput
    update?: XOR<XOR<GrammarTopicUpdateToOneWithWhereWithoutLessonsInput, GrammarTopicUpdateWithoutLessonsInput>, GrammarTopicUncheckedUpdateWithoutLessonsInput>
  }

  export type UserGrammarLessonProgressUpdateManyWithoutGrammarLessonNestedInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput> | UserGrammarLessonProgressCreateWithoutGrammarLessonInput[] | UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput | UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput[]
    upsert?: UserGrammarLessonProgressUpsertWithWhereUniqueWithoutGrammarLessonInput | UserGrammarLessonProgressUpsertWithWhereUniqueWithoutGrammarLessonInput[]
    createMany?: UserGrammarLessonProgressCreateManyGrammarLessonInputEnvelope
    set?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    disconnect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    delete?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    update?: UserGrammarLessonProgressUpdateWithWhereUniqueWithoutGrammarLessonInput | UserGrammarLessonProgressUpdateWithWhereUniqueWithoutGrammarLessonInput[]
    updateMany?: UserGrammarLessonProgressUpdateManyWithWhereWithoutGrammarLessonInput | UserGrammarLessonProgressUpdateManyWithWhereWithoutGrammarLessonInput[]
    deleteMany?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
  }

  export type UserGrammarLessonProgressUncheckedUpdateManyWithoutGrammarLessonNestedInput = {
    create?: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput> | UserGrammarLessonProgressCreateWithoutGrammarLessonInput[] | UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput[]
    connectOrCreate?: UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput | UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput[]
    upsert?: UserGrammarLessonProgressUpsertWithWhereUniqueWithoutGrammarLessonInput | UserGrammarLessonProgressUpsertWithWhereUniqueWithoutGrammarLessonInput[]
    createMany?: UserGrammarLessonProgressCreateManyGrammarLessonInputEnvelope
    set?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    disconnect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    delete?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    connect?: UserGrammarLessonProgressWhereUniqueInput | UserGrammarLessonProgressWhereUniqueInput[]
    update?: UserGrammarLessonProgressUpdateWithWhereUniqueWithoutGrammarLessonInput | UserGrammarLessonProgressUpdateWithWhereUniqueWithoutGrammarLessonInput[]
    updateMany?: UserGrammarLessonProgressUpdateManyWithWhereWithoutGrammarLessonInput | UserGrammarLessonProgressUpdateManyWithWhereWithoutGrammarLessonInput[]
    deleteMany?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTopicProgressInput = {
    create?: XOR<UserCreateWithoutTopicProgressInput, UserUncheckedCreateWithoutTopicProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopicProgressInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<TopicCreateWithoutUserProgressInput, TopicUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUserProgressInput
    connect?: TopicWhereUniqueInput
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTopicProgressNestedInput = {
    create?: XOR<UserCreateWithoutTopicProgressInput, UserUncheckedCreateWithoutTopicProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopicProgressInput
    upsert?: UserUpsertWithoutTopicProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTopicProgressInput, UserUpdateWithoutTopicProgressInput>, UserUncheckedUpdateWithoutTopicProgressInput>
  }

  export type TopicUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<TopicCreateWithoutUserProgressInput, TopicUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUserProgressInput
    upsert?: TopicUpsertWithoutUserProgressInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutUserProgressInput, TopicUpdateWithoutUserProgressInput>, TopicUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutGrammarLessonProgressInput = {
    create?: XOR<UserCreateWithoutGrammarLessonProgressInput, UserUncheckedCreateWithoutGrammarLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutGrammarLessonProgressInput
    connect?: UserWhereUniqueInput
  }

  export type GrammarLessonCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<GrammarLessonCreateWithoutUserProgressInput, GrammarLessonUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutUserProgressInput
    connect?: GrammarLessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGrammarLessonProgressNestedInput = {
    create?: XOR<UserCreateWithoutGrammarLessonProgressInput, UserUncheckedCreateWithoutGrammarLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutGrammarLessonProgressInput
    upsert?: UserUpsertWithoutGrammarLessonProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGrammarLessonProgressInput, UserUpdateWithoutGrammarLessonProgressInput>, UserUncheckedUpdateWithoutGrammarLessonProgressInput>
  }

  export type GrammarLessonUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<GrammarLessonCreateWithoutUserProgressInput, GrammarLessonUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: GrammarLessonCreateOrConnectWithoutUserProgressInput
    upsert?: GrammarLessonUpsertWithoutUserProgressInput
    connect?: GrammarLessonWhereUniqueInput
    update?: XOR<XOR<GrammarLessonUpdateToOneWithWhereWithoutUserProgressInput, GrammarLessonUpdateWithoutUserProgressInput>, GrammarLessonUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserSpeakingProgressCreateNestedManyWithoutSpeakingInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput> | UserSpeakingProgressCreateWithoutSpeakingInput[] | UserSpeakingProgressUncheckedCreateWithoutSpeakingInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutSpeakingInput | UserSpeakingProgressCreateOrConnectWithoutSpeakingInput[]
    createMany?: UserSpeakingProgressCreateManySpeakingInputEnvelope
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
  }

  export type UserSpeakingProgressUncheckedCreateNestedManyWithoutSpeakingInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput> | UserSpeakingProgressCreateWithoutSpeakingInput[] | UserSpeakingProgressUncheckedCreateWithoutSpeakingInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutSpeakingInput | UserSpeakingProgressCreateOrConnectWithoutSpeakingInput[]
    createMany?: UserSpeakingProgressCreateManySpeakingInputEnvelope
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
  }

  export type UserSpeakingProgressUpdateManyWithoutSpeakingNestedInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput> | UserSpeakingProgressCreateWithoutSpeakingInput[] | UserSpeakingProgressUncheckedCreateWithoutSpeakingInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutSpeakingInput | UserSpeakingProgressCreateOrConnectWithoutSpeakingInput[]
    upsert?: UserSpeakingProgressUpsertWithWhereUniqueWithoutSpeakingInput | UserSpeakingProgressUpsertWithWhereUniqueWithoutSpeakingInput[]
    createMany?: UserSpeakingProgressCreateManySpeakingInputEnvelope
    set?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    disconnect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    delete?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    update?: UserSpeakingProgressUpdateWithWhereUniqueWithoutSpeakingInput | UserSpeakingProgressUpdateWithWhereUniqueWithoutSpeakingInput[]
    updateMany?: UserSpeakingProgressUpdateManyWithWhereWithoutSpeakingInput | UserSpeakingProgressUpdateManyWithWhereWithoutSpeakingInput[]
    deleteMany?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
  }

  export type UserSpeakingProgressUncheckedUpdateManyWithoutSpeakingNestedInput = {
    create?: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput> | UserSpeakingProgressCreateWithoutSpeakingInput[] | UserSpeakingProgressUncheckedCreateWithoutSpeakingInput[]
    connectOrCreate?: UserSpeakingProgressCreateOrConnectWithoutSpeakingInput | UserSpeakingProgressCreateOrConnectWithoutSpeakingInput[]
    upsert?: UserSpeakingProgressUpsertWithWhereUniqueWithoutSpeakingInput | UserSpeakingProgressUpsertWithWhereUniqueWithoutSpeakingInput[]
    createMany?: UserSpeakingProgressCreateManySpeakingInputEnvelope
    set?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    disconnect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    delete?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    connect?: UserSpeakingProgressWhereUniqueInput | UserSpeakingProgressWhereUniqueInput[]
    update?: UserSpeakingProgressUpdateWithWhereUniqueWithoutSpeakingInput | UserSpeakingProgressUpdateWithWhereUniqueWithoutSpeakingInput[]
    updateMany?: UserSpeakingProgressUpdateManyWithWhereWithoutSpeakingInput | UserSpeakingProgressUpdateManyWithWhereWithoutSpeakingInput[]
    deleteMany?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSpeakingProgressInput = {
    create?: XOR<UserCreateWithoutUserSpeakingProgressInput, UserUncheckedCreateWithoutUserSpeakingProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSpeakingProgressInput
    connect?: UserWhereUniqueInput
  }

  export type SpeakingCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<SpeakingCreateWithoutUserProgressInput, SpeakingUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SpeakingCreateOrConnectWithoutUserProgressInput
    connect?: SpeakingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSpeakingProgressNestedInput = {
    create?: XOR<UserCreateWithoutUserSpeakingProgressInput, UserUncheckedCreateWithoutUserSpeakingProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSpeakingProgressInput
    upsert?: UserUpsertWithoutUserSpeakingProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSpeakingProgressInput, UserUpdateWithoutUserSpeakingProgressInput>, UserUncheckedUpdateWithoutUserSpeakingProgressInput>
  }

  export type SpeakingUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<SpeakingCreateWithoutUserProgressInput, SpeakingUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SpeakingCreateOrConnectWithoutUserProgressInput
    upsert?: SpeakingUpsertWithoutUserProgressInput
    connect?: SpeakingWhereUniqueInput
    update?: XOR<XOR<SpeakingUpdateToOneWithWhereWithoutUserProgressInput, SpeakingUpdateWithoutUserProgressInput>, SpeakingUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutDayLearnedInput = {
    create?: XOR<UserCreateWithoutDayLearnedInput, UserUncheckedCreateWithoutDayLearnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDayLearnedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDayLearnedNestedInput = {
    create?: XOR<UserCreateWithoutDayLearnedInput, UserUncheckedCreateWithoutDayLearnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDayLearnedInput
    upsert?: UserUpsertWithoutDayLearnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDayLearnedInput, UserUpdateWithoutDayLearnedInput>, UserUncheckedUpdateWithoutDayLearnedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserTopicProgressCreateWithoutUserInput = {
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    topic: TopicCreateNestedOneWithoutUserProgressInput
  }

  export type UserTopicProgressUncheckedCreateWithoutUserInput = {
    id?: number
    topicId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserTopicProgressCreateOrConnectWithoutUserInput = {
    where: UserTopicProgressWhereUniqueInput
    create: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTopicProgressCreateManyUserInputEnvelope = {
    data: UserTopicProgressCreateManyUserInput | UserTopicProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGrammarLessonProgressCreateWithoutUserInput = {
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    grammarLesson: GrammarLessonCreateNestedOneWithoutUserProgressInput
  }

  export type UserGrammarLessonProgressUncheckedCreateWithoutUserInput = {
    id?: number
    grammarLessonId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressCreateOrConnectWithoutUserInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    create: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput>
  }

  export type UserGrammarLessonProgressCreateManyUserInputEnvelope = {
    data: UserGrammarLessonProgressCreateManyUserInput | UserGrammarLessonProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSpeakingProgressCreateWithoutUserInput = {
    learnedWords?: number
    speaking: SpeakingCreateNestedOneWithoutUserProgressInput
  }

  export type UserSpeakingProgressUncheckedCreateWithoutUserInput = {
    id?: number
    spkId: number
    learnedWords?: number
  }

  export type UserSpeakingProgressCreateOrConnectWithoutUserInput = {
    where: UserSpeakingProgressWhereUniqueInput
    create: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSpeakingProgressCreateManyUserInputEnvelope = {
    data: UserSpeakingProgressCreateManyUserInput | UserSpeakingProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DayLearnedCreateWithoutUserInput = {
    date: string
  }

  export type DayLearnedUncheckedCreateWithoutUserInput = {
    id?: number
    date: string
  }

  export type DayLearnedCreateOrConnectWithoutUserInput = {
    where: DayLearnedWhereUniqueInput
    create: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput>
  }

  export type DayLearnedCreateManyUserInputEnvelope = {
    data: DayLearnedCreateManyUserInput | DayLearnedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTopicProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTopicProgressWhereUniqueInput
    update: XOR<UserTopicProgressUpdateWithoutUserInput, UserTopicProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserTopicProgressCreateWithoutUserInput, UserTopicProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTopicProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTopicProgressWhereUniqueInput
    data: XOR<UserTopicProgressUpdateWithoutUserInput, UserTopicProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserTopicProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserTopicProgressScalarWhereInput
    data: XOR<UserTopicProgressUpdateManyMutationInput, UserTopicProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTopicProgressScalarWhereInput = {
    AND?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
    OR?: UserTopicProgressScalarWhereInput[]
    NOT?: UserTopicProgressScalarWhereInput | UserTopicProgressScalarWhereInput[]
    id?: IntFilter<"UserTopicProgress"> | number
    userId?: IntFilter<"UserTopicProgress"> | number
    topicId?: IntFilter<"UserTopicProgress"> | number
    status?: EnumProgressStatusFilter<"UserTopicProgress"> | $Enums.ProgressStatus
    learnedWords?: IntFilter<"UserTopicProgress"> | number
    lastAccessedAt?: DateTimeFilter<"UserTopicProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserTopicProgress"> | Date | string | null
  }

  export type UserGrammarLessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    update: XOR<UserGrammarLessonProgressUpdateWithoutUserInput, UserGrammarLessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserGrammarLessonProgressCreateWithoutUserInput, UserGrammarLessonProgressUncheckedCreateWithoutUserInput>
  }

  export type UserGrammarLessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    data: XOR<UserGrammarLessonProgressUpdateWithoutUserInput, UserGrammarLessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserGrammarLessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserGrammarLessonProgressScalarWhereInput
    data: XOR<UserGrammarLessonProgressUpdateManyMutationInput, UserGrammarLessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGrammarLessonProgressScalarWhereInput = {
    AND?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
    OR?: UserGrammarLessonProgressScalarWhereInput[]
    NOT?: UserGrammarLessonProgressScalarWhereInput | UserGrammarLessonProgressScalarWhereInput[]
    id?: IntFilter<"UserGrammarLessonProgress"> | number
    userId?: IntFilter<"UserGrammarLessonProgress"> | number
    grammarLessonId?: IntFilter<"UserGrammarLessonProgress"> | number
    status?: EnumProgressStatusFilter<"UserGrammarLessonProgress"> | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFilter<"UserGrammarLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserGrammarLessonProgress"> | Date | string | null
  }

  export type UserSpeakingProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSpeakingProgressWhereUniqueInput
    update: XOR<UserSpeakingProgressUpdateWithoutUserInput, UserSpeakingProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserSpeakingProgressCreateWithoutUserInput, UserSpeakingProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSpeakingProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSpeakingProgressWhereUniqueInput
    data: XOR<UserSpeakingProgressUpdateWithoutUserInput, UserSpeakingProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserSpeakingProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserSpeakingProgressScalarWhereInput
    data: XOR<UserSpeakingProgressUpdateManyMutationInput, UserSpeakingProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSpeakingProgressScalarWhereInput = {
    AND?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
    OR?: UserSpeakingProgressScalarWhereInput[]
    NOT?: UserSpeakingProgressScalarWhereInput | UserSpeakingProgressScalarWhereInput[]
    id?: IntFilter<"UserSpeakingProgress"> | number
    userId?: IntFilter<"UserSpeakingProgress"> | number
    spkId?: IntFilter<"UserSpeakingProgress"> | number
    learnedWords?: IntFilter<"UserSpeakingProgress"> | number
  }

  export type DayLearnedUpsertWithWhereUniqueWithoutUserInput = {
    where: DayLearnedWhereUniqueInput
    update: XOR<DayLearnedUpdateWithoutUserInput, DayLearnedUncheckedUpdateWithoutUserInput>
    create: XOR<DayLearnedCreateWithoutUserInput, DayLearnedUncheckedCreateWithoutUserInput>
  }

  export type DayLearnedUpdateWithWhereUniqueWithoutUserInput = {
    where: DayLearnedWhereUniqueInput
    data: XOR<DayLearnedUpdateWithoutUserInput, DayLearnedUncheckedUpdateWithoutUserInput>
  }

  export type DayLearnedUpdateManyWithWhereWithoutUserInput = {
    where: DayLearnedScalarWhereInput
    data: XOR<DayLearnedUpdateManyMutationInput, DayLearnedUncheckedUpdateManyWithoutUserInput>
  }

  export type DayLearnedScalarWhereInput = {
    AND?: DayLearnedScalarWhereInput | DayLearnedScalarWhereInput[]
    OR?: DayLearnedScalarWhereInput[]
    NOT?: DayLearnedScalarWhereInput | DayLearnedScalarWhereInput[]
    id?: IntFilter<"DayLearned"> | number
    userId?: IntFilter<"DayLearned"> | number
    date?: StringFilter<"DayLearned"> | string
  }

  export type TopicCreateWithoutChildrenInput = {
    name: string
    titleVN?: string | null
    image?: string | null
    parent?: TopicCreateNestedOneWithoutChildrenInput
    words?: WordCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    parent_id?: number | null
    titleVN?: string | null
    image?: string | null
    words?: WordUncheckedCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutChildrenInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutChildrenInput, TopicUncheckedCreateWithoutChildrenInput>
  }

  export type TopicCreateWithoutParentInput = {
    name: string
    titleVN?: string | null
    image?: string | null
    children?: TopicCreateNestedManyWithoutParentInput
    words?: WordCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    titleVN?: string | null
    image?: string | null
    children?: TopicUncheckedCreateNestedManyWithoutParentInput
    words?: WordUncheckedCreateNestedManyWithoutTopicInput
    userProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutParentInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput>
  }

  export type TopicCreateManyParentInputEnvelope = {
    data: TopicCreateManyParentInput | TopicCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type WordCreateWithoutTopicInput = {
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    senses?: SenseCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutTopicInput = {
    id?: number
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    senses?: SenseUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutTopicInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput>
  }

  export type WordCreateManyTopicInputEnvelope = {
    data: WordCreateManyTopicInput | WordCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type UserTopicProgressCreateWithoutTopicInput = {
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTopicProgressInput
  }

  export type UserTopicProgressUncheckedCreateWithoutTopicInput = {
    id?: number
    userId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserTopicProgressCreateOrConnectWithoutTopicInput = {
    where: UserTopicProgressWhereUniqueInput
    create: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput>
  }

  export type UserTopicProgressCreateManyTopicInputEnvelope = {
    data: UserTopicProgressCreateManyTopicInput | UserTopicProgressCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithoutChildrenInput = {
    update: XOR<TopicUpdateWithoutChildrenInput, TopicUncheckedUpdateWithoutChildrenInput>
    create: XOR<TopicCreateWithoutChildrenInput, TopicUncheckedCreateWithoutChildrenInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutChildrenInput, TopicUncheckedUpdateWithoutChildrenInput>
  }

  export type TopicUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TopicUpdateOneWithoutChildrenNestedInput
    words?: WordUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUncheckedUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUpsertWithWhereUniqueWithoutParentInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutParentInput, TopicUncheckedUpdateWithoutParentInput>
    create: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutParentInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutParentInput, TopicUncheckedUpdateWithoutParentInput>
  }

  export type TopicUpdateManyWithWhereWithoutParentInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutParentInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    parent_id?: IntNullableFilter<"Topic"> | number | null
    titleVN?: StringNullableFilter<"Topic"> | string | null
    image?: StringNullableFilter<"Topic"> | string | null
  }

  export type WordUpsertWithWhereUniqueWithoutTopicInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutTopicInput, WordUncheckedUpdateWithoutTopicInput>
    create: XOR<WordCreateWithoutTopicInput, WordUncheckedCreateWithoutTopicInput>
  }

  export type WordUpdateWithWhereUniqueWithoutTopicInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutTopicInput, WordUncheckedUpdateWithoutTopicInput>
  }

  export type WordUpdateManyWithWhereWithoutTopicInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutTopicInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    id?: IntFilter<"Word"> | number
    word?: StringFilter<"Word"> | string
    pos?: StringNullableFilter<"Word"> | string | null
    phonetic?: StringNullableFilter<"Word"> | string | null
    phonetic_text?: StringNullableFilter<"Word"> | string | null
    phonetic_am?: StringNullableFilter<"Word"> | string | null
    phonetic_am_text?: StringNullableFilter<"Word"> | string | null
    topic_id?: IntNullableFilter<"Word"> | number | null
  }

  export type UserTopicProgressUpsertWithWhereUniqueWithoutTopicInput = {
    where: UserTopicProgressWhereUniqueInput
    update: XOR<UserTopicProgressUpdateWithoutTopicInput, UserTopicProgressUncheckedUpdateWithoutTopicInput>
    create: XOR<UserTopicProgressCreateWithoutTopicInput, UserTopicProgressUncheckedCreateWithoutTopicInput>
  }

  export type UserTopicProgressUpdateWithWhereUniqueWithoutTopicInput = {
    where: UserTopicProgressWhereUniqueInput
    data: XOR<UserTopicProgressUpdateWithoutTopicInput, UserTopicProgressUncheckedUpdateWithoutTopicInput>
  }

  export type UserTopicProgressUpdateManyWithWhereWithoutTopicInput = {
    where: UserTopicProgressScalarWhereInput
    data: XOR<UserTopicProgressUpdateManyMutationInput, UserTopicProgressUncheckedUpdateManyWithoutTopicInput>
  }

  export type TopicCreateWithoutWordsInput = {
    name: string
    titleVN?: string | null
    image?: string | null
    parent?: TopicCreateNestedOneWithoutChildrenInput
    children?: TopicCreateNestedManyWithoutParentInput
    userProgress?: UserTopicProgressCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutWordsInput = {
    id?: number
    name: string
    parent_id?: number | null
    titleVN?: string | null
    image?: string | null
    children?: TopicUncheckedCreateNestedManyWithoutParentInput
    userProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutWordsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutWordsInput, TopicUncheckedCreateWithoutWordsInput>
  }

  export type SenseCreateWithoutWordInput = {
    definition: string
    examples?: ExampleCreateNestedManyWithoutSenseInput
  }

  export type SenseUncheckedCreateWithoutWordInput = {
    id?: number
    definition: string
    examples?: ExampleUncheckedCreateNestedManyWithoutSenseInput
  }

  export type SenseCreateOrConnectWithoutWordInput = {
    where: SenseWhereUniqueInput
    create: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput>
  }

  export type SenseCreateManyWordInputEnvelope = {
    data: SenseCreateManyWordInput | SenseCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithoutWordsInput = {
    update: XOR<TopicUpdateWithoutWordsInput, TopicUncheckedUpdateWithoutWordsInput>
    create: XOR<TopicCreateWithoutWordsInput, TopicUncheckedCreateWithoutWordsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutWordsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutWordsInput, TopicUncheckedUpdateWithoutWordsInput>
  }

  export type TopicUpdateWithoutWordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TopicUpdateOneWithoutChildrenNestedInput
    children?: TopicUpdateManyWithoutParentNestedInput
    userProgress?: UserTopicProgressUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutWordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TopicUncheckedUpdateManyWithoutParentNestedInput
    userProgress?: UserTopicProgressUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type SenseUpsertWithWhereUniqueWithoutWordInput = {
    where: SenseWhereUniqueInput
    update: XOR<SenseUpdateWithoutWordInput, SenseUncheckedUpdateWithoutWordInput>
    create: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput>
  }

  export type SenseUpdateWithWhereUniqueWithoutWordInput = {
    where: SenseWhereUniqueInput
    data: XOR<SenseUpdateWithoutWordInput, SenseUncheckedUpdateWithoutWordInput>
  }

  export type SenseUpdateManyWithWhereWithoutWordInput = {
    where: SenseScalarWhereInput
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyWithoutWordInput>
  }

  export type SenseScalarWhereInput = {
    AND?: SenseScalarWhereInput | SenseScalarWhereInput[]
    OR?: SenseScalarWhereInput[]
    NOT?: SenseScalarWhereInput | SenseScalarWhereInput[]
    id?: IntFilter<"Sense"> | number
    word_id?: IntFilter<"Sense"> | number
    definition?: StringFilter<"Sense"> | string
  }

  export type WordCreateWithoutSensesInput = {
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    topic?: TopicCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutSensesInput = {
    id?: number
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
    topic_id?: number | null
  }

  export type WordCreateOrConnectWithoutSensesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
  }

  export type ExampleCreateWithoutSenseInput = {
    example_text: string
    cf?: string | null
  }

  export type ExampleUncheckedCreateWithoutSenseInput = {
    id?: number
    example_text: string
    cf?: string | null
  }

  export type ExampleCreateOrConnectWithoutSenseInput = {
    where: ExampleWhereUniqueInput
    create: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput>
  }

  export type ExampleCreateManySenseInputEnvelope = {
    data: ExampleCreateManySenseInput | ExampleCreateManySenseInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithoutSensesInput = {
    update: XOR<WordUpdateWithoutSensesInput, WordUncheckedUpdateWithoutSensesInput>
    create: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutSensesInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutSensesInput, WordUncheckedUpdateWithoutSensesInput>
  }

  export type WordUpdateWithoutSensesInput = {
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: TopicUpdateOneWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutSensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    topic_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExampleUpsertWithWhereUniqueWithoutSenseInput = {
    where: ExampleWhereUniqueInput
    update: XOR<ExampleUpdateWithoutSenseInput, ExampleUncheckedUpdateWithoutSenseInput>
    create: XOR<ExampleCreateWithoutSenseInput, ExampleUncheckedCreateWithoutSenseInput>
  }

  export type ExampleUpdateWithWhereUniqueWithoutSenseInput = {
    where: ExampleWhereUniqueInput
    data: XOR<ExampleUpdateWithoutSenseInput, ExampleUncheckedUpdateWithoutSenseInput>
  }

  export type ExampleUpdateManyWithWhereWithoutSenseInput = {
    where: ExampleScalarWhereInput
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyWithoutSenseInput>
  }

  export type ExampleScalarWhereInput = {
    AND?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    OR?: ExampleScalarWhereInput[]
    NOT?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    id?: IntFilter<"Example"> | number
    sense_id?: IntFilter<"Example"> | number
    example_text?: StringFilter<"Example"> | string
    cf?: StringNullableFilter<"Example"> | string | null
  }

  export type SenseCreateWithoutExamplesInput = {
    definition: string
    word: WordCreateNestedOneWithoutSensesInput
  }

  export type SenseUncheckedCreateWithoutExamplesInput = {
    id?: number
    word_id: number
    definition: string
  }

  export type SenseCreateOrConnectWithoutExamplesInput = {
    where: SenseWhereUniqueInput
    create: XOR<SenseCreateWithoutExamplesInput, SenseUncheckedCreateWithoutExamplesInput>
  }

  export type SenseUpsertWithoutExamplesInput = {
    update: XOR<SenseUpdateWithoutExamplesInput, SenseUncheckedUpdateWithoutExamplesInput>
    create: XOR<SenseCreateWithoutExamplesInput, SenseUncheckedCreateWithoutExamplesInput>
    where?: SenseWhereInput
  }

  export type SenseUpdateToOneWithWhereWithoutExamplesInput = {
    where?: SenseWhereInput
    data: XOR<SenseUpdateWithoutExamplesInput, SenseUncheckedUpdateWithoutExamplesInput>
  }

  export type SenseUpdateWithoutExamplesInput = {
    definition?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateWithoutExamplesInput = {
    id?: IntFieldUpdateOperationsInput | number
    word_id?: IntFieldUpdateOperationsInput | number
    definition?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarLessonCreateWithoutTopicInput = {
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
    userProgress?: UserGrammarLessonProgressCreateNestedManyWithoutGrammarLessonInput
  }

  export type GrammarLessonUncheckedCreateWithoutTopicInput = {
    id?: number
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
    userProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutGrammarLessonInput
  }

  export type GrammarLessonCreateOrConnectWithoutTopicInput = {
    where: GrammarLessonWhereUniqueInput
    create: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput>
  }

  export type GrammarLessonCreateManyTopicInputEnvelope = {
    data: GrammarLessonCreateManyTopicInput | GrammarLessonCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type GrammarLessonUpsertWithWhereUniqueWithoutTopicInput = {
    where: GrammarLessonWhereUniqueInput
    update: XOR<GrammarLessonUpdateWithoutTopicInput, GrammarLessonUncheckedUpdateWithoutTopicInput>
    create: XOR<GrammarLessonCreateWithoutTopicInput, GrammarLessonUncheckedCreateWithoutTopicInput>
  }

  export type GrammarLessonUpdateWithWhereUniqueWithoutTopicInput = {
    where: GrammarLessonWhereUniqueInput
    data: XOR<GrammarLessonUpdateWithoutTopicInput, GrammarLessonUncheckedUpdateWithoutTopicInput>
  }

  export type GrammarLessonUpdateManyWithWhereWithoutTopicInput = {
    where: GrammarLessonScalarWhereInput
    data: XOR<GrammarLessonUpdateManyMutationInput, GrammarLessonUncheckedUpdateManyWithoutTopicInput>
  }

  export type GrammarLessonScalarWhereInput = {
    AND?: GrammarLessonScalarWhereInput | GrammarLessonScalarWhereInput[]
    OR?: GrammarLessonScalarWhereInput[]
    NOT?: GrammarLessonScalarWhereInput | GrammarLessonScalarWhereInput[]
    id?: IntFilter<"GrammarLesson"> | number
    topic_id?: IntFilter<"GrammarLesson"> | number
    title?: StringFilter<"GrammarLesson"> | string
    sub_title?: StringNullableFilter<"GrammarLesson"> | string | null
    path?: StringFilter<"GrammarLesson"> | string
    image?: StringNullableFilter<"GrammarLesson"> | string | null
  }

  export type GrammarTopicCreateWithoutLessonsInput = {
    title: string
    description?: string | null
    image?: string | null
  }

  export type GrammarTopicUncheckedCreateWithoutLessonsInput = {
    id?: number
    title: string
    description?: string | null
    image?: string | null
  }

  export type GrammarTopicCreateOrConnectWithoutLessonsInput = {
    where: GrammarTopicWhereUniqueInput
    create: XOR<GrammarTopicCreateWithoutLessonsInput, GrammarTopicUncheckedCreateWithoutLessonsInput>
  }

  export type UserGrammarLessonProgressCreateWithoutGrammarLessonInput = {
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutGrammarLessonProgressInput
  }

  export type UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput = {
    id?: number
    userId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressCreateOrConnectWithoutGrammarLessonInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    create: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput>
  }

  export type UserGrammarLessonProgressCreateManyGrammarLessonInputEnvelope = {
    data: UserGrammarLessonProgressCreateManyGrammarLessonInput | UserGrammarLessonProgressCreateManyGrammarLessonInput[]
    skipDuplicates?: boolean
  }

  export type GrammarTopicUpsertWithoutLessonsInput = {
    update: XOR<GrammarTopicUpdateWithoutLessonsInput, GrammarTopicUncheckedUpdateWithoutLessonsInput>
    create: XOR<GrammarTopicCreateWithoutLessonsInput, GrammarTopicUncheckedCreateWithoutLessonsInput>
    where?: GrammarTopicWhereInput
  }

  export type GrammarTopicUpdateToOneWithWhereWithoutLessonsInput = {
    where?: GrammarTopicWhereInput
    data: XOR<GrammarTopicUpdateWithoutLessonsInput, GrammarTopicUncheckedUpdateWithoutLessonsInput>
  }

  export type GrammarTopicUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarTopicUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGrammarLessonProgressUpsertWithWhereUniqueWithoutGrammarLessonInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    update: XOR<UserGrammarLessonProgressUpdateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedUpdateWithoutGrammarLessonInput>
    create: XOR<UserGrammarLessonProgressCreateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedCreateWithoutGrammarLessonInput>
  }

  export type UserGrammarLessonProgressUpdateWithWhereUniqueWithoutGrammarLessonInput = {
    where: UserGrammarLessonProgressWhereUniqueInput
    data: XOR<UserGrammarLessonProgressUpdateWithoutGrammarLessonInput, UserGrammarLessonProgressUncheckedUpdateWithoutGrammarLessonInput>
  }

  export type UserGrammarLessonProgressUpdateManyWithWhereWithoutGrammarLessonInput = {
    where: UserGrammarLessonProgressScalarWhereInput
    data: XOR<UserGrammarLessonProgressUpdateManyMutationInput, UserGrammarLessonProgressUncheckedUpdateManyWithoutGrammarLessonInput>
  }

  export type UserCreateWithoutTopicProgressInput = {
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    grammarLessonProgress?: UserGrammarLessonProgressCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTopicProgressInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTopicProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopicProgressInput, UserUncheckedCreateWithoutTopicProgressInput>
  }

  export type TopicCreateWithoutUserProgressInput = {
    name: string
    titleVN?: string | null
    image?: string | null
    parent?: TopicCreateNestedOneWithoutChildrenInput
    children?: TopicCreateNestedManyWithoutParentInput
    words?: WordCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutUserProgressInput = {
    id?: number
    name: string
    parent_id?: number | null
    titleVN?: string | null
    image?: string | null
    children?: TopicUncheckedCreateNestedManyWithoutParentInput
    words?: WordUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutUserProgressInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutUserProgressInput, TopicUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutTopicProgressInput = {
    update: XOR<UserUpdateWithoutTopicProgressInput, UserUncheckedUpdateWithoutTopicProgressInput>
    create: XOR<UserCreateWithoutTopicProgressInput, UserUncheckedCreateWithoutTopicProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTopicProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTopicProgressInput, UserUncheckedUpdateWithoutTopicProgressInput>
  }

  export type UserUpdateWithoutTopicProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grammarLessonProgress?: UserGrammarLessonProgressUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTopicProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicUpsertWithoutUserProgressInput = {
    update: XOR<TopicUpdateWithoutUserProgressInput, TopicUncheckedUpdateWithoutUserProgressInput>
    create: XOR<TopicCreateWithoutUserProgressInput, TopicUncheckedCreateWithoutUserProgressInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutUserProgressInput, TopicUncheckedUpdateWithoutUserProgressInput>
  }

  export type TopicUpdateWithoutUserProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TopicUpdateOneWithoutChildrenNestedInput
    children?: TopicUpdateManyWithoutParentNestedInput
    words?: WordUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutUserProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TopicUncheckedUpdateManyWithoutParentNestedInput
    words?: WordUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type UserCreateWithoutGrammarLessonProgressInput = {
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGrammarLessonProgressInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGrammarLessonProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGrammarLessonProgressInput, UserUncheckedCreateWithoutGrammarLessonProgressInput>
  }

  export type GrammarLessonCreateWithoutUserProgressInput = {
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
    topic: GrammarTopicCreateNestedOneWithoutLessonsInput
  }

  export type GrammarLessonUncheckedCreateWithoutUserProgressInput = {
    id?: number
    topic_id: number
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
  }

  export type GrammarLessonCreateOrConnectWithoutUserProgressInput = {
    where: GrammarLessonWhereUniqueInput
    create: XOR<GrammarLessonCreateWithoutUserProgressInput, GrammarLessonUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutGrammarLessonProgressInput = {
    update: XOR<UserUpdateWithoutGrammarLessonProgressInput, UserUncheckedUpdateWithoutGrammarLessonProgressInput>
    create: XOR<UserCreateWithoutGrammarLessonProgressInput, UserUncheckedCreateWithoutGrammarLessonProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGrammarLessonProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGrammarLessonProgressInput, UserUncheckedUpdateWithoutGrammarLessonProgressInput>
  }

  export type UserUpdateWithoutGrammarLessonProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGrammarLessonProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUncheckedUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GrammarLessonUpsertWithoutUserProgressInput = {
    update: XOR<GrammarLessonUpdateWithoutUserProgressInput, GrammarLessonUncheckedUpdateWithoutUserProgressInput>
    create: XOR<GrammarLessonCreateWithoutUserProgressInput, GrammarLessonUncheckedCreateWithoutUserProgressInput>
    where?: GrammarLessonWhereInput
  }

  export type GrammarLessonUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: GrammarLessonWhereInput
    data: XOR<GrammarLessonUpdateWithoutUserProgressInput, GrammarLessonUncheckedUpdateWithoutUserProgressInput>
  }

  export type GrammarLessonUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: GrammarTopicUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type GrammarLessonUncheckedUpdateWithoutUserProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSpeakingProgressCreateWithoutSpeakingInput = {
    learnedWords?: number
    user: UserCreateNestedOneWithoutUserSpeakingProgressInput
  }

  export type UserSpeakingProgressUncheckedCreateWithoutSpeakingInput = {
    id?: number
    userId: number
    learnedWords?: number
  }

  export type UserSpeakingProgressCreateOrConnectWithoutSpeakingInput = {
    where: UserSpeakingProgressWhereUniqueInput
    create: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput>
  }

  export type UserSpeakingProgressCreateManySpeakingInputEnvelope = {
    data: UserSpeakingProgressCreateManySpeakingInput | UserSpeakingProgressCreateManySpeakingInput[]
    skipDuplicates?: boolean
  }

  export type UserSpeakingProgressUpsertWithWhereUniqueWithoutSpeakingInput = {
    where: UserSpeakingProgressWhereUniqueInput
    update: XOR<UserSpeakingProgressUpdateWithoutSpeakingInput, UserSpeakingProgressUncheckedUpdateWithoutSpeakingInput>
    create: XOR<UserSpeakingProgressCreateWithoutSpeakingInput, UserSpeakingProgressUncheckedCreateWithoutSpeakingInput>
  }

  export type UserSpeakingProgressUpdateWithWhereUniqueWithoutSpeakingInput = {
    where: UserSpeakingProgressWhereUniqueInput
    data: XOR<UserSpeakingProgressUpdateWithoutSpeakingInput, UserSpeakingProgressUncheckedUpdateWithoutSpeakingInput>
  }

  export type UserSpeakingProgressUpdateManyWithWhereWithoutSpeakingInput = {
    where: UserSpeakingProgressScalarWhereInput
    data: XOR<UserSpeakingProgressUpdateManyMutationInput, UserSpeakingProgressUncheckedUpdateManyWithoutSpeakingInput>
  }

  export type UserCreateWithoutUserSpeakingProgressInput = {
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSpeakingProgressInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutUserInput
    dayLearned?: DayLearnedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSpeakingProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSpeakingProgressInput, UserUncheckedCreateWithoutUserSpeakingProgressInput>
  }

  export type SpeakingCreateWithoutUserProgressInput = {
    title: string
  }

  export type SpeakingUncheckedCreateWithoutUserProgressInput = {
    id?: number
    title: string
  }

  export type SpeakingCreateOrConnectWithoutUserProgressInput = {
    where: SpeakingWhereUniqueInput
    create: XOR<SpeakingCreateWithoutUserProgressInput, SpeakingUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutUserSpeakingProgressInput = {
    update: XOR<UserUpdateWithoutUserSpeakingProgressInput, UserUncheckedUpdateWithoutUserSpeakingProgressInput>
    create: XOR<UserCreateWithoutUserSpeakingProgressInput, UserUncheckedCreateWithoutUserSpeakingProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSpeakingProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSpeakingProgressInput, UserUncheckedUpdateWithoutUserSpeakingProgressInput>
  }

  export type UserUpdateWithoutUserSpeakingProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSpeakingProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUncheckedUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutUserNestedInput
    dayLearned?: DayLearnedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpeakingUpsertWithoutUserProgressInput = {
    update: XOR<SpeakingUpdateWithoutUserProgressInput, SpeakingUncheckedUpdateWithoutUserProgressInput>
    create: XOR<SpeakingCreateWithoutUserProgressInput, SpeakingUncheckedCreateWithoutUserProgressInput>
    where?: SpeakingWhereInput
  }

  export type SpeakingUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: SpeakingWhereInput
    data: XOR<SpeakingUpdateWithoutUserProgressInput, SpeakingUncheckedUpdateWithoutUserProgressInput>
  }

  export type SpeakingUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SpeakingUncheckedUpdateWithoutUserProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutDayLearnedInput = {
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDayLearnedInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    createdAt?: Date | string
    topicProgress?: UserTopicProgressUncheckedCreateNestedManyWithoutUserInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedCreateNestedManyWithoutUserInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDayLearnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDayLearnedInput, UserUncheckedCreateWithoutDayLearnedInput>
  }

  export type UserUpsertWithoutDayLearnedInput = {
    update: XOR<UserUpdateWithoutDayLearnedInput, UserUncheckedUpdateWithoutDayLearnedInput>
    create: XOR<UserCreateWithoutDayLearnedInput, UserUncheckedCreateWithoutDayLearnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDayLearnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDayLearnedInput, UserUncheckedUpdateWithoutDayLearnedInput>
  }

  export type UserUpdateWithoutDayLearnedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDayLearnedInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicProgress?: UserTopicProgressUncheckedUpdateManyWithoutUserNestedInput
    grammarLessonProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutUserNestedInput
    userSpeakingProgress?: UserSpeakingProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTopicProgressCreateManyUserInput = {
    id?: number
    topicId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressCreateManyUserInput = {
    id?: number
    grammarLessonId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserSpeakingProgressCreateManyUserInput = {
    id?: number
    spkId: number
    learnedWords?: number
  }

  export type DayLearnedCreateManyUserInput = {
    id?: number
    date: string
  }

  export type UserTopicProgressUpdateWithoutUserInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: TopicUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserTopicProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTopicProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressUpdateWithoutUserInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grammarLesson?: GrammarLessonUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserGrammarLessonProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarLessonId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarLessonId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSpeakingProgressUpdateWithoutUserInput = {
    learnedWords?: IntFieldUpdateOperationsInput | number
    speaking?: SpeakingUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSpeakingProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    spkId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type UserSpeakingProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    spkId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type DayLearnedUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DayLearnedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DayLearnedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateManyParentInput = {
    id?: number
    name: string
    titleVN?: string | null
    image?: string | null
  }

  export type WordCreateManyTopicInput = {
    id?: number
    word: string
    pos?: string | null
    phonetic?: string | null
    phonetic_text?: string | null
    phonetic_am?: string | null
    phonetic_am_text?: string | null
  }

  export type UserTopicProgressCreateManyTopicInput = {
    id?: number
    userId: number
    status?: $Enums.ProgressStatus
    learnedWords?: number
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TopicUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TopicUpdateManyWithoutParentNestedInput
    words?: WordUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TopicUncheckedUpdateManyWithoutParentNestedInput
    words?: WordUncheckedUpdateManyWithoutTopicNestedInput
    userProgress?: UserTopicProgressUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    titleVN?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUpdateWithoutTopicInput = {
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    senses?: SenseUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
    senses?: SenseUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_text?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am?: NullableStringFieldUpdateOperationsInput | string | null
    phonetic_am_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTopicProgressUpdateWithoutTopicInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTopicProgressNestedInput
  }

  export type UserTopicProgressUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTopicProgressUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    learnedWords?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SenseCreateManyWordInput = {
    id?: number
    definition: string
  }

  export type SenseUpdateWithoutWordInput = {
    definition?: StringFieldUpdateOperationsInput | string
    examples?: ExampleUpdateManyWithoutSenseNestedInput
  }

  export type SenseUncheckedUpdateWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    definition?: StringFieldUpdateOperationsInput | string
    examples?: ExampleUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type SenseUncheckedUpdateManyWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    definition?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleCreateManySenseInput = {
    id?: number
    example_text: string
    cf?: string | null
  }

  export type ExampleUpdateWithoutSenseInput = {
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateWithoutSenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateManyWithoutSenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    example_text?: StringFieldUpdateOperationsInput | string
    cf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarLessonCreateManyTopicInput = {
    id?: number
    title: string
    sub_title?: string | null
    path: string
    image?: string | null
  }

  export type GrammarLessonUpdateWithoutTopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userProgress?: UserGrammarLessonProgressUpdateManyWithoutGrammarLessonNestedInput
  }

  export type GrammarLessonUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userProgress?: UserGrammarLessonProgressUncheckedUpdateManyWithoutGrammarLessonNestedInput
  }

  export type GrammarLessonUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGrammarLessonProgressCreateManyGrammarLessonInput = {
    id?: number
    userId: number
    status?: $Enums.ProgressStatus
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserGrammarLessonProgressUpdateWithoutGrammarLessonInput = {
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGrammarLessonProgressNestedInput
  }

  export type UserGrammarLessonProgressUncheckedUpdateWithoutGrammarLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGrammarLessonProgressUncheckedUpdateManyWithoutGrammarLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSpeakingProgressCreateManySpeakingInput = {
    id?: number
    userId: number
    learnedWords?: number
  }

  export type UserSpeakingProgressUpdateWithoutSpeakingInput = {
    learnedWords?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserSpeakingProgressNestedInput
  }

  export type UserSpeakingProgressUncheckedUpdateWithoutSpeakingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }

  export type UserSpeakingProgressUncheckedUpdateManyWithoutSpeakingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    learnedWords?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}