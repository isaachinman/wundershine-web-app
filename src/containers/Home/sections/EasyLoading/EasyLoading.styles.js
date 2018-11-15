import css from 'styled-jsx/css'

import {
  LOADING_SLOT,
  LOADING_SLOT_MEDIUM,
  LOADING_SLOT_SMALL,
} from 'images'

export default css`
  .page-section.loading {
    background-color: #eee;
    background-image: url(${LOADING_SLOT});
    background-repeat: no-repeat;
    background-position: 70% center;
    background-size: cover;
    min-height: 600px;
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 1199px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
    .page-section.loading {
      background-image: url(${LOADING_SLOT_MEDIUM});
      background-position: center center;
      padding: 0 0 60px 0;
      text-align: center;
    }
    h2.loading {
      margin-top: 72%;
    }
    p.description {
      max-width: 370px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media only screen and (max-width: 576px) {
    h2.loading {
      margin-top: 60%;
    }
    .page-section.loading {
      background-image: url(${LOADING_SLOT_SMALL});
      background-size: cover;
      padding: 0 0 20px 0;
      min-height: 350px;
    }
  }
`
