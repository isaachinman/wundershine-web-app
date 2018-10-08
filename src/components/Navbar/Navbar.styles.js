import css from 'styled-jsx/css'

export const NAVBAR_HEIGHT = 80

export default css`
  .container {
    height: ${NAVBAR_HEIGHT}px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
  }
  a.link {
    padding: 0 15px;
  }
  a.shop {
    width: auto;
    color: white;
    background-color: #333;
    padding: 12px 33px;
    cursor: pointer;
  }
  a.shop:hover {
    background-color: #3c9caa;
  }
  .align-center {
    text-align: center;
  }
  .align-right {
    text-align: right;
  }

  img.logo {
    cursor: pointer;
    width: 200px;
  }
  img.burger {
    max-width: 20px;
  }

  .menu-wrapper {
    background-color: white;
    height: calc(100% - 60px);
    padding: 30px 0;
  }
  .menu-wrapper a.link {
    display: block;
    margin: 0 0 20px 0;
  }

  .mobile {
    min-width: 100%;
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 767px) {
    .container {
      width: calc(100vw - 60px);
      flex-direction: row;
      padding: 0 30px;
    }
    .logo-container {
      text-align: center;
      flex: 1;
      padding: 0 40px;
    }
    a.shop {
      padding: 6px 16px;
    }
  }

  @media only screen and (max-width: 399px) {
    .logo-container {
      flex: 1;
      opacity: 0;
    }
  }

`
