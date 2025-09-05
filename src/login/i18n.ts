/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from 'keycloakify/login';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      loginAccountTitle: {
        'reisbalans-interface': 'Log in <span>at Reisbalans</span>',
        'shuttel-interface': 'Log in <span>at Shuttel</span>'
      },
      usernameOrEmail: 'E-mail',
      doLogIn: 'Log in',
      rememberMe: 'Remember me'
    },
    nl: {
      loginAccountTitle: {
        'reisbalans-interface': 'Log in <span>bij Reisbalans</span>',
        'shuttel-interface': 'Log in <span>at Shuttel</span>'
      },
      usernameOrEmail: 'E-mail',
      doLogIn: 'Inloggen',
      rememberMe: 'Gegevens onthouden'
    }
  })
  .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
