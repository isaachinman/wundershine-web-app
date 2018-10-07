import config from 'config'
import { i18nClient } from 'utils/i18n'
import 'regenerator-runtime/runtime'

const { defaultLanguage, allLanguages } = config.translation

export default (currentRoute, currentLanguage = i18nClient.languages[0]) => {

  if (!allLanguages.includes(currentLanguage)) {
    return currentRoute
  }

  let correctRoute = currentRoute

  // Strip all language subpaths
  for (const lng of allLanguages) {
    if (currentRoute.startsWith(`/${lng}/`)) {
      correctRoute = correctRoute.replace(`/${lng}/`, '/')
      break
    }
  }

  // If not in default language, add correct subpath back
  if (currentLanguage !== defaultLanguage) {
    correctRoute = `/${currentLanguage}${correctRoute}`
  }

  return correctRoute

}
