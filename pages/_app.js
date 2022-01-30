import '../scss/globals.scss'
import Store from '../store/store';
import { ThemeProvider } from '@mui/material/styles';
import { formLabelsTheme } from '../style_jsx/styles';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }) =>{
  return <ThemeProvider theme={formLabelsTheme}>
    <Store>
      <Component {...pageProps} />
    </Store>
  </ThemeProvider>
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};


export default App;
