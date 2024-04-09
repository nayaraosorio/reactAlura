import './CampoTexto.css'
import {useState} from 'react';

const CampoTexto = (props) =>{
    // console.log(props.label)
    const placeholderModificado = `${props.placeholder}...`

    

   
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
       
    }
    return(
        <div className="campo-texto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
        
    )

}

export default CampoTexto;