import css from 'styled-jsx/css'

export default css`
   .page-section.reframe {
    text-align: center;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(226,226,226,1) 61%, rgba(211,211,211,1) 100%);
  }
  .reframe-image-container {
    position: relative;
  }
  .reframe-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
