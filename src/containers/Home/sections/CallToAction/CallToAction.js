import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Button } from 'components'
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
              <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <div className='title-container'>
                  <h3>{t('cta.title')}</h3>
                  <p>{t('cta.description')}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={0}>
                <div className='product-container left'>
                  <div className='product-title'>{t('products.reframe.title')}</div>
                  <p className='description'><i>{t('products.reframe.description')}</i></p>
                  <AspectRatio ratio='500/735' style={{ maxWidth: 320, margin: '0 auto' }}>
                    <img
                      alt={t('products.reframe.title')}
                      className='reframe-product'
                      src={REFRAME_WALL_SINGLE}
                    />
                  </AspectRatio>
                  <div className='price'>
                    €79
                  </div>
                  <Button
                    text={t('cta.shopNow')}
                    href='https://shop.wundershine.com/products/reframe-square-natural-oak?variant=8924537880636'
                  />
                </div>
              </Col>
              <Col xs={10} xsOffset={1} md={6} mdOffset={0}>
                <div className='product-container right'>
                  <div className='product-title'>{t('products.reframeThreePack.title')}</div>
                  <p className='description'><i>{t('products.reframeThreePack.description')}</i></p>
                  <AspectRatio ratio='910/1337' style={{ maxWidth: 320, margin: '0 auto' }}>
                    <img
                      alt={t('products.reframeThreePack.title')}
                      className='reframe-product'
                      src={REFRAME_WALL_3PACK}
                    />
                  </AspectRatio>
                  <div className='price'>
                    €199
                  </div>
                  <Button
                    text={t('cta.shopNow')}
                    href='https://shop.wundershine.com/products/reframe-3-pack?variant=9247083593788'
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
