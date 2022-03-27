import { classMap } from 'lit/directives/class-map.js'
import type { DirectiveClass, DirectiveResult } from 'lit/directive.js'

export type VariantMap = Record<string, boolean>

function variantMap<Base extends string, Variant extends string> (base: Base, variant: Variant, array: Variant[]): VariantMap {
  const obj: VariantMap = { [base]: true }

  return array.reduce<VariantMap>((obj: VariantMap, str: Variant) => {
    return { ...obj, [`${base}--${str}`]: variant === str }
  }, obj)
}

export function variantClassMap<Obj extends VariantMap & DirectiveClass, Base extends string, Variant extends string> (base: Base, variant: string, array: Variant[]): DirectiveResult<Obj> {
  return classMap(variantMap(base, variant, array))
}
