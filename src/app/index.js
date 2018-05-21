import {React} from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home';
import {Root} from './components/Root';

import {Route} from 'react-route';

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">

                </div>
            </div>
        );
    }
}
// like react-dom.render();
render(<App />, window.document.getElementById('app'));