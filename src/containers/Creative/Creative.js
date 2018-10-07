import React from 'react'
import PropTypes from 'prop-types'

import { translate } from 'utils/i18n'
import { Head } from 'components'

import styles from './Creative.styles'

@translate(['creative'])
export default class Creative extends React.Component {
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

Creative.propTypes = {
  t: PropTypes.func.isRequired,
}
