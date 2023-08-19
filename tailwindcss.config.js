/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media',
  content: ['./public/*.html'], // turn off after testing
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#2563EB',
      'base-content': '#666666',
      "gray": {
        100: "#FFFFFF",
        200: "#F8F8F8",
        300: "#F2F2F2",
        400: "#E8E8E8",
        500: "#D5D5D5",
        600: "#9A9A9A",
        700: "#606060",
        800: "#303030",
        900: "#000000",
      },
      "red": {
        100: "#FFBDBD",
        200: "#F89494",
        300: "#F16A6A",
        400: "#E94141",
        500: "#E21717",
        600: "#D01111",
        700: "#BE0C0C",
        800: "#AB0606",
        900: "#990000",
      },
      "orange": {
        100: "#FFDCC0",
        200: "#FCC391",
        300: "#F8A962",
        400: "#F49032",
        500: "#F17603",
        600: "#DC6A03",
        700: "#C85E03",
        800: "#B35102",
        900: "#9E4502",
      },
      "yellow": {
        100: "#FFFCD2",
        200: "#FFF4A9",
        300: "#FFEB71",
        400: "#FEE344",
        500: "#FED800",
        600: "#F7C500",
        700: "#F0B200",
        800: "#E99E00",
        900: "#E28B00",
      },
      "lime": {
        100: "#E8FFC0",
        200: "#D0F595",
        300: "#B8EC69",
        400: "#9FE23E",
        500: "#87D812",
        600: "#7BC210",
        700: "#6EAC0F",
        800: "#62950D",
        900: "#557F0B",
      },
      "green": {
        100: "#D3FFD2",
        200: "#A6EFB4",
        300: "#7AE097",
        400: "#4DD079",
        500: "#20C05B",
        600: "#1DAD51",
        700: "#1A9947",
        800: "#17863D",
        900: "#147233",
      },
      "sky": {
        100: "#BEF0FC",
        200: "#96E8FC",
        300: "#6DDDFA",
        400: "#43D1F7",
        500: "#19C6F4",
        600: "#17AFD4",
        700: "#1499B5",
        800: "#128295",
        900: "#106B75",
      },
      "blue": {
        100: "#C0E3FF",
        200: "#90C7F7",
        300: "#60ABEF",
        400: "#308EE7",
        500: "#0072DF",
        600: "#0065BF",
        700: "#0058A0",
        800: "#004B80",
        900: "#003E60",
      },
      "purple": {
        100: "#DBD0FD",
        200: "#C8B6FF",
        300: "#AA89EA",
        400: "#8C5BD4",
        500: "#6E2EBF",
        600: "#5413A8",
        700: "#40008B",
        800: "#30006D",
        900: "#20004E",
      },
      "violet": {
        100: "#E9B7F3",
        200: "#DE9BEB",
        300: "#C777D6",
        400: "#B152C2",
        500: "#9A2EAD",
        600: "#842895",
        700: "#6E227D",
        800: "#571B64",
        900: "#41154C",
      },
      "pink": {
        100: "#FABCDC",
        200: "#FF9DCC",
        300: "#FF7AB8",
        400: "#FF56A4",
        500: "#FF3390",
        600: "#DF2D82",
        700: "#BF2874",
        800: "#9F2265",
        900: "#7F1C57",
      },
      //  status colors
      // "status": {
      //   "error": "#EA0000",
      //   "warning": "#F4CB00",
      //   "success": "#15C046",
      //   "info": "#0066DF",
      // }
    },
  },
}
