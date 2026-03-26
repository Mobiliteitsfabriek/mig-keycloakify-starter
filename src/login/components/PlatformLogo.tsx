import { ThemeName } from "../../kc.gen";

import reisbalansLogo from "../assets/logo-reisbalans.svg";

const imageMap: { [Key in ThemeName]: string } = {
  reisbalans: reisbalansLogo,
  wijmobiel: "../assets/wijmobiel-logo.png",
} as const;

export const PlatformLogo = ({ platformName }: { platformName: ThemeName }) => {
  const src = imageMap[platformName];
  return <img src={src} alt={`${platformName} logo`} />;
};
