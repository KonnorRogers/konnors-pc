import { KpcFormGroup } from './component'

const name = 'kpc-form-group'
window.customElements.define(name, KpcFormGroup)

export { name, KpcFormGroup as class }

declare global {
  interface HTMLElementTagNameMap {
    'kpc-form-group': KpcFormGroup
  }
}
