import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { translate } from 'utils/i18n'

import {
  SHOWCASE,
  ADOBE_CC_LOGO_WHITE,
  GOOGLE_PHOTOS_LOGO_WHITE,
  IOS_PHOTOS_LOGO_WHITE,
  DROPBOX_LOGO_WHITE,
  APP_STORE_TRANSPARENT,
  COMPATIBILITY_BOX,
  ORDER_PACK,
  PLAY_STORE_TRANSPARENT,
  REFRESH_AT_WILL,
  REFRESH_AT_WILL_SMALL,
  WALL_PLAYLIST,
  LAYOUT_FREEDOM_ROW,
  LAYOUT_FREEDOM_GRID,
  REFRAME_SINGLE_WALNUT,
  REFRAME_WALL_SINGLE,
  REFRAME_WALL_3PACK,
} from 'images'

import styles from './Home.styles'

@translate(['home'])
export default class Home extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <style jsx>{styles}</style>

        <div className='page-section hero'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={5} mdOffset={1}>
                <h1>{t('smartFraming.title')}</h1>
                <p>{t('smartFraming.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

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

        <div className='page-section loading'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={4}>
                <h2 className='loading'>{t('easyLoading.title')}</h2>
                <p>{t('easyLoading.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section reframe'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
                <h2>{t('reframe.title')}</h2>
                <p>{t('reframe.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
                <div className='reframe-image-container'>
                  <div className='reframe-shadow' />
                  <img
                    alt='Walnut'
                    className='reframe-image'
                    src={REFRAME_SINGLE_WALNUT}
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section compatibility'>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <img
                  className='refresh'
                  src={COMPATIBILITY_BOX}
                  alt={t('refresh.title')}
                />
              </Col>
              <Col xs={10} xsOffset={1} mdOffset={0} md={4}>
                <h2>{t('compatibility.title')}</h2>
                <p>{t('compatibility.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section whats-showing'>
          <Grid>
            <Row className='hidden-xs hidden-sm'>
              <Col md={3} lg={4}>
                <div className='whats-showing-text'>
                  <h2>{t('whatsShowing.title')}</h2>
                  <p>{t('whatsShowing.description')}</p>
                  <p className='hashtags'>{t('whatsShowing.hashtags')}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='page-section whats-showing-mobile hidden-md hidden-lg'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <h2>{t('whatsShowing.title')}</h2>
                <p>{t('whatsShowing.description')}</p>
                <p className='hashtags'>{t('whatsShowing.hashtags')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

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

        <div className='page-section add-to-queue'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={5}>
                <div className='black-overlay' />
                <div className='transparent-bg'>
                  <h2>{t('addToQueue.title')}</h2>
                  <p>{t('addToQueue.description')}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

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

        <div className='page-section add-photos'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={8}>
                <h2>{t('addPhotos.title')}</h2>
                <p>{t('addPhotos.description')}</p>
                <div className='provider-icon-container'>
                  <img
                    className='provider-icon'
                    src={ADOBE_CC_LOGO_WHITE}
                    alt='Adobe CC'
                  />
                  <img
                    className='provider-icon'
                    src={GOOGLE_PHOTOS_LOGO_WHITE}
                    alt='Google Photos'
                  />
                  <img
                    className='provider-icon'
                    src={DROPBOX_LOGO_WHITE}
                    alt='Dropbox'
                  />
                  <img
                    className='provider-icon'
                    src={IOS_PHOTOS_LOGO_WHITE}
                    alt='iOS Photos'
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section layout-freedom'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <h2>{t('layoutFreedom.title')}</h2>
                <p>{t('layoutFreedom.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <picture>
                  <source srcSet={LAYOUT_FREEDOM_ROW} media='(min-width: 992px)' />
                  <img
                    className='frames'
                    src={LAYOUT_FREEDOM_GRID}
                    alt={t('refresh.title')}
                  />
                </picture>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section showcase'>
          <Grid>
            <Row middle='xs'>
              <Col md={12} lg={8}>
                <div className='showcase-container'>
                  <img
                    src={SHOWCASE}
                    alt={t('showcase.title')}
                  />
                </div>
              </Col>
              <Col xs={10} xsOffset={1} lg={4} lgOffset={0}>
                <h2>{t('showcase.title')}</h2>
                <p>{t('showcase.description')}</p>
                <div className='button-container'>
                  <Button
                    outline
                    push='/creative'
                    text='Learn More'
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

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

        <div className='page-section limited-supply'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <h3>{t('limitedSupply.title')}</h3>
                <p>{t('limitedSupply.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>


      </React.Fragment>
    )
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
}
