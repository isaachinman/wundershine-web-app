// https://github.com/mhnpd/react-loader-spinner/blob/master/src/loader/css/Triangle.css

import css from 'styled-jsx/css'

export default css`
  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
  }
  .loader {

  }
  svg {
  -webkit-transform-origin: 50% 65%;
          transform-origin: 50% 65%;
  }

  svg polygon {
    stroke-dasharray: 17;
    -webkit-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
            animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  }

  @-webkit-keyframes dash {
    to {
      stroke-dashoffset: 136;
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 136;
    }
  }
  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
`
