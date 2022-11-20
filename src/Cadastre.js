import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "./images/MyWallet.png"

export default function Login() {
    return (
        <CadastreInputs>
            <Header><img src={icon} alt='' /></Header>
            <form onSubmit="{dadosUsuarioCadastro}">
                <input
                    data-identifier="input-email"
                    type={'text'}
                    placeholder={"Nome"}
                // onChange={(e) => "setEmail(e.target.value)}" disabled="{carregando}"
                ></input>
                <input
                    data-identifier="input-password"
                    type={'text'}
                    placeholder={"E-mail"}
                // onChange={(e) => setSenha(e.target.value)} disabled={carregando}
                ></input>
                <input
                    data-identifier="input-name"
                    type={'text'}
                    placeholder={"Senha"}
                // onChange={(e) => setNome(e.target.value)} disabled={carregando}
                ></input>
                <input
                    data-identifier="input-photo"
                    type={'text'}
                    placeholder={"Confirme a senha"}
                // onChange={(e) => setImagem(e.target.value)} disabled={carregando}
                ></input>
                <button>Cadastrar</button>
                <Link to="/"><p data-identifier="back-to-login-action">Já tem uma conta? Entre agora!</p></Link>
            </form>
        </CadastreInputs>
    )
}
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const CadastreInputs = styled.div`
background-color:#8C11BE;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
form{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
input{
margin-top: 5px;
border: none;
border: 1px solid #D4D4D4;
border-radius: 5px;
width: 303px;
height: 45px;
}
input::placeholder{
color: #D4D4D4;
font-family: 'Raleway', sans-serif;
font-size: 20px;
color:#000000;
}
button{
width: 303px;
height: 45px;
margin-top: 5px;
font-size: 20px;
background-color:#A328D6 ;
color: #FFFFFF;
border: none;
font-family: 'Raleway', sans-serif;
border-radius: 5px;
}
p{
padding-top: 20px;
font-family: 'Raleway', sans-serif;
font-size: 14px;
color: #52B6FF;
}
`