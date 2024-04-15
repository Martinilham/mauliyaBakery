import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: blue[600],
    },
    mainColor: "#0b0f19",
    accent: {
      greenish: "#99d1a6",
      purplish: "#a288ec",
      orangish: "#ffa071",
    },
    sidebar: {
      background: "#415dc0",
      hoverBg: "#415dc0",
      hoverMobile: "#3f4554",
      textColor: "black",
    },
    status: {
      red: "#fc424a",
      orange: "#fea73e",
      green: "#22c38f",
    },

    ...(mode === "light"
      ? {
        sidebar: {
          background: "white",
          hoverBg: "grey",
          hoverMobile: "#3f4554",
          textColor: "black",
        },
          // palette values for light mode
          background: {
            default: "#F4F7FE",
            paper: "#fff",
          },
          text: {
            primary: "#5f6470",
            secondary: "black",
          },
          divider: "rgba(129, 139, 156, 0.1)",
          chatBox: "#dfe5f1",
        }
      : {
          // palette values for dark mode
          sidebar: {
            background: "#0b1337",
            hoverBg: "#172032",
            hoverMobile: "#3f4554",
            textColor: "#fff",
          },
          background: {
            default: "#0b1337",
            paper: "#101c44",
          },
          

          text: {
            primary: "#fff",
            secondary: "#fff",
          },
          divider: "rgba(82,88,98,0.12)",
          chatBox: "#1b2436",
        }),
  },
});
