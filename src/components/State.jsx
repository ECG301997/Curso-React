import React,{Component} from "react";


class State extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: 'Alejandra',
            apellido: 'Rodriguez'
        }
    }
    cambiarDatos(){
        if(this.state.name === 'Alejandra' && this.state.apellido === 'Rodriguez')
            this.setState({name: 'Eduardo',apellido:'Cadavid'});
        else
            this.setState({name: 'Alejandra',apellido:'Rodriguez'});
        
    }

    render() { 
        return ( 
            <>
            <h2> mi nombre es {this.state.name} {this.state.apellido}</h2>
            <button onClick={this.cambiarDatos.bind(this)}>PULSAR</button>
            </> 
        );
    }
}
 
export default State;