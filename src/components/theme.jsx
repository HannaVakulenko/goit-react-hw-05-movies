export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#3f4c6b',
    cardBackground: '#4e6d96',
    lightAccent: '#ffc226',
    accent: 'orangered',
    muted: '#f6f6f6',
    btnPrimary: '#95999e',
    btnSecondary: '#dee0e0',
    error: 'red',
    gradientOrange:
      'linear-gradient(141.22deg, #ffc226 9.4%, orangered 91.91%)',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Delicious Handrawn, cursive',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '18px',
    l: '20px',
    xl: '28px',
    xxl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    textShadow: '0 1px 1px #fff',
    boxShadowHeader: '8px 8px 8px -8px #000000, -4px 0px 8px 0px #000000',
    boxShadowDiv: '10px 10px 18px -12px #000000',
  },
};

//${props => props.theme.shadows.boxShadowHeader} - для вставки в правила стилів
