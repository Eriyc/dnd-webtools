// import App from "next/app";
import { Container, Topnav } from 'components'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from 'src/store'

import 'src/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Container background={{ color: '#121212', elevation: 0 }} height="100vh" margin="0" padding="0">
          <Topnav />
          <Component {...pageProps} />
        </Container>
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

export default MyApp
