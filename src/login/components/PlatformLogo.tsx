import { ThemeName } from "../../kc.gen";

import ReisbalansLogo from "../assets/logo-reisbalans.svg";

const imageMap = {
  reisbalans: ReisbalansLogo as unknown as React.FC<React.HTMLProps<SVGElement>>,
  wijmobiel: "../assets/wijmobiel-logo.png",
} as const;

export const PlatformLogo = ({ platformName }: { platformName: ThemeName }) => {
  const UrlOrComponent = imageMap[platformName];
  return typeof UrlOrComponent === "string" ? (
    <img src={UrlOrComponent} alt={`${platformName} logo`} />
  ) : (
    <UrlOrComponent />
  );
};
