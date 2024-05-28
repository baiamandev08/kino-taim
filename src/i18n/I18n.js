import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        lng:'ru',
        resources: {
            en: {
                translation: {
                    "Welcome": "Welcome to React and react-i18next"
                }
            },
            ru: {
                translation: {
                    "Welcome": "Добро пожаловать на чтение и реагирование-i18next"
                }
            }
        },

    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    }
});

export default i18n;