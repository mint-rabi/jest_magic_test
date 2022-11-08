import EventEmitter from "eventemitter3";

interface ExtendedPromise<T> extends Promise<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): ExtendedPromise<TResult1 | TResult2> & this;
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): ExtendedPromise<T | TResult> & this;
  finally(
    onfinally?: (() => void) | undefined | null
  ): ExtendedPromise<T> & this;
}

export declare type PromiEvent<
  TResult,
  TEvents extends EventsDefinition = void
> = ExtendedPromise<TResult> &
  TypedEmitter<
    TEvents extends void
      ? DefaultEvents<TResult>
      : TEvents & DefaultEvents<TResult>
  >;

declare type DefaultEvents<TResult> = {
  done: (result: TResult) => void;
  error: (reason: any) => void;
  settled: () => void;
};

export declare type EventsDefinition =
  | {
      [K in string | symbol]: (...args: any[]) => void;
    }
  | void;

export declare class TypedEmitter<
  Events extends EventsDefinition = void
> extends EventEmitter<Events extends void ? string | symbol : Events> {}

declare type LoginWithMagicLinkEvents = {
  'email-sent': () => void;
  'email-not-deliverable': () => void;
  retry: () => void;
};

export class AuthModule {
  login(): PromiEvent<string | null, LoginWithMagicLinkEvents & {
    done: (result: string | null) => void;
    error: (reason: any) => void;
    settled: () => void;
  }> {
    return
  }
}

