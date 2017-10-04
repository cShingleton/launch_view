import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// relative imports
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import store from './redux/store';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import './index.css';

injectTapEventPlugin();

const LaunchView = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<LaunchView />, document.getElementById('root'));
registerServiceWorker();
