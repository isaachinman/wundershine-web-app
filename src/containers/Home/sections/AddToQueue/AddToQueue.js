import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './AddToQueue.styles'

export default class AddToQueue extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section add-to-queue'>
          <Grid>
            <Row>
              <Col xs={12} md={5}>
                <div className='black-overlay' />
                <div className='text'>
                  <h2>{t('addToQueue.title')}</h2>
                  <p>{t('addToQueue.description')}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

AddToQueue.propTypes = {
  t: PropTypes.func.isRequired,
}
