import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  APP_STORE_TRANSPARENT,
  PLAY_STORE_TRANSPARENT,
  WALL_PLAYLIST,
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
                <div className='wall-playlist-img-container'>
                  <img
                    className='wall-playlist'
                    src={WALL_PLAYLIST}
                    alt={t('playlist.title')}
                  />
                </div>
              </Col>
              <Col xs={10} xsOffset={1} mdOffset={0} md={6} lg={4}>
                <h2>{t('playlist.title')}</h2>
                <p>{t('playlist.description')}</p>
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
