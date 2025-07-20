export const toggleStyles = {
  root: [
    "relative inline-flex items-center cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),

  track: {
    base: ["relative w-11 h-6 rounded-full transition-colors duration-200", "border-2 border-transparent"].join(" "),

    variants: {
      off: "bg-muted",
      on: "bg-primary",
    },
  },

  thumb: {
    base: [
      "absolute top-0.5 left-0.5 w-4 h-4 bg-background rounded-full",
      "transition-transform duration-200 ease-in-out",
      "shadow-sm border border-border/20",
    ].join(" "),

    variants: {
      off: "translate-x-0",
      on: "translate-x-5",
    },
  },

  label: ["ml-3 text-sm font-medium text-foreground", "cursor-pointer select-none"].join(" "),

  description: ["ml-3 text-sm text-muted-foreground"].join(" "),

  sizes: {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3 top-0.5 left-0.5",
      thumbOn: "translate-x-4",
    },
    md: {
      track: "w-11 h-6",
      thumb: "w-4 h-4 top-0.5 left-0.5",
      thumbOn: "translate-x-5",
    },
    lg: {
      track: "w-14 h-7",
      thumb: "w-5 h-5 top-0.5 left-0.5",
      thumbOn: "translate-x-7",
    },
  },
}

export const getToggleClasses = (isToggled: boolean, size: "sm" | "md" | "lg" = "md") => {
  const sizeConfig = toggleStyles.sizes[size]

  return {
    root: toggleStyles.root,
    track: `${toggleStyles.track.base} ${sizeConfig.track} ${
      isToggled ? toggleStyles.track.variants.on : toggleStyles.track.variants.off
    }`,
    thumb: `${toggleStyles.thumb.base} ${sizeConfig.thumb} ${
      isToggled ? sizeConfig.thumbOn : toggleStyles.thumb.variants.off
    }`,
    label: toggleStyles.label,
    description: toggleStyles.description,
  }
}
