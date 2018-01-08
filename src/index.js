import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

require('./styles/carousel.css')
require('./styles/header.css')
require('./styles/links.css')
require('./styles/blog.css')
require('./styles/style.css')
require('./styles/info.css')

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root'));
registerServiceWorker();
