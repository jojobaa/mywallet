import styled from "styled-components";
// import { Link } from "react-router-dom";

export default function Login() {
    return (
        <ContainerRegistro>
            <Header>
                <div>Olá, Fulano</div>
                <div><ion-icon name="exit-outline"></ion-icon></div>
            </Header>
            <Registro>
                <p>
                    Não há registros de
                    entrada ou saída
                </p>
            </Registro>
            <Entradas>
                <NovaEntrada>
                    <div><ion-icon name="add-circle-outline"></ion-icon></div>
                    <p>nova <br></br> entrada</p></NovaEntrada>
                <NovaSaida>
                    <div><ion-icon name="remove-circle-outline"></ion-icon></div>
                    <p>nova <br></br> saída</p>
                </NovaSaida>
            </Entradas>
        </ContainerRegistro>
    )
}
const ContainerRegistro = styled.div`
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