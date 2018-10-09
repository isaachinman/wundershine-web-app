import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  LAYOUT_FREEDOM_ROW,
  LAYOUT_FREEDOM_GRID,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './LayoutFreedom.styles'

export default class LayoutFreedom extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

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
      </React.Fragment>
    )
  }
}

LayoutFreedom.propTypes = {
  t: PropTypes.func.isRequired,
}
