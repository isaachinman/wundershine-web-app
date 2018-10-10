import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Loader } from 'components'

import {
  REFRAME_SINGLE_BLACK,
  REFRAME_SINGLE_OAK,
  REFRAME_SINGLE_WALNUT,
  REFRAME_SINGLE_WHITE,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './TheReframe.styles'

const options = {
  walnut: {
    value: 'walnut',
    src: REFRAME_SINGLE_WALNUT,
  },
  oak: {
    value: 'oak',
    src: REFRAME_SINGLE_OAK,
  },
  white: {
    value: 'white',
    src: REFRAME_SINGLE_WHITE,
  },
  black: {
    value: 'black',
    src: REFRAME_SINGLE_BLACK,
  },
}

export default class TheReframe extends React.Component {

  state = {
    loading: false,
    selected: 'oak',
  }

  changeSelected = (option) => {
    this.setState({ selected: option.value })
    this.setLoading(true)
  }

  setLoading = (loading) => {
    if (!loading) {
      this.setState({ loading: false })
      if (this.loadingTimeout) {
        clearTimeout(this.loadingTimeout)
        this.loadingTimeout = null
      }
    } else if (!this.loadingTimeout) {
      this.loadingTimeout = setTimeout(() => this.setState({ loading: true }), 200)
    }
  }

  render() {
    const { t } = this.props
    const { loading, selected } = this.state
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section reframe'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
                <h2>{t('reframe.title')}</h2>
                <p>{t('reframe.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <div className='reframe-image-container'>
                  <AspectRatio ratio='1/1'>
                    <img
                      alt='Reframe'
                      className='reframe-image'
                      src={options[selected].src}
                      onLoad={() => this.setLoading(false)}
                      onError={() => this.setLoading(false)}
                    />
                  </AspectRatio>
                  <Loader active={loading} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <div
                  onClick={() => this.changeSelected(options.oak)}
                  onKeyDown={() => this.changeSelected(options.oak)}
                  role='button'
                  tabIndex={0}
                  className={`color-selector oak ${options[selected].value === 'oak' ? 'active' : 'inactive'}`}
                />
                <div
                  onClick={() => this.changeSelected(options.walnut)}
                  onKeyDown={() => this.changeSelected(options.walnut)}
                  role='button'
                  tabIndex={0}
                  className={`color-selector walnut ${options[selected].value === 'walnut' ? 'active' : 'inactive'}`}
                />
                <div
                  onClick={() => this.changeSelected(options.white)}
                  onKeyDown={() => this.changeSelected(options.white)}
                  role='button'
                  tabIndex={0}
                  className={`color-selector white ${options[selected].value === 'white' ? 'active' : 'inactive'}`}
                />
                <div
                  onClick={() => this.changeSelected(options.black)}
                  onKeyDown={() => this.changeSelected(options.black)}
                  role='button'
                  tabIndex={0}
                  className={`color-selector black ${options[selected].value === 'black' ? 'active' : 'inactive'}`}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

TheReframe.propTypes = {
  t: PropTypes.func.isRequired,
}
