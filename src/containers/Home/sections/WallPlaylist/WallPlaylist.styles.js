import css from 'styled-jsx/css'

import {
  WALL_PLAYLIST,
} from 'images'

export default css`
  .page-section.wall-playlist {
    background-color: #fafafa;
  }
  .wall-playlist-img-container {
    text-align: right;
    margin: 0 100px 0 0;
  }
  img.store-icon {
    width: 140px;
    height: 48px;
    margin: 20px 20px 0 0;
  }
  img.store-icon:hover {
    opacity: 0.7;
  }

  .iphone-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${WALL_PLAYLIST});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
  }

  @media only screen and (max-width: 1199px) {
    .wall-playlist-img-container {
      margin: 0 50px 0 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .page-section.wall-playlist {
      padding-bottom: 50px;
    }
    .wall-playlist-img-container {
      display: none;
    }
    img.store-icon {
      width: calc(50% - 20px);
      height: auto;
      margin: 10px;
    }
  }
`
