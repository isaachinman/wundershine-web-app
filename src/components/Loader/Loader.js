import React from 'react'
import PropTypes from 'prop-types'

import styles from './Loader.styles'

export default class Loader extends React.Component {
  render() {

    const {
      active,
    } = this.props

    if (!active) {
      return null
    }

    return (
      <div className='overlay'>
        <style jsx>{styles}</style>
        <svg className='loader' width={50} height={50} viewBox='-3 -4 39 39'>
          <polygon fill='transparent' stroke='#fff' strokeWidth='1' points='16,0 32,32 0,32' />
        </svg>
      </div>
    )
  }
}

Loader.propTypes = {
  active: PropTypes.bool.isRequired,
}
