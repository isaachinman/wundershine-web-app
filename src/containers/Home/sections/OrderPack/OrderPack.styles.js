import css from 'styled-jsx/css'

export default css`
  .page-section.order-pack {
    text-align: center;
  }
  .page-section.order-pack img.iphone {
    max-height: 700px;
    margin: 50px 0 0 0;
  }
  @media only screen and (max-width: 767px) {
    .page-section.order-pack img.iphone {
      margin: 30px 0 0 0;
    }
  }
`
