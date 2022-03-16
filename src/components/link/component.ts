import { LitElement, html, CSSResult, TemplateResult } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { classMap } from 'lit/directives/class-map.js'
import { styles } from './styles'
import { property } from 'lit/decorators/property.js'

export type LinkVariants = 'default' | 'success' | 'neutral' | 'warning' | 'danger'

/**
 * A link component
 *
 * @slot - Default slot
 *
 * @csspart base - Link that wraps everything
 */
export class KpcLink extends LitElement {
  @property({ reflect: true, type: String }) href?: string
  @property({ reflect: true, type: String }) rel: string = ''
  @property({ reflect: true, type: String }) target?: string
  @property({ reflect: true, type: String }) variant: LinkVariants = 'default'

  @property({ type: Boolean }) external: boolean = false

  static get variants (): LinkVariants[] {
    return ['default', 'success', 'neutral', 'warning', 'danger']
  }

  static get styles (): CSSResult {
    return styles
  }

  get externalRel (): string {
    return this.external ? `${this.rel} nofollow noopener noreferrer` : this.rel
  }

  get classes (): VariantMap<"link", LinkVariants> {
    return variantMap("link", this.variant, KpcLink.variants)
  }

  render (): TemplateResult {
    return html`
      <a
        part="base"
        href="${this.href}"
        class="${classMap(this.classes)}"
        rel=${ifDefined(this.externalRel)}
        target=${ifDefined(this.target)}>
        <slot></slot>
      </a>
    `
  }
}

export type VariantMap<Base extends string, Variant extends string> = Record<`${Base}--${Variant}` | `${Base}`, boolean>

function variantMap
  <Obj extends VariantMap<Base, Variant>, Base extends string, Variant extends string>
  (base: Base, variant: string, array: Array<Variant>): Obj
{
  return array.reduce<Obj>((obj: Obj, str: Variant) => {
    return { ...obj, [`${base}--${str}`]: variant === str }
  }, {} as Obj)
}

