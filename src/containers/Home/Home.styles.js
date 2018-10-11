import css from 'styled-jsx/css'

export default css`

  .container {
    display: flex;
  }
  .page-section {
    padding: 80px 0;
  }

  @media only screen and (max-width: 767px) {
    .page-section {
      text-align: center !important;
    }
  }

  @media only screen and (max-width: 576px) {
    .page-section {
      text-align: center;
      padding: 30px 0 60px 0;
    }
  }
`
