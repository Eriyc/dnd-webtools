// import App from "next/app";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ButtonStyle, Topnav } from 'components'

import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from 'src/store'

import 'src/style.scss'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config, components: { Button: ButtonStyle } })

function RootComponent({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Topnav />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default RootComponent
