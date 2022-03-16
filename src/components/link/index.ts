import { KpcLink } from './component'

const name = 'kpc-link'
window.customElements.define(name, KpcLink)

export { name, KpcLink as class }

declare global {
  interface HTMLElementTagNameMap {
    'kpc-link': KpcLink
  }
}
