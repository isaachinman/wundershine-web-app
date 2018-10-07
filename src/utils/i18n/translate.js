import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { i18nClient } from 'utils/i18n'

export default (namespaces = []) => (ComposedComponent) => {

  if (!Array.isArray(namespaces)) {
    throw new Error('Namespaces provided to translate decorator must be an array.')
  }

  const Extended = ({ i18n, ...rest }) => {
    // on client we only get a serialized i18n instance
    // as we do not have to use the one on req we just use the one instance
    const finalI18n = i18n || i18nClient

    return (
      <NamespacesConsumer i18n={finalI18n} ns={namespaces} {...rest} wait={process.browser}>
        {t => <ComposedComponent t={t} {...rest} />}
      </NamespacesConsumer>
    )
  }

  Extended.getInitialProps = async (ctx) => {
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {}

    const i18nInitialProps = i18nClient.getInitialProps(ctx.req, namespaces)

    return {
      ...composedInitialProps,
      ...i18nInitialProps,
    }
  }

  return Extended
}
