/// <reference types="vite/client" />
declare module "*.svg" {
  const Component: React.FC<React.HTMLProps<SVGElement>>;
  export default Component;
}
