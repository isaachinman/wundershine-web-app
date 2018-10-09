import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import styles from './Button.styles'

export default class Button extends React.Component {
  render() {

    const {
      href,
      outline,
      push,
      text,
    } = this.props

    let className = 'default'

    if (outline) {
      className += ' outline'
    }

    return (
      <React.Fragment>
        <style jsx>{styles}</style>
        {push ? (
          <Link href={push}>
            <a
              className={className}
              href={href}
            >
              {text}
            </a>
          </Link>
        ) : (
          <a
            className={className}
            href={href}
          >
            {text}
          </a>
        )}
      </React.Fragment>
    )
  }
}

Button.defaultProps = {
  href: null,
  outline: false,
  push: null,
}

Button.propTypes = {
  href: PropTypes.string,
  outline: PropTypes.bool,
  push: PropTypes.string,
  text: PropTypes.string.isRequired,
}
