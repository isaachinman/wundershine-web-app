import React from 'react'

import * as gtag from 'utils/analytics/gtag'
import { i18nClient, languagePathCorrection } from 'utils/i18n'
import NextApp, { Container } from 'next/app'
import { NamespacesConsumer } from 'react-i18next'
import Router from 'next/router'
import { translation } from 'config'

import { Footer, Head, Navbar } from 'components'

// Styles
import 'react-aspect-ratio/aspect-ratio.css'
import 'react-dropdown/style.css'
import 'react-flexbox-css'

// GA Pageview
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

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

  static async getInitialProps({ ctx }) {
    return {
      initialLanguage: ctx.req.language
        ? ctx.req.language : translation.defaultLanguage,
    }
  }

  render() {

    const { Component, initialLanguage, pageProps } = this.props

    return (
      <Container>
        <NamespacesConsumer
          {...pageProps}
          ns='common'
          i18n={(pageProps && pageProps.i18n) || i18nClient}
          initialLanguage={initialLanguage}
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
