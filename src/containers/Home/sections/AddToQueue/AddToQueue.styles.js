import css from 'styled-jsx/css'

import {
  ADD_TO_QUEUE,
  ADD_TO_QUEUE_MEDIUM,
  ADD_TO_QUEUE_SMALL,
} from 'images'

export default css`
  .page-section.add-to-queue {
    position: relative;
    background-color: #eee;
    background-image: url(${ADD_TO_QUEUE});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 300px 0;
  }
  .page-section.add-to-queue .transparent-bg {
    position: relative;
    z-index: 1;
    background-color: rgba(255,255,255,0.4);
    padding: 1px 10px 15px 30px;
  }
  .page-section.add-to-queue p {
    color: #474747;
  }
  @media only screen and (max-width: 991px) {
    .page-section.add-to-queue {
      background-image: url(${ADD_TO_QUEUE_MEDIUM});
    }
    .page-section.add-to-queue .transparent-bg {
      color: white;
      text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.85);
      background-color: transparent;
      padding: 0;
    }
    .page-section.add-to-queue .transparent-bg p {
      text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.85);
      color: white;
    }
    .page-section.add-to-queue .black-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
    }
  }
  @media only screen and (max-width: 767px) {
    .page-section.add-to-queue {
      padding: 160px 0;
      background-image: url(${ADD_TO_QUEUE_SMALL});
    }
  }
`
