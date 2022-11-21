import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "./images/MyWallet.png"

export default function Login() {
    return (
        <LoginInputs>
            <Header><img src={icon} alt="" /></Header>
            <FormContainer>
                <form onSubmit="">
                    <input
                        data-identifier="input-email"
                        type={'text'}
                        placeholder={"E-mail"}
                        // onChange={(e) => "setEmail(e.target.value)"}
                        // disabled="{carregando}"
                        color={"#DBDBDB"}
                    ></input>
                    <input
                        data-identifier="input-password"
                        type={'text'}
                        placeholder={"Senha"}
                        // onChange={(e) => "setSenha(e.target.value)"}
                        // disabled="{carregando}">
                    ></input>
                    <button data-identifier="login-btn" text={"Entrar"} disabled="{carregando}">Entrar</button>
                    <Link to="/cadastre"><p data-identifier="sign-up-action">Primeira vez? Cadastre-se!</p></Link>
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