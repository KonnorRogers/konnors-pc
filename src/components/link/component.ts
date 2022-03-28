import { LitElement, html, CSSResult, TemplateResult } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styles } from './styles'
import { property } from 'lit/decorators/property.js'
import { variantClassMap } from '../../variantMap'
import { Void } from '../../types'

export type LinkVariants = 'default' | 'success' | 'neutral' | 'warning' | 'danger'

/**
 * A link component
 *
 * @slot - Default slot
 *
 * @csspart base - Link that wraps everything
 */
export class KpcLink extends LitElement {
  // Custom
  @property({ reflect: true, type: String }) variant: LinkVariants = 'default'

  // Built ins.
  @property({ reflect: true, type: String }) href?: string
  @property({ reflect: true, type: String }) rel?: string
  @property({ reflect: true, type: String }) target?: string
  @property({ reflect: true, type: String }) type?: string
  @property({ reflect: true, type: String }) hreflang?: string
  @property({ reflect: true, type: String }) ping?: string
  @property({ reflect: true, type: String }) referrerpolicy?: string
  @property({ reflect: true, type: String }) download?: string

  @property({ type: Boolean }) external: boolean = false

  static get variants (): LinkVariants[] {
    return ['default', 'success', 'neutral', 'warning', 'danger']
  }

  static get styles (): CSSResult {
    return styles
  }

  get externalRel (): string | Void {
    return this.external ? `${this.rel ?? ''} nofollow noopener noreferrer` : this.rel
  }

  render (): TemplateResult {
    return html`
      <a
        part="base"
        href="${this.href}"
        class="${variantClassMap('link', this.variant, KpcLink.variants)}"
        rel=${ifDefined(this.externalRel)}
        target=${ifDefined(this.target)}
        type=${ifDefined(this.type)}
        hreflang=${ifDefined(this.hreflang)}
        ping=${ifDefined(this.ping)}
        referrerpolicy=${ifDefined(this.referrerpolicy)}
        download=${ifDefined(this.download)}
      >
        <slot></slot>
      </a>
    `
  }
}
