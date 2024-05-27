import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    primary: {
      peach: "#e7816b",
      black: "#1d1c1e",
      white: "#ffffff",
    },
    secondary: {
      lightPeach: "#ffad9b",
      darkGrey: "#333136",
      lightGrey: "#f1f3f5",
    },
  },

  typography: {
    fontFamily: "Jost, sans-serif",
    headings: {
      h1: {
        fontSize: "3rem",
        fontWeight: "500",
        lineHeight: "3rem",
        letterSpacing: "0rem",
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: "500",
        lineHeight: "3rem",
        letterSpacing: "0.125rem",
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        letterSpacing: "0.3125rem",
      },
      h4: {
        fontSize: "1rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        letterSpacing: "0.25rem",
      },
      h5: {
        fontSize: "0.875rem",
        fontWeight: "500",
        lineHeight: "1rem",
        letterSpacing: "0.2rem",
      },
      h6: {
        fontSize: "0.75rem",
        fontWeight: "500",
        lineHeight: "1rem",
        letterSpacing: "0.15rem",
      },
    },
    body: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.6",
      letterSpacing: "0rem",
    },
  },

  buttons: {
    primaryButton: {
      backgroundColor: "#e7816b",
      color: "#ffffff",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#333136",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "2px solid #333136",
      cursor: "pointer",
    },
  },

  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
  },

  space: {
    xxs: "5px",
    xs: "10px",
    sm: "15px",
    md: "20px",
    lg: "25px",
    xl: "30px",
    xxl: "35px",
  },

  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

export default Theme;
