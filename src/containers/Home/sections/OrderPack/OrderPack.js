import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
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
              <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <h2>{t('orderPack.title')}</h2>
                <p>{t('orderPack.description')}</p>
              </Col>
              <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
                <AspectRatio ratio='1368/1994' style={{ maxWidth: 485, margin: '0 auto' }}>
                  <img
                    className='iphone'
                    src={ORDER_PACK}
                    alt='Google Play Store'
                  />
                </AspectRatio>
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
