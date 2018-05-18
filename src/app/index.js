import React from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            homeLink: 'Home'
        }
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }
    
    render() {
        var user = {
            name: "Anna",
            age: '18',
            hobbies: ['Sports', 'Reading']
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}> children</Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={'Max'} age={20} user={user}
                            change={this.onChangeLinkName.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    };
}
// like react-dom.render();
render(<App />, window.document.getElementById('app'));