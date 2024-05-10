export type Maybe<T> = T | null;

// Source: https://stackoverflow.com/a/59187769
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

// Pick an object property type
export type PickPropType<T, P extends keyof T> = T[P];
