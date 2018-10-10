import css from 'styled-jsx/css'

import {
  REFRESH_AT_WILL,
  REFRESH_AT_WILL_SMALL,
} from 'images'

export default css`
  .page-section.refresh {
    text-align: center;
  }
  .page-section.refresh p {
    margin-bottom: 40px;
  }
  .refresh-image, .refresh-image-small {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .refresh-image {
    background-image: url(${REFRESH_AT_WILL});
  }
  .refresh-image-small {
    background-image: url(${REFRESH_AT_WILL_SMALL});
  }

`
