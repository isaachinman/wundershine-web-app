import css from 'styled-jsx/css'

export default css`
  .page-section.limited-supply {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .page-section.limited-supply h3 {
    font-size: 32px;
    font-weight: 400;
  }
  .page-section.limited-supply p {
    font-size: 17px;
    line-height: 24px;
    font-style: italic;
  }

  @media only screen and (max-width: 576px) {
    .page-section.limited-supply h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`
