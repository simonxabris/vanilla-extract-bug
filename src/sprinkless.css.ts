import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const spacingObject = {
  0: "0rem",
  1: "0.5rem",
  2: "1rem",
};

const sprinklesProperties = defineProperties({
  properties: {
    gap: spacingObject,
    padding: spacingObject,
    paddingTop: spacingObject,
    paddingBottom: spacingObject,
    paddingLeft: spacingObject,
    paddingRight: spacingObject,
    margin: spacingObject,
    marginTop: spacingObject,
    marginBottom: spacingObject,
    marginLeft: spacingObject,
    marginRight: spacingObject,
  },
  shorthands: {
    p: ["padding"],
    py: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    m: ["margin"],
    my: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
  },
});

export const sprinkles = createSprinkles(sprinklesProperties);
