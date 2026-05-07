import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { PasswordField } from "@Mobiliteitsfabriek/web-text-field";
import { Button } from "@Mobiliteitsfabriek/web-button";

export default function LoginPassword(props: PageProps<Extract<KcContext, { pageId: "login-password.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes,
  });

  const { realm, url, messagesPerField } = kcContext;

  const { msg, msgStr } = i18n;

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      headerNode={msg("doLogIn")}
      displayMessage={!messagesPerField.existsError("password")}
    >
      <div id="kc-form">
        <div id="kc-form-wrapper">
          <form
            id="kc-form-login"
            onSubmit={() => {
              setIsLoginButtonDisabled(true);
              return true;
            }}
            action={url.loginAction}
            method="post"
          >
            <div className={clsx(kcClsx("kcFormGroupClass"), "no-bottom-margin")}>
              <PasswordField
                id="password"
                name="password"
                autoFocus
                autoComplete="on"
                isInvalid={messagesPerField.existsError("username", "password")}
                errorMessage={kcSanitize(messagesPerField.get("password"))}
              />
            </div>
            <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
              <div id="kc-form-options" />
              <div className={kcClsx("kcFormOptionsWrapperClass")}>
                {realm.resetPasswordAllowed && (
                  <span>
                    <a href={url.loginResetCredentialsUrl}>{msg("doForgotPassword")}</a>
                  </span>
                )}
              </div>
            </div>
            <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
              <Button fullWidth name="login" id="kc-login" type="submit" isDisabled={isLoginButtonDisabled}>
                {msgStr("doLogIn")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Template>
  );
}
