import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';


//import App from './App';

const browserHistory = createBrowserHistory();

import stores from './stores/index';
import Base from './pages/Base';

const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(   
    <Provider {...stores}>
        <Router history={history}>
            <Base store={stores} />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);