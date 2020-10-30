import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Head } from 'components'
import { withTranslation } from 'utils/i18n'

import appContent from './app-content'
import styles from './Creative.styles'

@withTranslation(['creative'])
export default class Creative extends React.Component {
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
            <div className='hero'>
              <Row>
                <Col xs={10} xsOffset={1}>
                  <h2>{t('title')}</h2>
                  <h1>{t('headline')}</h1>
                  <p>{t('descriptionParagraph')}</p>
                </Col>
              </Row>
            </div>
            {appContent.map((app, index) => (
              <div key={app.id} className={`app-row ${index !== appContent.length - 1 ? 'with-border' : null}`}>
                <Row>
                  <Col xs={8} xsOffset={2} lg={6} lgOffset={0}>
                    <div className='reframe-image-container'>
                      <AspectRatio ratio='1/1' style={{ maxWidth: 480, margin: '0 auto' }}>
                        <img
                          alt={`${app.appName} Reframe`}
                          src={app.images.reframe}
                        />
                      </AspectRatio>
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className='text-content'>
                      <div className='title-row'>
                        <img
                          alt={`${app.appName} Icon`}
                          src={app.images.appIcon}
                        />
                        <div className='title'>
                          <h3>{app.appName}</h3>
                          <a
                            href={app.appCreatorLink}
                          >
                            <h4><i>{app.appCreator}</i></h4>
                          </a>
                        </div>
                      </div>
                      <p className='description'>{t(`apps.${app.id}.description`)}</p>
                      <div className='links'>
                        {app.links.map((link, linkIndex) => (
                          <a
                            key={link.link}
                            className={`link ${linkIndex !== app.links.length - 1 ? 'with-spacer' : null}`}
                            href={link.link}
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                      <div className='screens'>
                        {[1, 2, 3].map(num => (
                          <img
                            key={app.images[`appScreenshot${num}`]}
                            className='screen'
                            alt={`${app.appName} Screen ${num}`}
                            src={app.images[`appScreenshot${num}`]}
                          />
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Creative.WrappedComponent.propTypes = {
  t: PropTypes.func.isRequired,
}
