import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  APP_STORE_TRANSPARENT,
  PLAY_STORE_TRANSPARENT,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './WallPlaylist.styles'

export default class WallPlaylist extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section wall-playlist'>
          <Grid>
            <Row middle='md'>
              <Col xs={10} xsOffset={1} mdOffset={0} md={6}>
                <div className='wall-playlist-img-container hidden-xs hidden-sm'>
                  <AspectRatio ratio='260/671' style={{ maxWidth: 325, margin: '0 0 0 auto' }}>
                    <div className='iphone-image' />
                  </AspectRatio>
                </div>
              </Col>
              <Col xs={10} xsOffset={1} mdOffset={0} md={6}>
                <h2>{t('playlist.title')}</h2>
                <p>{t('playlist.description')}</p>
                <div className='hidden-xs hidden-sm'>
                  <a href='https://itunes.apple.com/us/app/wundershine/id1393694636?ls=1&mt=8'>
                    <img
                      className='store-icon'
                      src={APP_STORE_TRANSPARENT}
                      alt='App Store'
                    />
                  </a>
                  <a href='https://play.google.com/store/apps/details?id=com.wundershine.app'>
                    <img
                      className='store-icon'
                      src={PLAY_STORE_TRANSPARENT}
                      alt='Google Play Store'
                    />
                  </a>
                </div>
                <div className='wall-playlist-img-container hidden-md hidden-lg'>
                  <AspectRatio ratio='260/671' style={{ maxWidth: 200, margin: '0 auto' }}>
                    <div className='iphone-image' />
                  </AspectRatio>
                </div>
              </Col>
              <Col xs={12} className='hidden-md hidden-lg'>
                <a href='https://itunes.apple.com/us/app/wundershine/id1393694636?ls=1&mt=8'>
                  <img
                    className='store-icon'
                    src={APP_STORE_TRANSPARENT}
                    alt='App Store'
                  />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.wundershine.app'>
                  <img
                    className='store-icon'
                    src={PLAY_STORE_TRANSPARENT}
                    alt='Google Play Store'
                  />
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

WallPlaylist.propTypes = {
  t: PropTypes.func.isRequired,
}
