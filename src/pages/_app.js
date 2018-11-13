import React from 'react'

import * as gtag from 'utils/analytics/gtag'
import { i18nClient, lngPathCorrector } from 'utils/i18n'
import NextApp, { Container } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import Router from 'next/router'
import { translation } from 'config'

import { Footer, Head, Navbar } from 'components'

// Styles
import 'react-aspect-ratio/aspect-ratio.css'
import 'react-dropdown/style.css'
import 'react-flexbox-css'

// GA Pageview
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

if (translation.localeSubpaths) {
  i18nClient.on('languageChanged', (lng) => {
    if (process.browser) {
      const originalRoute = window.location.pathname
      const [href, as] = lngPathCorrector(originalRoute, lng)
      if (as !== originalRoute) {
        Router.replace(href, as, { shallow: true })
      }
    }
  })
}

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const { req } = ctx
    let initialI18nStore = {}
    let initialLanguage = null

    if (req && req.i18n) {
      [initialLanguage] = req.i18n.languages
      i18nClient.language = initialLanguage
      req.i18n.languages.forEach((l) => {
        initialI18nStore[l] = {}
        i18nClient.nsFromReactTree.forEach((ns) => {
          initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
        })
      })
    } else {
      await Promise.all(
        i18nClient.nsFromReactTree
          .filter(ns => !i18nClient.hasResourceBundle(i18nClient.languages[0], ns))
          .map(ns => new Promise(resolve => i18nClient.loadNamespaces(ns, () => resolve()))),
      )
      initialI18nStore = i18nClient.store.data
      initialLanguage = i18nClient.language
    }

    return {
      pageProps: {
        initialI18nStore,
        initialLanguage,
        ...pageProps,
      },
    }
  }

  render() {
    const { Component, pageProps } = this.props
    let { initialLanguage, initialI18nStore } = pageProps
    if (!process.browser) {
      initialLanguage = i18nClient.language
      initialI18nStore = i18nClient.store.data
    }
    return (
      <Container>
        <I18nextProvider
          i18n={i18nClient}
          initialLanguage={initialLanguage}
          initialI18nStore={initialI18nStore}
        >
          <React.Fragment>
            <Head title='Wundershine' />
            <Navbar />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </React.Fragment>
        </I18nextProvider>
      </Container>
    )
  }
}
