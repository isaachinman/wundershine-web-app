import css from 'styled-jsx/css'
import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar.styles'

import {
  ADD_PHOTOS,
  ADD_PHOTOS_SMALL,
  ADD_TO_QUEUE,
  ADD_TO_QUEUE_MEDIUM,
  ADD_TO_QUEUE_SMALL,
  HOMEPAGE_HERO,
  HOMEPAGE_HERO_SMALL,
  LOADING_SLOT,
  LOADING_SLOT_MEDIUM,
  LOADING_SLOT_SMALL,
  WHATS_SHOWING,
  WHATS_SHOWING_MEDIUM,
  WHATS_SHOWING_SMALL,
} from 'images'

export default css`

  .container {
    display: flex;
  }
  .page-section {
    padding: 80px 0;
  }

  .page-section.hero {
    background-color: #eee;
    background-image: url(${HOMEPAGE_HERO});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: calc(100vh - ${NAVBAR_HEIGHT + 100}px);
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
    text-align: right;
  }

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

  .page-section.refresh {
    text-align: center;
  }
  img.refresh {
    margin: 40px 0 20px 0;
  }

  .page-section.loading {
    background-color: #eee;
    background-image: url(${LOADING_SLOT});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: calc(100vh - ${NAVBAR_HEIGHT + 100}px);
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
  }

  .page-section.compatibility {
    background-image: linear-gradient(180deg, #fff, #f3f3f3);
  }

  .page-section.whats-showing {
    padding: 0;
    background-image: url(${WHATS_SHOWING});
    min-height: 500px;
    background-repeat:no-repeat;
    background-position: right center;
    background-size: contain;
  }
  .page-section.whats-showing-mobile {
    text-align: center;
  }
  .whats-showing-text {
    min-height: 500px;
    background-color: white;
    padding: 80px 0;
  }
  p.hashtags {
    margin-top: 40px;
    color: #003569;
  }

  .page-section.wall-playlist {
    background-color: #fafafa;
  }
  img.wall-playlist {
    max-height: 800px;
  }
  .wall-playlist-img-container {
    text-align: right;
    margin: 0 100px 0 0;
  }
  img.store-icon {
    width: 140px;
    margin: 20px 20px 0 0;
  }
  img.store-icon:hover {
    opacity: 0.7;
  }

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

  .page-section.order-pack {
    text-align: center;
  }
  .page-section.order-pack img.iphone {
    max-height: 700px;
    margin: 50px 0 0 0;
  }

  .page-section.add-photos {
    background-color: #eee;
    background-image: url(${ADD_PHOTOS});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 260px 0;
  }
  .page-section.add-photos h2, .page-section.add-photos p {
    color: white;
    text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.85);
  }
  .provider-icon-container {
    display: flex;
    align-items: center;
  }
  .page-section.add-photos img.provider-icon {
    width: 50px;
    margin: 10px 20px 0 0;
  }

  .page-section.layout-freedom {
    background-color: #eee;
    text-align: center;
  }
  .page-section.layout-freedom img.frames {
    margin: 50px 0 0 0;
  }

  .page-section.showcase {
    padding: 40px 0;
  }
  .page-section.showcase .showcase-container {
    padding: 0 30px 0 0;
  }
  .page-section.showcase .button-container {
    margin: 0 0 30px 0;
  }
  .page-section.showcase p {
    margin-bottom: 50px;
  }

  .page-section.limited-supply {
    text-align: center;
  }
  .page-section.limited-supply h3 {
    font-size: 32px;
    font-weight: 400;
  }
  .page-section.limited-supply p {
    font-style: italic;
  }

  .page-section.cta {
    text-align: center;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(226,226,226,1) 61%, rgba(211,211,211,1) 100%);
  }
  .page-section.cta h3 {
    font-size: 40px;
    font-weight: 400;
  }
  .page-section.cta .product-container {
    padding: 30px;
  }
  .page-section.cta img.reframe-product {
    max-width: 300px;
  }

  @media only screen and (max-width: 1199px) {
    .page-section.whats-showing {
      background-position: calc(100% + 100px) 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    .page-section.whats-showing {
      min-height: 800px;
      background-image: url(${WHATS_SHOWING_MEDIUM});
      background-repeat:no-repeat;
      background-position: center center;
      background-size: cover;
    }
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
    .whats-showing-text {
      background-color: transparent;
    }
    .page-section.showcase {
      text-align: center;
    }
    .page-section.showcase .showcase-container {
      padding: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .page-section {
      text-align: center !important;
    }
    .page-section.hero {
      align-items: flex-start;
      padding-top: 50px;
      /* background-image: url(${HOMEPAGE_HERO_SMALL}); */
      background-image: url('/static/hero-mobile.jpg');
      background-size: 100% auto;
      background-position: center bottom;
      min-height: 600px;
    }
    .page-section.loading {
      background-image: url(${LOADING_SLOT_MEDIUM});
      background-position: center center;
      padding: 0 0 60px 0;
    }
    .page-section.add-to-queue {
      padding: 160px 0;
      background-image: url(${ADD_TO_QUEUE_SMALL});
    }
    .page-section.add-photos {
      padding: 0 0 360px 0;
      background-image: url(${ADD_PHOTOS_SMALL});
    }
    .page-section.layout-freedom img.frames {
      margin: 30px 0 0 0;
    }
    h2.loading {
      margin-top: 80%;
    }
    img.store-icon {
      width: calc(50% - 20px);
      margin: 10px;
    }
    .page-section.order-pack img.iphone {
      margin: 30px 0 0 0;
    }
    .wall-playlist-img-container {
      margin: 0;
      text-align: center;
    }
    .provider-icon-container {
      justify-content: center;
    }
    .page-section.add-photos img.provider-icon {
      width: 50px;
      margin: 10px;
    }
    img.wall-playlist {
      max-height: 400px;
    }
  }

  @media only screen and (max-width: 576px) {
    .page-section {
      text-align: center;
      padding: 30px 0;
    }
    .page-section.hero {
      padding-top: 30px;
      min-height: 430px;
    }

    .page-section.loading {
      background-image: url(${LOADING_SLOT_SMALL});
      background-size: cover;
      padding: 0 0 20px 0;
      min-height: 400px;
    }
    .page-section.whats-showing {
      background-image: url(${WHATS_SHOWING_SMALL});
      min-height: 400px;
    }
  }

`
