import React from 'react'
import PropTypes from 'prop-types'

import { Head } from 'components'

export default class Error extends React.Component {

  static getInitialProps({ res, err }) {
    // https://nextjs.org/docs/#custom-error-handling
    /* eslint-disable no-nested-ternary */
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {

    const {
      statusCode,
    } = this.props

    return (
      <div>
        <Head
          title={`Wundershine | ${statusCode}`}
        />
        <h1>{statusCode}</h1>
      </div>
    )
  }
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
}
