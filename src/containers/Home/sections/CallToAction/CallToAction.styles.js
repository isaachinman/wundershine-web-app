import css from 'styled-jsx/css'

export default css`
  .page-section.cta {
    text-align: center;
    background: rgb(252,252,252);
    background-color: #eaeaea;
    padding-top: 60px;
  }
  .page-section.cta h3 {
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .title-container {
    padding: 0 0 20px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .page-section.cta .product-container {
    padding: 30px 60px;
    max-width: 360px;
  }
  .page-section.cta .product-container.left {
    margin: 0 0 0 auto;
  }
  .page-section.cta .product-container.right {
    margin: 0 auto 0 0;
  }
  .page-section.cta img.reframe-product {
    margin: 15px 0 0 0;
  }
  .product-title {
    font-family: 'Vollkorn', serif;
    font-size: 32px;
    color: #4b4b4b;
    margin: 10px 0;
  }
  p.description {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  .price {
    margin: 30px 0;
    font-size: 25px;
    font-weight: 400;
    color: #4b4b4b;
  }
  @media only screen and (max-width: 991px) {
    .page-section.cta {
      padding-left: 30px;
      padding-right: 30px;
    }
    .page-section.cta .product-container {
      padding: 30px;
      max-width: none;
    }
    .product-title {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.cta h3 {
      font-size: 28px;
    }
    .page-section.cta {
      padding: 20px 20px 40px 20px;
    }
    .product-title {
      font-size: 26px;
    }
    .price {
      font-size: 22px;
    }
  }
`
