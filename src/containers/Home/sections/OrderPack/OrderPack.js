import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  ORDER_PACK,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './OrderPack.styles'

export default class OrderPack extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section order-pack'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <h2>{t('orderPack.title')}</h2>
                <p>{t('orderPack.description')}</p>
                <img
                  className='iphone'
                  src={ORDER_PACK}
                  alt='Google Play Store'
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

OrderPack.propTypes = {
  t: PropTypes.func.isRequired,
}
