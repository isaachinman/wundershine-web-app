import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from 'utils/i18n'

import { Col, Grid, Row } from 'react-flexbox-grid'
import Link from 'next/link'
import { Logo } from 'components'
import { slide as Menu } from 'react-burger-menu'
import Router from 'next/router'

import { BURGER_NAV } from 'images'

import styles from './Navbar.styles.js'

@withTranslation('common')
export default class Navbar extends React.Component {

  state = {
    menuOpen: false,
  }

  openMenu = () => this.setState({ menuOpen: true })

  closeMenu = () => this.setState({ menuOpen: false })

  redirectFromWithinMenu = (url) => {
    Router.push(url)
    this.closeMenu()
  }

  render() {
    const { t } = this.props
    const { menuOpen } = this.state
    return (
      <React.Fragment>
        <style jsx>{styles}</style>

        <span className='hidden-md hidden-lg'>
          <Menu
            customBurgerIcon={false}
            isOpen={menuOpen}
          >
            <div className='menu-wrapper'>
              <a
                className='link'
                onClick={() => this.redirectFromWithinMenu('/')}
                onKeyDown={() => this.redirectFromWithinMenu('/')}
                role='button'
                tabIndex={0}
              >
                {t('navbar.links.home')}
              </a>
              <a
                className='link'
                onClick={() => this.redirectFromWithinMenu('/app')}
                onKeyDown={() => this.redirectFromWithinMenu('/app')}
                role='button'
                tabIndex={0}
              >
                {t('navbar.links.app')}
              </a>
              <a
                className='link'
                onClick={() => this.redirectFromWithinMenu('/creative')}
                onKeyDown={() => this.redirectFromWithinMenu('/creative')}
                role='button'
                tabIndex={0}
              >
                {t('navbar.links.creative')}
              </a>
              <a
                className='link'
                onClick={() => this.redirectFromWithinMenu('/about')}
                onKeyDown={() => this.redirectFromWithinMenu('/about')}
                role='button'
                tabIndex={0}
              >
                {t('navbar.links.about')}
              </a>
            </div>
          </Menu>
        </span>

        <div className='container'>

          <div className='mobile hidden-md hidden-lg'>
            <a
              onClick={this.openMenu}
              onKeyDown={this.openMenu}
              role='button'
              tabIndex={0}
            >
              <img
                alt={t('navbar.imgAlt.burger')}
                className='burger'
                src={BURGER_NAV}
              />
            </a>
            <div className='logo-container'>
              <div className='hidden-sm hidden-md hidden-lg'>
                <Logo
                  color='#232424'
                  maxWidth={150}
                />
              </div>
              <div className='hidden-xs'>
                <Logo
                  color='#232424'
                  maxWidth={200}
                />
              </div>
            </div>
            <a
              className='shop'
              href='https://shop.wundershine.com'
            >
              {t('navbar.links.shopMobile')}
            </a>
          </div>

          <Grid>
            <div className='hidden-xs hidden-sm'>
              <Row middle='xs'>
                <Col xs={6} sm={4} md={3}>
                  <div className='logo-container'>
                    <Link href='/'>
                      <a>
                        <Logo
                          color='#232424'
                          maxWidth={188}
                        />
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col md={6} className='hidden-xs hidden-sm'>
                  <div className='align-center'>
                    <Link href='/'>
                      <a className='link'>{t('navbar.links.home')}</a>
                    </Link>
                    <Link href='/app'>
                      <a className='link'>{t('navbar.links.app')}</a>
                    </Link>
                    <Link href='/creative'>
                      <a className='link'>{t('navbar.links.creative')}</a>
                    </Link>
                    <Link href='/about'>
                      <a className='link'>{t('navbar.links.about')}</a>
                    </Link>
                  </div>
                </Col>
                <Col xs={3} sm={4} md={3}>
                  <div className='align-right'>
                    <a
                      className='shop'
                      href='https://shop.wundershine.com'
                    >
                      {t('navbar.links.shopDesktop')}
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Navbar.WrappedComponent.propTypes = {
  t: PropTypes.func.isRequired,
}
