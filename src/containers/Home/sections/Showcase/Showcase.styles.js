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
    h2 {
      margin-top: 60px;
    }
    p.description {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .page-section.showcase {
      text-align: center;
    }
    .page-section.showcase .showcase-container {
      padding: 0 20px;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.showcase .showcase-container {
      padding: 0;
      margin: 0 -10px;
    }
  }
`
