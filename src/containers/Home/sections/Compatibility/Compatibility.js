import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  COMPATIBILITY_BOX,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './Compatibility.styles'

export default class Compatibility extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

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
      </React.Fragment>
    )
  }
}

Compatibility.propTypes = {
  t: PropTypes.func.isRequired,
}
