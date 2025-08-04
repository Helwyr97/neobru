export const CommonSizes = ["sm", "md", "lg"] as const;
export type CommonSizesType = (typeof CommonSizes)[number];

export const ButtonSizes = [...CommonSizes, "icon"] as const;
export type ButtonSizesType = (typeof ButtonSizes)[number];

export const ColorSchemes = [
  "primary",
  "secondary",
  "outline",
  "success",
  "danger",
  "warning",
  "info",
] as const;

export type ColorSchemesType = (typeof ColorSchemes)[number];

export const Variants = [
  "rectangular",
  "rounded"
] as const;
export type VariantsType = (typeof Variants)[number];
