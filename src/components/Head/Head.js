/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

import config from 'config'
import NextHead from 'next/head'

import globalStyles from './global.styles'

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
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

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
