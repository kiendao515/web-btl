import { DeepPartial } from './deep_partial.type';
export declare type EntityCondition<T> = {
    [key in keyof DeepPartial<T>]: number | string | EntityCondition<T>;
};
