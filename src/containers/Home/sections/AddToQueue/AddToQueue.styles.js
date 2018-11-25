import css from 'styled-jsx/css'

import {
  ADD_TO_QUEUE,
  ADD_TO_QUEUE_MEDIUM,
} from 'images'

export default css`
  .page-section.add-to-queue {
    position: relative;
    background-color: #eee;
    background-image: url(${ADD_TO_QUEUE});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 640px;
    display: flex;
    align-items: center;
  }
  .page-section.add-to-queue p {
    color: #474747;
  }
  @media only screen and (max-width: 991px) {
    .text {
      padding: 0 15px;
    }
    .page-section.add-to-queue {
      background-image: url(${ADD_TO_QUEUE_MEDIUM});
      background-position: 55% 100%;
      min-height: 540px;
    }
    h2 {
      margin-top: 100px;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.add-to-queue {
      background-position: 75% 100%;
    }
    h2 {
      margin-top: 120px;
    }
    .page-section.add-to-queue {
      min-height: 490px;
    }
    .text {
      color: white;
      z-index: 1;
      position: relative;
    }
    .page-section.add-to-queue p {
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
`
