import { withNamespaces } from 'react-i18next'

import { i18nClient } from 'utils/i18n'

export default (namespaces = []) => {
  i18nClient.nsFromReactTree = [...new Set(i18nClient.nsFromReactTree.concat(namespaces))]
  return withNamespaces(namespaces)
}
