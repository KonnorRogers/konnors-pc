import { LitElement, html, css, PropertyDeclarations } from 'lit'
import type { HTMLTemplateResult, CSSResult } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { normalize } from '../../normalize'

/**
 * A container component designed for containing an element to a certain max-width.
 *
 * @slot - Default slot
 *
 * @csspart base - Default slot wrapper
 *
 * @cssproperty [max-width=1536px]
 * @cssproperty [min-width=0px]
 * @cssproperty [relative-width=75%]
 * @cssproperty [width=clamp(--min-width, --relative-width, --max-width)]
 */
export class KpcContainer extends LitElement {
  static get styles (): CSSResult {
    return css`
      ${normalize}

      :host {
        --min-width: 0px;
        --relative-width: 75%;
        --max-width: 1536px;
        --width: clamp(var(--min-width), var(--relative-width), var(--max-width));

        display: block;
        margin: 0 auto;
        width: var(--width);
      }

      kpc-container--x-small {
        --max-width: 400px;
      }

      kpc-container--small {
        --max-width: 640px;
      }

      kpc-container--medium {
        --max-width: 768px;
      }

      kpc-container--large {
        --max-width: 1024px;
      }

      kpc-container--x-large {
        --max-width: 1280px;
      }

      kpc-container--2x-large {
        --max-width: 1536px;
      }
    `
  }

  size = 'xx-large'

  static get properties (): PropertyDeclarations {
    return {
      size: { reflect: true, type: String }
    }
  }

  render (): HTMLTemplateResult {
    return html`
      <div class=${classMap({
        'kpc-container': true,
        'kpc-container--x-small': this.size === 'x-small',
        'kpc-container--small': this.size === 'small',
        'kpc-container--medium': this.size === 'medium',
        'kpc-container--large': this.size === 'large',
        'kpc-container--x-large': this.size === 'x-large',
        'kpc-container--xx-large': this.size === 'xx-large'
      })} part="base">
        <slot></slot>
      </div>
    `
  }
}
