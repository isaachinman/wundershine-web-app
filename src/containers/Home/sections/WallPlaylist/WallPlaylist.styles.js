import css from 'styled-jsx/css'

import {
  WALL_PLAYLIST,
} from 'images'

export default css`
  .page-section.wall-playlist {
    background-color: #fafafa;
    padding: 100px 0 130px 0;
  }
  .wall-playlist-img-container {
    text-align: right;
    margin: 0 100px 0 0;
  }
  img.store-icon {
    width: 155px;
    max-width: 155px;
    height: 55px;
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
    .page-section.wall-playlist {
      padding: 100px 70px 130px 70px;
    }
    .wall-playlist-img-container {
      margin: 0 50px 0 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .page-section.wall-playlist {
      padding: 30px 0 70px 0;
    }
    .wall-playlist-img-container {
      margin: 50px auto 30px auto;
    }
    img.store-icon {
      width: calc(50% - 40px);
      height: auto;
      margin: 20px;
    }
  }
`
