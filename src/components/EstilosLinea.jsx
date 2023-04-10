import React,{Component} from "react";


class EstilosLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let age = 30;
        const titulo ={
            textAlign:'center',
            color: 'green',
            // se puede crear el estilo con operador ternario
            backgroundColor: age>=37?'orangered' : 'blue'


        }
        return (
            <>
            <h1 style={titulo}>SOY UN TITULO</h1>
            </>
          );
    }
}
 
export default EstilosLinea;