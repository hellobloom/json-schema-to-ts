import { Get } from "../../utils/index.d.ts";
import { Resolve, MetaType, Never, Error } from "../index.d.ts";
import { ClearIntersections } from "../intersection/index.d.ts";
import { ExcludeFromAny } from "./any.d.ts";
import { ExcludeFromConst } from "./const.d.ts";
import { ExcludeFromEnum } from "./enum.d.ts";
import { ExcludeFromPrimitive } from "./primitive.d.ts";
import { ExcludeFromArray } from "./array.d.ts";
import { ExcludeFromTuple } from "./tuple.d.ts";
import { ExcludeFromObject } from "./object.d.ts";
import { DistributeUnion } from "./union.d.ts";
import { IsRepresentable } from "../utils.d.ts";
export declare type ExclusionType = "exclusion";
export declare type Exclusion<V, E> = {
    type: ExclusionType;
    value: V;
    excluded: E;
};
export declare type Value<E> = Get<E, "value">;
export declare type Excluded<E> = Get<E, "excluded">;
export declare type ResolveExclusion<E> = Resolve<Exclude<Value<E>, Excluded<E>>>;
export declare type Exclude<A, B> = {
    any: ExcludeFromAny<A, B>;
    never: Never;
    const: ExcludeFromConst<A, B>;
    enum: ExcludeFromEnum<A, B>;
    primitive: ExcludeFromPrimitive<A, B>;
    array: ExcludeFromArray<A, B>;
    tuple: ExcludeFromTuple<A, B>;
    object: ExcludeFromObject<A, B>;
    union: DistributeUnion<A, B>;
    intersection: Exclude<ClearIntersections<A>, B>;
    exclusion: Exclude<Exclude<Value<A>, Excluded<A>>, B>;
    error: A;
    errorMissingType: Error<"Missing type property in Exclusion source value">;
}[Get<A, "type"> extends MetaType ? Get<A, "type"> : "errorMissingType"];
export declare type IsExclusionRepresentable<E> = IsRepresentable<Exclude<Value<E>, Excluded<E>>>;