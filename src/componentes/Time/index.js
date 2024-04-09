import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) =>{
    const css = { backgroundColor: props.corSec}

    return(
        
       ( props.colaboradores.length > 0)  && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrim} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo}  imagem={colaborador.imagem}/>)}
          </div>
            
        </section>

    )

}

export default Time;



// formas de adicionar o estilo css usando o JS, 
{/* <section className='time' style={{backgroundColor: props.corSec}}>
<h3 >{props.nome}</h3>
</section> */}

// A forma de fazer desaparecer times que ainda estão vazios
// ( props.colaboradores.length > 0)  && ou no lugar do (&&), colocar um (?)