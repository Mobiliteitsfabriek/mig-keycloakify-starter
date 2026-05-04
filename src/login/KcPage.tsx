import { Suspense, lazy, useEffect } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import "./styles/tokens/main.css";
import "./styles/main.css";
import LoginUsername from "./pages/LoginUsername";

const UserProfileFormFields = lazy(() => import("keycloakify/login/UserProfileFormFields"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;
  const { themeName } = kcContext;

  const { i18n } = useI18n({ kcContext });

  // Dynamically import theme tokens based on themeName
  useEffect(() => {
    const loadTheme = async () => {
      await import(`./styles/tokens/${themeName ?? "reisbalans"}.css`);
    };

    loadTheme();
  }, [themeName]);

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "login-username.ftl":
            return <LoginUsername {...{ kcContext, i18n, classes }} Template={Template} doUseDefaultCss />;
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
