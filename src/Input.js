import { Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function Input() {
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");

    function dadosNovaEntrada(e) {
        e.preventDefault(); 

        const promise1 = axios.post(
            "http://localhost:5000/registrations",
            {
                valor: valor,
                descricao: descricao,
            }
        );
        promise1.then((answer) => {
            setDescricao(answer.data);
            Navigate("/registration", {});
        });

        promise1.catch((error) => {
            alert(error.response.data.message);
        });
    }

    return (
        <ContainerNovaEntrada>
            <Header>Nova entrada</Header>
            <Input>
                <form onSubmit="">
                    <input
                        type={'number'}
                        placeholder={"Valor"}
                        onChange={(e) => setValor(e.target.value)}
                        step="0.01"
                    ></input>
                    <input
                        type={'text'}
                        placeholder={"Descrição"}
                        onChange={(e) => setDescricao(e.target.value)}>
                    </input>
                    <button text={"Entrar"} onClick={dadosNovaEntrada}>Salvar Entrada</button>
                </form>
            </Input>
        </ContainerNovaEntrada>
    )
}
const Header = styled.div`
margin-bottom: 20px;
margin-right: 150px;
color: #FFFFFF;
font-family: 'Raleway', sans-serif;
font-size: 26px;
`
const ContainerNovaEntrada = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
background-color:#8C11BE;
`
const Input = styled.div`
display: flex;
flex-direction: column;
input{
display: block;
margin-top: 10px;
border: none;
border: 1px solid #D4D4D4;
border-radius: 5px;
width: 303px;
height: 45px;
background-color:#FFFFFF;
color:#000000;
}
input::placeholder{
    padding-left: 15px;
color: #D4D4D4;
font-family: 'Raleway', sans-serif;
font-size: 20px;
color:#000000;
}
button{
    width: 303px;
    height: 45px;
    margin-top: 10px;
    font-size: 20px;
    background-color:#A328D6 ;
    color: #FFFFFF;
    border: none;
    font-family: 'Raleway', sans-serif;
    border-radius: 5px;
    }
`