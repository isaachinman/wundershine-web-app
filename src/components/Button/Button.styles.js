import css from 'styled-jsx/css'

export const NAVBAR_HEIGHT = 80
export const NAVBAR_HEIGHT_MOBILE = 65

export default css`
  .default {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    width: auto;
    display: inline-block;
    color: white;
    background-color: #333;
    padding: 12px 33px;
    line-height: 1.4em;
    cursor: pointer;
  }
  .default:hover {
    background-color: #3c9caa;
  }

  .outline {
    border: 1px solid #797979;
    color: #4b4b4b;
    background-color: transparent;
  }
  .outline:hover {
    color: white;
  }

`
