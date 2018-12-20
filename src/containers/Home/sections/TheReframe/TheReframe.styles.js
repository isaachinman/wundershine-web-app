import css from 'styled-jsx/css'

export default css`
  .page-section.reframe {
    text-align: center;
    background-color: #f4f4f4;
    padding-top: 110px;
    padding-bottom: 130px;
  }
  p.description {
    max-width: 440px;
    margin: 20px auto 30px auto;
  }
  .reframe-image-container {
    position: relative;
    margin: 0 auto 45px auto;
    max-width: 600px;
  }
  img.reframe-image {
    margin-left: 1.3%;
  }

  .color-selector {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin: 0 6px;
    border-radius: 50%;
    padding: 4px;
    background-clip:content-box;
    background-color: black;
    border: 2px solid transparent;
    cursor: pointer;
  }
  .color-selector:hover {
    opacity: 0.8;
    border: 2px solid transparent;
  }
  .color-selector:focus {
    outline: none;
  }

  .color-selector.walnut {
    background-color: #7d6456;
  }
  .color-selector.oak {
    background-color: #be9d7b;
  }
  .color-selector.white {
    background-color: #fff;
  }
  .color-selector.black {
    background-color: #3e3e3e;
  }

  .color-selector.active {
    border: 2px solid #ccc;
  }

  @media only screen and (max-width: 576px) {
    .page-section.reframe {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .reframe-image-container {
      position: relative;
      margin: 0 auto 45px auto;
      padding: 0 10px;
    }
  }

`
