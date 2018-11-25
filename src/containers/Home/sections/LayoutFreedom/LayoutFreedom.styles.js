import css from 'styled-jsx/css'

import {
  LAYOUT_FREEDOM_ROW,
  LAYOUT_FREEDOM_GRID,
  LAYOUT_FREEDOM_TILED_WALL,
} from 'images'

export default css`
  .page-section.layout-freedom {
    padding: 100px 0;
    background-color: #eee;
    background-image: url(${LAYOUT_FREEDOM_TILED_WALL});
    text-align: center;
  }
  .page-section.layout-freedom p {
    margin: 0 auto 80px auto;
    max-width: 640px;
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
  @media only screen and (max-width: 991px) {
    .page-section.layout-freedom {
      padding: 90px 0 110px 0;
    }
    .page-section.layout-freedom p {
      margin: 0 auto 45px auto;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.layout-freedom {
      padding: 55px 0 85px 0;
    }
    .page-section.layout-freedom p {
      margin: 0 auto 40px auto;
    }
  }
`
