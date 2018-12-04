/*

  Global styles for application, get written into top of <head>
  Export as a string and dangerouslySetInnerHTML - for some
  reason using styled-jsx was causing the CSS to be absent
  on the first page load after server start.

*/

export default `
  html {
    box-sizing: border-box;
  }
  #__next {
    font-display: optional;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #333;
  }
  main {
    flex: 1;
    min-height: calc(100vh - 80px);
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 35px;
    line-height: 1.13em;
    margin-bottom: 0.65em;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #3c9caa;
  }
  p {
    font-size: 17px;
    line-height: 1.415em;
    color: #797979;
  }
  @media (max-width: 576px) {
    h1 {
    font-size: 26px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (min-width: 577px) and (max-width: 767px) {
    h1 {
    font-size: 32px;
    }
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 15px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    h1 {
      font-size: 34px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 576px)                       { .hidden-xs { display: none !important; } }
  @media (min-width: 577px) and (max-width: 767px) { .hidden-sm { display: none !important; } }
  @media (min-width: 768px) and (max-width: 992px) { .hidden-md { display: none !important; } }
  @media (min-width: 992px)                       { .hidden-lg { display: none !important; } }
`
