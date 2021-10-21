import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const spacing = [0, 0.25, 0.5, 0.75, 1];

type SpacingKeys = 0 | 1 | 2 | 3 | 4;

const spacingObject = Object.fromEntries(
  Object.entries(spacing).map((arr) => [arr[0], `${arr[1]}rem`])
) as {
  [key in SpacingKeys]: string;
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
