import css from 'styled-jsx/css'

export default css`
  .page-section.cta {
    text-align: center;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(226,226,226,1) 61%, rgba(211,211,211,1) 100%);
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
    padding: 30px;
  }
  .page-section.cta img.reframe-product {
    margin: 15px 0 0 0;
  }
  .product-title {
    font-family: 'Vollkorn', serif;
    font-size: 26px;
    font-weight: 700;
    color: #4b4b4b;
    margin: 10px 0;
  }
  .price {
    margin: 30px 0;
    font-size: 36px;
    font-weight: 400;
    color: #4b4b4b;
  }
`
