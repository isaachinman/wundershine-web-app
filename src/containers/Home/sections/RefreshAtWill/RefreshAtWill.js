import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './RefreshAtWill.styles'

export default class RefreshAtWill extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section refresh'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <h2>{t('refresh.title')}</h2>
                <p>{t('refresh.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className='hidden-xs hidden-sm hidden-md'>
                  <AspectRatio ratio='1817/945'>
                    <div className='refresh-image' />
                  </AspectRatio>
                </div>
                <div className='hidden-lg refresh-image-small-container'>
                  <AspectRatio ratio='732/499'>
                    <div className='refresh-image-small' />
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

RefreshAtWill.propTypes = {
  t: PropTypes.func.isRequired,
}
