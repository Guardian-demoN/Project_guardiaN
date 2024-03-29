const pixelToRem = (size) => `${size / 16}rem`;

const colorSet = {
  default: {
    backgroundColor: 'black',
    mainColor: 'beige',
    subColor: 'white',
  },
  royalBlue: {
    backgroundColor: '#0c0b2e',
    mainColor: '#f7f3b0',
    subColor: '#e8f7b0',
  },
  circuitry: {
    backgroundColor: '#072106',
    mainColor: '#debe1f',
    subColor: '#cfccb6',
  },
};

// rem : root em
// em
const fontSizes = {
  title: pixelToRem(28),
  paragraph: pixelToRem(18),
  font_normal: pixelToRem(16),
  font_small: pixelToRem(12),
  font_micro: pixelToRem(10),
};

const fontWeight = {
  // 나눔바른고딕체를 사용합니다.
  ExtraLight: 'NanumBarunGothicExtraLight',
  Light: 'NanumBarunGothicLight',
  Regular: 'NanumBarunGothic',
  Bold: 'NanumBarunGothicBold',
};

const margin = {
  margin_browser: pixelToRem(32),
  margin_content: pixelToRem(20),
  margin_component: pixelToRem(25),
};

const colors = {
  white: '#ffffff',
  black: '#000000',
  red: '#ff0000',
  blue: '#2d9cdb',
  grey: '#989898',
  light_grey: '#a8a8a8',
};

const flexbox = {
  flex: `
    display: flex;
    align-items: center;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  colorSet,
  fontSizes,
  fontWeight,
  colors,
  flexbox,
  margin,
};

export default theme;
