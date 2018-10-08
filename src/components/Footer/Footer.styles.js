import css from 'styled-jsx/css'

export default css`
  .footer {
    border-top: 1px solid #d8d8d8;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.8em;
    padding: 30px 0;
  }
  .section-title {
    font-size: 16px;
    font-weight: 700;
  }
  a.footer-link {
    display: block;
  }
  a.bottom-link {
    display: inline-block;
    margin: 10px;
  }
  select.language {
    -webkit-appearance: none;
    border: 1px solid #3c9caa;
    background: none;
    color: #333;
    border-radius: 2px;
    padding: 10px;
    min-width: 100px;
    margin: 5px 0;
    text-align: left;
  }
`
