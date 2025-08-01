export const CommonSizes = ["sm", "md", "lg"] as const;
export type CommonSizesType = (typeof CommonSizes)[number];

export const ButtonSizes = [...CommonSizes, "icon"] as const;
export type ButtonSizesType = (typeof ButtonSizes)[number];

export const CommonVariants = [
  "primary",
  "secondary",
  "outline",
  "danger",
] as const;
export type CommonVariantsType = (typeof CommonVariants)[number];
