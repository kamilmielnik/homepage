import React from 'react';
import { THEME_DEFAULT } from 'data';

export const ThemeContext = React.createContext(THEME_DEFAULT);

export const withThemeConsumer = (Component) => (props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <Component theme={theme} {...props} />
    )}
  </ThemeContext.Consumer>
);
