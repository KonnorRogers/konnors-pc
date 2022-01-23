import { css } from 'lit'

export const normalize = css`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  [hidden] {
    display: none !important;
  }
  button {
    cursor: pointer;
  }
`
