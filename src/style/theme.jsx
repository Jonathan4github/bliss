import { ThemeProvider as StyledProvider } from 'styled-components';

const defaultTheme = {
  primary: '#007500',
  danger: '#EF5252',
  success: '#6BFA8B',
  gray: '#F3F3F3',

  fontSize: {
    default: '13px',
    small: '11px',
    large: '17px',
    extraLarge: '19px'
  },

  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  }
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={defaultTheme}>
    <>
      {children}
    </>
  </StyledProvider>
);

export default ThemeProvider;
