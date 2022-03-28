import { assert } from '@esm-bundle/chai'

describe('Index', () => {
  it('Should register all components', async () => {
    const components = [
      'kpc-link',
      'kpc-container',
      'kpc-form-group'
    ]

    components.forEach((component) => {
      assert(window.customElements.get(component) == null)
    })

    await import('./index')

    components.forEach((component) => {
      assert(window.customElements.get(component) != null)
    })
  })
})
