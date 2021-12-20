import styled from "styled-components";

const PaymentForm = styled.div`
  width: 500px;
`;
const PaymentHeading = styled.p`
  font-size: 22px;
`;
const Lable = styled.p`
  font-size: 12px;
  margin-top: 30px;
`;
const Input = styled.input`
  border: none;
  
  width: 100%;
  font-size: 18px;
`;
const Inputbox = styled.div`
  width: 500px;
  display: flex;
  position: relative;
  border-bottom: 3px solid  #F6425B;
`;
const CardDate = styled.div`
  width: 80px;
  display: flex;
  position: relative;
  border-bottom: 3px solid  #F6425B;
`;
const Amount = styled.h1`
  color:  #F6425B;
`;
const Button = styled.button`
  background: #F6425B;
  border: none;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding: 10px 80px;
`;

export default function Form() {
  return (
    <PaymentForm>
      <PaymentHeading>Payment details</PaymentHeading>
      <Lable>CARDHOLDER NAME</Lable>
      <Inputbox>
        <i class="fas fa-user-check"></i>
        <Input defaultValue={"Satyabrata Das"} />
      </Inputbox>
      <Lable>CARD NUMBER</Lable>
      <Inputbox>
        <i class="far fa-credit-card"></i>
        <Input defaultValue={"4256 7890 5678 4532"} />
      </Inputbox>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <Lable>EXPARY MONTH</Lable>
          <CardDate>
            <i class="far fa-calendar"></i>
            <Input defaultValue={"09"}></Input>
          </CardDate>
        </div>
        <div style={{ textAlign: "center" }}>
          <Lable>EXPARY YEAR</Lable>
          <CardDate>
            <i class="far fa-calendar"></i>
            <Input defaultValue={"2020"}></Input>
          </CardDate>
        </div>
        <div style={{ textAlign: "center" }}>
          <Lable>CVC</Lable>
          <CardDate>
            <i class="far fa-calendar"></i>
            <Input defaultValue={"145"}></Input>
          </CardDate>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <PaymentHeading>Payment details:</PaymentHeading>
        <Amount> 12 3000 ₹</Amount>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button>PAY</Button>
      </div>
    </PaymentForm>
  );
}
