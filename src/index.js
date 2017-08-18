import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './routes/app/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'

ReactDOM.render(<App />, document.getElementById('root'));
injectTapEventPlugin()
registerServiceWorker();
