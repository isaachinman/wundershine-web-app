import css from 'styled-jsx/css'

export default css`
  .container {
    text-align: center;
    padding: 55px 0;
    background-color: #fafafa;
  }
  .hero-text {
    padding: 0 20px;
  }
  h2 {
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 44px;
    font-weight: 400;
  }
  img.store-icon {
    height: 60px;
    margin: 50px 20px;
  }
  img.play-store {
    height: 56px;
  }
  .printstack-container {
    margin: 50px 0;
  }

  @media only screen and (max-width: 767px) {
    .container {
      padding: 30px 0;
    }
    img.store-icon {
      height: 40px;
      margin: 10px;
    }
    img.play-store {
      height: 39px;
    }
    .printstack-container {
      margin: 50px 0;
    }
  }
`
