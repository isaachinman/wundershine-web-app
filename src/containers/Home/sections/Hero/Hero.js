import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './Hero.styles'

export default class Hero extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section hero'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={5} mdOffset={1}>
                <h1>{t('smartFraming.title')}</h1>
                <p>{t('smartFraming.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Hero.propTypes = {
  t: PropTypes.func.isRequired,
}
