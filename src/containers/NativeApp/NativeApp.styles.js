import css from 'styled-jsx/css'

export default css`
  .container {
    text-align: center;
    padding: 50px 0;
    background: linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(244,244,244,1) 20%, rgba(250,250,250,1) 42%, rgba(252,252,252,1) 100%);
  }
  .hero {
    padding: calc(50vh - 300px) 0;
  }
  h1 {
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 400;
  }
  img.store-icon {
    height: 60px;
    margin: 50px 20px;
  }
  .printstack-container {
    margin: 50px 0;
  }

  @media only screen and (max-width: 767px) {
    .container {
      padding: 30px 0;
    }
    img.store-icon {
      height: 60px;
      margin: 20px;
    }
    .printstack-container {
      margin: 50px 0;
    }
  }
`
