import styled from "styled-components";

const Card = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background: #F6425B;
    line-height: 1rem;
    margin: 30px;
    margin-top: 10rem
`
const Chip = () => {
    return (
        <div style={{marginLeft: 30}}>
            <img width="50px" src="https://img.icons8.com/officel/16/000000/sim-card-chip.png"/>
        </div>
    )
}

const CardName = styled.h1`
    text-align: right;
    color: white;
    margin-right: 20px;

`
const CardNumber = styled.p`
    margin-left: 30px;
    font-size: 22px;
    color: white;
    font-family:'Orbitron', sans-serif;;
`

const CardDetails = styled.p`
    color: white;
    font-size: 10px;

`
const CardHolder = styled.p`
    color: white;
    font-size: 15px;
`

export default function AtmCard(){
    return (

        <Card>
            <CardName>VISA</CardName>
            <Chip/>
            <CardNumber>4256 7890 5678 4532</CardNumber>
            <div style={{
                display: "flex",
                gap: "3rem",
                marginLeft: 30,
                marginBottom: "1px"
            }}>

                <CardDetails>CARD HOLDER</CardDetails>
                <CardDetails>EXPIRES</CardDetails>
                <CardDetails>CVC</CardDetails>
            </div>
            <div style={{
                display: "flex",
                gap: "2rem",
                marginLeft: 30,
                marginTop: "1px",
            }}>

                <CardHolder>Satyabrata Das</CardHolder>
                <CardHolder>09/20</CardHolder>
                <CardHolder>345</CardHolder>
            </div>
        
        </Card>
    )
}