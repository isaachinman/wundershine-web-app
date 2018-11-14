import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './LimitedSupply.styles'

export default class LimitedSupply extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section limited-supply'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <h3>{t('limitedSupply.title')}</h3>
                <p>{t('limitedSupply.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

LimitedSupply.propTypes = {
  t: PropTypes.func.isRequired,
}
