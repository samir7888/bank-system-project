
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
 * Model p2pTransfer
 * 
 */
export type p2pTransfer = $Result.DefaultSelection<Prisma.$p2pTransferPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model MaintenanceAlert
 * 
 */
export type MaintenanceAlert = $Result.DefaultSelection<Prisma.$MaintenanceAlertPayload>
/**
 * Model EmergencyCredit
 * 
 */
export type EmergencyCredit = $Result.DefaultSelection<Prisma.$EmergencyCreditPayload>

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
   * `prisma.p2pTransfer`: Exposes CRUD operations for the **p2pTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2pTransfers
    * const p2pTransfers = await prisma.p2pTransfer.findMany()
    * ```
    */
  get p2pTransfer(): Prisma.p2pTransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceAlert`: Exposes CRUD operations for the **MaintenanceAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceAlerts
    * const maintenanceAlerts = await prisma.maintenanceAlert.findMany()
    * ```
    */
  get maintenanceAlert(): Prisma.MaintenanceAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyCredit`: Exposes CRUD operations for the **EmergencyCredit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyCredits
    * const emergencyCredits = await prisma.emergencyCredit.findMany()
    * ```
    */
  get emergencyCredit(): Prisma.EmergencyCreditDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    p2pTransfer: 'p2pTransfer',
    Balance: 'Balance',
    MaintenanceAlert: 'MaintenanceAlert',
    EmergencyCredit: 'EmergencyCredit'
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
      modelProps: "user" | "p2pTransfer" | "balance" | "maintenanceAlert" | "emergencyCredit"
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
      p2pTransfer: {
        payload: Prisma.$p2pTransferPayload<ExtArgs>
        fields: Prisma.p2pTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.p2pTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.p2pTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          findFirst: {
            args: Prisma.p2pTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.p2pTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          findMany: {
            args: Prisma.p2pTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          create: {
            args: Prisma.p2pTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          createMany: {
            args: Prisma.p2pTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.p2pTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          delete: {
            args: Prisma.p2pTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          update: {
            args: Prisma.p2pTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          deleteMany: {
            args: Prisma.p2pTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.p2pTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.p2pTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>[]
          }
          upsert: {
            args: Prisma.p2pTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransferPayload>
          }
          aggregate: {
            args: Prisma.P2pTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2pTransfer>
          }
          groupBy: {
            args: Prisma.p2pTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.p2pTransferCountArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceAlert: {
        payload: Prisma.$MaintenanceAlertPayload<ExtArgs>
        fields: Prisma.MaintenanceAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          findMany: {
            args: Prisma.MaintenanceAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>[]
          }
          create: {
            args: Prisma.MaintenanceAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          createMany: {
            args: Prisma.MaintenanceAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          update: {
            args: Prisma.MaintenanceAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceAlertPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceAlert>
          }
          groupBy: {
            args: Prisma.MaintenanceAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceAlertCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceAlertCountAggregateOutputType> | number
          }
        }
      }
      EmergencyCredit: {
        payload: Prisma.$EmergencyCreditPayload<ExtArgs>
        fields: Prisma.EmergencyCreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyCreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyCreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          findFirst: {
            args: Prisma.EmergencyCreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyCreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          findMany: {
            args: Prisma.EmergencyCreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>[]
          }
          create: {
            args: Prisma.EmergencyCreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          createMany: {
            args: Prisma.EmergencyCreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyCreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>[]
          }
          delete: {
            args: Prisma.EmergencyCreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          update: {
            args: Prisma.EmergencyCreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyCreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyCreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyCreditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyCreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyCreditPayload>
          }
          aggregate: {
            args: Prisma.EmergencyCreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyCredit>
          }
          groupBy: {
            args: Prisma.EmergencyCreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyCreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyCreditCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyCreditCountAggregateOutputType> | number
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
    p2pTransfer?: p2pTransferOmit
    balance?: BalanceOmit
    maintenanceAlert?: MaintenanceAlertOmit
    emergencyCredit?: EmergencyCreditOmit
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
    Balance: number
    sentTransfers: number
    receivedTransfers: number
    emergencyCredits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | UserCountOutputTypeCountBalanceArgs
    sentTransfers?: boolean | UserCountOutputTypeCountSentTransfersArgs
    receivedTransfers?: boolean | UserCountOutputTypeCountReceivedTransfersArgs
    emergencyCredits?: boolean | UserCountOutputTypeCountEmergencyCreditsArgs
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
  export type UserCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyCreditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyCreditWhereInput
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
    email: string | null
    password: string | null
    name: string | null
    number: string | null
    isFrozen: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    number: string | null
    isFrozen: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    number: number
    isFrozen: number
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
    email?: true
    password?: true
    name?: true
    number?: true
    isFrozen?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    number?: true
    isFrozen?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    number?: true
    isFrozen?: true
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
    email: string | null
    password: string
    name: string | null
    number: string
    isFrozen: boolean
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
    email?: boolean
    password?: boolean
    name?: boolean
    number?: boolean
    isFrozen?: boolean
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    sentTransfers?: boolean | User$sentTransfersArgs<ExtArgs>
    receivedTransfers?: boolean | User$receivedTransfersArgs<ExtArgs>
    emergencyCredits?: boolean | User$emergencyCreditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    number?: boolean
    isFrozen?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    number?: boolean
    isFrozen?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    number?: boolean
    isFrozen?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "number" | "isFrozen", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    sentTransfers?: boolean | User$sentTransfersArgs<ExtArgs>
    receivedTransfers?: boolean | User$receivedTransfersArgs<ExtArgs>
    emergencyCredits?: boolean | User$emergencyCreditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Balance: Prisma.$BalancePayload<ExtArgs>[]
      sentTransfers: Prisma.$p2pTransferPayload<ExtArgs>[]
      receivedTransfers: Prisma.$p2pTransferPayload<ExtArgs>[]
      emergencyCredits: Prisma.$EmergencyCreditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      password: string
      name: string | null
      number: string
      isFrozen: boolean
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
    Balance<T extends User$BalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$BalanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentTransfers<T extends User$sentTransfersArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTransfers<T extends User$receivedTransfersArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emergencyCredits<T extends User$emergencyCreditsArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyCreditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly isFrozen: FieldRef<"User", 'Boolean'>
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
   * User.Balance
   */
  export type User$BalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    cursor?: BalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * User.sentTransfers
   */
  export type User$sentTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    cursor?: p2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * User.receivedTransfers
   */
  export type User$receivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    cursor?: p2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * User.emergencyCredits
   */
  export type User$emergencyCreditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    where?: EmergencyCreditWhereInput
    orderBy?: EmergencyCreditOrderByWithRelationInput | EmergencyCreditOrderByWithRelationInput[]
    cursor?: EmergencyCreditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyCreditScalarFieldEnum | EmergencyCreditScalarFieldEnum[]
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
   * Model p2pTransfer
   */

  export type AggregateP2pTransfer = {
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  export type P2pTransferAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type P2pTransferSumAggregateOutputType = {
    id: number | null
    amount: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type P2pTransferMinAggregateOutputType = {
    id: number | null
    amount: number | null
    timestamp: Date | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type P2pTransferMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    timestamp: Date | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type P2pTransferCountAggregateOutputType = {
    id: number
    amount: number
    timestamp: number
    fromUserId: number
    toUserId: number
    _all: number
  }


  export type P2pTransferAvgAggregateInputType = {
    id?: true
    amount?: true
    fromUserId?: true
    toUserId?: true
  }

  export type P2pTransferSumAggregateInputType = {
    id?: true
    amount?: true
    fromUserId?: true
    toUserId?: true
  }

  export type P2pTransferMinAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
  }

  export type P2pTransferMaxAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
  }

  export type P2pTransferCountAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
    _all?: true
  }

  export type P2pTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransfer to aggregate.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned p2pTransfers
    **/
    _count?: true | P2pTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2pTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2pTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2pTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2pTransferMaxAggregateInputType
  }

  export type GetP2pTransferAggregateType<T extends P2pTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateP2pTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2pTransfer[P]>
      : GetScalarType<T[P], AggregateP2pTransfer[P]>
  }




  export type p2pTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransferWhereInput
    orderBy?: p2pTransferOrderByWithAggregationInput | p2pTransferOrderByWithAggregationInput[]
    by: P2pTransferScalarFieldEnum[] | P2pTransferScalarFieldEnum
    having?: p2pTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2pTransferCountAggregateInputType | true
    _avg?: P2pTransferAvgAggregateInputType
    _sum?: P2pTransferSumAggregateInputType
    _min?: P2pTransferMinAggregateInputType
    _max?: P2pTransferMaxAggregateInputType
  }

  export type P2pTransferGroupByOutputType = {
    id: number
    amount: number
    timestamp: Date
    fromUserId: number
    toUserId: number
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  type GetP2pTransferGroupByPayload<T extends p2pTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2pTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2pTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
            : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
        }
      >
    >


  export type p2pTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type p2pTransferSelectScalar = {
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
  }

  export type p2pTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "timestamp" | "fromUserId" | "toUserId", ExtArgs["result"]["p2pTransfer"]>
  export type p2pTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $p2pTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "p2pTransfer"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      timestamp: Date
      fromUserId: number
      toUserId: number
    }, ExtArgs["result"]["p2pTransfer"]>
    composites: {}
  }

  type p2pTransferGetPayload<S extends boolean | null | undefined | p2pTransferDefaultArgs> = $Result.GetResult<Prisma.$p2pTransferPayload, S>

  type p2pTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<p2pTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: P2pTransferCountAggregateInputType | true
    }

  export interface p2pTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['p2pTransfer'], meta: { name: 'p2pTransfer' } }
    /**
     * Find zero or one P2pTransfer that matches the filter.
     * @param {p2pTransferFindUniqueArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends p2pTransferFindUniqueArgs>(args: SelectSubset<T, p2pTransferFindUniqueArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one P2pTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {p2pTransferFindUniqueOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends p2pTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, p2pTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindFirstArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends p2pTransferFindFirstArgs>(args?: SelectSubset<T, p2pTransferFindFirstArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindFirstOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends p2pTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, p2pTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more P2pTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany()
     * 
     * // Get first 10 P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends p2pTransferFindManyArgs>(args?: SelectSubset<T, p2pTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a P2pTransfer.
     * @param {p2pTransferCreateArgs} args - Arguments to create a P2pTransfer.
     * @example
     * // Create one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.create({
     *   data: {
     *     // ... data to create a P2pTransfer
     *   }
     * })
     * 
     */
    create<T extends p2pTransferCreateArgs>(args: SelectSubset<T, p2pTransferCreateArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many P2pTransfers.
     * @param {p2pTransferCreateManyArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends p2pTransferCreateManyArgs>(args?: SelectSubset<T, p2pTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2pTransfers and returns the data saved in the database.
     * @param {p2pTransferCreateManyAndReturnArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends p2pTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, p2pTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a P2pTransfer.
     * @param {p2pTransferDeleteArgs} args - Arguments to delete one P2pTransfer.
     * @example
     * // Delete one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.delete({
     *   where: {
     *     // ... filter to delete one P2pTransfer
     *   }
     * })
     * 
     */
    delete<T extends p2pTransferDeleteArgs>(args: SelectSubset<T, p2pTransferDeleteArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one P2pTransfer.
     * @param {p2pTransferUpdateArgs} args - Arguments to update one P2pTransfer.
     * @example
     * // Update one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends p2pTransferUpdateArgs>(args: SelectSubset<T, p2pTransferUpdateArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more P2pTransfers.
     * @param {p2pTransferDeleteManyArgs} args - Arguments to filter P2pTransfers to delete.
     * @example
     * // Delete a few P2pTransfers
     * const { count } = await prisma.p2pTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends p2pTransferDeleteManyArgs>(args?: SelectSubset<T, p2pTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends p2pTransferUpdateManyArgs>(args: SelectSubset<T, p2pTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers and returns the data updated in the database.
     * @param {p2pTransferUpdateManyAndReturnArgs} args - Arguments to update many P2pTransfers.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.updateManyAndReturn({
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
    updateManyAndReturn<T extends p2pTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, p2pTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one P2pTransfer.
     * @param {p2pTransferUpsertArgs} args - Arguments to update or create a P2pTransfer.
     * @example
     * // Update or create a P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.upsert({
     *   create: {
     *     // ... data to create a P2pTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2pTransfer we want to update
     *   }
     * })
     */
    upsert<T extends p2pTransferUpsertArgs>(args: SelectSubset<T, p2pTransferUpsertArgs<ExtArgs>>): Prisma__p2pTransferClient<$Result.GetResult<Prisma.$p2pTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferCountArgs} args - Arguments to filter P2pTransfers to count.
     * @example
     * // Count the number of P2pTransfers
     * const count = await prisma.p2pTransfer.count({
     *   where: {
     *     // ... the filter for the P2pTransfers we want to count
     *   }
     * })
    **/
    count<T extends p2pTransferCountArgs>(
      args?: Subset<T, p2pTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2pTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends P2pTransferAggregateArgs>(args: Subset<T, P2pTransferAggregateArgs>): Prisma.PrismaPromise<GetP2pTransferAggregateType<T>>

    /**
     * Group by P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransferGroupByArgs} args - Group by arguments.
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
      T extends p2pTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: p2pTransferGroupByArgs['orderBy'] }
        : { orderBy?: p2pTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, p2pTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2pTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the p2pTransfer model
   */
  readonly fields: p2pTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for p2pTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__p2pTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the p2pTransfer model
   */
  interface p2pTransferFieldRefs {
    readonly id: FieldRef<"p2pTransfer", 'Int'>
    readonly amount: FieldRef<"p2pTransfer", 'Int'>
    readonly timestamp: FieldRef<"p2pTransfer", 'DateTime'>
    readonly fromUserId: FieldRef<"p2pTransfer", 'Int'>
    readonly toUserId: FieldRef<"p2pTransfer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * p2pTransfer findUnique
   */
  export type p2pTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where: p2pTransferWhereUniqueInput
  }

  /**
   * p2pTransfer findUniqueOrThrow
   */
  export type p2pTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where: p2pTransferWhereUniqueInput
  }

  /**
   * p2pTransfer findFirst
   */
  export type p2pTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * p2pTransfer findFirstOrThrow
   */
  export type p2pTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfer to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * p2pTransfer findMany
   */
  export type p2pTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransfers to fetch.
     */
    where?: p2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransfers to fetch.
     */
    orderBy?: p2pTransferOrderByWithRelationInput | p2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing p2pTransfers.
     */
    cursor?: p2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransfers.
     */
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * p2pTransfer create
   */
  export type p2pTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a p2pTransfer.
     */
    data: XOR<p2pTransferCreateInput, p2pTransferUncheckedCreateInput>
  }

  /**
   * p2pTransfer createMany
   */
  export type p2pTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many p2pTransfers.
     */
    data: p2pTransferCreateManyInput | p2pTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * p2pTransfer createManyAndReturn
   */
  export type p2pTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * The data used to create many p2pTransfers.
     */
    data: p2pTransferCreateManyInput | p2pTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransfer update
   */
  export type p2pTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a p2pTransfer.
     */
    data: XOR<p2pTransferUpdateInput, p2pTransferUncheckedUpdateInput>
    /**
     * Choose, which p2pTransfer to update.
     */
    where: p2pTransferWhereUniqueInput
  }

  /**
   * p2pTransfer updateMany
   */
  export type p2pTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update p2pTransfers.
     */
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransfers to update
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to update.
     */
    limit?: number
  }

  /**
   * p2pTransfer updateManyAndReturn
   */
  export type p2pTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * The data used to update p2pTransfers.
     */
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransfers to update
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransfer upsert
   */
  export type p2pTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the p2pTransfer to update in case it exists.
     */
    where: p2pTransferWhereUniqueInput
    /**
     * In case the p2pTransfer found by the `where` argument doesn't exist, create a new p2pTransfer with this data.
     */
    create: XOR<p2pTransferCreateInput, p2pTransferUncheckedCreateInput>
    /**
     * In case the p2pTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<p2pTransferUpdateInput, p2pTransferUncheckedUpdateInput>
  }

  /**
   * p2pTransfer delete
   */
  export type p2pTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
    /**
     * Filter which p2pTransfer to delete.
     */
    where: p2pTransferWhereUniqueInput
  }

  /**
   * p2pTransfer deleteMany
   */
  export type p2pTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransfers to delete
     */
    where?: p2pTransferWhereInput
    /**
     * Limit how many p2pTransfers to delete.
     */
    limit?: number
  }

  /**
   * p2pTransfer without action
   */
  export type p2pTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransfer
     */
    select?: p2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransfer
     */
    omit?: p2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransferInclude<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    userId: number
    amount: number
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
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
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
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
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly userId: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceAlert
   */

  export type AggregateMaintenanceAlert = {
    _count: MaintenanceAlertCountAggregateOutputType | null
    _avg: MaintenanceAlertAvgAggregateOutputType | null
    _sum: MaintenanceAlertSumAggregateOutputType | null
    _min: MaintenanceAlertMinAggregateOutputType | null
    _max: MaintenanceAlertMaxAggregateOutputType | null
  }

  export type MaintenanceAlertAvgAggregateOutputType = {
    id: number | null
  }

  export type MaintenanceAlertSumAggregateOutputType = {
    id: number | null
  }

  export type MaintenanceAlertMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: string | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
  }

  export type MaintenanceAlertMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: string | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
  }

  export type MaintenanceAlertCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    startTime: number
    endTime: number
    createdAt: number
    _all: number
  }


  export type MaintenanceAlertAvgAggregateInputType = {
    id?: true
  }

  export type MaintenanceAlertSumAggregateInputType = {
    id?: true
  }

  export type MaintenanceAlertMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type MaintenanceAlertMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type MaintenanceAlertCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceAlert to aggregate.
     */
    where?: MaintenanceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceAlerts to fetch.
     */
    orderBy?: MaintenanceAlertOrderByWithRelationInput | MaintenanceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceAlerts
    **/
    _count?: true | MaintenanceAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceAlertMaxAggregateInputType
  }

  export type GetMaintenanceAlertAggregateType<T extends MaintenanceAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceAlert[P]>
      : GetScalarType<T[P], AggregateMaintenanceAlert[P]>
  }




  export type MaintenanceAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceAlertWhereInput
    orderBy?: MaintenanceAlertOrderByWithAggregationInput | MaintenanceAlertOrderByWithAggregationInput[]
    by: MaintenanceAlertScalarFieldEnum[] | MaintenanceAlertScalarFieldEnum
    having?: MaintenanceAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceAlertCountAggregateInputType | true
    _avg?: MaintenanceAlertAvgAggregateInputType
    _sum?: MaintenanceAlertSumAggregateInputType
    _min?: MaintenanceAlertMinAggregateInputType
    _max?: MaintenanceAlertMaxAggregateInputType
  }

  export type MaintenanceAlertGroupByOutputType = {
    id: number
    title: string
    description: string
    type: string
    startTime: Date
    endTime: Date
    createdAt: Date
    _count: MaintenanceAlertCountAggregateOutputType | null
    _avg: MaintenanceAlertAvgAggregateOutputType | null
    _sum: MaintenanceAlertSumAggregateOutputType | null
    _min: MaintenanceAlertMinAggregateOutputType | null
    _max: MaintenanceAlertMaxAggregateOutputType | null
  }

  type GetMaintenanceAlertGroupByPayload<T extends MaintenanceAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceAlertGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceAlertGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["maintenanceAlert"]>

  export type MaintenanceAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["maintenanceAlert"]>

  export type MaintenanceAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["maintenanceAlert"]>

  export type MaintenanceAlertSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }

  export type MaintenanceAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "startTime" | "endTime" | "createdAt", ExtArgs["result"]["maintenanceAlert"]>

  export type $MaintenanceAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceAlert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      type: string
      startTime: Date
      endTime: Date
      createdAt: Date
    }, ExtArgs["result"]["maintenanceAlert"]>
    composites: {}
  }

  type MaintenanceAlertGetPayload<S extends boolean | null | undefined | MaintenanceAlertDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceAlertPayload, S>

  type MaintenanceAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceAlertCountAggregateInputType | true
    }

  export interface MaintenanceAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceAlert'], meta: { name: 'MaintenanceAlert' } }
    /**
     * Find zero or one MaintenanceAlert that matches the filter.
     * @param {MaintenanceAlertFindUniqueArgs} args - Arguments to find a MaintenanceAlert
     * @example
     * // Get one MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceAlertFindUniqueArgs>(args: SelectSubset<T, MaintenanceAlertFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceAlertFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceAlert
     * @example
     * // Get one MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertFindFirstArgs} args - Arguments to find a MaintenanceAlert
     * @example
     * // Get one MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceAlertFindFirstArgs>(args?: SelectSubset<T, MaintenanceAlertFindFirstArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertFindFirstOrThrowArgs} args - Arguments to find a MaintenanceAlert
     * @example
     * // Get one MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceAlerts
     * const maintenanceAlerts = await prisma.maintenanceAlert.findMany()
     * 
     * // Get first 10 MaintenanceAlerts
     * const maintenanceAlerts = await prisma.maintenanceAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceAlertWithIdOnly = await prisma.maintenanceAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceAlertFindManyArgs>(args?: SelectSubset<T, MaintenanceAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceAlert.
     * @param {MaintenanceAlertCreateArgs} args - Arguments to create a MaintenanceAlert.
     * @example
     * // Create one MaintenanceAlert
     * const MaintenanceAlert = await prisma.maintenanceAlert.create({
     *   data: {
     *     // ... data to create a MaintenanceAlert
     *   }
     * })
     * 
     */
    create<T extends MaintenanceAlertCreateArgs>(args: SelectSubset<T, MaintenanceAlertCreateArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceAlerts.
     * @param {MaintenanceAlertCreateManyArgs} args - Arguments to create many MaintenanceAlerts.
     * @example
     * // Create many MaintenanceAlerts
     * const maintenanceAlert = await prisma.maintenanceAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceAlertCreateManyArgs>(args?: SelectSubset<T, MaintenanceAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceAlerts and returns the data saved in the database.
     * @param {MaintenanceAlertCreateManyAndReturnArgs} args - Arguments to create many MaintenanceAlerts.
     * @example
     * // Create many MaintenanceAlerts
     * const maintenanceAlert = await prisma.maintenanceAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceAlerts and only return the `id`
     * const maintenanceAlertWithIdOnly = await prisma.maintenanceAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceAlert.
     * @param {MaintenanceAlertDeleteArgs} args - Arguments to delete one MaintenanceAlert.
     * @example
     * // Delete one MaintenanceAlert
     * const MaintenanceAlert = await prisma.maintenanceAlert.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceAlert
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceAlertDeleteArgs>(args: SelectSubset<T, MaintenanceAlertDeleteArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceAlert.
     * @param {MaintenanceAlertUpdateArgs} args - Arguments to update one MaintenanceAlert.
     * @example
     * // Update one MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceAlertUpdateArgs>(args: SelectSubset<T, MaintenanceAlertUpdateArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceAlerts.
     * @param {MaintenanceAlertDeleteManyArgs} args - Arguments to filter MaintenanceAlerts to delete.
     * @example
     * // Delete a few MaintenanceAlerts
     * const { count } = await prisma.maintenanceAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceAlertDeleteManyArgs>(args?: SelectSubset<T, MaintenanceAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceAlerts
     * const maintenanceAlert = await prisma.maintenanceAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceAlertUpdateManyArgs>(args: SelectSubset<T, MaintenanceAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceAlerts and returns the data updated in the database.
     * @param {MaintenanceAlertUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceAlerts.
     * @example
     * // Update many MaintenanceAlerts
     * const maintenanceAlert = await prisma.maintenanceAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceAlerts and only return the `id`
     * const maintenanceAlertWithIdOnly = await prisma.maintenanceAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaintenanceAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceAlert.
     * @param {MaintenanceAlertUpsertArgs} args - Arguments to update or create a MaintenanceAlert.
     * @example
     * // Update or create a MaintenanceAlert
     * const maintenanceAlert = await prisma.maintenanceAlert.upsert({
     *   create: {
     *     // ... data to create a MaintenanceAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceAlert we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceAlertUpsertArgs>(args: SelectSubset<T, MaintenanceAlertUpsertArgs<ExtArgs>>): Prisma__MaintenanceAlertClient<$Result.GetResult<Prisma.$MaintenanceAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertCountArgs} args - Arguments to filter MaintenanceAlerts to count.
     * @example
     * // Count the number of MaintenanceAlerts
     * const count = await prisma.maintenanceAlert.count({
     *   where: {
     *     // ... the filter for the MaintenanceAlerts we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceAlertCountArgs>(
      args?: Subset<T, MaintenanceAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAlertAggregateArgs>(args: Subset<T, MaintenanceAlertAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAlertAggregateType<T>>

    /**
     * Group by MaintenanceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAlertGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceAlertGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceAlert model
   */
  readonly fields: MaintenanceAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MaintenanceAlert model
   */
  interface MaintenanceAlertFieldRefs {
    readonly id: FieldRef<"MaintenanceAlert", 'Int'>
    readonly title: FieldRef<"MaintenanceAlert", 'String'>
    readonly description: FieldRef<"MaintenanceAlert", 'String'>
    readonly type: FieldRef<"MaintenanceAlert", 'String'>
    readonly startTime: FieldRef<"MaintenanceAlert", 'DateTime'>
    readonly endTime: FieldRef<"MaintenanceAlert", 'DateTime'>
    readonly createdAt: FieldRef<"MaintenanceAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceAlert findUnique
   */
  export type MaintenanceAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceAlert to fetch.
     */
    where: MaintenanceAlertWhereUniqueInput
  }

  /**
   * MaintenanceAlert findUniqueOrThrow
   */
  export type MaintenanceAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceAlert to fetch.
     */
    where: MaintenanceAlertWhereUniqueInput
  }

  /**
   * MaintenanceAlert findFirst
   */
  export type MaintenanceAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceAlert to fetch.
     */
    where?: MaintenanceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceAlerts to fetch.
     */
    orderBy?: MaintenanceAlertOrderByWithRelationInput | MaintenanceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceAlerts.
     */
    cursor?: MaintenanceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceAlerts.
     */
    distinct?: MaintenanceAlertScalarFieldEnum | MaintenanceAlertScalarFieldEnum[]
  }

  /**
   * MaintenanceAlert findFirstOrThrow
   */
  export type MaintenanceAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceAlert to fetch.
     */
    where?: MaintenanceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceAlerts to fetch.
     */
    orderBy?: MaintenanceAlertOrderByWithRelationInput | MaintenanceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceAlerts.
     */
    cursor?: MaintenanceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceAlerts.
     */
    distinct?: MaintenanceAlertScalarFieldEnum | MaintenanceAlertScalarFieldEnum[]
  }

  /**
   * MaintenanceAlert findMany
   */
  export type MaintenanceAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceAlerts to fetch.
     */
    where?: MaintenanceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceAlerts to fetch.
     */
    orderBy?: MaintenanceAlertOrderByWithRelationInput | MaintenanceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceAlerts.
     */
    cursor?: MaintenanceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceAlerts.
     */
    skip?: number
    distinct?: MaintenanceAlertScalarFieldEnum | MaintenanceAlertScalarFieldEnum[]
  }

  /**
   * MaintenanceAlert create
   */
  export type MaintenanceAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceAlert.
     */
    data: XOR<MaintenanceAlertCreateInput, MaintenanceAlertUncheckedCreateInput>
  }

  /**
   * MaintenanceAlert createMany
   */
  export type MaintenanceAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceAlerts.
     */
    data: MaintenanceAlertCreateManyInput | MaintenanceAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceAlert createManyAndReturn
   */
  export type MaintenanceAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceAlerts.
     */
    data: MaintenanceAlertCreateManyInput | MaintenanceAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceAlert update
   */
  export type MaintenanceAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceAlert.
     */
    data: XOR<MaintenanceAlertUpdateInput, MaintenanceAlertUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceAlert to update.
     */
    where: MaintenanceAlertWhereUniqueInput
  }

  /**
   * MaintenanceAlert updateMany
   */
  export type MaintenanceAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceAlerts.
     */
    data: XOR<MaintenanceAlertUpdateManyMutationInput, MaintenanceAlertUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceAlerts to update
     */
    where?: MaintenanceAlertWhereInput
    /**
     * Limit how many MaintenanceAlerts to update.
     */
    limit?: number
  }

  /**
   * MaintenanceAlert updateManyAndReturn
   */
  export type MaintenanceAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceAlerts.
     */
    data: XOR<MaintenanceAlertUpdateManyMutationInput, MaintenanceAlertUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceAlerts to update
     */
    where?: MaintenanceAlertWhereInput
    /**
     * Limit how many MaintenanceAlerts to update.
     */
    limit?: number
  }

  /**
   * MaintenanceAlert upsert
   */
  export type MaintenanceAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceAlert to update in case it exists.
     */
    where: MaintenanceAlertWhereUniqueInput
    /**
     * In case the MaintenanceAlert found by the `where` argument doesn't exist, create a new MaintenanceAlert with this data.
     */
    create: XOR<MaintenanceAlertCreateInput, MaintenanceAlertUncheckedCreateInput>
    /**
     * In case the MaintenanceAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceAlertUpdateInput, MaintenanceAlertUncheckedUpdateInput>
  }

  /**
   * MaintenanceAlert delete
   */
  export type MaintenanceAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
    /**
     * Filter which MaintenanceAlert to delete.
     */
    where: MaintenanceAlertWhereUniqueInput
  }

  /**
   * MaintenanceAlert deleteMany
   */
  export type MaintenanceAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceAlerts to delete
     */
    where?: MaintenanceAlertWhereInput
    /**
     * Limit how many MaintenanceAlerts to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceAlert without action
   */
  export type MaintenanceAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceAlert
     */
    select?: MaintenanceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceAlert
     */
    omit?: MaintenanceAlertOmit<ExtArgs> | null
  }


  /**
   * Model EmergencyCredit
   */

  export type AggregateEmergencyCredit = {
    _count: EmergencyCreditCountAggregateOutputType | null
    _avg: EmergencyCreditAvgAggregateOutputType | null
    _sum: EmergencyCreditSumAggregateOutputType | null
    _min: EmergencyCreditMinAggregateOutputType | null
    _max: EmergencyCreditMaxAggregateOutputType | null
  }

  export type EmergencyCreditAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type EmergencyCreditSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type EmergencyCreditMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    isUsed: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type EmergencyCreditMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    isUsed: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type EmergencyCreditCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    isUsed: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type EmergencyCreditAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type EmergencyCreditSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type EmergencyCreditMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
  }

  export type EmergencyCreditMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
  }

  export type EmergencyCreditCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type EmergencyCreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyCredit to aggregate.
     */
    where?: EmergencyCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyCredits to fetch.
     */
    orderBy?: EmergencyCreditOrderByWithRelationInput | EmergencyCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyCredits
    **/
    _count?: true | EmergencyCreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyCreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyCreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyCreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyCreditMaxAggregateInputType
  }

  export type GetEmergencyCreditAggregateType<T extends EmergencyCreditAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyCredit[P]>
      : GetScalarType<T[P], AggregateEmergencyCredit[P]>
  }




  export type EmergencyCreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyCreditWhereInput
    orderBy?: EmergencyCreditOrderByWithAggregationInput | EmergencyCreditOrderByWithAggregationInput[]
    by: EmergencyCreditScalarFieldEnum[] | EmergencyCreditScalarFieldEnum
    having?: EmergencyCreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyCreditCountAggregateInputType | true
    _avg?: EmergencyCreditAvgAggregateInputType
    _sum?: EmergencyCreditSumAggregateInputType
    _min?: EmergencyCreditMinAggregateInputType
    _max?: EmergencyCreditMaxAggregateInputType
  }

  export type EmergencyCreditGroupByOutputType = {
    id: number
    userId: number
    amount: number
    isUsed: boolean
    createdAt: Date
    expiresAt: Date
    _count: EmergencyCreditCountAggregateOutputType | null
    _avg: EmergencyCreditAvgAggregateOutputType | null
    _sum: EmergencyCreditSumAggregateOutputType | null
    _min: EmergencyCreditMinAggregateOutputType | null
    _max: EmergencyCreditMaxAggregateOutputType | null
  }

  type GetEmergencyCreditGroupByPayload<T extends EmergencyCreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyCreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyCreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyCreditGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyCreditGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyCreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyCredit"]>

  export type EmergencyCreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyCredit"]>

  export type EmergencyCreditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyCredit"]>

  export type EmergencyCreditSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type EmergencyCreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "isUsed" | "createdAt" | "expiresAt", ExtArgs["result"]["emergencyCredit"]>
  export type EmergencyCreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyCreditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyCreditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmergencyCreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyCredit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      isUsed: boolean
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["emergencyCredit"]>
    composites: {}
  }

  type EmergencyCreditGetPayload<S extends boolean | null | undefined | EmergencyCreditDefaultArgs> = $Result.GetResult<Prisma.$EmergencyCreditPayload, S>

  type EmergencyCreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyCreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyCreditCountAggregateInputType | true
    }

  export interface EmergencyCreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyCredit'], meta: { name: 'EmergencyCredit' } }
    /**
     * Find zero or one EmergencyCredit that matches the filter.
     * @param {EmergencyCreditFindUniqueArgs} args - Arguments to find a EmergencyCredit
     * @example
     * // Get one EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyCreditFindUniqueArgs>(args: SelectSubset<T, EmergencyCreditFindUniqueArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyCredit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyCreditFindUniqueOrThrowArgs} args - Arguments to find a EmergencyCredit
     * @example
     * // Get one EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyCreditFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyCredit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditFindFirstArgs} args - Arguments to find a EmergencyCredit
     * @example
     * // Get one EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyCreditFindFirstArgs>(args?: SelectSubset<T, EmergencyCreditFindFirstArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyCredit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditFindFirstOrThrowArgs} args - Arguments to find a EmergencyCredit
     * @example
     * // Get one EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyCreditFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyCredits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyCredits
     * const emergencyCredits = await prisma.emergencyCredit.findMany()
     * 
     * // Get first 10 EmergencyCredits
     * const emergencyCredits = await prisma.emergencyCredit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyCreditWithIdOnly = await prisma.emergencyCredit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyCreditFindManyArgs>(args?: SelectSubset<T, EmergencyCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyCredit.
     * @param {EmergencyCreditCreateArgs} args - Arguments to create a EmergencyCredit.
     * @example
     * // Create one EmergencyCredit
     * const EmergencyCredit = await prisma.emergencyCredit.create({
     *   data: {
     *     // ... data to create a EmergencyCredit
     *   }
     * })
     * 
     */
    create<T extends EmergencyCreditCreateArgs>(args: SelectSubset<T, EmergencyCreditCreateArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyCredits.
     * @param {EmergencyCreditCreateManyArgs} args - Arguments to create many EmergencyCredits.
     * @example
     * // Create many EmergencyCredits
     * const emergencyCredit = await prisma.emergencyCredit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyCreditCreateManyArgs>(args?: SelectSubset<T, EmergencyCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyCredits and returns the data saved in the database.
     * @param {EmergencyCreditCreateManyAndReturnArgs} args - Arguments to create many EmergencyCredits.
     * @example
     * // Create many EmergencyCredits
     * const emergencyCredit = await prisma.emergencyCredit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyCredits and only return the `id`
     * const emergencyCreditWithIdOnly = await prisma.emergencyCredit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyCreditCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyCreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyCredit.
     * @param {EmergencyCreditDeleteArgs} args - Arguments to delete one EmergencyCredit.
     * @example
     * // Delete one EmergencyCredit
     * const EmergencyCredit = await prisma.emergencyCredit.delete({
     *   where: {
     *     // ... filter to delete one EmergencyCredit
     *   }
     * })
     * 
     */
    delete<T extends EmergencyCreditDeleteArgs>(args: SelectSubset<T, EmergencyCreditDeleteArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyCredit.
     * @param {EmergencyCreditUpdateArgs} args - Arguments to update one EmergencyCredit.
     * @example
     * // Update one EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyCreditUpdateArgs>(args: SelectSubset<T, EmergencyCreditUpdateArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyCredits.
     * @param {EmergencyCreditDeleteManyArgs} args - Arguments to filter EmergencyCredits to delete.
     * @example
     * // Delete a few EmergencyCredits
     * const { count } = await prisma.emergencyCredit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyCreditDeleteManyArgs>(args?: SelectSubset<T, EmergencyCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyCredits
     * const emergencyCredit = await prisma.emergencyCredit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyCreditUpdateManyArgs>(args: SelectSubset<T, EmergencyCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyCredits and returns the data updated in the database.
     * @param {EmergencyCreditUpdateManyAndReturnArgs} args - Arguments to update many EmergencyCredits.
     * @example
     * // Update many EmergencyCredits
     * const emergencyCredit = await prisma.emergencyCredit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyCredits and only return the `id`
     * const emergencyCreditWithIdOnly = await prisma.emergencyCredit.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyCreditUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyCreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyCredit.
     * @param {EmergencyCreditUpsertArgs} args - Arguments to update or create a EmergencyCredit.
     * @example
     * // Update or create a EmergencyCredit
     * const emergencyCredit = await prisma.emergencyCredit.upsert({
     *   create: {
     *     // ... data to create a EmergencyCredit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyCredit we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyCreditUpsertArgs>(args: SelectSubset<T, EmergencyCreditUpsertArgs<ExtArgs>>): Prisma__EmergencyCreditClient<$Result.GetResult<Prisma.$EmergencyCreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditCountArgs} args - Arguments to filter EmergencyCredits to count.
     * @example
     * // Count the number of EmergencyCredits
     * const count = await prisma.emergencyCredit.count({
     *   where: {
     *     // ... the filter for the EmergencyCredits we want to count
     *   }
     * })
    **/
    count<T extends EmergencyCreditCountArgs>(
      args?: Subset<T, EmergencyCreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyCreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyCreditAggregateArgs>(args: Subset<T, EmergencyCreditAggregateArgs>): Prisma.PrismaPromise<GetEmergencyCreditAggregateType<T>>

    /**
     * Group by EmergencyCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyCreditGroupByArgs} args - Group by arguments.
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
      T extends EmergencyCreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyCreditGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyCreditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyCredit model
   */
  readonly fields: EmergencyCreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyCredit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyCreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmergencyCredit model
   */
  interface EmergencyCreditFieldRefs {
    readonly id: FieldRef<"EmergencyCredit", 'Int'>
    readonly userId: FieldRef<"EmergencyCredit", 'Int'>
    readonly amount: FieldRef<"EmergencyCredit", 'Int'>
    readonly isUsed: FieldRef<"EmergencyCredit", 'Boolean'>
    readonly createdAt: FieldRef<"EmergencyCredit", 'DateTime'>
    readonly expiresAt: FieldRef<"EmergencyCredit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyCredit findUnique
   */
  export type EmergencyCreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyCredit to fetch.
     */
    where: EmergencyCreditWhereUniqueInput
  }

  /**
   * EmergencyCredit findUniqueOrThrow
   */
  export type EmergencyCreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyCredit to fetch.
     */
    where: EmergencyCreditWhereUniqueInput
  }

  /**
   * EmergencyCredit findFirst
   */
  export type EmergencyCreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyCredit to fetch.
     */
    where?: EmergencyCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyCredits to fetch.
     */
    orderBy?: EmergencyCreditOrderByWithRelationInput | EmergencyCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyCredits.
     */
    cursor?: EmergencyCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyCredits.
     */
    distinct?: EmergencyCreditScalarFieldEnum | EmergencyCreditScalarFieldEnum[]
  }

  /**
   * EmergencyCredit findFirstOrThrow
   */
  export type EmergencyCreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyCredit to fetch.
     */
    where?: EmergencyCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyCredits to fetch.
     */
    orderBy?: EmergencyCreditOrderByWithRelationInput | EmergencyCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyCredits.
     */
    cursor?: EmergencyCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyCredits.
     */
    distinct?: EmergencyCreditScalarFieldEnum | EmergencyCreditScalarFieldEnum[]
  }

  /**
   * EmergencyCredit findMany
   */
  export type EmergencyCreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyCredits to fetch.
     */
    where?: EmergencyCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyCredits to fetch.
     */
    orderBy?: EmergencyCreditOrderByWithRelationInput | EmergencyCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyCredits.
     */
    cursor?: EmergencyCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyCredits.
     */
    skip?: number
    distinct?: EmergencyCreditScalarFieldEnum | EmergencyCreditScalarFieldEnum[]
  }

  /**
   * EmergencyCredit create
   */
  export type EmergencyCreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyCredit.
     */
    data: XOR<EmergencyCreditCreateInput, EmergencyCreditUncheckedCreateInput>
  }

  /**
   * EmergencyCredit createMany
   */
  export type EmergencyCreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyCredits.
     */
    data: EmergencyCreditCreateManyInput | EmergencyCreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyCredit createManyAndReturn
   */
  export type EmergencyCreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyCredits.
     */
    data: EmergencyCreditCreateManyInput | EmergencyCreditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyCredit update
   */
  export type EmergencyCreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyCredit.
     */
    data: XOR<EmergencyCreditUpdateInput, EmergencyCreditUncheckedUpdateInput>
    /**
     * Choose, which EmergencyCredit to update.
     */
    where: EmergencyCreditWhereUniqueInput
  }

  /**
   * EmergencyCredit updateMany
   */
  export type EmergencyCreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyCredits.
     */
    data: XOR<EmergencyCreditUpdateManyMutationInput, EmergencyCreditUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyCredits to update
     */
    where?: EmergencyCreditWhereInput
    /**
     * Limit how many EmergencyCredits to update.
     */
    limit?: number
  }

  /**
   * EmergencyCredit updateManyAndReturn
   */
  export type EmergencyCreditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyCredits.
     */
    data: XOR<EmergencyCreditUpdateManyMutationInput, EmergencyCreditUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyCredits to update
     */
    where?: EmergencyCreditWhereInput
    /**
     * Limit how many EmergencyCredits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyCredit upsert
   */
  export type EmergencyCreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyCredit to update in case it exists.
     */
    where: EmergencyCreditWhereUniqueInput
    /**
     * In case the EmergencyCredit found by the `where` argument doesn't exist, create a new EmergencyCredit with this data.
     */
    create: XOR<EmergencyCreditCreateInput, EmergencyCreditUncheckedCreateInput>
    /**
     * In case the EmergencyCredit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyCreditUpdateInput, EmergencyCreditUncheckedUpdateInput>
  }

  /**
   * EmergencyCredit delete
   */
  export type EmergencyCreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
    /**
     * Filter which EmergencyCredit to delete.
     */
    where: EmergencyCreditWhereUniqueInput
  }

  /**
   * EmergencyCredit deleteMany
   */
  export type EmergencyCreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyCredits to delete
     */
    where?: EmergencyCreditWhereInput
    /**
     * Limit how many EmergencyCredits to delete.
     */
    limit?: number
  }

  /**
   * EmergencyCredit without action
   */
  export type EmergencyCreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyCredit
     */
    select?: EmergencyCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyCredit
     */
    omit?: EmergencyCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyCreditInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    number: 'number',
    isFrozen: 'isFrozen'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const P2pTransferScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    timestamp: 'timestamp',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId'
  };

  export type P2pTransferScalarFieldEnum = (typeof P2pTransferScalarFieldEnum)[keyof typeof P2pTransferScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const MaintenanceAlertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt'
  };

  export type MaintenanceAlertScalarFieldEnum = (typeof MaintenanceAlertScalarFieldEnum)[keyof typeof MaintenanceAlertScalarFieldEnum]


  export const EmergencyCreditScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    isUsed: 'isUsed',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type EmergencyCreditScalarFieldEnum = (typeof EmergencyCreditScalarFieldEnum)[keyof typeof EmergencyCreditScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    isFrozen?: BoolFilter<"User"> | boolean
    Balance?: BalanceListRelationFilter
    sentTransfers?: P2pTransferListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
    emergencyCredits?: EmergencyCreditListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    isFrozen?: SortOrder
    Balance?: BalanceOrderByRelationAggregateInput
    sentTransfers?: p2pTransferOrderByRelationAggregateInput
    receivedTransfers?: p2pTransferOrderByRelationAggregateInput
    emergencyCredits?: EmergencyCreditOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    isFrozen?: BoolFilter<"User"> | boolean
    Balance?: BalanceListRelationFilter
    sentTransfers?: P2pTransferListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
    emergencyCredits?: EmergencyCreditListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    isFrozen?: SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    isFrozen?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type p2pTransferWhereInput = {
    AND?: p2pTransferWhereInput | p2pTransferWhereInput[]
    OR?: p2pTransferWhereInput[]
    NOT?: p2pTransferWhereInput | p2pTransferWhereInput[]
    id?: IntFilter<"p2pTransfer"> | number
    amount?: IntFilter<"p2pTransfer"> | number
    timestamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    fromUserId?: IntFilter<"p2pTransfer"> | number
    toUserId?: IntFilter<"p2pTransfer"> | number
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type p2pTransferOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type p2pTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: p2pTransferWhereInput | p2pTransferWhereInput[]
    OR?: p2pTransferWhereInput[]
    NOT?: p2pTransferWhereInput | p2pTransferWhereInput[]
    amount?: IntFilter<"p2pTransfer"> | number
    timestamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    fromUserId?: IntFilter<"p2pTransfer"> | number
    toUserId?: IntFilter<"p2pTransfer"> | number
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type p2pTransferOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    _count?: p2pTransferCountOrderByAggregateInput
    _avg?: p2pTransferAvgOrderByAggregateInput
    _max?: p2pTransferMaxOrderByAggregateInput
    _min?: p2pTransferMinOrderByAggregateInput
    _sum?: p2pTransferSumOrderByAggregateInput
  }

  export type p2pTransferScalarWhereWithAggregatesInput = {
    AND?: p2pTransferScalarWhereWithAggregatesInput | p2pTransferScalarWhereWithAggregatesInput[]
    OR?: p2pTransferScalarWhereWithAggregatesInput[]
    NOT?: p2pTransferScalarWhereWithAggregatesInput | p2pTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"p2pTransfer"> | number
    amount?: IntWithAggregatesFilter<"p2pTransfer"> | number
    timestamp?: DateTimeWithAggregatesFilter<"p2pTransfer"> | Date | string
    fromUserId?: IntWithAggregatesFilter<"p2pTransfer"> | number
    toUserId?: IntWithAggregatesFilter<"p2pTransfer"> | number
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    userId?: IntWithAggregatesFilter<"Balance"> | number
    amount?: IntWithAggregatesFilter<"Balance"> | number
  }

  export type MaintenanceAlertWhereInput = {
    AND?: MaintenanceAlertWhereInput | MaintenanceAlertWhereInput[]
    OR?: MaintenanceAlertWhereInput[]
    NOT?: MaintenanceAlertWhereInput | MaintenanceAlertWhereInput[]
    id?: IntFilter<"MaintenanceAlert"> | number
    title?: StringFilter<"MaintenanceAlert"> | string
    description?: StringFilter<"MaintenanceAlert"> | string
    type?: StringFilter<"MaintenanceAlert"> | string
    startTime?: DateTimeFilter<"MaintenanceAlert"> | Date | string
    endTime?: DateTimeFilter<"MaintenanceAlert"> | Date | string
    createdAt?: DateTimeFilter<"MaintenanceAlert"> | Date | string
  }

  export type MaintenanceAlertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceAlertWhereInput | MaintenanceAlertWhereInput[]
    OR?: MaintenanceAlertWhereInput[]
    NOT?: MaintenanceAlertWhereInput | MaintenanceAlertWhereInput[]
    title?: StringFilter<"MaintenanceAlert"> | string
    description?: StringFilter<"MaintenanceAlert"> | string
    type?: StringFilter<"MaintenanceAlert"> | string
    startTime?: DateTimeFilter<"MaintenanceAlert"> | Date | string
    endTime?: DateTimeFilter<"MaintenanceAlert"> | Date | string
    createdAt?: DateTimeFilter<"MaintenanceAlert"> | Date | string
  }, "id">

  export type MaintenanceAlertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceAlertCountOrderByAggregateInput
    _avg?: MaintenanceAlertAvgOrderByAggregateInput
    _max?: MaintenanceAlertMaxOrderByAggregateInput
    _min?: MaintenanceAlertMinOrderByAggregateInput
    _sum?: MaintenanceAlertSumOrderByAggregateInput
  }

  export type MaintenanceAlertScalarWhereWithAggregatesInput = {
    AND?: MaintenanceAlertScalarWhereWithAggregatesInput | MaintenanceAlertScalarWhereWithAggregatesInput[]
    OR?: MaintenanceAlertScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceAlertScalarWhereWithAggregatesInput | MaintenanceAlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceAlert"> | number
    title?: StringWithAggregatesFilter<"MaintenanceAlert"> | string
    description?: StringWithAggregatesFilter<"MaintenanceAlert"> | string
    type?: StringWithAggregatesFilter<"MaintenanceAlert"> | string
    startTime?: DateTimeWithAggregatesFilter<"MaintenanceAlert"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"MaintenanceAlert"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceAlert"> | Date | string
  }

  export type EmergencyCreditWhereInput = {
    AND?: EmergencyCreditWhereInput | EmergencyCreditWhereInput[]
    OR?: EmergencyCreditWhereInput[]
    NOT?: EmergencyCreditWhereInput | EmergencyCreditWhereInput[]
    id?: IntFilter<"EmergencyCredit"> | number
    userId?: IntFilter<"EmergencyCredit"> | number
    amount?: IntFilter<"EmergencyCredit"> | number
    isUsed?: BoolFilter<"EmergencyCredit"> | boolean
    createdAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
    expiresAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmergencyCreditOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmergencyCreditWhereInput | EmergencyCreditWhereInput[]
    OR?: EmergencyCreditWhereInput[]
    NOT?: EmergencyCreditWhereInput | EmergencyCreditWhereInput[]
    userId?: IntFilter<"EmergencyCredit"> | number
    amount?: IntFilter<"EmergencyCredit"> | number
    isUsed?: BoolFilter<"EmergencyCredit"> | boolean
    createdAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
    expiresAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyCreditOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: EmergencyCreditCountOrderByAggregateInput
    _avg?: EmergencyCreditAvgOrderByAggregateInput
    _max?: EmergencyCreditMaxOrderByAggregateInput
    _min?: EmergencyCreditMinOrderByAggregateInput
    _sum?: EmergencyCreditSumOrderByAggregateInput
  }

  export type EmergencyCreditScalarWhereWithAggregatesInput = {
    AND?: EmergencyCreditScalarWhereWithAggregatesInput | EmergencyCreditScalarWhereWithAggregatesInput[]
    OR?: EmergencyCreditScalarWhereWithAggregatesInput[]
    NOT?: EmergencyCreditScalarWhereWithAggregatesInput | EmergencyCreditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmergencyCredit"> | number
    userId?: IntWithAggregatesFilter<"EmergencyCredit"> | number
    amount?: IntWithAggregatesFilter<"EmergencyCredit"> | number
    isUsed?: BoolWithAggregatesFilter<"EmergencyCredit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyCredit"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmergencyCredit"> | Date | string
  }

  export type UserCreateInput = {
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferUncheckedCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUncheckedUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type p2pTransferCreateInput = {
    amount: number
    timestamp: Date | string
    fromUser: UserCreateNestedOneWithoutSentTransfersInput
    toUser: UserCreateNestedOneWithoutReceivedTransfersInput
  }

  export type p2pTransferUncheckedCreateInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId: number
  }

  export type p2pTransferUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentTransfersNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedTransfersNestedInput
  }

  export type p2pTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferCreateManyInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId: number
  }

  export type p2pTransferUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateInput = {
    amount: number
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
  }

  export type BalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateManyInput = {
    id?: number
    userId: number
    amount: number
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type MaintenanceAlertCreateInput = {
    title: string
    description: string
    type: string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
  }

  export type MaintenanceAlertUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    type: string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
  }

  export type MaintenanceAlertUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceAlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceAlertCreateManyInput = {
    id?: number
    title: string
    description: string
    type: string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
  }

  export type MaintenanceAlertUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceAlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyCreditCreateInput = {
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutEmergencyCreditsInput
  }

  export type EmergencyCreditUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type EmergencyCreditUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergencyCreditsNestedInput
  }

  export type EmergencyCreditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyCreditCreateManyInput = {
    id?: number
    userId: number
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type EmergencyCreditUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyCreditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BalanceListRelationFilter = {
    every?: BalanceWhereInput
    some?: BalanceWhereInput
    none?: BalanceWhereInput
  }

  export type P2pTransferListRelationFilter = {
    every?: p2pTransferWhereInput
    some?: p2pTransferWhereInput
    none?: p2pTransferWhereInput
  }

  export type EmergencyCreditListRelationFilter = {
    every?: EmergencyCreditWhereInput
    some?: EmergencyCreditWhereInput
    none?: EmergencyCreditWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type p2pTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyCreditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isFrozen?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isFrozen?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isFrozen?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type p2pTransferCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type p2pTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type p2pTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type p2pTransferMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type p2pTransferSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
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

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type MaintenanceAlertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceAlertAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaintenanceAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceAlertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceAlertSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmergencyCreditCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmergencyCreditAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type EmergencyCreditMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmergencyCreditMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmergencyCreditSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type p2pTransferCreateNestedManyWithoutFromUserInput = {
    create?: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput> | p2pTransferCreateWithoutFromUserInput[] | p2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutFromUserInput | p2pTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: p2pTransferCreateManyFromUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type p2pTransferCreateNestedManyWithoutToUserInput = {
    create?: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput> | p2pTransferCreateWithoutToUserInput[] | p2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutToUserInput | p2pTransferCreateOrConnectWithoutToUserInput[]
    createMany?: p2pTransferCreateManyToUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type EmergencyCreditCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput> | EmergencyCreditCreateWithoutUserInput[] | EmergencyCreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyCreditCreateOrConnectWithoutUserInput | EmergencyCreditCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyCreditCreateManyUserInputEnvelope
    connect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type p2pTransferUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput> | p2pTransferCreateWithoutFromUserInput[] | p2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutFromUserInput | p2pTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: p2pTransferCreateManyFromUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type p2pTransferUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput> | p2pTransferCreateWithoutToUserInput[] | p2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutToUserInput | p2pTransferCreateOrConnectWithoutToUserInput[]
    createMany?: p2pTransferCreateManyToUserInputEnvelope
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
  }

  export type EmergencyCreditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput> | EmergencyCreditCreateWithoutUserInput[] | EmergencyCreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyCreditCreateOrConnectWithoutUserInput | EmergencyCreditCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyCreditCreateManyUserInputEnvelope
    connect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type p2pTransferUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput> | p2pTransferCreateWithoutFromUserInput[] | p2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutFromUserInput | p2pTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutFromUserInput | p2pTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: p2pTransferCreateManyFromUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutFromUserInput | p2pTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutFromUserInput | p2pTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type p2pTransferUpdateManyWithoutToUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput> | p2pTransferCreateWithoutToUserInput[] | p2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutToUserInput | p2pTransferCreateOrConnectWithoutToUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutToUserInput | p2pTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: p2pTransferCreateManyToUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutToUserInput | p2pTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutToUserInput | p2pTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type EmergencyCreditUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput> | EmergencyCreditCreateWithoutUserInput[] | EmergencyCreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyCreditCreateOrConnectWithoutUserInput | EmergencyCreditCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyCreditUpsertWithWhereUniqueWithoutUserInput | EmergencyCreditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyCreditCreateManyUserInputEnvelope
    set?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    disconnect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    delete?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    connect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    update?: EmergencyCreditUpdateWithWhereUniqueWithoutUserInput | EmergencyCreditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyCreditUpdateManyWithWhereWithoutUserInput | EmergencyCreditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyCreditScalarWhereInput | EmergencyCreditScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type p2pTransferUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput> | p2pTransferCreateWithoutFromUserInput[] | p2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutFromUserInput | p2pTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutFromUserInput | p2pTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: p2pTransferCreateManyFromUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutFromUserInput | p2pTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutFromUserInput | p2pTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type p2pTransferUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput> | p2pTransferCreateWithoutToUserInput[] | p2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: p2pTransferCreateOrConnectWithoutToUserInput | p2pTransferCreateOrConnectWithoutToUserInput[]
    upsert?: p2pTransferUpsertWithWhereUniqueWithoutToUserInput | p2pTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: p2pTransferCreateManyToUserInputEnvelope
    set?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    disconnect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    delete?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    connect?: p2pTransferWhereUniqueInput | p2pTransferWhereUniqueInput[]
    update?: p2pTransferUpdateWithWhereUniqueWithoutToUserInput | p2pTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: p2pTransferUpdateManyWithWhereWithoutToUserInput | p2pTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
  }

  export type EmergencyCreditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput> | EmergencyCreditCreateWithoutUserInput[] | EmergencyCreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyCreditCreateOrConnectWithoutUserInput | EmergencyCreditCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyCreditUpsertWithWhereUniqueWithoutUserInput | EmergencyCreditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyCreditCreateManyUserInputEnvelope
    set?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    disconnect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    delete?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    connect?: EmergencyCreditWhereUniqueInput | EmergencyCreditWhereUniqueInput[]
    update?: EmergencyCreditUpdateWithWhereUniqueWithoutUserInput | EmergencyCreditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyCreditUpdateManyWithWhereWithoutUserInput | EmergencyCreditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyCreditScalarWhereInput | EmergencyCreditScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentTransfersInput = {
    create?: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedTransfersInput = {
    create?: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSentTransfersNestedInput = {
    create?: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransfersInput
    upsert?: UserUpsertWithoutSentTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransfersInput, UserUpdateWithoutSentTransfersInput>, UserUncheckedUpdateWithoutSentTransfersInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedTransfersNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransfersInput
    upsert?: UserUpsertWithoutReceivedTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransfersInput, UserUpdateWithoutReceivedTransfersInput>, UserUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutEmergencyCreditsInput = {
    create?: XOR<UserCreateWithoutEmergencyCreditsInput, UserUncheckedCreateWithoutEmergencyCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyCreditsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmergencyCreditsNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyCreditsInput, UserUncheckedCreateWithoutEmergencyCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyCreditsInput
    upsert?: UserUpsertWithoutEmergencyCreditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyCreditsInput, UserUpdateWithoutEmergencyCreditsInput>, UserUncheckedUpdateWithoutEmergencyCreditsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BalanceCreateWithoutUserInput = {
    amount: number
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceCreateManyUserInputEnvelope = {
    data: BalanceCreateManyUserInput | BalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransferCreateWithoutFromUserInput = {
    amount: number
    timestamp: Date | string
    toUser: UserCreateNestedOneWithoutReceivedTransfersInput
  }

  export type p2pTransferUncheckedCreateWithoutFromUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    toUserId: number
  }

  export type p2pTransferCreateOrConnectWithoutFromUserInput = {
    where: p2pTransferWhereUniqueInput
    create: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput>
  }

  export type p2pTransferCreateManyFromUserInputEnvelope = {
    data: p2pTransferCreateManyFromUserInput | p2pTransferCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransferCreateWithoutToUserInput = {
    amount: number
    timestamp: Date | string
    fromUser: UserCreateNestedOneWithoutSentTransfersInput
  }

  export type p2pTransferUncheckedCreateWithoutToUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
  }

  export type p2pTransferCreateOrConnectWithoutToUserInput = {
    where: p2pTransferWhereUniqueInput
    create: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput>
  }

  export type p2pTransferCreateManyToUserInputEnvelope = {
    data: p2pTransferCreateManyToUserInput | p2pTransferCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyCreditCreateWithoutUserInput = {
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type EmergencyCreditUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type EmergencyCreditCreateOrConnectWithoutUserInput = {
    where: EmergencyCreditWhereUniqueInput
    create: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput>
  }

  export type EmergencyCreditCreateManyUserInputEnvelope = {
    data: EmergencyCreditCreateManyUserInput | EmergencyCreditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateManyWithWhereWithoutUserInput = {
    where: BalanceScalarWhereInput
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceScalarWhereInput = {
    AND?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    OR?: BalanceScalarWhereInput[]
    NOT?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
  }

  export type p2pTransferUpsertWithWhereUniqueWithoutFromUserInput = {
    where: p2pTransferWhereUniqueInput
    update: XOR<p2pTransferUpdateWithoutFromUserInput, p2pTransferUncheckedUpdateWithoutFromUserInput>
    create: XOR<p2pTransferCreateWithoutFromUserInput, p2pTransferUncheckedCreateWithoutFromUserInput>
  }

  export type p2pTransferUpdateWithWhereUniqueWithoutFromUserInput = {
    where: p2pTransferWhereUniqueInput
    data: XOR<p2pTransferUpdateWithoutFromUserInput, p2pTransferUncheckedUpdateWithoutFromUserInput>
  }

  export type p2pTransferUpdateManyWithWhereWithoutFromUserInput = {
    where: p2pTransferScalarWhereInput
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyWithoutFromUserInput>
  }

  export type p2pTransferScalarWhereInput = {
    AND?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
    OR?: p2pTransferScalarWhereInput[]
    NOT?: p2pTransferScalarWhereInput | p2pTransferScalarWhereInput[]
    id?: IntFilter<"p2pTransfer"> | number
    amount?: IntFilter<"p2pTransfer"> | number
    timestamp?: DateTimeFilter<"p2pTransfer"> | Date | string
    fromUserId?: IntFilter<"p2pTransfer"> | number
    toUserId?: IntFilter<"p2pTransfer"> | number
  }

  export type p2pTransferUpsertWithWhereUniqueWithoutToUserInput = {
    where: p2pTransferWhereUniqueInput
    update: XOR<p2pTransferUpdateWithoutToUserInput, p2pTransferUncheckedUpdateWithoutToUserInput>
    create: XOR<p2pTransferCreateWithoutToUserInput, p2pTransferUncheckedCreateWithoutToUserInput>
  }

  export type p2pTransferUpdateWithWhereUniqueWithoutToUserInput = {
    where: p2pTransferWhereUniqueInput
    data: XOR<p2pTransferUpdateWithoutToUserInput, p2pTransferUncheckedUpdateWithoutToUserInput>
  }

  export type p2pTransferUpdateManyWithWhereWithoutToUserInput = {
    where: p2pTransferScalarWhereInput
    data: XOR<p2pTransferUpdateManyMutationInput, p2pTransferUncheckedUpdateManyWithoutToUserInput>
  }

  export type EmergencyCreditUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyCreditWhereUniqueInput
    update: XOR<EmergencyCreditUpdateWithoutUserInput, EmergencyCreditUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyCreditCreateWithoutUserInput, EmergencyCreditUncheckedCreateWithoutUserInput>
  }

  export type EmergencyCreditUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyCreditWhereUniqueInput
    data: XOR<EmergencyCreditUpdateWithoutUserInput, EmergencyCreditUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyCreditUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyCreditScalarWhereInput
    data: XOR<EmergencyCreditUpdateManyMutationInput, EmergencyCreditUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyCreditScalarWhereInput = {
    AND?: EmergencyCreditScalarWhereInput | EmergencyCreditScalarWhereInput[]
    OR?: EmergencyCreditScalarWhereInput[]
    NOT?: EmergencyCreditScalarWhereInput | EmergencyCreditScalarWhereInput[]
    id?: IntFilter<"EmergencyCredit"> | number
    userId?: IntFilter<"EmergencyCredit"> | number
    amount?: IntFilter<"EmergencyCredit"> | number
    isUsed?: BoolFilter<"EmergencyCredit"> | boolean
    createdAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
    expiresAt?: DateTimeFilter<"EmergencyCredit"> | Date | string
  }

  export type UserCreateWithoutSentTransfersInput = {
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceCreateNestedManyWithoutUserInput
    receivedTransfers?: p2pTransferCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentTransfersInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    receivedTransfers?: p2pTransferUncheckedCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
  }

  export type UserCreateWithoutReceivedTransfersInput = {
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferCreateNestedManyWithoutFromUserInput
    emergencyCredits?: EmergencyCreditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedTransfersInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    emergencyCredits?: EmergencyCreditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
  }

  export type UserUpsertWithoutSentTransfersInput = {
    update: XOR<UserUpdateWithoutSentTransfersInput, UserUncheckedUpdateWithoutSentTransfersInput>
    create: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransfersInput, UserUncheckedUpdateWithoutSentTransfersInput>
  }

  export type UserUpdateWithoutSentTransfersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    receivedTransfers?: p2pTransferUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    receivedTransfers?: p2pTransferUncheckedUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedTransfersInput = {
    update: XOR<UserUpdateWithoutReceivedTransfersInput, UserUncheckedUpdateWithoutReceivedTransfersInput>
    create: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransfersInput, UserUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type UserUpdateWithoutReceivedTransfersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUpdateManyWithoutFromUserNestedInput
    emergencyCredits?: EmergencyCreditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    emergencyCredits?: EmergencyCreditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    sentTransfers?: p2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    sentTransfers?: p2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferUncheckedCreateNestedManyWithoutToUserInput
    emergencyCredits?: EmergencyCreditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    sentTransfers?: p2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    sentTransfers?: p2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUncheckedUpdateManyWithoutToUserNestedInput
    emergencyCredits?: EmergencyCreditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmergencyCreditsInput = {
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyCreditsInput = {
    id?: number
    email?: string | null
    password: string
    name?: string | null
    number: string
    isFrozen?: boolean
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: p2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: p2pTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyCreditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyCreditsInput, UserUncheckedCreateWithoutEmergencyCreditsInput>
  }

  export type UserUpsertWithoutEmergencyCreditsInput = {
    update: XOR<UserUpdateWithoutEmergencyCreditsInput, UserUncheckedUpdateWithoutEmergencyCreditsInput>
    create: XOR<UserCreateWithoutEmergencyCreditsInput, UserUncheckedCreateWithoutEmergencyCreditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyCreditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyCreditsInput, UserUncheckedUpdateWithoutEmergencyCreditsInput>
  }

  export type UserUpdateWithoutEmergencyCreditsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyCreditsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: p2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: p2pTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type BalanceCreateManyUserInput = {
    id?: number
    amount: number
  }

  export type p2pTransferCreateManyFromUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    toUserId: number
  }

  export type p2pTransferCreateManyToUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
  }

  export type EmergencyCreditCreateManyUserInput = {
    id?: number
    amount: number
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUpdateWithoutFromUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutReceivedTransfersNestedInput
  }

  export type p2pTransferUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUncheckedUpdateManyWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUpdateWithoutToUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentTransfersNestedInput
  }

  export type p2pTransferUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
  }

  export type p2pTransferUncheckedUpdateManyWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
  }

  export type EmergencyCreditUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyCreditUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyCreditUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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