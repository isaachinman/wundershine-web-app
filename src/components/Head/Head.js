import React from 'react'
import PropTypes from 'prop-types'

import config from 'config'
import NextHead from 'next/head'

export default class Head extends React.Component {
  render() {

    const {
      description,
      title,
    } = this.props

    return (
      <NextHead>

        <meta charSet='UTF-8' />
        <title>
          {title}
        </title>
        <meta
          name='description'
          content={description}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={config.favicon} />

        {/* External stylesheets */}
        <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Vollkorn:400,700' rel='stylesheet' />

        {/* Global styles */}
        <style global jsx>
          {`
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
            }
            h1 {
              font-size: 36px;
            }
            h2 {
              font-size: 35px;
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
              line-height: 1.375em;
              color: #797979;
            }
            img {
              max-width: 100%;
            }
            @media (max-width: 576px)                       { .hidden-xs { display: none !important; } }
            @media (min-width: 576px) and (max-width: 767px) { .hidden-sm { display: none !important; } }
            @media (min-width: 767px) and (max-width: 992px) { .hidden-md { display: none !important; } }
            @media (min-width: 992px)                       { .hidden-lg { display: none !important; } }
          `}
        </style>

      </NextHead>
    )
  }
}

Head.defaultProps = {
  description: '',
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
