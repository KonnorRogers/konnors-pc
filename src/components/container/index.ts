import { KpcContainer } from './component'
window.customElements.define('kpc-container', KpcContainer)

export { KpcContainer }

declare global {
  interface HTMLElementTagNameMap {
    'kpc-container': KpcContainer
  }
}
