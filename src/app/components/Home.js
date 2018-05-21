import React from 'react';


export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: props.homeLink
        }

        setTimeout( ()=>{
            this.setState({
                status: 1,  
            });
        }, 6000);

        console.log('constructor');
    }

    componentWillMount(){
        console.log('Component will mount');
    }

    componentDidMount(){
        console.log('Component did mount!');
    }

    componentWillReceiveProps(nextProps){
        console.log('Component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should component update', nextProps, nextState);
    }

    componentWillUpdate(nextProps, nextState){
        console.log('component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('component will unmount');
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age +3,
        });    
    }

    onChangeNameLink(){
        this.props.change(this.state.homeLink);
    }

    onChangeHomeLink(event){
        this.setState({
            homeLink: event.target.value
        });
        this.props.change(this.state.homeLink);
    }
    
    render(){
        // console.log(this.props)
        console.log(this.props);
        const {change} = this.props;
        console.log(change)
        return (
            <div>
                <div>Container</div>
                <div>Name: {this.props.name} - age : {this.state.age}</div>
                <div>{this.state.status}</div>
                <input value={this.state.homeLink} onChange={(event)=>this.onChangeHomeLink(event)} />
                {/* <button onClick={this.onMakeOlder.bind(this)}>click</button> */}
                {/* case1: gọi function parent thông qua function khác */}
                <button onClick={this.onChangeNameLink.bind(this)}>Change Header 1</button>
                <button onClick={()=> this.props.change('123')}>change header 2</button>
                <button onClick={()=>change('123')}>change header 3</button>
            </div>
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number
// };
