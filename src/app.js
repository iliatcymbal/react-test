import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { store } from './store';
import { App } from './app.component';
const Root = <Provider store={store}><App /></Provider>;

ReactDOM.render(Root, document.getElementById('wrapper'));

