import { classMap } from 'lit/directives/class-map.js'
import type { DirectiveClass, DirectiveResult } from 'lit/directive.js'

export type VariantMap<Base extends string, Variant extends string> = Record<`${Base}--${Variant}` | `${Base}`, boolean>

function variantMap<Obj extends VariantMap<Base, Variant>, Base extends string, Variant extends string> (base: Base, variant: string, array: Array<Variant>): Obj {
  return array.reduce<Obj>((obj: Obj, str: Variant) => {
    return { ...obj, [`${base}--${str}`]: variant === str }
  }, {} as Obj)
}

export function variantClassMap<Obj extends VariantMap<Base, Variant> & DirectiveClass, Base extends string, Variant extends string> (base: Base, variant: string, array: Array<Variant>): DirectiveResult<Obj> {
  return classMap(variantMap(base, variant, array))
}
