import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './EasyLoading.styles'

export default class EasyLoading extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section loading'>
          <Grid>
            <Row>
              <Col lg={4} lgOffset={0}>
                <div className='desktop'>
                  <h2 className='loading'>{t('easyLoading.title')}</h2>
                  <p className='description'>{t('easyLoading.description')}</p>
                </div>
              </Col>
              <Col xs={10} xsOffset={1}>
                <div className='mobile'>
                  <h2 className='loading'>{t('easyLoading.title')}</h2>
                  <p className='description'>{t('easyLoading.description')}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

EasyLoading.propTypes = {
  t: PropTypes.func.isRequired,
}
