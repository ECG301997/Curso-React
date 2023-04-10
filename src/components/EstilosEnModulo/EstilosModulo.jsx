import React,{Component} from "react";
import styles from "./EstilosModulo.module.css"


class EstilosModulo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <h1 className={styles.titulo}>Estilos En modulo</h1>
            </>
         );
    }
}
 
export default EstilosModulo;