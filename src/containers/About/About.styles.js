import css from 'styled-jsx/css'

export default css`
  .container {
    text-align: center;
    padding: 50px 0 100px 0;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(244,244,244,1) 27%, rgba(250,250,250,1) 54%, rgba(217,217,217,1) 100%);
  }
  .hero {
    padding: calc(50vh - 300px) 0;
  }
  h1 {
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 400;
  }
  h3 {
    color: #333;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
  }

`
