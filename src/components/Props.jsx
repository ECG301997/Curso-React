import React,{Component} from "react";

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {  }
    render() { 
        return ( 
        <>
        {/* <h1>yo me llamo {this.props.nombre}</h1> */}
        <h1>las frutas son: {this.props.frutas}</h1>
        </> );
    }
}
 
export default Props;