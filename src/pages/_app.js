import React from 'react'

import * as gtag from 'utils/analytics/gtag'
import App from 'next/app'
import Router from 'next/router'

import { Footer, Head, Navbar } from 'components'
import { appWithTranslation } from 'utils/i18n'

// Styles
import 'react-aspect-ratio/aspect-ratio.css'
import 'react-dropdown/style.css'
import 'react-flexbox-css'

// GA Pageview
Router.events.on('routeChangeComplete', url => gtag.pageview(url))


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head title='Wundershine' />
    <Navbar />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

MyApp.getInitialProps = async appContext => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
