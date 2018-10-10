import css from 'styled-jsx/css'

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
  @media only screen and (max-width: 767px) {
    .wall-playlist-img-container {
      margin: 0;
      text-align: center;
    }
    img.wall-playlist {
      max-height: 400px;
    }
    img.store-icon {
      width: calc(50% - 20px);
      margin: 10px;
    }
  }
`
