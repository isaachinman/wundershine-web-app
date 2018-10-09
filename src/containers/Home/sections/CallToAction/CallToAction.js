import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  REFRAME_WALL_SINGLE,
  REFRAME_WALL_3PACK,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './CallToAction.styles'

export default class CallToAction extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section cta'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <h3>{t('cta.title')}</h3>
                <p>{t('cta.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={0} lg={4} lgOffset={2}>
                <div className='product-container'>
                  <div>{t('products.reframe.title')}</div>
                  <div>{t('products.reframe.description')}</div>
                  <img
                    alt={t('products.reframe.title')}
                    className='reframe-product'
                    src={REFRAME_WALL_SINGLE}
                  />
                </div>
              </Col>
              <Col xs={10} xsOffset={1} md={6} mdOffset={0} lg={4}>
                <div className='product-container'>
                  <div>{t('products.reframeThreePack.title')}</div>
                  <div>{t('products.reframeThreePack.description')}</div>
                  <img
                    alt={t('products.reframeThreePack.title')}
                    className='reframe-product'
                    src={REFRAME_WALL_3PACK}
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

CallToAction.propTypes = {
  t: PropTypes.func.isRequired,
}
