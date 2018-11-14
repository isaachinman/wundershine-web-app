import css from 'styled-jsx/css'

export default css`
  .page-section.order-pack {
    text-align: center;
    background-color: #fafafa;
  }
  .page-section.order-pack p {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 767px) {
    .page-section.order-pack img.iphone {
      margin: 0 0 0 0;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.order-pack img.iphone {
      margin-bottom: 6px;
    }
  }
`
