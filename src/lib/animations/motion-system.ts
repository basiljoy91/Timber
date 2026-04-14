export const motionSystem = {
  pageLoad: {
    fast: 0.65,
    base: 0.85,
    long: 1.1,
  },
  sectionReveal: {
    fast: 0.45,
    base: 0.65,
    long: 0.8,
  },
  hover: {
    fast: 0.18,
    base: 0.24,
    slow: 0.3,
  },
  scrub: {
    smooth: 1,
    slow: 1.35,
  },
} as const;
