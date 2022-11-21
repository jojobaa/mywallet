import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ContextAPI from "./ContextAPI";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registration() {
    const [registration, setRegistration] = useState({})
    const { setUsuario, usuario } = useContext(ContextAPI);
    const navigate = useNavigate();

    function desconectar() {
        localStorage.clear();
        setUsuario({});
        navigate("/");
    }

    useEffect(() => {
        const promise1 = axios.get("http://localhost:5000/registrations", {
            headers: { Authorization: "Bearer " + usuario.token },
        });

        promise1.then((answer) => {
            setRegistration(answer.data);
        });

        promise1.catch((error) => {
            alert(error.response.data.message);
        });
    }, []);

    return (
        <ContainerRegistro>
            <Header>
                <div>Olá, {usuario.name}</div>
                <div><ion-icon name="exit-outline" onClick={desconectar}></ion-icon></div>
            </Header>
            <Registro justifycontent={registration?.registration?.length === 0 ? "center" : "flex-start"}>
                {registration?.registration?.length === 0 ? <p>Não há registros de entrada ou saída.</p> :
                    <>
                        {registration?.registration?.map((registration) => (
                            <Registros key={registration._id}>
                                <Valores>
                                    <Info fontweight="400" fontsize="16px" lineheight="18.78px" color="#C6C6C6">{registration.createdAt}</Info>
                                    <Info fontweight="400" fontsize="16px" lineheight="18.78px" color="#000000" marginleft="10px">
                                        {registration.description}
                                    </Info>
                                </Valores>
                                <>
                                    <Info fontweight="400" fontsize="16px" lineheight="18.78px" justiyself="end" color={registration.type === "income" ? "#03AC00" : "#C70000"}>{registration.price.toFixed(2).replace(".", ",")}</Info>
                                </>
                            </Registros>
                        ))}
                    </>}
            </Registro>
            <Saldo display={registration?.registration?.length === 0 ? "none" : "flex"}>
                <Info fontweight="700" fontsize="17px" lineheight="19.96px" color="#000000">SALDO</Info>
                <Info fontweight="400" fontsize="17px" lineheight="19.96px" color={registration?.balance < 0 ? "#C70000" : "#03AC00"}>{registration?.balance}</Info>
            </Saldo>

            <Entradas>
                <Link to="/input">
                    <NovaEntrada>
                        <div><ion-icon name="add-circle-outline"></ion-icon></div>
                        <p>nova <br></br> entrada</p>
                    </NovaEntrada>
                </Link>
                <Link to="/output">
                    <NovaSaida>
                        <div><ion-icon name="remove-circle-outline"></ion-icon></div>
                        <p>nova <br></br> saída</p>
                    </NovaSaida>
                </Link>
            </Entradas>
        </ContainerRegistro>
    )
}
const ContainerRegistro = styled.div`
a{
    text-decoration: none;
}
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// width: 100%;
height: 100vh;
background-color:#8C11BE;
`
const Header = styled.div`
padding-top:10px;
padding-bottom:10px;
padding-down:10px;
padding-left:20px;
padding-right:20px;
display: flex;
align-items: center;
justify-content: space-between;
color:#FFFFFF;
font-weigth:bold;
font-size:26px;
div{
    width: 130px;
    padding-left:140px;
    padding-right:40px;
}
`
const Registro = styled.div`
width: 326px;
height: 446px;
background-color:#FFFFFF;
display: flex;
align-items: center;
justify-content: center;
p{
    width: 180px;
    height: 46px;
    font-family: 'Raleway', sans-serif;
    color:#868686;
    line-height: 24px;
}
`
const Entradas = styled.div`
display: flex;
ion-icon{
    font-size:20px;
}
div{
    margin-top:10px;
    margin-bottom:40px;
    margin-left:5px;
}
p{
    margin-left:5px;
}

`
const NovaEntrada = styled.div`
font-family: 'Raleway', sans-serif;
background-color:#A328D6;
color:#ffffff;
width: 156px;
height: 114px;
margin:10px;
`
const NovaSaida = styled.div`
font-family: 'Raleway', sans-serif;
background-color:#A328D6;
color:#FFFFFF;
width: 156px;
height: 114px;
margin:10px;
`
const Registros = styled.div`
justify-content: ${(props) => props.justifycontent};
display:flex;
`
const Valores = styled.div`
display:flex;
justify-content: flex-start;
`
const Info = styled.div`
font-family: "Raleway";
font-weight: ${(props) => props.fontweight} !important;
font-size: ${(props) => props.fontsize} !important;
line-height: ${(props) => props.lineheight} !important;
color: ${(props) => props.color} !important;
margin-left: ${(props) => props.marginleft};
margin-right: ${(props) => props.marginright}; 
justify-self: ${(props) => props.justiyself};
`
const Saldo = styled.div`
display:flex;
`