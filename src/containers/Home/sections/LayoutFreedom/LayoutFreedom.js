import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'

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
              <Col xs={10} xsOffset={1} lg={12} lgOffset={0}>
                <div className='hidden-xs hidden-sm hidden-md'>
                  <AspectRatio ratio='4707/1104'>
                    <div className='frames-row' />
                  </AspectRatio>
                </div>
                <div className='hidden-lg'>
                  <AspectRatio ratio='1/1'>
                    <div className='frames-grid' />
                  </AspectRatio>
                </div>
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
