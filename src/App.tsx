import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';
import GamePanel from './containers/GamePanel/GamePanel';
import { Info } from '@components/Info/Info';
import { Rules } from '@components/Rules/Rules';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={GamePanel} />
        <Route path='/info' component={Info} />
        <Route path='/rules' component={Rules} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

const WrappedApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default WrappedApp;
