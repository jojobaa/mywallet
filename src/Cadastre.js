import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import icon from "./images/MyWallet.png"
import { useState } from "react";
import axios from "axios"

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    function dadosUsuarioCadastro(e) {
        e.preventDefault();
        setCarregando(true)
        const promise1 = axios.post(
            "http://localhost:5000/sign-up",
            {
                email: email,
                name: nome,
                password: senha,
            }
        );

        promise1.then(() =>
            navigate("/", {
            })
        );

        promise1.catch((error) => {
            alert(error.response.data.message)
            setCarregando(false)
        })
    }
    return (
        <CadastreInputs>
            <Header><img src={icon} alt='' /></Header>
            <form onSubmit={dadosUsuarioCadastro}>
                <input
                    type={'text'}
                    placeholder={"Nome"}
                    onChange={(e) => setNome(e.target.value)} disabled={carregando}
                ></input>
                <input
                    type={'email'}
                    placeholder={"E-mail"}
                    onChange={(e) => setEmail(e.target.value)} disabled={carregando}
                ></input>
                <input
                    type={'password'}
                    placeholder={"Senha"}
                    onChange={(e) => setSenha(e.target.value)} disabled={carregando}
                ></input>
                <input
                    type={'password'}
                    placeholder={"Confirme a senha"}
                    onChange={(e) => setSenhaConfirmada(e.target.value)} disabled={carregando}
                ></input>
                <button disabled={carregando}>Cadastrar</button>
                <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
            </form>
        </CadastreInputs>
    )
}
const Header = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const CadastreInputs = styled.div`
a{
    text-decoration: none;
}
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
margin-top: 10px;
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
padding-left: 15px;
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
p{
padding-top: 20px;
font-family: 'Raleway', sans-serif;
font-size: 14px;
color: #FFFFFF;
}
`