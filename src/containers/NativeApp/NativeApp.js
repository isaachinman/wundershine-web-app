import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Head } from 'components'
import { translate } from 'utils/i18n'

import {
  APP_PRINT_STACK,
  APP_STORE_BLACK,
  PLAY_STORE_BLACK,
} from 'images'

import styles from './NativeApp.styles'

@translate(['native-app'])
export default class NativeApp extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <Head
          title={`Wundershine | ${t('meta.title')}`}
        />
        <style jsx>{styles}</style>
        <div className='container'>
          <Grid>
            <div className='hero'>
              <Row>
                <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                  <h1>{t('title')}</h1>
                  <h2>{t('headline')}</h2>
                  <p>{t('description')}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <a href='https://itunes.apple.com/us/app/wundershine/id1393694636?ls=1&mt=8'>
                    <img
                      className='store-icon'
                      src={APP_STORE_BLACK}
                      alt='App Store'
                    />
                  </a>
                  <a href='https://play.google.com/store/apps/details?id=com.wundershine.app'>
                    <img
                      className='store-icon'
                      src={PLAY_STORE_BLACK}
                      alt='Google Play Store'
                    />
                  </a>
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={10} xsOffset={1}>
                <div className='printstack-container'>
                  <AspectRatio ratio='2237/1619' style={{ maxWidth: 800, margin: '0 auto' }}>
                    <img
                      alt={t('title')}
                      src={APP_PRINT_STACK}
                    />
                  </AspectRatio>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

NativeApp.propTypes = {
  t: PropTypes.func.isRequired,
}
