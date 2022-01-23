import { LitElement, html, css } from 'lit'
import type { HTMLTemplateResult, CSSResult } from 'lit'
import { property } from 'lit/decorators/property.js'
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

      app-container--x-small {
        --max-width: 400px;
      }

      app-container--small {
        --max-width: 640px;
      }

      app-container--medium {
        --max-width: 768px;
      }

      app-container--large {
        --max-width: 1024px;
      }

      app-container--x-large {
        --max-width: 1280px;
      }

      app-container--2x-large {
        --max-width: 1536px;
      }
    `
  }

  @property({ reflect: true, type: String }) size: string = '2x-large'

  render (): HTMLTemplateResult {
    return html`
      <div class=${classMap({
        'app-container': true,
        'app-container--x-small': this.size === 'x-small',
        'app-container--small': this.size === 'small',
        'app-container--medium': this.size === 'medium',
        'app-container--large': this.size === 'large',
        'app-container--x-large': this.size === 'x-large',
        'app-container--2x-large': this.size === '2x-large'
      })} part="base">
        <slot></slot>
      </div>
    `
  }
}
