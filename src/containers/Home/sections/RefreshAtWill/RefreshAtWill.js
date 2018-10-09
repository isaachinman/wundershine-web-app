import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  REFRESH_AT_WILL,
  REFRESH_AT_WILL_SMALL,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './RefreshAtWill.styles'

export default class RefreshAtWill extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section refresh'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <h2>{t('refresh.title')}</h2>
                <p>{t('refresh.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <picture>
                  <source srcSet={REFRESH_AT_WILL} media='(min-width: 767px)' />
                  <img
                    className='refresh'
                    src={REFRESH_AT_WILL_SMALL}
                    alt={t('refresh.title')}
                  />
                </picture>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

RefreshAtWill.propTypes = {
  t: PropTypes.func.isRequired,
}
