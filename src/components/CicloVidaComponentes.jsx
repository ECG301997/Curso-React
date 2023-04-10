import React,{Component} from "react";


class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: 'Alberto',
            evento:null
         }
    }

    cambiarNombre(){
        this.setState({nombre:'Carlos'})
    }

    //montamos el componente (eventos,peticiones http)

    componentDidMount(){

    }

    //actualizacion del componente (actualizaciones)
    componentDidUpdate(){


    }


    //desmontaje del componente (limpiamos eventos y timers)

    componentWillUnmount(){

    }

    render() { 
        return (
            <>
            </>
          );
    }
}
 
export default CicloVidaComponentes;