import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes/AppTheme'
import { CssBaseline } from '@material-ui/core';
import Routes from './routes/route';
import {Provider} from 'react-redux'
import store from './store'
import Interceptor from './Interceptor';
import MainDialog from './auth/dialogs/MainDialog';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
       <Interceptor/>
       <MainDialog/>
       <Routes/>
      </MuiThemeProvider>
    </CssBaseline>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
