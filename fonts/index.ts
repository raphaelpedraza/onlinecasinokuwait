import localFont from "next/font/local";

export const sofia = localFont({
  src: [
    {
      path: "./SofiaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SofiaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./SofiaSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./SofiaSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sofia",
  display: "swap",
});
