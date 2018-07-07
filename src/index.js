import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
    import './fonts.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader'

/**
 * Load WebFont

WebFont.load({
    google: {
        families: ['Lora:400i, 400', 'Lato:300, 400']

    }
});
 */

WebFont.load({
    google: {
        families: ['Crimson+Text:400']
    },
    custom: {
        families: ['geomanistregular'],
        urls: ['fonts.css']
    }
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
