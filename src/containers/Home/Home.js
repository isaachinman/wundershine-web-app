import React from 'react'
import PropTypes from 'prop-types'

import { translate } from 'utils/i18n'

import styles from './Home.styles'

@translate(['home'])
export default class Home extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <style jsx>{styles}</style>
        <div className='container'>
          <h1>{t('title')}</h1>
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
}
