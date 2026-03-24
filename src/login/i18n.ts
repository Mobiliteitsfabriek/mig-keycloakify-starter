/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      loginProblems: "Having trouble logging in?",
      contactIfProblem1: "Feel free to",
      contact: "contact",
      contactIfProblem2: "us",
      atPlatform: "at {0}",
    },
    nl: {
      // There's no way to dynamically inject html elements into a translation, only strings
      // So we have split it up this way
      loginProblems: "Problemen met inloggen?",
      contactIfProblem1: "Neem gerust",
      contact: "contact",
      contactIfProblem2: "op",
      atPlatform: "bij {0}",
    },
  })
  .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
