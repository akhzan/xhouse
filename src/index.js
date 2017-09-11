import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './routes/app/App';
import Home from './routes/home/Home';
import Popular from './routes/popular/Popular';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
	<Router>
		<div>
		<Route exact path='/' component={Home}/>
		<Route path='/popular' component={Popular}/>
		</div>
	</Router>
	, document.getElementById('root')
);
injectTapEventPlugin()
registerServiceWorker();
