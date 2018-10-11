import css from 'styled-jsx/css'

export default css`
  .page-section.showcase {
    padding: 40px 0;
  }
  .page-section.showcase .showcase-container {
    padding: 0 30px 0 0;
  }
  .page-section.showcase .button-container {
    margin: 0 0 30px 0;
  }
  .page-section.showcase p {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    .page-section.showcase {
      text-align: center;
    }
    .page-section.showcase .showcase-container {
      padding: 40px 0;
    }
  }
`
