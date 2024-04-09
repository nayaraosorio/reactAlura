import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

const times = [
  {
    nome: "Programação",
    corPrim: "#57c278",
    corSec: "#D9f7e9"
  },
  {
    nome: "Front-End",
    corPrim: "#82CFFA",
    corSec: "#E8F8FF"
  },
  {
    nome: "Data Science",
    corPrim: "#A6D157",
    corSec: "#F0F8E2"
  },
  {
    nome: "DevOps",
    corPrim: "#E06B69",
    corSec: "#FDE7E8"
  },
  {
    nome: "UX e Desing",
    corPrim: "#DB6EBF",
    corSec: "#FAE9F5"
  },
  {
    nome: "Mobile",
    corPrim: "#FFBA05",
    corSec: "#FFF5D9"
  },
  {
    nome: "Inovação e Gestão",
    corPrim: "#FF8A29",
    corSec: "#FFEEDF"
  }
]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    // debugger
//debugger é uma instrução do vs code que para o codigo e analisa o que está ocorrendo.
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time
       key={time.nome}
        nome={time.nome}
         corPrim={time.corPrim}
          corSec={time.corSec}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}
          <Rodape />
    </div>
  );
}

export default App;


// colaboradores={colaboradores.filter()}
// o filter, ajuda a filtrar os colaboradores e distribuir de acordo com o time, nesse caso