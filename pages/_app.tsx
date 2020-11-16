// import App from "next/app";
import { Topnav } from 'components'
import AppContainer from 'components/AppContainer'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from 'src/store'

import 'src/style.css'

function RootComponent({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <AppContainer>
          <Topnav />
          <Component {...pageProps} />
        </AppContainer>
      </PersistGate>
    </Provider>
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
