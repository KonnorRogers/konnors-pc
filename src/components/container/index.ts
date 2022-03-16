import { KpcContainer } from './component'

const name = 'kpc-container'
window.customElements.define(name, KpcContainer)

export { name, KpcContainer as class }

declare global {
  interface HTMLElementTagNameMap {
    'kpc-container': KpcContainer
  }
}
