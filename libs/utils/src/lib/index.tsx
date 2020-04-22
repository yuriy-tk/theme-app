import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { lightTheme } from '@theme-app/styles';
export { lightTheme };

const {
  default: styled,
  ThemeProvider,
  css
} = styledComponents as ThemedStyledComponentsModule<typeof lightTheme>;

export { styled, ThemeProvider, css };

export {
  darken,
  lighten,
  saturate,
  desaturate,
  grayscale,
  whiten,
  blacken,
  invert,
  isDark
} from './colorUtil';
