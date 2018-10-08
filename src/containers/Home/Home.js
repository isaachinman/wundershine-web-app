import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'
import { translate } from 'utils/i18n'

import { REFRESH_AT_WILL } from 'images'

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
              <Col xs={12} sm={6} md={5} mdOffset={1}>
                <h1>{t('smartFraming.title')}</h1>
                <p>{t('smartFraming.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section refresh'>
          <Grid>
            <Row>
              <Col xs={12} md={6} mdOffset={3}>
                <h2>{t('refresh.title')}</h2>
                <p>{t('refresh.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <img
                  alt={t('refresh.title')}
                  className='refresh'
                  src={REFRESH_AT_WILL}
                />
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section loading'>
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <h2 className='loading'>{t('easyLoading.title')}</h2>
                <p>{t('easyLoading.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('reframe.title')}</h2>
                <div>{t('reframe.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('compatibility.title')}</h2>
                <div>{t('compatibility.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('whatsShowing.title')}</h2>
                <div>{t('whatsShowing.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('playlist.title')}</h2>
                <div>{t('playlist.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('addToQueue.title')}</h2>
                <div>{t('addToQueue.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('orderPack.title')}</h2>
                <div>{t('orderPack.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('addPhotos.title')}</h2>
                <div>{t('addPhotos.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('layoutFreedom.title')}</h2>
                <div>{t('layoutFreedom.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>{t('showcase.title')}</h2>
                <div>{t('showcase.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <div>{t('cta.title')}</div>
                <div>{t('cta.description')}</div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='page-section'>
          <Grid>
            <Row>
              <Col xs={12}>
                <div>{t('limitedSupply.title')}</div>
                <div>{t('limitedSupply.description')}</div>
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
