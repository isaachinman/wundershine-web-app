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
              <Col xs={10} xsOffset={1} md={4}>
                <h2 className='loading'>{t('easyLoading.title')}</h2>
                <p>{t('easyLoading.description')}</p>
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
