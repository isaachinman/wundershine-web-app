import React from 'react'

import NextApp, { Container } from 'next/app'
import { NamespacesConsumer } from 'react-i18next'
import { i18nClient, languagePathCorrection } from 'utils/i18n'

import { Footer, Head, Navbar } from 'components'

import Router from 'next/router'

// Styles
import 'react-aspect-ratio/aspect-ratio.css'
import 'react-dropdown/style.css'
import 'react-flexbox-css'

// Validate language subpath on route change
Router.events.on('routeChangeStart', (originalRoute) => {
  const correctedPath = languagePathCorrection(originalRoute)
  if (correctedPath !== originalRoute) {
    Router.replace(correctedPath, correctedPath, { shallow: true })
  }
})

// Validate language subpath on locale change
i18nClient.on('languageChanged', (lng) => {
  if (process.browser) {
    const originalRoute = window.location.pathname
    const correctedPath = languagePathCorrection(originalRoute, lng)
    if (correctedPath !== originalRoute) {
      Router.replace(correctedPath, correctedPath, { shallow: true })
    }
  }
})

export default class App extends NextApp {
  render() {

    const { Component, pageProps } = this.props

    return (
      <Container>
        <NamespacesConsumer
          {...pageProps}
          ns='common'
          i18n={(pageProps && pageProps.i18n) || i18nClient}
          wait={false}
        >
          {t => (
            <React.Fragment>
              <Head
                title='Wundershine'
              />
              <Navbar t={t} />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer t={t} />
            </React.Fragment>
          )}
        </NamespacesConsumer>
      </Container>
    )
  }
}
