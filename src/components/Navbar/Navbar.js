import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { i18nClient } from 'utils/i18n'

import styles from './Navbar.styles.js'

export default class Navbar extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{styles}</style>

        <div className='container'>
          <Link prefetch href='/'>
            <a className='link'>{t('navbar.links.home')}</a>
          </Link>
          <Link prefetch href='/native-app'>
            <a className='link'>{t('navbar.links.app')}</a>
          </Link>
          <Link prefetch href='/creative'>
            <a className='link'>{t('navbar.links.creative')}</a>
          </Link>
          <Link prefetch href='/about'>
            <a className='link'>{t('navbar.links.about')}</a>
          </Link>
          <Link prefetch href='/shop'>
            <a className='link'>{t('navbar.links.shop')}</a>
          </Link>

          <button
            type='button'
            onClick={() => {
              i18nClient.changeLanguage(i18nClient.languages[0] === 'en' ? 'de' : 'en')
            }}
          >
            Change locale
          </button>
        </div>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}
