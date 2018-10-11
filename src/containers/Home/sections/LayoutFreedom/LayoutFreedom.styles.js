import css from 'styled-jsx/css'

import {
  LAYOUT_FREEDOM_ROW,
  LAYOUT_FREEDOM_GRID,
} from 'images'

export default css`
  .page-section.layout-freedom {
    background-color: #eee;
    text-align: center;
  }
  .page-section.layout-freedom p {
    margin: 0 0 50px 0;
  }
  @media only screen and (max-width: 767px) {
    .page-section {
      text-align: center !important;
    }
  }

  .frames-row, .frames-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .frames-row {
    background-image: url(${LAYOUT_FREEDOM_ROW});
  }
  .frames-grid {
    background-image: url(${LAYOUT_FREEDOM_GRID});
  }
`
