import { BaseI18nController } from '@repay/cactus-i18n'
import globalEn from './locales/en-US/global'

class I18nController extends BaseI18nController {
  load(args) {
    const { lang, section } = args
    // load ftl translations from the source
    return import(`./locales/${lang}/${section}.js`).then(
      ({ default: ftl }) => {
        return [{ lang, ftl }]
      }
    )
  }
}

const controller = new I18nController({
  defaultLang: 'en-US',
  supportedLangs: ['en-US', 'en-CA'],
  global: globalEn
})
export default controller
