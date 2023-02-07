import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { ReactElement, StrictMode } from 'react';

import initMyFirebase from '../api/clienteApp';
import { LightTheme } from '../design-system';
import GlobalStyles from '../design-system/global-styles';

function App({ Component, pageProps }: AppProps): ReactElement {
  initMyFirebase();
  return (
    <StrictMode>
      <ThemeProvider theme={LightTheme}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
