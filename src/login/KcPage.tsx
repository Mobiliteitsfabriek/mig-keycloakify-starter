import { Suspense, lazy, useEffect } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";
import "./styles/tokens/main.css";
import "./styles/main.css";

const UserProfileFormFields = lazy(() => import("keycloakify/login/UserProfileFormFields"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;
  const { themeName } = kcContext;

  const { i18n } = useI18n({ kcContext });

  useEffect(() => {
    const loadTheme = async () => {
      const tokens = await import(`./styles/tokens/${themeName ?? "reisbalans"}.css`);
      console.log(tokens);
    };

    loadTheme();
  }, [themeName]);

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          default:
            return (
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                classes={classes}
                Template={Template}
                doUseDefaultCss={true}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
              />
            );
        }
      })()}
    </Suspense>
  );
}

const classes = {
  kcInputClass: "",
  kcInputGroup: "",
  kcFormPasswordVisibilityButtonClass: "",
  kcCheckClass: "",
  kcCheckboxInputClass: "",
  kcButtonClass: "",
  kcBodyClass: "",
  kcFormCardClass: "",
  kcFormHeaderClass: "",
  kcHeaderWrapperClass: "",
} satisfies { [key in ClassKey]?: string };
