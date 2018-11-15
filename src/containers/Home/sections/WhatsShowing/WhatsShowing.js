import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './WhatsShowing.styles'

export default class WhatsShowing extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>
        <div className='page-section whats-showing'>
          <Grid>
            <Row>
              <Col md={4}>
                <div className='whats-showing-text'>
                  <h2>{t('whatsShowing.title')}</h2>
                  <p>{t('whatsShowing.description')}</p>
                  <p className='hashtags hidden-xs'>{t('whatsShowing.hashtags')}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='page-section whats-showing-mobile hidden-md hidden-lg'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <p className='hashtags'>{t('whatsShowing.hashtags')}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

WhatsShowing.propTypes = {
  t: PropTypes.func.isRequired,
}
