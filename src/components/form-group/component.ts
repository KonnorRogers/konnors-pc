import { LitElement, html, css, CSSResult, PropertyDeclarations, TemplateResult } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { normalize } from '../../normalize.js'

/**
 * A simple form group component
 *
 * @slot - Default slot
 *
 * @csspart base - Default slot wrapper
 */
export class KpcFormGroup extends LitElement {
  static get styles (): CSSResult {
    return css`
      ${normalize}

      :host {
        display: block;
        width: 100%;
        margin: auto;
      }

      .form-group {
        width: 100%;
        margin: 0.5em 0;
      }

      .form-group--small {
        padding: 0.5em 0;
      }

      .form-group--medium {
        padding: 0.75em 0;
      }

      .form-group--large {
        padding: 1.25em 0;
      }
    `
  }

  size = 'medium'

  static get properties (): PropertyDeclarations {
    return {
      size: { reflect: true, type: String }
    }
  }

  update (changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('size')) {
      if (this.size == null || this.size.trim() === '') this.size = 'medium'
    }
    super.update(changedProperties)
  }

  render (): TemplateResult {
    return html`
      <div class=${classMap({
        'form-group': true,
        'form-group--small': this.size === 'small',
        'form-group--medium': this.size === 'medium',
        'form-group--large': this.size === 'large'
      })} part="base">
        <slot></slot>
      </div>
    `
  }
}
