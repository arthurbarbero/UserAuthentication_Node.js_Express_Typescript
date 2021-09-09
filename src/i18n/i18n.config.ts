import i18n, { I18n } from 'i18n'
import path from 'path'

i18n.configure({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR',
  queryParameter: 'lang',
  directory: path.join('./src/i18n/', 'locales')
})

class LocaleService {
  public i18nProvider: I18n

  constructor (i18nProvider: I18n) {
    this.i18nProvider = i18nProvider
  }

  getCurrentLocale (): string {
    return this.i18nProvider.getLocale()
  }

  getLocales (): string[] {
    return this.i18nProvider.getLocales()
  }

  setLocale (locale: string): void {
    if (this.getLocales().includes(locale)) {
      this.i18nProvider.setLocale(locale)
    }
  }

  translate (term: string): string {
    return this.i18nProvider.__(term)
  }

  translateReplace (term: string, replacement: Record<string, string>): string {
    return this.i18nProvider.__mf(term, replacement)
  }

  translateCounts (term: string, count: number): string {
    return this.i18nProvider.__n(term, count)
  }
}

export default new LocaleService(i18n)
