import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 50px 0 100px 0;
    background: rgb(252,252,252);
    background: radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(244,244,244,1) 27%, rgba(250,250,250,1) 54%, rgba(240,240,240,1) 100%);
  }
  .hero {
    padding: calc(50vh - 300px) 0;
  }
  h1 {
    text-align: center;
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 400;
  }
  h3 {
    margin: 30px 0;
  }
  p {
    word-break: break-word;
  }
  p.description {
    margin-bottom: 100px;
  }
`
