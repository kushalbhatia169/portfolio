import '../scss/globals.scss'
import Store from '../store/store';
import { ThemeProvider } from '@mui/material/styles';
import { formLabelsTheme } from '../style_jsx/styles';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }) =>{
  return <ThemeProvider theme={formLabelsTheme}>
    <Store>
      <Component {...pageProps} />
    </Store>
  </ThemeProvider>
}

export default MyApp
