/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

import config from 'config'
import NextHead from 'next/head'

import globalStyles from './global.styles'

const { google, intercom } = config

export default class Head extends React.Component {

  render() {

    const {
      description,
      title,
    } = this.props

    return (
      <NextHead>

        <meta charSet='UTF-8' />
        <title>
          {title}
        </title>
        <meta
          name='description'
          content={description}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={config.favicon} />

        <meta name='google-site-verification' content='e5kQ2Ew4lGddZOTpYEv_lmH5svjEKothxj9yETI1RIU' />

        {/* External stylesheets */}
        <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Vollkorn:400,700' rel='stylesheet' />

        {/* Global styles */}
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {typeof window !== 'undefined' && window.gaLoaded !== true && (
          <React.Fragment>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${google.analyticsID}`}
            />
            <script
              dangerouslySetInnerHTML={
                {
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${google.analyticsID}');
                    window.gaLoaded = true;
                  `,
                }
              }
            />
          </React.Fragment>
        )}

        {/* GTag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.gtagLoaded !== true) {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${google.gtagID}');
                window.gtagLoaded = true;
              }
            `,
          }}
        />

        {/* Intercom */}
        <script
          dangerouslySetInnerHTML={
            {
              __html: `
                window.intercomSettings = {
                  app_id: "${intercom.appID}"
                };
                if (!/Mobi/.test(navigator.userAgent)) {
                  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/pmje77sj';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
                }
                `,
            }
          }
        />

      </NextHead>
    )
  }
}

Head.defaultProps = {
  description: '',
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
