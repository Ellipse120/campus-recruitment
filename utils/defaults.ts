import { DefaultsInstance } from "vuetify/lib/framework.mjs";

/**
 * A few defaults that I like
 */
export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 0,
  },
  VBtn: {
    variant: "outlined",
    height: 38,
    rounded: "xs",
    size: "x-large",
  },
  VTextField: {
    color: "primary",
    variant: "outlined",
    density: "comfortable",
  },
};
