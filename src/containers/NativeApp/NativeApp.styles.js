import css from 'styled-jsx/css'

export default css`
  .container {
    text-align: center;
    padding: 50px 0;
    background-color: #fafafa;
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
