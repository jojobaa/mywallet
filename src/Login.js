import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import icon from "./images/MyWallet.png"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ContextAPI  from "./ContextAPI";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const { setUsuario, usuario } = useContext(ContextAPI);
    const navigate = useNavigate();

    useEffect(() => {
        const localData = usuario;
        if (Object.keys(localData).length !== 0) {
        }
    });

    function dadosUsuario(e) {
        e.preventDefault();
        setCarregando(true);

        const promise1 = axios.post(
            "http://localhost:5000/sign-in",
            {
                email: email,
                password: senha,
            }
        );
        promise1.then((answer) => {
            setUsuario(answer.data);
            navigate("/registration", {});
        });

        promise1.catch((error) => {
            alert(error.response.data.message);
            setCarregando(false);
        });
    }

    return (
        <LoginInputs>
            <Header><img src={icon} alt="" /></Header>
            <FormContainer>
                <form onSubmit={dadosUsuario}>
                    <input
                        type={'email'}
                        placeholder={"E-mail"}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={carregando}
                        color={"#DBDBDB"}
                    ></input>
                    <input
                        type={'password'}
                        placeholder={"Senha"}
                        onChange={(e) => setSenha(e.target.value)}
                        disabled={carregando}>
                    </input>
                    <button text={"Entrar"} disabled={carregando}>Entrar</button>
                    <Link to="/cadastre"><p>Primeira vez? Cadastre-se!</p></Link>
                </form>
            </FormContainer>
        </LoginInputs>
    )
}

const Header = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;
justify-content: center;
`
const LoginInputs = styled.div`
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
font-family: 'Raleway', sans-serif;
font-size: 14px;
color: #FFFFFF;
text-decoration : none;
padding-top: 20px;
}
`
const FormContainer = styled.div`
input{
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
color: #D4D4D4;
font-family: 'Raleway', sans-serif;
font-size: 20px;
color:#000000;
padding-left: 15px;
}
`