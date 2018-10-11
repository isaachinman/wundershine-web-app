import css from 'styled-jsx/css'

export default css`
  .page-section.reframe {
    text-align: center;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(244,244,244,1) 37%, rgba(226,226,226,1) 61%, rgba(211,211,211,1) 100%);
  }
  .reframe-image-container {
    position: relative;
    margin-bottom: 20px;
  }
  img.reframe-image {
    margin-left: 1.3%;
  }

  .color-selector {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
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

  @media only screen and (max-width: 767px) {
    .page-section.reframe {
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(244,244,244,1) 60%, rgba(226,226,226,1) 80%, rgba(211,211,211,1) 100%);
    }
  }

`
