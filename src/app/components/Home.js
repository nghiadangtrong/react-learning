import React from 'react';


export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: 'text from home'
        }

        setTimeout( ()=>{
            this.setState({
                status: 1,
            });
        }, 6000);
    }



    onMakeOlder(){
        this.setState({
            age: this.state.age +3,
        });    
    }
    onChangeNameLink(){
        this.props.change(this.state.homeLink);
    }
    
    render(){
        // console.log(this.props)
        const {change} = this.props;
        console.log(change)
        return (
            <div>
                <div>Container</div>
                <div>Name: {this.props.name} - age : {this.state.age}</div>
                <div>{this.state.status}</div>
                {/* <button onClick={this.onMakeOlder.bind(this)}>click</button> */}
                {/* case1: gọi function parent thông qua function khác */}
                {/* <button onClick={this.onChangeNameLink.bind(this)}>Change Header 1</button> */}
                {/* <button onClick={()=> this.props.change('123')}>change header 2</button> */}
                <button onClick={()=>change('123')}>change header 3</button>
            </div>
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number
// };
