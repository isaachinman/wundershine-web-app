import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  REFRAME_SINGLE_WALNUT,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './TheReframe.styles'

export default class TheReframe extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section reframe'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
                <h2>{t('reframe.title')}</h2>
                <p>{t('reframe.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
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
      </React.Fragment>
    )
  }
}

TheReframe.propTypes = {
  t: PropTypes.func.isRequired,
}
