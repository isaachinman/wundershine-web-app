import React from 'react'
import PropTypes from 'prop-types'

import { Col, Grid, Row } from 'react-flexbox-grid'
import config from 'config'
import Dropdown from 'react-dropdown'
import getYear from 'date-fns/get_year'
import { i18nClient } from 'utils/i18n'
import Link from 'next/link'

import styles from './Footer.styles.js'

export default class Footer extends React.Component {
  render() {
    const { t } = this.props

    const currentLanguage = i18nClient.languages ? i18nClient.languages[0] : null

    return (
      <React.Fragment>
        <style jsx>{styles}</style>
        <div className='footer'>
          <Grid>
            <Row center='xs'>
              <Col xs={12}>
                Wundershine Logo
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={3}>
                <div className='section-title'>
                  {t('footer.followUs.title')}
                </div>
                <a
                  className='footer-link'
                  href='http://www.instagram.com/wundershine'
                >
                  Instagram
                </a>
                <a
                  className='footer-link'
                  href='http://www.facebook.com/wundershine'
                >
                  Facebook
                </a>
                <a
                  className='footer-link'
                  href='http://www.twitter.com/wundershine'
                >
                  Twitter
                </a>
                <a
                  className='footer-link'
                  href='https://angel.co/wundershine'
                >
                  AngelList
                </a>
              </Col>
              <Col xs={12} sm={3}>
                <div className='section-title'>
                  {t('footer.navigation.title')}
                </div>
                <Link prefetch href='/'>
                  <a className='footer-link'>{t('navbar.links.home')}</a>
                </Link>
                <Link prefetch href='/native-app'>
                  <a className='footer-link'>{t('navbar.links.app')}</a>
                </Link>
                <Link prefetch href='/creative'>
                  <a className='footer-link'>{t('navbar.links.creative')}</a>
                </Link>
                <Link prefetch href='/about'>
                  <a className='footer-link'>{t('navbar.links.about')}</a>
                </Link>
              </Col>
              <Col xs={12} sm={3}>
                <div className='section-title'>
                  {t('footer.contact.title')}
                </div>
                <a
                  className='footer-link'
                  href='mailto:contact@wundershine.com'
                >
                  contact@wundershine.com
                </a>
                <a
                  className='footer-link'
                  href='mailto:careers@wundershine.com'
                >
                  careers@wundershine.com
                </a>
                <a
                  className='footer-link'
                  href='mailto:bizdev@wundershine.com'
                >
                  bizdev@wundershine.com
                </a>
              </Col>
              <Col xs={12} sm={3}>
                <div className='section-title'>
                  {t('footer.language')}
                </div>
                <Dropdown
                  value={currentLanguage ? {
                    value: currentLanguage,
                    label: t(`languages.${currentLanguage}`),
                  } : null}
                  options={config.translation.allLanguages.map(lng => ({
                    value: lng,
                    label: t(`languages.${lng}`),
                  }))}
                  onChange={(selectedLanguage) => {
                    i18nClient.changeLanguage(selectedLanguage.value)
                  }}
                />
              </Col>
            </Row>
            <Row center='xs'>
              <Col xs={12}>
                <a
                  className='bottom-link'
                  href='#'
                >
                  {t('footer.termsOfService')}
                </a>
                <a
                  className='bottom-link'
                  href='#'
                >
                  {t('footer.privacyPolicy')}
                </a>
              </Col>
            </Row>
            <Row center='xs'>
              <Col xs={12}>
                &copy;
                {getYear(new Date())}
                &nbsp;
                Wundershine VOF
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}
