import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  ADOBE_CC_LOGO_WHITE,
  GOOGLE_PHOTOS_LOGO_WHITE,
  IOS_PHOTOS_LOGO_WHITE,
  DROPBOX_LOGO_WHITE,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './AddPhotos.styles'

export default class AddPhotos extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section add-photos'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={6}>
                <div className='text'>
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
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

AddPhotos.propTypes = {
  t: PropTypes.func.isRequired,
}
