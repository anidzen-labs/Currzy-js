import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

// Импортируем локали
import en from './locales/en'
import ru from './locales/ru'
import hy from './locales/hy'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export default defineConfig({
  title: '💸 Currzy',
  description: 'Currzy Description',
  lang: 'en-US',

  locales: {
    root: en,
    ru: ru(pkg),
    hy: hy
  }
})
