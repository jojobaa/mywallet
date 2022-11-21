import styled from "styled-components";
// import { Link } from "react-router-dom";

export default function Login() {
    return (
        <ContainerNovaEntrada>
            <Header>Nova entrada</Header>
            <Input>
                <form onSubmit="">
                    <input
                        data-identifier="input-email"
                        type={'text'}
                        placeholder={"Valor"}
                        onChange={(e) => "setEmail(e.target.value)"}
                        disabled="{carregando}"
                        color={"#DBDBDB"}
                    ></input>
                    <input
                        data-identifier="input-password"
                        type={'text'}
                        placeholder={"Descrição"}
                        onChange={(e) => "setSenha(e.target.value)"}
                        disabled="{carregando}">
                    </input>
                    <button data-identifier="login-btn" text={"Entrar"} disabled="{carregando}">Salvar Entrada</button>
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