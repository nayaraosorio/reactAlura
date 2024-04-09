import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

  // const times = [
  //   'Selecione o Time',
  //   'Programação',
  //   'Front-End',
  //   'Data Science',
  //   'Devops',
  //   'UX e Desing',
  //   'Mobile',
  //   'Inovação e Gestão'
  // ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) =>{
    evento.preventDefault()

    props.aoColaboradorCadastrado({
      nome, cargo, imagem, time
    })

    setNome('')
    setCargo('')
    setTime('')
    setImagem('')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os Dados para Criar o Card do Colaborador</h2>
        <CampoTexto
         obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
        <Botao> Criar Card </Botao>
      </form>
    </section>
  );
};
export default Formulario;
