import React from 'react'
import PropTypes from 'prop-types'

import { Head } from 'components'
import { withTranslation } from 'utils/i18n'

import {
  AddPhotos,
  AddToQueue,
  CallToAction,
  Compatibility,
  EasyLoading,
  Hero,
  LayoutFreedom,
  LimitedSupply,
  OrderPack,
  RefreshAtWill,
  Showcase,
  TheReframe,
  WhatsShowing,
  WallPlaylist,
} from './sections'

@withTranslation(['home'])
export default class Home extends React.Component {
  render() {

    const { t } = this.props

    return (
      <React.Fragment>
        <Head
          title={`Wundershine | ${t('meta.title')}`}
          description={t('meta.description')}
        />
        <Hero t={t} />
        <RefreshAtWill t={t} />
        <EasyLoading t={t} />
        <TheReframe t={t} />
        <Compatibility t={t} />
        <WhatsShowing t={t} />
        <WallPlaylist t={t} />
        <AddToQueue t={t} />
        <OrderPack t={t} />
        <AddPhotos t={t} />
        <LayoutFreedom t={t} />
        <Showcase t={t} />
        <CallToAction t={t} />
        <LimitedSupply t={t} />
      </React.Fragment>
    )
  }
}

Home.WrappedComponent.propTypes = {
  t: PropTypes.func.isRequired,
}
