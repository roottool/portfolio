import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const cinzelData = fs.readFileSync(
  path.join(
    ROOT,
    "node_modules/@fontsource/cinzel-decorative/files/cinzel-decorative-latin-700-normal.woff",
  ),
);
const cormorantData = fs.readFileSync(
  path.join(
    ROOT,
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff",
  ),
);

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#060008",
        position: "relative",
      },
      children: [
        // Top border ornament
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background:
                "linear-gradient(90deg, transparent, #c8002e, #c9a84c, #c8002e, transparent)",
            },
          },
        },
        // Bottom border ornament
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              background:
                "linear-gradient(90deg, transparent, #c8002e, #c9a84c, #c8002e, transparent)",
            },
          },
        },
        // Subtitle
        {
          type: "div",
          props: {
            style: {
              fontFamily: "'Cormorant Garamond'",
              fontSize: 32,
              letterSpacing: "0.5em",
              paddingLeft: "0.5em",
              color: "#c8002e",
              textTransform: "uppercase",
              marginBottom: 24,
            },
            children: "Portfolio",
          },
        },
        // Main title
        {
          type: "div",
          props: {
            style: {
              fontFamily: "'Cinzel Decorative'",
              fontWeight: 700,
              fontSize: 96,
              letterSpacing: "0.1em",
              paddingLeft: "1em",
              color: "#e8dff2",
            },
            children: "roottool",
          },
        },
        // Decorative divider
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "flex-end",
              gap: 16,
              marginTop: 36,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: 120,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, #7a0019)",
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 6,
                          height: 6,
                          backgroundColor: "#c9a84c",
                          transform: "rotate(45deg)",
                        },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 6,
                          height: 6,
                          backgroundColor: "#c9a84c",
                          transform: "rotate(45deg)",
                        },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 6,
                          height: 6,
                          backgroundColor: "#c9a84c",
                          transform: "rotate(45deg)",
                        },
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    width: 120,
                    height: 1,
                    background: "linear-gradient(90deg, #7a0019, transparent)",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Cinzel Decorative",
        data: cinzelData,
        weight: 700,
        style: "normal",
      },
      {
        name: "Cormorant Garamond",
        data: cormorantData,
        weight: 400,
        style: "normal",
      },
    ],
  },
);

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
});
const png = resvg.render().asPng();

const outPath = path.join(ROOT, "public", "og.png");
fs.writeFileSync(outPath, png);
console.log(`OG image generated: ${outPath}`);
