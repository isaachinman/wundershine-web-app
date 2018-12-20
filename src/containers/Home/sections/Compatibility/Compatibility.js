import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
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
              <Col xs={12} xsOffset={0} lg={7} lgOffset={0}>
                <div className='image-container'>
                  <AspectRatio ratio='1200/834'>
                    <img
                      src={COMPATIBILITY_BOX}
                      alt={t('refresh.title')}
                    />
                  </AspectRatio>
                </div>
              </Col>
              <Col xs={10} xsOffset={1} lgOffset={0} lg={5}>
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
