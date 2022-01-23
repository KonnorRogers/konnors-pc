import { KpcContainer } from './component'
window.customElements.define('kpc-container', KpcContainer)

declare global {
  interface HTMLElementTagNameMap {
    "kpc-container": KpcContainer,
  }
}
