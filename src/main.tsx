import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/Layout/ParticlesLayout'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import ParticlesLayout from './components/Layout/ParticlesLayout'

const defaultLanguage =
  localStorage.getItem('language') !== null
    ? localStorage.getItem('language')
    : 'es'

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: defaultLanguage as string,
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ParticlesLayout>
        <App />
      </ParticlesLayout>
    </I18nextProvider>
  </React.StrictMode>
)
