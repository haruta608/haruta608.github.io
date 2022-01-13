bubbly({
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    bubbles: 80,
    compose: "source-over",
    shadowColor: "#afeeee",
    radiusFunc: () => Math.random() * 30,
    bubbleFunc: () => `hsla(0, 0%, 80%, ${Math.random() * 0.25})`,
  });

