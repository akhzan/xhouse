import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './routes/app/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
	<Router>
		<Route path='/' component={App}>
		</Route>
	</Router>
	, document.getElementById('root')
);
injectTapEventPlugin()
registerServiceWorker();
