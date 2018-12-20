import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 55px 0;
  }
  .hero {
    text-align: center;
  }
  h2 {
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 44px;
    font-weight: 400;
  }
  .app-row {
    margin: 80px 0 0 0;
    padding: 30px 0 100px 0;
  }
  .app-row.with-border {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .text-content {
    padding: 0 25px;
  }

  .title-row {
    display: flex;
    flex-direction: row;
  }
  .title-row img {
    max-width: 80px;
    max-height: 80px;
    margin: 10px 20px 10px 0;
  }
  .title-row h3 {
    font-family: 'Vollkorn', serif;
    font-size: 36px;
    line-height: 1.45em;
    font-weight: 500;
    margin: 10px 0 0 0;
  }
  .title-row h4 {
    color: #797979;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 400;
    margin: 0;
  }

  p.description {
    font-size: 15px;
  }

  .links {
    margin: 25px 0;
  }
  a.link {
    padding: 0 15px;
  }
  a.link.with-spacer {
    border-right: 1px solid #999;
  }

  .screens {
    margin: 40px 0;
  }
  img.screen {
    width: 70px;
    max-width: calc(33% - 30px);
    margin: 0 30px 0 0;
  }

  @media only screen and (max-width: 991px) {
    .app-row {
      margin: 50px 0 0 0;
      padding: 30px 0 40px 0;
    }
    .reframe-image-container {
      padding: 0 30px;
    }
    .title-row img {
      max-width: 52px;
      max-height: 52px;
    }
    .title-row {
      justify-content: center;
      padding: 10px 0;
    }
    .screens, .links, p {
      text-align: center;
    }
    img.screen {
      width: 140px;
      max-width: calc(33% - 30px);
      margin: 0 15px;
    }
    p.description {
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media only screen and (max-width: 767px) {
    .reframe-image-container {
      padding: 0;
    }
    .title-row img {
      max-width: 55px;
      max-height: 55px;
    }
    .title-row h3 {
      font-size: 22px;
    }
    .title-row h4 {
      font-size: 15px;
    }
  }

`
