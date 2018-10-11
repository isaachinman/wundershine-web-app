import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Head } from 'components'
import { translate } from 'utils/i18n'

import appContent from './app-content'
import styles from './Creative.styles'

@translate(['creative'])
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
                <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                  <h1>{t('title')}</h1>
                  <h2>{t('headline')}</h2>
                  <p>{t('descriptionParagraph1')}</p>
                  <p>{t('descriptionParagraph2')}</p>
                </Col>
              </Row>
            </div>
            {appContent.map((app, index) => (
              <div className={`app-row ${index !== appContent.length - 1 ? 'with-border' : null}`}>
                <Row>
                  <Col xs={12} md={5} mdOffset={1}>
                    <AspectRatio ratio='1/1' style={{ maxWidth: 480, margin: '0 auto' }}>
                      <img
                        alt={`${app.appName} Reframe`}
                        src={app.images.reframe}
                      />
                    </AspectRatio>
                  </Col>
                  <Col xs={12} md={5}>
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

Creative.propTypes = {
  t: PropTypes.func.isRequired,
}
