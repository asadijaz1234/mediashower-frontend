import Image, { ImageProps } from "next/image";
import { styled } from "@mui/material/styles";

//Interfaces
export interface HeroImageProps extends Omit<ImageProps, "alt"> {}

//Styles
export const HeroImageStyles = styled(
  (props: Partial<ImageProps>) => (
    <Image {...(props as ImageProps)} alt="Hero" priority fill sizes="(max-width: 990px) 828px, 1200px" />
  ),
  {
    target: "HeroImage-root",
  }
)(() => {
  return {};
});

//Component
export const HeroImage = (props: HeroImageProps) => {
  return <HeroImageStyles {...props} />;
};
