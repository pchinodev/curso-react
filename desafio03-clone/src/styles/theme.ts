export const theme = {
  colors: {
    background: '#1e192c',
    headerBg: '#151515',
    primary: '#e4105d',
    green: '#23dd7a',
    yellow: '#e5e044',
    cardBg: '#3b4651',
    searchBg: '#2d2d37',
    buttonMenuBg: '#565656',
    white: '#ffffff',
    whiteTransparent: 'rgba(255, 255, 255, 0.8)',
    whiteTransparent70: 'rgba(255, 255, 255, 0.7)',
  },
  fonts: {
    openSans: "'Open Sans', sans-serif",
  },
  fontSizes: {
    sm: '12px',
    md: '14px',
    base: '16px',
    lg: '18px',
    xl: '32px',
  },
  breakpoints: {
    mobile: '900px',
  },
}

export type Theme = typeof theme
