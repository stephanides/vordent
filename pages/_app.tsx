/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import ApolloProvider from '../app-data/graphql/ApolloProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import 'aos/dist/aos.css';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Style from '../app-data/shared/styles/global.style';
// Material UI support
//import theme from '../app-data/lib/util/mui/theme';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from '../app-data/shared/hooks';
import { OnlyClientProvider } from '../app-data/shared/hooks/useOnlyClient';

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Vordent - Moderná zubná klinika</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ApolloProvider>
        <AuthProvider>
          <Style />
          <OnlyClientProvider>
            <GoogleReCaptchaProvider reCaptchaKey="6LcTMPgeAAAAAEI-16EPbcti6Ex6_nPlybXbn-y7">
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                resumeHideDuration={10}
              >
                <Component {...pageProps} />
              </SnackbarProvider>
            </GoogleReCaptchaProvider>
          </OnlyClientProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
