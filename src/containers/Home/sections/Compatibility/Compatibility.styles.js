import css from 'styled-jsx/css'

export default css`
  .page-section.compatibility {
    background-image: linear-gradient(180deg, #fff, #f3f3f3);
    padding: 165px 0;
  }
  @media only screen and (max-width: 991px) {
    .page-section.compatibility {
      text-align: center;
    }
    .image-container {
      max-width: 85vw;
      margin: 0 auto;
    }
    h2 {
      margin-top: 55px;
    }
  }
  @media only screen and (max-width: 767px) {
    .page-section.compatibility {
      padding: 60px 0 40px 0;
    }
    h2 {
      margin-top: 35px;
    }
  }
`
