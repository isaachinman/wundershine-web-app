import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'
import { Head } from 'components'
import { withTranslation } from 'utils/i18n'

import styles from './About.styles'

@withTranslation(['about'])
export default class About extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <Head
          title={`Wundershine | ${t('meta.title')}`}
        />
        <style jsx>{styles}</style>
        <div className='container'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <h1>{t('title')}</h1>
                <h2>{t('headline')}</h2>
                <p>{t('disconnect')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={2}>
                <h3>{t('photographyToday.title')}</h3>
                <div className='p-no-margin'>
                  <p>{t('photographyToday.line1')}</p>
                  <p>{t('photographyToday.line2')}</p>
                  <p>{t('photographyToday.line3')}</p>
                  <p>{t('photographyToday.line4')}</p>
                </div>
              </Col>
              <Col xs={10} xsOffset={1} md={4} lg={3} mdOffset={0}>
                <h3>{t('photographyTraditional.title')}</h3>
                <div className='p-no-margin'>
                  <p>{t('photographyTraditional.line1')}</p>
                  <p>{t('photographyTraditional.line2')}</p>
                  <p>{t('photographyTraditional.line3')}</p>
                  <p>{t('photographyTraditional.line4')}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <h3>{t('reimagining.title')}</h3>
                <p>{t('reimagining.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <h2>{t('joinUs.title')}</h2>
                <p>{t('joinUs.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                <h2>{t('press.title')}</h2>
                <p>{t('press.description')}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

About.WrappedComponent.propTypes = {
  t: PropTypes.func.isRequired,
}
