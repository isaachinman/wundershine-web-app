import React from 'react'
import PropTypes from 'prop-types'

import { translate } from 'utils/i18n'
import { Head } from 'components'

import styles from './About.styles'

@translate(['about'])
export default class About extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <Head
          title={`Wundershine | ${t('meta.title')}`}
        />
        <style jsx>{styles}</style>
        <div className='container'>
          <h1>{t('title')}</h1>
        </div>
      </React.Fragment>
    )
  }
}

About.propTypes = {
  t: PropTypes.func.isRequired,
}
