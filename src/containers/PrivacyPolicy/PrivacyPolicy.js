/* eslint-disable max-len */
import React from 'react'

import { Col, Grid, Row } from 'react-flexbox-grid'
import { Head } from 'components'
import { withTranslation } from 'utils/i18n'

import styles from './PrivacyPolicy.styles'

@withTranslation(['common'])
export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head
          title='Wundershine | Privacy Policy'
        />
        <style jsx>{styles}</style>
        <div className='container'>
          <Grid>
            <div className='hero'>
              <Row>
                <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                  <h1>Wundershine Privacy Policy</h1>
                  <p className='description'>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from the Wundershine website or when you use the Wundershine mobile app.</p>

                  <h3>PERSONAL INFORMATION WE COLLECT</h3>
                  <p>When you use the app or visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you use the app or browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the app or site. We refer to this automatically-collected information as &ldquo;Device Information&rdquo;.</p>
                  <p>We collect Device Information using the following technologies:</p>
                  <p>- &ldquo;Cookies&rdquo; are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</p>
                  <p>- &ldquo;Log files&rdquo; track actions occurring on the site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
                  <p>- &ldquo;Web beacons&rdquo;, &ldquo;tags&rdquo;, and &ldquo;pixels&rdquo; are electronic files used to record information about how you browse the site.</p>
                  <p>Additionally when you create a user account, make a purchase online or offline, or attempt to make a purchase through the app or site, or when you show interest online or offline and/or subscribe to newsletters or provide contact information, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as &ldquo;Account Information&rdquo;.</p>
                  <p>When we talk about &ldquo;Personal Information&rdquo; in this Privacy Policy, we are talking both about Device Information and Account Information.</p>

                  <h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
                  <p>We use the Account Information that we collect generally to fulfill any orders placed through the app or site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Account Information to:</p>
                  <p>- Offer the image storage (&ldquo;Queue&rdquo;), curation and editing features in our software.</p>
                  <p>- Communicate with you;</p>
                  <p>- Screen our orders for potential risk or fraud; and</p>
                  <p>- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
                  <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our app and site (for example, by generating analytics about how our customers browse and interact with the site, and to assess the success of our marketing and advertising campaigns).</p>
                  <p>In addition to using cookies and related technologies as described above, we also may permit certain third party companies (e.g. Google Adwords, Facebook, Instagram, Pinterest etc) to help us tailor advertising that we think may be of interest to users and to collect and use other data about user activities on our site and/or services (e.g., to allow them to tailor ads on third party services). These companies may deliver ads that might also place cookies and otherwise track user behavior.</p>

                  <h3>SHARING YOUR PERSONAL INFORMATION</h3>
                  <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>
                  <p>Your Personal Information may also be shared with a third party to allow a merger, acquisition, or sale of all or a portion of our assets. Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

                  <h3>BEHAVIOURAL ADVERTISING</h3>
                  <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. As always we respect your privacy and are not collecting any identifiable information through the use of Google&rsquo;s or any other 3rd party remarketing system. For more information about how targeted advertising works, you can visit the Network Advertising Initiative&rsquo;s (&ldquo;NAI&rdquo;) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>
                  <p>You can opt out of targeted advertising by using the links below:</p>
                  <p>- Facebook: https://www.facebook.com/settings/?tab=ads</p>
                  <p>- Google: https://www.google.com/settings/ads/anonymous</p>
                  <p>- Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</p>
                  <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance&rsquo;s opt-out portal at: http://optout.aboutads.info/.</p>

                  <h3>DO NOT TRACK</h3>
                  <p>Please note that we do not alter our site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>

                  <h3>YOUR RIGHTS</h3>
                  <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
                  <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

                  <h3>DATA RETENTION</h3>
                  <p>After registering, you can enter, adjust, and delete your personal information in your password-protected area. When you place an order through the app or site, we will maintain your order Information for our records unless and until you ask us to delete this information.</p>

                  <h3>COMMUNICATIONS</h3>
                  <p>We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information. You may opt out of receiving any or all of these communications by sending us an e‑mail at team@wundershine.com.</p>

                  <h3>CHANGES</h3>
                  <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. A potential sale of the company could cause an immediate and unannounced change in all policies.</p>

                  <h3>CONTACT US</h3>
                  <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e&#8209;mail at team@wundershine.com or by mail using the details provided below:</p>
                  <p>Wundershine</p>
                  <p>Vierwindenstraat 117</p>
                  <p>1013LA Amsterdam</p>
                  <p>Netherlands</p>

                </Col>
              </Row>
            </div>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
